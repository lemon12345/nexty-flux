"use client";

import { Car, Gift, GraduationCap, Heart, Home, Mountain, PawPrint, User, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export default function UseCasesSection() {
  const t = useTranslations("PhotoTo3DCartoon.useCases");

  const useCases = [
    {
      icon: User,
      title: t("items.0.title"),
      description: t("items.0.description")
    },
    {
      icon: Users,
      title: t("items.1.title"),
      description: t("items.1.description")
    },
    {
      icon: Heart,
      title: t("items.2.title"),
      description: t("items.2.description")
    },
    {
      icon: GraduationCap,
      title: t("items.3.title"),
      description: t("items.3.description")
    },
    {
      icon: Gift,
      title: t("items.4.title"),
      description: t("items.4.description")
    },
    {
      icon: Home,
      title: t("items.5.title"),
      description: t("items.5.description")
    },
    {
      icon: Car,
      title: t("items.6.title"),
      description: t("items.6.description")
    },
    {
      icon: Mountain,
      title: t("items.7.title"),
      description: t("items.7.description")
    },
    {
      icon: PawPrint,
      title: t("items.8.title"),
      description: t("items.8.description")
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full mb-4">
                <useCase.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                {useCase.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 