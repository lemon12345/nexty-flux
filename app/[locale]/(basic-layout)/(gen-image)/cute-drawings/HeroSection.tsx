"use client";

import { Badge } from "@/components/ui/badge";
import { Brush, CheckCircle, Palette, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import PhotoToCartoonDrawingClient from "./PhotoToCartoonDrawingClient";

export default function HeroSection() {
  const t = useTranslations("PhotoToCartoonDrawing.hero");
  const features = t.raw("features");

  return (
    <section
      id="hero"
      className="py-12 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* 中国画风格的装饰元素 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-amber-300 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-orange-300 transform rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border-2 border-red-300 transform -rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-amber-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center">
                <Brush className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Cartoon Drawing</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Art Styles</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">Fast Processing</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature: string) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-orange-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <PhotoToCartoonDrawingClient />
      </div>
    </section>
  );
} 