"use client";

import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import PhotoTo3DCartoonClient from "./PhotoTo3DCartoonClient";

export default function HeroSection() {
  const t = useTranslations("PhotoTo3DCartoon.hero");

  return (
    <section
      id="hero"
      className="py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-700 dark:from-indigo-900/50 dark:to-cyan-900/50 dark:text-indigo-300 border-0">
            <Sparkles className="w-4 h-4 mr-2" />
            {t("badge")}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 text-lg">
            {t("description")}
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10 text-base">
            {t("subtitle")}
          </p>


        </div>
        <PhotoTo3DCartoonClient />
      </div>
    </section>
  );
} 