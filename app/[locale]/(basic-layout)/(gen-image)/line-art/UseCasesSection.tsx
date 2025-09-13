"use client";

import { Camera, Gift, Heart, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function UseCasesSection() {
  const t = useTranslations("PhotoToLineArt.useCases");

  const useCases = [
    {
      icon: Heart,
      title: "Personal Gifts",
      description: "Create unique line art for birthdays, anniversaries, and special occasions."
    },
    {
      icon: Gift,
      title: "Holiday Cards",
      description: "Design personalized line art holiday cards with family photos."
    },
    {
      icon: Star,
      title: "Social Media",
      description: "Transform your photos into eye-catching line art for social platforms."
    },
    {
      icon: Camera,
      title: "Family Portraits",
      description: "Turn family photos into charming line art for home decoration."
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
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
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