"use client";

import { Camera, Gift, Heart, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function UseCasesSection() {
  const t = useTranslations("PhotoToPopArt.useCases");

  const useCases = [
    {
      icon: Heart,
      title: "Professional Headshots",
      description: "Create professional portrait art for business profiles and LinkedIn."
    },
    {
      icon: Gift,
      title: "Personal Branding",
      description: "Design unique portrait art for personal branding and marketing materials."
    },
    {
      icon: Star,
      title: "Social Media",
      description: "Transform your photos into professional portrait art for social platforms."
    },
    {
      icon: Camera,
      title: "Portfolio Enhancement",
      description: "Turn portrait photos into artistic representations for creative portfolios."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 