"use client";

import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CTASection() {
  const t = useTranslations("PhotoToCaricature.cta");

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-600 to-orange-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t("title")}
        </h2>
        <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
          {t("description")}
        </p>

        <div className="flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            <Link href="#hero">
              <Wand2 className="w-5 h-5 mr-2" />
              {t("tryNowButton")}
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-red-100">
          <p className="text-sm">
            {t("subtext")}
          </p>
        </div>
      </div>
    </section>
  );
} 