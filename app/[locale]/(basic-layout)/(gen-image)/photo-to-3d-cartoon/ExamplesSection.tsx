"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ExamplesSection() {
  const t = useTranslations("PhotoTo3DCartoon.examples");

  const portraitExamples = [
    {
      id: 1,
      title: "Girl Portrait 3D",
      original: "/static/gallery/girl2_original_512.webp",
      result: "/static/gallery/girl2_cartoon3d_1024.png"
    },
    {
      id: 2,
      title: "Basketball Player 3D",
      original: "/static/gallery/basketball1_original_512.jpg",
      result: "/static/gallery/basketball1_cartoon3d_1024.png"
    },
    {
      id: 3,
      title: "Bird 3D",
      original: "/static/gallery/bird1_original_512.jpg",
      result: "/static/gallery/bird1_cartoon3d_1024.png"
    },
    {
      id: 5,
      title: "Dog 3D",
      original: "/static/gallery/dog7_original_512.webp",
      result: "/static/gallery/dog7_cartoon3d_1024.png"
    },
    {
      id: 6,
      title: "Family Father 3D",
      original: "/static/gallery/family3_father_original_512.webp",
      result: "/static/gallery/family3_father_cartoon3d_1024.png"
    },
    {
      id: 7,
      title: "Father Portrait 3D",
      original: "/static/gallery/father3_original_512.webp",
      result: "/static/gallery/father3_cartoon3d_1024.png"
    },
    {
      id: 8,
      title: "Father Portrait 2 3D",
      original: "/static/gallery/father5_original_512.webp",
      result: "/static/gallery/father5_cartoon3d_1024.png"
    },
    {
      id: 9,
      title: "Father Portrait 3 3D",
      original: "/static/gallery/father7_original_512.webp",
      result: "/static/gallery/father7_cartoon3d_1024.png"
    }
  ];



  return (
    <section className="py-8 md:py-16 px-2 md:px-4">
      <div className="max-w-[65%] md:max-w-[70%] lg:max-w-[70%] xl:max-w-[60%] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            {t("description")}
          </p>
        </div>

        {/* 竖版图片画廊 */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center">Portrait Gallery</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 gap-x-8 md:gap-x-16 p-4 md:p-16 px-2 md:px-4 mx-auto">
            {portraitExamples.map((example) => (
              <div key={example.id} className="framed-image relative w-full">
                {/* 主图片 - 3D卡通结果 */}
                <div className="relative w-full aspect-[4/3] min-h-[400px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px]">
                  <Image
                    src={example.result}
                    alt={example.title}
                    fill
                    className="object-contain p-8 md:p-16 bg-[#ddc] border-[16px] md:border-[32px] border-[#eee] border-b-white border-l-[#eee] border-r-[#eee] border-t-[#ddd] rounded-sm shadow-[0_0_8px_0_rgba(0,0,0,0.4)_inset,0_8px_16px_8px_rgba(0,0,0,0.4)] md:shadow-[0_0_12px_0_rgba(0,0,0,0.4)_inset,0_12px_24px_12px_rgba(0,0,0,0.4)]"
                    style={{
                      boxShadow: '0 0 8px 0 rgba(0,0,0,0.4) inset, 0 8px 16px 8px rgba(0,0,0,0.4)'
                    }}
                  />

                  {/* 相框阴影效果 */}
                  <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 -right-2 md:-right-4 -top-2 md:-top-4 rounded-sm shadow-[0_2px_8px_0_rgba(0,0,0,0.4)_inset] md:shadow-[0_4px_12px_0_rgba(0,0,0,0.4)_inset] pointer-events-none"></div>
                  <div className="absolute -bottom-[10px] md:-bottom-[20px] -left-[10px] md:-left-[20px] -right-[10px] md:-right-[20px] -top-[10px] md:-top-[20px] rounded-sm shadow-[0_2px_8px_0_rgba(0,0,0,0.4)] md:shadow-[0_4px_12px_0_rgba(0,0,0,0.4)] pointer-events-none"></div>
                </div>

                {/* 参考图片 - 原始照片 */}
                <div className="absolute left-4 md:left-8 bottom-4 md:bottom-8 w-1/4 md:w-1/3 h-1/5 md:h-1/4">
                  <Image
                    src={example.original}
                    alt="Reference photo"
                    width={100}
                    height={100}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* 标题 */}
                <div className="absolute right-6 md:right-10 bottom-4 md:bottom-8 font-['Oleo_Script'] text-sm md:text-lg text-gray-500">
                  Cartoon 3D
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
} 