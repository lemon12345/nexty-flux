import { createClient } from "@/lib/supabase/client";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  image_url: z.string().url(),
  prompt: z.string(),
  guidance_scale: z.number().optional(),
  model: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { image_url, prompt, guidance_scale, model } = schema.parse(body);

    const supabase = createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const baseURL = process.env.REPLICATE_WEBHOOK_BASE_URL || request.url;
    const webhookUrl = new URL(
      "/api/ai/replicate/seededit-3.0/webhook",
      baseURL
    ).href;

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: JSON.stringify({
        version: "c9fd2b1b4b1a03a8ba1c86ee31e7cd34b9d3637c",
        input: {
          image: image_url,
          prompt,
          guidance_scale: guidance_scale || 5.5,
        },
        webhook: webhookUrl,
        webhook_events_filter: ["completed"],
      }),
    });

    if (!response.ok) {
      throw new Error(`Replicate API error: ${response.statusText}`);
    }

    const prediction = await response.json();

    const { data: job, error: jobError } = await supabase
      .from("image_jobs")
      .insert({
        user_id: user.id,
        feature_id: "seededit-3.0",
        request_params: {
          prompt,
          image_url,
          guidance_scale,
        },
        provider_model: "bytedance/seededit-3.0",
      })
      .select("id")
      .single();

    if (jobError) {
      throw jobError;
    }

    return NextResponse.json({ job_id: prediction.id });
  } catch (error) {
    console.error("Submit error:", error);
    return NextResponse.json(
      { error: "Failed to submit job" },
      { status: 500 }
    );
  }
} 