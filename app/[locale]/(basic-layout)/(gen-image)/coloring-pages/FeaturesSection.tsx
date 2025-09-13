"use client";

import { Palette, Shield, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

interface Feature {
  title: string;
  description: string;
}

const ICONS = {
  "AI Coloring Style": Palette,
  "AI涂色风格": Palette,
  "AI塗り絵スタイル": Palette,
  "Fast Processing": Zap,
  "快速处理": Zap,
  "高速処理": Zap,
  "Privacy Protected": Shield,
  "隐私保护": Shield,
  "プライバシー保護": Shield,
  "Multiple Styles": Users,
  "多种风格": Users,
  "複数のスタイル": Users,
};

export default function FeaturesSection() {
  const t = useTranslations("PhotoToColoringPage.features");
  const features = t.raw("items") as Feature[];

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
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
          {features.map((feature: Feature, index: number) => {
            const IconComponent = ICONS[feature.title as keyof typeof ICONS] || Palette;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 