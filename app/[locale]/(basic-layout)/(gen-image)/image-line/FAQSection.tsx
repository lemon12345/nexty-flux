"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQSection() {
  const t = useTranslations("PhotoToLineSketch.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the photo to line art converter work?",
      answer: "Our AI line art generator analyzes your photo and creates beautiful contour lines and outline sketches. Each line drawing is uniquely generated from the photo you provide, preserving the content, composition, and essence of the original image while converting it to traceable line art."
    },
    {
      question: "What kind of photos work best for line art conversion?",
      answer: "Our photo to line art converter works with various types of photos, including portraits, group shots, pet photos, buildings, and scenic views. For optimal line drawing results, use high-resolution images with good lighting and clear subjects."
    },
    {
      question: "Can I convert images to other art styles besides line art?",
      answer: "Yes! Besides converting photo to line art, our platform offers various art styles including oil painting, watercolor, illustration, cartoon drawing, pencil sketch, 3D and 2D cartoons, pop art, caricature, coloring pages, sculpture, Chinese ink, and more artistic conversions."
    },
    {
      question: "Is my photo data safe during line art conversion?",
      answer: "Your data safety and privacy are our top priorities. All photos uploaded for line art conversion are securely processed and used solely for creating your artwork. We do not store, share, or use your photos for any other purposes without your consent."
    },
    {
      question: "Can I preview the line art before purchasing?",
      answer: "Yes! Our photo to line art converter offers a free trial so you can see how your images convert to outline sketches before making any purchase."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 