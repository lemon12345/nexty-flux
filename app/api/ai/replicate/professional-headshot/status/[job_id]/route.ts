import { DEFAULT_LOCALE } from "@/i18n/routing";
import { apiResponse } from "@/lib/api-response";
import { createClient } from "@/lib/supabase/server";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ job_id: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { get } = await headers();
  const locale = get("Accept-Language");

  const t = await getTranslations({ locale: locale || DEFAULT_LOCALE, namespace: 'GenImageShared.api.errors' });

  if (!user) {
    return apiResponse.unauthorized();
  }

  const { job_id } = await params

  try {
    const { data: job, error } = await supabase
      .from("image_jobs")
      .select("id, status, request_params, final_output_url, error_message")
      .eq("id", job_id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return apiResponse.notFound(t("jobNotFound", { jobId: job_id }));
      }
      console.error("Error fetching job status:", error);
      return apiResponse.serverError(t("jobStatusFetchFailed"));
    }

    const responseData: { job_id: string; status: string; request_params?: Record<string, any>; output_url?: string; error?: string } = {
      job_id: job.id,
      status: job.status,
    };

    if (job.status === 'succeeded') {
      responseData.output_url = job.final_output_url ?? undefined;
      responseData.request_params = job.request_params as Record<string, any>;
    } else if (job.status === 'failed') {
      responseData.error = job.error_message ?? undefined;
    }

    return apiResponse.success(responseData);

  } catch (error) {
    console.error("Unexpected error fetching job status:", error);
    return apiResponse.serverError();
  }
} 