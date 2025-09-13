"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("PhotoToLineSketch.hero");

  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 py-16">
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
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
              <span className="text-sm text-gray-700">AI Line Art Generator</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Photo to Outline Sketch</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700">Fast Line Conversion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 