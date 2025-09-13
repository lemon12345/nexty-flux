"use client";

import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle, Palette, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import PhotoToVintageClient from "./PhotoToVintageClient";

export default function HeroSection() {
  const t = useTranslations("PhotoToVintage.hero");
  const features = t.raw("features");
  const styleIcons = t.raw("styleIcons");

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
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">{styleIcons[0]}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">{styleIcons[1]}</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-medium">{styleIcons[2]}</span>
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
        <PhotoToVintageClient />
      </div>
    </section>
  );
} 