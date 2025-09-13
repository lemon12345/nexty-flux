"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function FAQSection() {
  const t = useTranslations("PhotoToPopArt.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Does the portrait art generator create a customized professional headshot based on my photo?",
      answer: "Yes! The PortraitArt app transforms your photos into professional portrait art, capturing the content, composition, and essence of your original image in every piece."
    },
    {
      question: "What kind of photos should I use for professional portrait art?",
      answer: "PortraitArt works best with portrait photos, headshots, and professional photos. For optimal results, use high-resolution images with good lighting, clear facial features, and a clean background."
    },
    {
      question: "What other art styles can my photo be converted to?",
      answer: "PortraitArt offers a variety of art styles besides portrait art, including classical oil painting, watercolor, illustration, colored line art, pencil sketch, line sketch, 3D and 2D cartoons, caricature, coloring pages, sculpture, Chinese ink, and more."
    },
    {
      question: "How does PortraitArt handle my data?",
      answer: "Your data safety and privacy are our top priorities. All photos uploaded to PortraitArt are securely processed and used solely for creating your artwork. We do not store, share, or use your photos for any other purposes without your consent. Additionally, all data transmission is encrypted to protect your personal information. And you can choose to delete your data after creating and downloading your art pictures."
    },
    {
      question: "Can I see a preview before buying?",
      answer: "Yes! PortraitArt offers a free trial so you can try it out first."
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