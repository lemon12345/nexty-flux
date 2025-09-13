"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("PhotoToPencilSketch.hero");

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            {t("description")}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            {t("subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
} 