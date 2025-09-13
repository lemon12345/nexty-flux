import { getSeedFromReplicateLogs } from "@/lib/ai/getSeed";
import { apiResponse } from "@/lib/api-response";
import { generateR2Key, serverUploadFile } from "@/lib/cloudflare/r2";
import { Database } from "@/lib/supabase/types";
import { createClient as createAdminClient } from "@supabase/supabase-js";
import crypto from "crypto";
import { NextRequest } from "next/server";

const supabaseAdmin = createAdminClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.text();
  const webhookId = req.headers.get("webhook-id");
  const webhookTimestamp = req.headers.get("webhook-timestamp");
  const webhookSignaturesHeader = req.headers.get("webhook-signature");
  const secret = process.env.REPLICATE_WEBHOOK_SECRET;

  if (!webhookId || !webhookTimestamp || !webhookSignaturesHeader || !secret) {
    return apiResponse.badRequest("Missing required headers or secret for webhook verification.");
  }

  const MAX_DIFF_IN_SECONDS = 10 * 60; // 10 minutes
  const timestamp = parseInt(webhookTimestamp, 10);
  if (isNaN(timestamp)) {
    return apiResponse.badRequest("Invalid webhook timestamp.");
  }
  const now = Math.floor(Date.now() / 1000);
  const diff = Math.abs(now - timestamp);

  if (diff > MAX_DIFF_IN_SECONDS) {
    return apiResponse.badRequest(`Webhook timestamp is too old: ${diff} seconds`);
  }

  const signedContent = `${webhookId}.${webhookTimestamp}.${body}`;
  const secretKey = secret.split("_")[1];
  const secretBytes = Buffer.from(secretKey, "base64");

  const computedSignature = crypto
    .createHmac("sha256", secretBytes)
    .update(signedContent)
    .digest("base64");

  const expectedSignatures = webhookSignaturesHeader
    .split(" ")
    .map((sig) => sig.split(",")[1]);

  const isValid = expectedSignatures.some((expectedSig) =>
    crypto.timingSafeEqual(
      Buffer.from(expectedSig),
      Buffer.from(computedSignature)
    )
  );

  if (!isValid) {
    return apiResponse.error("Invalid webhook signature.", 403);
  }

  const payload = JSON.parse(body);
  // console.log('Replicate webhook received and verified:', payload);

  const { id: provider_job_id, status, output, error, input, logs } = payload;

  const { data: job, error: jobError } = await supabaseAdmin
    .from("image_jobs")
    .select("id, user_id")
    .eq("provider_job_id", provider_job_id)
    .single();

  if (jobError || !job) {
    console.error(`Job with provider_job_id ${provider_job_id} not found.`);
    return apiResponse.success({ received: true });
  }

  if (status === "succeeded") {
    if (!output || (Array.isArray(output) && output.length === 0)) {
      await supabaseAdmin.from("image_jobs").update({ status: "failed", error_message: "Replicate task succeeded but returned no output." }).eq("id", job.id);
      return apiResponse.success({ received: true });
    }

    // TODO: if multiple images, you should save all of them
    const imageUrl = Array.isArray(output) ? output[0] : output;

    try {
      const imageResponse = await fetch(imageUrl);
      if (!imageResponse.ok) throw new Error(`Failed to fetch image: ${imageResponse.statusText}`);
      const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
      const contentType = imageResponse.headers.get("content-type") || "image/png";

      const imageKey = generateR2Key({
        fileName: contentType.split("/")[1] || 'png',
        path: `image-jobs/users/${job.user_id}`,
        prefix: 'flux-kontext-pro'
      });

      const { url: final_output_url } = await serverUploadFile({
        data: imageBuffer,
        contentType: contentType,
        key: imageKey
      });

      await supabaseAdmin.from("image_jobs").update({
        status: "succeeded",
        temp_output_url: imageUrl,
        final_output_url,
        final_seed_used: getSeedFromReplicateLogs(logs) || input?.seed,
      }).eq("id", job.id);

    } catch (e: any) {
      await supabaseAdmin.from("image_jobs").update({ status: "failed", error_message: `Failed to process and store image: ${e.message}` }).eq("id", job.id);
    }

  } else if (status === "failed") {
    await supabaseAdmin.from("image_jobs").update({
      status: "failed",
      error_message: typeof error === 'string' ? error : JSON.stringify(error),
    }).eq("id", job.id);
  } else if (status === "canceled") {
    await supabaseAdmin.from("image_jobs").update({ status: "canceled" }).eq("id", job.id);
  }
  return apiResponse.success({ received: true });
} 