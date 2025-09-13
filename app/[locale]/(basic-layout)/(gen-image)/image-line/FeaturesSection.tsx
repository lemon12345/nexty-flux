"use client";

import { Palette, Shield, Users, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("PhotoToLineSketch.features");

  const features = [
    {
      icon: Palette,
      title: "AI Photo to Line Art Converter",
      description: "Transform photos into beautiful line art and contour drawings with our advanced AI technology."
    },
    {
      icon: Zap,
      title: "Fast Line Drawing Processing",
      description: "Convert image to outline sketch in minutes with our optimized AI processing pipeline."
    },
    {
      icon: Shield,
      title: "Privacy Protected Conversion",
      description: "Your photos are processed securely for line art conversion and never stored permanently."
    },
    {
      icon: Users,
      title: "Multiple Line Art Styles",
      description: "Choose from various line drawing styles including contour lines, outline sketches, and traceable art."
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
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
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