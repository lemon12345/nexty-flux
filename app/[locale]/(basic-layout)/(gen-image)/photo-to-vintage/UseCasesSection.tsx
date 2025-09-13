"use client";

import { Camera, Gift, Heart, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export default function UseCasesSection() {
  const t = useTranslations("PhotoToVintage.useCases");
  const useCaseItems = t.raw("items");

  const useCaseIcons = [Heart, Gift, Star, Camera];

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
          {useCaseItems.map((useCase: any, index: number) => {
            const IconComponent = useCaseIcons[index];
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{useCase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 