import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import CTASection from "./CTASection";
import ExamplesSection from "./ExamplesSection";
import FAQSection from "./FAQSection";
import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import PhotoToPencilSketchClient from "./PhotoToPencilSketchClient";
import UseCasesSection from "./UseCasesSection";
import WhatMakesDifferent from "./WhatMakesDifferent";

type Params = Promise<{ locale: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "PhotoToPencilSketch.metadata",
  });

  return constructMetadata({
    page: "Photo to Pencil Sketch",
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    locale: locale as Locale,
    path: `/sketch-drawing`,
  });
}

export default function PhotoToPencilSketchPage() {
  return (
    <div className="min-h-screen w-full">
      <HeroSection />
      <PhotoToPencilSketchClient />
      <ExamplesSection />
      <WhatMakesDifferent />
      <FeaturesSection />
      <UseCasesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
} 