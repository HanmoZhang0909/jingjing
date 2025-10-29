"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';

interface BusinessItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  specs: Array<{
    label: string;
    value: string;
  }>;
  badges: Array<{
    icon: string;
    text: string;
  }>;
}

const AccordionSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const businessData: BusinessItem[] = [
    {
      id: 1,
      title: "阳极氧化",
      subtitle: "",
      description: "",
      image: "/独立站图片素材/Colorful_chemistry_lab_glassware_collection_1024x516.jpg",
      link: "/products/anode",
      specs: [],
      badges: []
    },
    {
      id: 2,
      title: "化学药水",
      subtitle: "",
      description: "",
      image: "/独立站图片素材/Colorful_chemistry_lab_glassware_collection_1024x516.jpg",
      link: "/products/chemical",
      specs: [],
      badges: []
    },
    {
      id: 3,
      title: "处理设备",
      subtitle: "",
      description: "",
      image: "/独立站图片素材/Colorful_chemistry_lab_glassware_collection_1024x516.jpg",
      link: "/products/equipment",
      specs: [],
      badges: []
    }
  ];

  useEffect(() => {
    const slides = slidesRef.current;
    if (!slides.length) return;

    // 初始化GSAP动画
    slides.forEach((slide, index) => {
      // 设置初始状态 - 默认均等分布
      gsap.set(slide, { flex: 1 });

      // 点击事件
      slide.addEventListener('click', () => handleSlideClick(index));
    });

    return () => {
      slides.forEach(slide => {
        slide.removeEventListener('click', () => {});
      });
    };
  }, []);

  const handleSlideClick = (index: number) => {
    const slides = slidesRef.current;
    if (!slides.length) return;

    if (activeIndex === index) {
      // 如果点击的是当前激活的slide，则恢复到均等分布
      setActiveIndex(-1);
      slides.forEach(slide => {
        slide.classList.remove('active');
        gsap.to(slide, { duration: 0.8, flex: 1, ease: "power2.out" });
      });
    } else {
      // 激活新的slide
      setActiveIndex(index);
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          gsap.to(slide, { duration: 0.8, flex: 2.5, ease: "power2.out" });
        } else {
          slide.classList.remove('active');
          gsap.to(slide, { duration: 0.8, flex: 0.5, ease: "power2.out" });
        }
      });
    }
  };

  return (
    <div className="w-full h-full max-w-none">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">主营业务</h2>
      </div>

      <div ref={sliderRef} className="relative h-[80vh] overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex h-full">
          {businessData.map((business, index) => (
            <div
              key={business.id}
              ref={el => { if (el) slidesRef.current[index] = el; }}
              className="slide flex-1 relative cursor-pointer overflow-hidden"
              style={{
                backgroundImage: `url(${business.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: activeIndex === index ? 'grayscale(0)' : 'grayscale(1)'
              }}
            >
              {/* 背景遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* 内容区域 */}
              <div className="slide-content absolute bottom-8 left-8 right-8 text-white z-10">
                {/* 标题 */}
                <div className="business-title text-2xl font-bold">
                  {business.title}
                </div>
                
                {/* 了解更多按钮 - 只在展开时显示 */}
                {activeIndex === index && (
                  <div className="mt-6">
                    <Link 
                      href={business.link}
                      className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white hover:bg-white/30 transition-all duration-300 hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      了解更多
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSlider;
