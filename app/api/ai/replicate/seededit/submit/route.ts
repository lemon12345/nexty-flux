import { deductCredits } from "@/actions/usage/deduct";
import { featureList } from "@/config/featureList";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import replicate from "@/lib/ai/replicate";
import { apiResponse } from "@/lib/api-response";
import { createClient } from "@/lib/supabase/server";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { NextRequest } from "next/server";
import { z } from "zod";

const submitJobSchema = z.object({
  feature_id: z.string().min(1),
  parameters: z.record(z.any()),
  seed: z.number().int().optional(),
});

async function triggerReplicateJob(jobId: string, feature_id: string, parameters: Record<string, any>, seed: number | undefined, webhookUrl: string) {
  const supabase = await createClient();
  const feature = featureList[feature_id];

  if (!replicate) {
    throw new Error("Replicate is not initialized");
  }

  try {
    const finalSeed = seed ?? feature.default_seed;

    const prediction = await replicate.predictions.create({
      model: feature.model,
      input: {
        ...parameters,
        seed: finalSeed,
        safety_tolerance: 2.0,
      },
      webhook: webhookUrl,
      webhook_events_filter: ["completed"]
    });

    await supabase
      .from("image_jobs")
      .update({
        provider_job_id: prediction.id,
        status: 'processing',
        final_seed_used: finalSeed,
      })
      .eq("id", jobId);

  } catch (error: any) {
    console.error(`[Job ${jobId}] Failed to trigger Replicate job:`, error);
    await supabase
      .from("image_jobs")
      .update({
        status: 'failed',
        error_message: `Failed to start AI model: ${error.message}`,
      })
      .eq("id", jobId);
  }
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { get } = await headers();
  const locale = get("Accept-Language");

  const t = await getTranslations({ locale: locale || DEFAULT_LOCALE, namespace: 'GenImageShared.api.errors' });

  if (!user) {
    return apiResponse.unauthorized();
  }

  const body = await req.json();
  const validation = submitJobSchema.safeParse(body);

  if (!validation.success) {
    return apiResponse.badRequest(validation.error.message);
  }

  const { feature_id, parameters, seed } = validation.data;

  const feature = featureList[feature_id];
  if (!feature) {
    return apiResponse.notFound(t("featureNotFound", { featureId: feature_id }));
  }

  const parameterValidation = feature.schema.safeParse(parameters);
  if (!parameterValidation.success) {
    return apiResponse.badRequest(t("invalidParameters", { error: parameterValidation.error.message }));
  }

  // Deduct credits before creating the job
  const creditsRequired = feature.creditsCost;
  const deductResult = await deductCredits(
    creditsRequired,
    `${feature.name} image generation`
  );

  if (!deductResult.success) {
    console.error(`Credit deduction failed for user ${user.id}:`, deductResult.error);

    if (deductResult.error === 'Insufficient credits.') {
      return apiResponse.badRequest(t("insufficientCredits"));
    }

    return apiResponse.serverError(t("paymentProcessingFailed"));
  }

  // SeedEdit doesn't need prompt optimization like Flux Kontext
  const processedParameters = { ...parameterValidation.data };

  try {
    const { data: job, error } = await supabase
      .from("image_jobs")
      .insert({
        user_id: user.id,
        feature_id: feature_id,
        request_params: processedParameters,
        provider_model: feature.model,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Error creating job:", error);
      return apiResponse.serverError(t("jobCreationFailed"));
    }

    const baseURL = process.env.REPLICATE_WEBHOOK_BASE_URL || req.url;

    const webhookUrl = new URL(
      "/api/ai/replicate/seededit/webhook",
      baseURL
    ).href;
    triggerReplicateJob(
      job.id,
      feature_id,
      processedParameters,
      seed,
      webhookUrl
    );

    return apiResponse.success({ job_id: job.id }, 202);

  } catch (error) {
    console.error("Unexpected error creating job:", error);
    return apiResponse.serverError();
  }
} 