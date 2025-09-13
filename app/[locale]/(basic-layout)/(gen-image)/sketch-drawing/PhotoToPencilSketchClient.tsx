"use client";

import { generateUserPresignedUploadUrl } from "@/actions/r2-resources";

import ImageResultDisplay from "@/components/ai/ImageResultDisplay";
import RecentImagesGallery from "@/components/ai/RecentImagesGallery";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  FLUX_KONTEXT_PRO_PATH,
  INPUT_IMAGE_MAX_SIZE,
} from "@/config/common";
import { featureList } from "@/config/featureList";
import { siteConfig } from "@/config/site";
import { useUserBenefits } from "@/hooks/useUserBenefits";
import { DEFAULT_LOCALE } from "@/i18n/routing";
import { downloadFile } from "@/lib/downloadFile";
import { ChevronDown, Loader2, Upload, Wand2, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

interface JobInfo {
  job_id: string;
  status: "starting" | "processing" | "succeeded" | "failed" | "canceled";
  output_url?: string;
  error?: string;
  request_params?: Record<string, any>;
}

const FEATURE_KEY = "photo_to_pencil_sketch"; // config/featureList.ts

export default function PhotoToPencilSketchClient() {
  const locale = useLocale();
  const { user, requireAuth } = useAuth();
  const {
    benefits,
    optimisticDeduct,
    mutate: revalidateBenefits,
  } = useUserBenefits();
  const router = useRouter();
  const galleryRef = useRef<any>(null);
  const t = useTranslations("PhotoToPencilSketch.client");

  const [sourceImage, setSourceImage] = useState<string | null>(null);
  const [sourceImageUrl, setSourceImageUrl] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("Transform the image into a pencil sketch drawing.");
  const [seed, setSeed] = useState("");
  const [guidanceScale, setGuidanceScale] = useState(5.5);
  const selectedModel = "photo_to_pencil_sketch";
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [job, setJob] = useState<JobInfo | null>(null);
  const [isAdvancedSettingsOpen, setIsAdvancedSettingsOpen] = useState(false);

  const creditsRequired = featureList[selectedModel].creditsCost;

  const saveFormData = useCallback(() => {
    const formData = {
      prompt,
      seed,
      guidanceScale,
      timestamp: Date.now(),
    };
    localStorage.setItem("photo_to_pencil_sketch_form", JSON.stringify(formData));
  }, [prompt, seed, guidanceScale]);

  useEffect(() => {
    if (prompt || seed || guidanceScale !== 5.5) {
      saveFormData();
    }
  }, [prompt, seed, guidanceScale, saveFormData]);

  useEffect(() => {
    const savedJob = localStorage.getItem("photo_to_pencil_sketch_job");
    if (savedJob) {
      try {
        const job = JSON.parse(savedJob);
        if (
          job.job_id &&
          (job.status === "starting" || job.status === "processing")
        ) {
          setJob(job);
          setIsProcessing(true);
        }
      } catch (error) {
        console.error("Failed to parse saved job:", error);
        localStorage.removeItem("photo_to_pencil_sketch_job");
      }
    }

    const savedImage = localStorage.getItem("photo_to_pencil_sketch_image");
    if (savedImage) {
      try {
        const imageData = JSON.parse(savedImage);
        if (imageData.sourceImage && imageData.sourceImageUrl) {
          setSourceImage(imageData.sourceImage);
          setSourceImageUrl(imageData.sourceImageUrl);
        }
      } catch (error) {
        console.error("Failed to parse saved image:", error);
        localStorage.removeItem("photo_to_pencil_sketch_image");
      }
    }

    const savedFormData = localStorage.getItem("photo_to_pencil_sketch_form");
    if (savedFormData) {
      try {
        const formData = JSON.parse(savedFormData);
        if (formData.prompt) setPrompt(formData.prompt);
        if (formData.seed) setSeed(formData.seed);
        if (formData.guidanceScale) setGuidanceScale(formData.guidanceScale);
      } catch (error) {
        console.error("Failed to parse saved form data:", error);
        localStorage.removeItem("photo_to_pencil_sketch_form");
      }
    }

    const savedResult = localStorage.getItem("photo_to_pencil_sketch_result");
    if (savedResult) {
      try {
        const resultData = JSON.parse(savedResult);
        setResultImage(resultData.resultImage);
      } catch (error) {
        console.error("Failed to parse saved result:", error);
        localStorage.removeItem("photo_to_pencil_sketch_result");
      }
    }
  }, []);

  useEffect(() => {
    if (!job?.job_id || !isProcessing) return;

    let timeoutId: NodeJS.Timeout;

    const pollJobStatus = async () => {
      try {
        const response = await fetch(
          `/api/ai/replicate/seededit/status/${job.job_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              "Accept-Language": (locale || DEFAULT_LOCALE) as string,
            },
          }
        );

        if (!response.ok) {
          setIsProcessing(false);
          localStorage.removeItem("photo_to_pencil_sketch_job");

          throw new Error("Failed to fetch job status");
        }

        const result = await response.json();
        if (result.success) {
          const job: JobInfo = result.data;

          setJob(job);
          localStorage.setItem("photo_to_pencil_sketch_job", JSON.stringify(job));

          if (job.status === "succeeded") {
            const resultUrl = job.output_url || null;
            setResultImage(resultUrl);
            setIsProcessing(false);
            localStorage.removeItem("photo_to_pencil_sketch_job");

            if (resultUrl) {
              const resultData = {
                resultImage: resultUrl,
                timestamp: Date.now(),
                jobId: job.job_id,
              };
              localStorage.setItem(
                "photo_to_pencil_sketch_result",
                JSON.stringify(resultData)
              );

              galleryRef.current?.refresh();
            }
            return;
          }

          if (job.status === "failed") {
            setIsProcessing(false);
            localStorage.removeItem("photo_to_pencil_sketch_job");
            localStorage.removeItem("photo_to_pencil_sketch_result");
            toast.error(
              `Processing failed: ${result.error || "Unknown error"}`
            );
            return;
          }

          if (job.status === "canceled") {
            setIsProcessing(false);
            localStorage.removeItem("photo_to_pencil_sketch_job");
            localStorage.removeItem("photo_to_pencil_sketch_result");
            return;
          }

          timeoutId = setTimeout(pollJobStatus, 2000);
        }
      } catch (error) {
        console.error("Failed to poll job status:", error);
        setIsProcessing(false);
      }
    };

    pollJobStatus();

    return () => clearTimeout(timeoutId);
  }, [job?.job_id, isProcessing]);

  const handleImageUpload = useCallback(
    async (file: File) => {
      const authCheck = requireAuth();
      if (!authCheck.isAuthenticated) {
        if (authCheck.reason === "loading") {
          toast.error("Please wait while we check your authentication status...");
          return;
        }
        if (authCheck.reason === "not_authenticated") {
          const currentPath = window.location.pathname;
          router.push(`/login?next=${encodeURIComponent(currentPath)}`);
          return;
        }
        return;
      }

      if (!file.type.startsWith("image/")) {
        toast.error(t("upload.validationError"));
        return;
      }

      const maxSize = INPUT_IMAGE_MAX_SIZE;
      if (file.size > maxSize) {
        toast.error(t("upload.sizeError", { size: maxSize / 1024 / 1024 }));
        return;
      }

      setIsUploading(true);

      setJob(null);
      setResultImage(null);
      setIsProcessing(false);
      localStorage.removeItem("photo_to_pencil_sketch_job");
      localStorage.removeItem("photo_to_pencil_sketch_result");

      try {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSourceImage(reader.result as string);
        };
        reader.readAsDataURL(file);

        const presignedResponse = await generateUserPresignedUploadUrl({
          fileName: file.name,
          contentType: file.type,
          prefix: "input-image",
          path: FLUX_KONTEXT_PRO_PATH,
        });

        if (!presignedResponse.success || !presignedResponse.data) {
          throw new Error(
            presignedResponse.error || "Failed to get upload URL"
          );
        }

        const { presignedUrl, publicObjectUrl } = presignedResponse.data;

        const uploadResponse = await fetch(presignedUrl, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
            "Accept-Language": (locale || DEFAULT_LOCALE) as string,
          },
        });

        if (!uploadResponse.ok) {
          let r2Error = "";
          try {
            r2Error = await uploadResponse.text();
          } catch { }
          console.error("Upload Error:", r2Error, uploadResponse);
          throw new Error(r2Error);
        }

        setSourceImageUrl(publicObjectUrl);

        const imageData = {
          sourceImage: publicObjectUrl,
          sourceImageUrl: publicObjectUrl,
          timestamp: Date.now(),
        };
        localStorage.setItem(
          "photo_to_pencil_sketch_image",
          JSON.stringify(imageData)
        );
      } catch (error) {
        console.error("Upload failed:", error);
        toast.error(t("upload.uploadError"));
        setSourceImage(null);
        setSourceImageUrl(null);
        localStorage.removeItem("photo_to_pencil_sketch_image");
      } finally {
        setIsUploading(false);
      }
    },
    [requireAuth, user, router, t, locale]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        handleImageUpload(acceptedFiles[0]);
      }
    },
    [handleImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/webp": [".webp"],
    },
    multiple: false,
    disabled: isUploading || isProcessing,
  });

  const handleSubmit = async () => {
    const authCheck = requireAuth();
    if (!authCheck.isAuthenticated) {
      if (authCheck.reason === "loading") {
        toast.error("Please wait while we check your authentication status...");
        return;
      }
      if (authCheck.reason === "not_authenticated") {
        const currentPath = window.location.pathname;
        router.push(`/login?next=${encodeURIComponent(currentPath)}`);
        return;
      }
      return;
    }

    if (!sourceImageUrl || !prompt.trim()) {
      toast.error(t("form.submitValidation"));
      return;
    }

    if (!sourceImageUrl) {
      toast.error(t("form.uploadInProgress"));
      return;
    }

    if (!benefits || benefits.totalAvailableCredits < creditsRequired) {
      toast(t("processing.insufficientCredits"), {
        duration: 10000,
        action: {
          label: t("processing.getCreditsAction"),
          onClick: () => {
            window.open(
              process.env.NEXT_PUBLIC_PRICING_PATH || "/#pricing",
              "_blank"
            );
          },
        },
      });
      return;
    }

    setJob(null);
    setIsProcessing(true);
    setResultImage(null);
    localStorage.removeItem("photo_to_pencil_sketch_job");
    localStorage.removeItem("photo_to_pencil_sketch_result");

    try {
      const requestBody = {
        feature_id: selectedModel,
        parameters: {
          prompt: prompt.trim(),
          image: sourceImageUrl,
          guidance_scale: guidanceScale,
        },
        ...(seed && { seed: parseInt(seed, 10) }),
      };

      optimisticDeduct(creditsRequired);

      const response = await fetch("/api/ai/replicate/seededit/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept-Language": (locale || DEFAULT_LOCALE) as string,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        setIsProcessing(false);
        revalidateBenefits();
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit job");
      }

      const result = await response.json();
      if (result.success) {
        const jobId = result.data.job_id;

        revalidateBenefits();

        const initialStatus: JobInfo = {
          job_id: jobId,
          status: "starting",
        };
        setJob(initialStatus);
        localStorage.setItem(
          "photo_to_pencil_sketch_job",
          JSON.stringify(initialStatus)
        );
      } else {
        setIsProcessing(false);
        revalidateBenefits();
        throw new Error(result.error || "Failed to submit job");
      }
    } catch (error) {
      console.error("Submit failed:", error);
      toast.error(
        error instanceof Error ? error.message : t("processing.submitError")
      );
      setIsProcessing(false);
      revalidateBenefits();
    }
  };

  const handleDownload = () => {
    if (resultImage) {
      downloadFile(
        resultImage,
        `${siteConfig.name}-${selectedModel}.jpg`
      );
    }
  };

  const removeImage = () => {
    setSourceImage(null);
    setSourceImageUrl(null);
    localStorage.removeItem("photo_to_pencil_sketch_image");
  };

  const handleEdit = useCallback(() => {
    if (!resultImage) return;

    setSourceImage(resultImage);
    setSourceImageUrl(resultImage);

    const imageData = {
      sourceImage: resultImage,
      sourceImageUrl: resultImage,
      timestamp: Date.now(),
    };
    localStorage.setItem("photo_to_pencil_sketch_image", JSON.stringify(imageData));

    setResultImage(null);
    localStorage.removeItem("photo_to_pencil_sketch_result");
  }, [resultImage]);

  return (
    <section className="container mx-auto px-4 py-4 mb-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side - Upload and editing area */}
        <div className="flex flex-col space-y-4">
          <div
            {...getRootProps()}
            className={`
                border-2 border-dashed rounded-lg h-[400px] flex items-center justify-center cursor-pointer transition-all duration-200
                ${isDragActive
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-gray-50 dark:bg-gray-800/50"
              }
                ${isUploading || isProcessing
                ? "cursor-not-allowed opacity-50"
                : ""
              }
              `}
          >
            <input {...getInputProps()} />

            {isUploading ? (
              <div className="text-center p-8">
                <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">
                  {t("upload.uploading")}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {t("upload.uploadingSubtext")}
                </p>
              </div>
            ) : sourceImage ? (
              <div className="relative w-full h-full px-4">
                <Image
                  src={sourceImage}
                  alt="Source image"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 w-8 h-8"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                  disabled={isProcessing}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="text-center p-8">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mx-auto mb-4">
                  <Upload className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-lg">
                  {isDragActive
                    ? t("upload.dragActive")
                    : t("upload.dragInactive")}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {t("upload.supportedFormats", {
                    size: INPUT_IMAGE_MAX_SIZE / 1024 / 1024,
                  })}
                </p>
              </div>
            )}
          </div>

          {/* Hidden prompt input */}
          <div style={{ display: 'none' }}>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isProcessing}
            />
          </div>

          <div className="flex items-center justify-between rounded-lg border dark:border-gray-700 p-3 shadow-sm">
            <div>
              <Label
                htmlFor="guidance-scale"
                className="font-medium text-gray-800 dark:text-gray-200"
              >
                Guidance Scale
              </Label>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Controls how closely the result matches your input image
              </p>
            </div>
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
              {guidanceScale}
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => setIsAdvancedSettingsOpen(!isAdvancedSettingsOpen)}
              className="flex w-full items-center justify-between rounded-lg py-2 text-left text-sm font-medium text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"
            >
              <span>{t("form.advancedSettings")}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isAdvancedSettingsOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isAdvancedSettingsOpen ? "max-h-40" : "max-h-0"}`}
            >
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t("form.seedLabel")}
                  </label>
                  <Input
                    type="number"
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                    disabled={true}
                    className="rounded-lg bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
                    placeholder="Random"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!sourceImage || isUploading || isProcessing}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
            size="lg"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                {t("processing.processing")}
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5 mr-2" />
                {t("processing.transformButton", {
                  credits: creditsRequired,
                })}
              </>
            )}
          </Button>
        </div>

        {/* Right side - Preview area */}
        <div className="flex flex-col space-y-6">
          <ImageResultDisplay
            resultImage={resultImage}
            isProcessing={isProcessing}
            job={job}
            onDownload={handleDownload}
            onEdit={handleEdit}
          />

          <RecentImagesGallery
            ref={galleryRef}
            featureId={selectedModel}
            statuses={["processing", "succeeded"]}
            pageSize={12}
          />
        </div>
      </div>
    </section>
  );
} 