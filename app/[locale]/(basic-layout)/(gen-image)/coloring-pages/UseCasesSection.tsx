"use client";

import { Camera, Gift, Heart, Star } from "lucide-react";
import { useTranslations } from "next-intl";

interface UseCase {
  title: string;
  description: string;
}

const ICONS = {
  "Educational Activities": Star,
  "教育活动": Star,
  "教育活動": Star,
  "Relaxation Therapy": Heart,
  "放松疗法": Heart,
  "リラクゼーション療法": Heart,
  "Creative Projects": Camera,
  "创意项目": Camera,
  "創造的プロジェクト": Camera,
  "Family Fun": Gift,
  "家庭娱乐": Gift,
  "家族の楽しみ": Gift,
};

export default function UseCasesSection() {
  const t = useTranslations("PhotoToColoringPage.useCases");
  const useCases = t.raw("items") as UseCase[];

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase: UseCase, index: number) => {
            const IconComponent = ICONS[useCase.title as keyof typeof ICONS] || Gift;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 