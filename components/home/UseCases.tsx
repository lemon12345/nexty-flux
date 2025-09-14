"use client";

import { SectionBG5 } from "@/components/sectionBG";
import { useTranslations } from "next-intl";
import Image from "next/image";

// 使用与index.html完全一致的图片数据
const artGallery = [
  {
    art: "/static/gallery/wedding3_oilpainting_1024.png",
    reference: "/static/gallery/wedding3_original_512.webp",
    caption: "Oil Painting",
    link: "/oil-painting"
  },
  {
    art: "/static/gallery/girl2_sculpture_1024.png",
    reference: "/static/gallery/girl2_original_512.jpg",
    caption: "Sculpture",
    link: "/photo-to-sculpture"
  },
  {
    art: "/static/gallery/mother5_coloring_page_1024.png",
    reference: "/static/gallery/mother5_original_512.webp",
    caption: "Coloring Page",
    link: "/coloring-pages"
  },
  {
    art: "/static/gallery/girl8_caricature_1024.png",
    reference: "/static/gallery/girl8_original_512.webp",
    caption: "Caricature",
    link: "/photo-to-caricature"
  },
  {
    art: "/static/gallery/solution-portrait.png",
    reference: "/static/gallery/solution-before.webp",
    caption: "portraitart",
    link: "/portrait-art"
  },
  {
    art: "/static/gallery/valentine1_pencilsketch_1024.jpeg",
    reference: "/static/gallery/valentine1_original_512.webp",
    caption: "Pencil Sketch",
    link: "/sketch-drawing"
  },
  {
    art: "/static/gallery/scenery1_vintage_1024.png",
    reference: "/static/gallery/scenery1_original_512.webp",
    caption: "Vintage",
    link: "/photo-to-vintage"
  },
  {
    art: "/static/gallery/mother3_cartoon3d_1024.webp",
    reference: "/static/gallery/mother3_original_512.webp",
    caption: "Cartoon 3D",
    link: "/photo-to-3d-cartoon"
  },
  {
    art: "/static/gallery/pexels-girl1-art.png",
    reference: "/static/gallery/pexels-girl1.jpg",
    caption: "Line Art",
    link: "/line-art"
  },
  {
    art: "/static/gallery/father1_cartoondrawing_1024.png",
    reference: "/static/gallery/father1_original_512.webp",
    caption: "Cartoon 2D",
    link: "/cute-drawings"
  },
  {
    art: "/static/gallery/couple_vibrant_1024.png",
    reference: "/static/gallery/couple_original_512.webp",
    caption: "Vibrant",
    link: "/photo-to-vibrant"
  },
  {
    art: "/static/gallery/girl8_linesketch_1024.jpeg",
    reference: "/static/gallery/girl8_linesketch_512.jpg",
    caption: "Line Sketch",
    link: "/image-line"
  }
];

export default function UseCases() {
  const t = useTranslations("Landing.UseCases");

  return (
    <section className="relative">
      <SectionBG5 />
      <div className="py-8 md:py-16 px-2 md:px-4">
        <div className="max-w-[40%] md:max-w-[80%] lg:max-w-[80%] xl:max-w-[80%] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t("title")}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              {t("description")}
            </p>
          </div>

          {/* 相框画廊 - 完全按照ExamplesSection.tsx的实现 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 gap-x-8 md:gap-x-16 p-4 md:p-16 px-2 md:px-4 mx-auto">
            {artGallery.map((item, index) => (
              <div key={index} className="framed-image relative w-full">
                {/* 主图片 - 艺术结果 */}
                <div className="relative w-full aspect-[4/3] min-h-[400px] md:min-h-[600px] lg:min-h-[600px] xl:min-h-[600px]">
                  <Image
                    src={item.art}
                    alt={`${item.caption} example`}
                    fill
                    className="object-contain p-8 md:p-16 bg-[#ddc] border-[16px] md:border-[32px] border-[#eee] border-b-white border-l-[#eee] border-r-[#eee] border-t-[#ddd] rounded-sm shadow-[0_0_8px_0_rgba(0,0,0,0.4)_inset,0_8px_16px_8px_rgba(0,0,0,0.4)] md:shadow-[0_0_12px_0_rgba(0,0,0,0.4)_inset,0_12px_24px_12px_rgba(0,0,0,0.4)]"
                    style={{
                      boxShadow: '0 0 8px 0 rgba(0,0,0,0.4) inset, 0 8px 16px 8px rgba(0,0,0,0.4)'
                    }}
                    loading={index < 6 ? "eager" : "lazy"}
                  />

                  {/* 相框阴影效果 */}
                  <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 -right-2 md:-right-4 -top-2 md:-top-4 rounded-sm shadow-[0_2px_8px_0_rgba(0,0,0,0.4)_inset] md:shadow-[0_4px_12px_0_rgba(0,0,0,0.4)_inset] pointer-events-none"></div>
                  <div className="absolute -bottom-[10px] md:-bottom-[20px] -left-[10px] md:-left-[20px] -right-[10px] md:-right-[20px] -top-[10px] md:-top-[20px] rounded-sm shadow-[0_2px_8px_0_rgba(0,0,0,0.4)] md:shadow-[0_4px_12px_0_rgba(0,0,0,0.4)] pointer-events-none"></div>
                </div>

                {/* 参考图片 - 原始照片 */}
                <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8 w-1/4 md:w-1/3 h-1/5 md:h-1/4">
                  <Image
                    src={item.reference}
                    alt="Reference photo"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                    loading={index < 6 ? "eager" : "lazy"}
                  />
                </div>

                {/* 标题 */}
                <div className="absolute right-6 md:right-10 bottom-4 md:bottom-8 font-['Oleo_Script'] text-sm md:text-lg text-gray-500">
                  <a href={item.link} className="hover:text-gray-700 transition-colors">
                    {item.caption}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
