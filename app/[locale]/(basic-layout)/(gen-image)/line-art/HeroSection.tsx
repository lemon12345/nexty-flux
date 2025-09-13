"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";
import PhotoToLineArtClient from "./PhotoToLineArtClient";

export default function HeroSection() {
  const features = [
    "AI-Powered Line Art Generation",
    "High-Quality Results",
    "Fast Processing",
    "Multiple Styles Available",
    "Easy to Use"
  ];

  return (
    <section
      id="hero"
      className="py-12 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Powered
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Transform Your Photos into Beautiful Line Art
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
            Create stunning line art from your photos with our advanced AI technology. Perfect for artists, designers, and creative enthusiasts.
          </p>
          <p className="text-gray-500 dark:text-gray-500 max-w-4xl mx-auto leading-relaxed mb-8 text-lg">
            Upload your photo and let our AI transform it into a beautiful line art masterpiece in seconds.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        <PhotoToLineArtClient />
      </div>
    </section>
  );
} 