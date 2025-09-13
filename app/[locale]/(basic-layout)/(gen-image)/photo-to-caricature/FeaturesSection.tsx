"use client";

import { CheckCircle, Mountain, Palette, Sparkles, TreePine, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("PhotoToCaricature.features");

  const features = [
    {
      icon: Palette,
      title: t("items.0.title"),
      description: t("items.0.description")
    },
    {
      icon: Mountain,
      title: t("items.1.title"),
      description: t("items.1.description")
    },
    {
      icon: CheckCircle,
      title: t("items.2.title"),
      description: t("items.2.description")
    },
    {
      icon: Zap,
      title: t("items.3.title"),
      description: t("items.3.description")
    },
    {
      icon: TreePine,
      title: t("items.4.title"),
      description: t("items.4.description")
    },
    {
      icon: Sparkles,
      title: t("items.5.title"),
      description: t("items.5.description")
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 