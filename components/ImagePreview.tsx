"use client";
import { useEffect, useState } from "react";

interface ImagePreviewProps {
  children: React.ReactNode;
  frameStyle?: "classic" | "modern" | "vintage" | "minimal";
  frameColor?: string;
  allImages?: string[]; // 所有图片的数组
  currentImageIndex?: number; // 当前图片的索引
  onImageChange?: (index: number) => void; // 图片切换回调
}

export const ImagePreview = ({
  children,
  frameStyle = "modern",
  frameColor = "indigo",
  allImages = [],
  currentImageIndex = 0,
  onImageChange
}: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const img = e.currentTarget.querySelector('img');
    if (img?.src) {
      setImageSrc(img.src);
      setCurrentIndex(allImages.indexOf(img.src));
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    if (allImages.length > 1) {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : allImages.length - 1;
      setCurrentIndex(newIndex);
      setImageSrc(allImages[newIndex]);
      onImageChange?.(newIndex);
    }
  };

  const goToNext = () => {
    if (allImages.length > 1) {
      const newIndex = currentIndex < allImages.length - 1 ? currentIndex + 1 : 0;
      setCurrentIndex(newIndex);
      setImageSrc(allImages[newIndex]);
      onImageChange?.(newIndex);
    }
  };

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, allImages]);

  return (
    <>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        {children}
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* 相框容器 - 自适应视图区域 */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "min(1000px, calc(100vw - 40px))",
                maxHeight: "calc(100vh - 40px)",
                aspectRatio: "3/4",
              }}
            >
              {/* 主图片 - 带相框效果 */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  padding: "clamp(20px, 3vw, 60px)",
                  backgroundColor: "#ddc",
                  border: "clamp(16px, 2.5vw, 48px) solid #eee",
                  borderBottomColor: "white",
                  borderLeftColor: "#eee",
                  borderRightColor: "#eee",
                  borderTopColor: "#ddd",
                  borderRadius: "clamp(2px, 0.5vw, 6px)",
                  boxShadow: "0 0 clamp(8px, 1.5vw, 20px) 0 rgba(0,0,0,0.4) inset, 0 clamp(8px, 1.5vw, 20px) clamp(16px, 3vw, 40px) clamp(8px, 1.5vw, 20px) rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={imageSrc}
                  alt="预览图片"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: "clamp(2px, 0.5vw, 6px)",
                  }}
                />
              </div>

              {/* 相框阴影效果 - 自适应尺寸 */}
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(-2px, -0.5vw, -6px)",
                  left: "clamp(-2px, -0.5vw, -6px)",
                  right: "clamp(-2px, -0.5vw, -6px)",
                  top: "clamp(-2px, -0.5vw, -6px)",
                  borderRadius: "clamp(2px, 0.5vw, 6px)",
                  boxShadow: "0 clamp(2px, 0.5vw, 6px) clamp(8px, 1.5vw, 20px) 0 rgba(0,0,0,0.4) inset",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(-10px, -2vw, -30px)",
                  left: "clamp(-10px, -2vw, -30px)",
                  right: "clamp(-10px, -2vw, -30px)",
                  top: "clamp(-10px, -2vw, -30px)",
                  borderRadius: "clamp(2px, 0.5vw, 6px)",
                  boxShadow: "0 clamp(2px, 0.5vw, 6px) clamp(8px, 1.5vw, 20px) 0 rgba(0,0,0,0.4)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* 左箭头 */}
            {allImages.length > 1 && (
              <button
                onClick={goToPrevious}
                style={{
                  position: "absolute",
                  left: "clamp(20px, 5vw, 60px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(40px, 6vw, 60px)",
                  height: "clamp(40px, 6vw, 60px)",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "#333",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 10,
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
                title="上一张 (←)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            {/* 右箭头 */}
            {allImages.length > 1 && (
              <button
                onClick={goToNext}
                style={{
                  position: "absolute",
                  right: "clamp(20px, 5vw, 60px)",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "clamp(40px, 6vw, 60px)",
                  height: "clamp(40px, 6vw, 60px)",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.95)",
                  color: "#333",
                  border: "none",
                  cursor: "pointer",
                  zIndex: 10,
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 1)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }}
                title="下一张 (→)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}

            {/* 图片计数器 */}
            {allImages.length > 1 && (
              <div
                style={{
                  position: "absolute",
                  bottom: "clamp(20px, 5vw, 60px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "clamp(8px, 1.5vw, 12px) clamp(16px, 3vw, 24px)",
                  borderRadius: "clamp(16px, 3vw, 24px)",
                  fontSize: "clamp(12px, 2vw, 16px)",
                  fontWeight: "500",
                  zIndex: 10,
                }}
              >
                {currentIndex + 1} / {allImages.length}
              </div>
            )}

            {/* 关闭按钮 */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "clamp(-10px, -2vw, -20px)",
                right: "clamp(-10px, -2vw, -20px)",
                width: "clamp(30px, 4vw, 50px)",
                height: "clamp(30px, 4vw, 50px)",
                borderRadius: "50%",
                background: "#ff4444",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "clamp(16px, 2vw, 24px)",
                fontWeight: "bold",
                zIndex: 10,
                boxShadow: "0 clamp(2px, 0.5vw, 6px) clamp(8px, 1.5vw, 16px) rgba(0, 0, 0, 0.3)",
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};
