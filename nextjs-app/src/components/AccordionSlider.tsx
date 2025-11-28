"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0); // 默认展开第一个板块

  const businessData: BusinessItem[] = [
    {
      id: 1,
      title: t('business.anode'),
      subtitle: "",
      description: "",
      image: "/独立站图片素材/Laboratory_setup_with_chemistry_papers_and_glassware_1024x683.jpg",
      link: "/products/anode",
      specs: [],
      badges: []
    },
    {
      id: 2,
      title: t('business.chemical'),
      subtitle: "",
      description: "",
      image: "/独立站图片素材/4.png",
      link: "/products/chemical",
      specs: [],
      badges: []
    },
    {
      id: 3,
      title: t('business.equipment'),
      subtitle: "",
      description: "",
      image: "/独立站图片素材/Gemini_Generated_Image_home_cover_1344x768.png",
      link: "/products/equipment",
      specs: [],
      badges: []
    }
  ];

  const handleSlideHover = useCallback((index: number) => {
    const slides = slidesRef.current;
    if (!slides.length) return;

    // 完全停止所有动画
    gsap.killTweensOf(slides);

    // 设置新的激活板块
    setActiveIndex(index);
    
    // 处理新激活的板块 - 展开动画
    const activeSlide = slides[index];
    if (activeSlide) {
      activeSlide.classList.add('active');
      gsap.to(activeSlide, { 
        duration: 0.8, 
        flex: 2.5, 
        ease: "power2.out"
      });
    }

    // 处理其他板块 - 压缩动画
    slides.forEach((slide, i) => {
      if (i !== index) {
        slide.classList.remove('active');
        gsap.to(slide, { 
          duration: 0.8, 
          flex: 0.5, 
          ease: "power2.out",
          delay: Math.abs(i - index) * 0.05
        });
      }
    });
  }, []);

  useEffect(() => {
    const slides = slidesRef.current;
    if (!slides.length) return;

    // 初始化GSAP动画 - 确保状态正确
    slides.forEach((slide, index) => {
      // 先设置初始状态
      if (index === 0) {
        slide.classList.add('active');
        gsap.set(slide, { flex: 2.5 });
      } else {
        slide.classList.remove('active');
        gsap.set(slide, { flex: 0.5 });
      }

      // 悬停事件
      slide.addEventListener('mouseenter', () => handleSlideHover(index));
    });

    return () => {
      slides.forEach(slide => {
        slide.removeEventListener('mouseenter', () => {});
        gsap.killTweensOf(slide);
      });
    };
  }, [handleSlideHover]);

  return (
    <div className="w-8/12 h-full mx-auto scale-80">
      <div className="text-center mb-12 mt-12">
        <h2 className="text-4xl font-bold text-white">{t('home.mainBusiness')}</h2>
      </div>

      <div ref={sliderRef} className="relative h-[60vh] overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex h-full">
          {businessData.map((business, index) => (
            <div
              key={business.id}
              ref={el => { if (el) slidesRef.current[index] = el; }}
              className={`slide flex-1 relative cursor-pointer overflow-hidden ${
                activeIndex === index ? 'z-10' : 'z-0'
              }`}
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
                <div className="business-title text-2xl font-bold transition-all duration-300 ease-out hover:text-primary/70 hover:scale-110 hover:drop-shadow-lg">
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
                      {t('business.learnMore')}
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
