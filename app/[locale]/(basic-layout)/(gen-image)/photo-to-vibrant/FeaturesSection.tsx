"use client";

import { Palette, Shield, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const ICONS: { [key: string]: any } = {
  "AI Vibrant Style": Palette,
  "Fast Processing": Zap,
  "Privacy Protected": Shield,
  "Multiple Styles": Users
};

export default function FeaturesSection() {
  const t = useTranslations("PhotoToVibrant.features");
  const features = t.raw("items");

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature: { title: string; description: string }, index: number) => {
            const Icon = ICONS[feature.title] || Palette;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 