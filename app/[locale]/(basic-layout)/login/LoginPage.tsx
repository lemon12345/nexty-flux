"use client";

import { GoogleIcon } from "@/components/icons";
import { useAuth } from "@/components/providers/AuthProvider";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/routing";
import { Github, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const router = useRouter();
  const { user, signInWithGoogle, signInWithGithub } = useAuth();

  const t = useTranslations("Login");
  const searchParams = useSearchParams();
  const next = searchParams.get("next");

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      const { error } = await signInWithGoogle(next || "");
      if (error) throw error;
    } catch (error) {
      toast.error(t("Toast.Google.errorTitle"), {
        description: t("Toast.Google.errorDescription"),
      });
    }
  };

  const handleGithubLogin = async () => {
    try {
      const { error } = await signInWithGithub(next || "");
      if (error) throw error;
    } catch (error) {
      toast.error(t("Toast.Github.errorTitle"), {
        description: t("Toast.Github.errorDescription"),
      });
    }
  };

  if (user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center flex-1 py-12">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            {t("title")}
          </h1>
          <p className="text-sm text-muted-foreground">{t("description")}</p>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-4 w-[300px]">
            <Button variant="outline" onClick={handleGoogleLogin}>
              <GoogleIcon className="mr-2 h-4 w-4" />
              {t("signInMethods.signInWithGoogle")}
            </Button>
            <Button variant="outline" onClick={handleGithubLogin}>
              <Github className="mr-2 h-4 w-4" />
              {t("signInMethods.signInWithGithub")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
