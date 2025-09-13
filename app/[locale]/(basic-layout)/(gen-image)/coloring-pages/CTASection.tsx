"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("PhotoToColoringPage.cta");

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          {t("title")}
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          {t("description")}
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
          >
            {t("button")}
          </Button>
        </div>
      </div>
    </section>
  );
} 