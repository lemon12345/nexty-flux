import replicate from "@/lib/ai/replicate";
import { apiResponse } from "@/lib/api-response";
import { createClient } from "@/lib/supabase/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, { params }: { params: Promise<{ job_id: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return apiResponse.unauthorized();
  }

  if (!replicate) {
    return apiResponse.serverError("Replicate is not initialized");
  }

  const { job_id } = await params;

  try {
    const { data: job, error: fetchError } = await supabase
      .from("image_jobs")
      .select("id, status, provider_job_id")
      .eq("id", job_id)
      .single();

    if (fetchError) {
      return apiResponse.notFound(`Job with id '${job_id}' not found.`);
    }

    if (job.provider_job_id) {
      try {
        await replicate.predictions.cancel(job.provider_job_id);
      } catch (replicateError) {
        console.warn(`Could not cancel Replicate job ${job.provider_job_id}:`, replicateError);
      }
    }

    const { error: updateError } = await supabase
      .from("image_jobs")
      .update({ status: 'canceled' })
      .eq("id", job_id);

    if (updateError) {
      console.error("Error cancelling job:", updateError);
      return apiResponse.serverError("Failed to cancel job.");
    }

    return apiResponse.success({
      job_id: job.id,
      status: 'canceled'
    });

  } catch (error) {
    console.error("Unexpected error cancelling job:", error);
    return apiResponse.serverError();
  }
} 