"use client";

import { Badge } from "@/components/ui/badge";
import { Box, CheckCircle, Palette, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import PhotoToCaricatureClient from "./PhotoToCaricatureClient";

export default function HeroSection() {
  const t = useTranslations("PhotoToCaricature.hero");
  const features = t.raw("features");

  return (
    <section
      id="hero"
      className="py-12 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            {t("badge")}
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t("title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
            {t("description")}
          </p>
          <p className="text-gray-500 dark:text-gray-500 max-w-4xl mx-auto leading-relaxed mb-8 text-lg">
            {t("subtitle")}
          </p>

          {/* Style Icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                <Box className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Caricature</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Sketch</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Oil Painting</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature: string) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <PhotoToCaricatureClient />
      </div>
    </section>
  );
} 