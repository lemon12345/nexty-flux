"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatMakesDifferent() {
  const t = useTranslations("PhotoToLineSketch.whatMakesDifferent");

  const features = [
    "AI-powered line sketch creation",
    "High-quality artistic style",
    "Preserves original photo details",
    "Multiple line sketch styles",
    "Fast processing time",
    "Professional results"
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
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-700 dark:text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 