"use client";

import { Wand2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CTASection() {
  const t = useTranslations("PhotoToVintage.cta");

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {t("title")}
        </h2>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 bg-white text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
        >
          <Wand2 className="w-5 h-5 mr-2" />
          {t("button")}
        </Link>
      </div>
    </section>
  );
} 