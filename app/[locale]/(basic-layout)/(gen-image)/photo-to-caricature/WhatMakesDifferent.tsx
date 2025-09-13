"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatMakesDifferent() {
  const t = useTranslations("PhotoToCaricature.whatMakesDifferent");

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 漫画技术卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
              {t("cards.0.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {t("cards.0.description")}
            </p>
            <ul className="space-y-3">
              {t.raw("cards.0.features").map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 现代AI技术卡片 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
              {t("cards.1.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {t("cards.1.description")}
            </p>
            <ul className="space-y-3">
              {t.raw("cards.1.features").map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 