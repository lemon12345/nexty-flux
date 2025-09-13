"use client";

import { ChevronRight, Home } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PhotoTo3DCartoonBreadcrumb() {
  const t = useTranslations("PhotoTo3DCartoon.metadata");

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
      <Link href="/" className="flex items-center hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
        <Home className="w-4 h-4 mr-1" />
        {t("home")}
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/photo-to-3d-cartoon" className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
        {t("title")}
      </Link>
    </nav>
  );
} 