"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function CTASection() {
  const t = useTranslations("PhotoTo3DCartoon.cta");

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            size="lg"
            className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold"
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t("tryNowButton")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <p className="text-blue-200 text-sm">
          {t("subtext")}
        </p>
      </div>
    </section>
  );
} 