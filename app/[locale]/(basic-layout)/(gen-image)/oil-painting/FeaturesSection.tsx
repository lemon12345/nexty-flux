"use client";

import { Palette, Shield, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("PhotoToOilPainting.features");

  const features = [
    {
      icon: Palette,
      title: "AI Oil Painting Style",
      description: "Transform photos into beautiful oil paintings with our advanced AI technology."
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Get your oil paintings in minutes with our optimized processing pipeline."
    },
    {
      icon: Shield,
      title: "Privacy Protected",
      description: "Your photos are processed securely and never stored permanently."
    },
    {
      icon: Users,
      title: "Multiple Styles",
      description: "Choose from various oil painting styles to match your preferences."
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 