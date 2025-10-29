"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import AccordionSlider from '@/components/AccordionSlider';

export default function Home() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 计算背景图片的透明度和缩放
  const backgroundOpacity = Math.max(0, 1 - scrollY / 800);
  const backgroundScale = 1 + scrollY * 0.0005;
  const textOpacity = Math.max(0, 1 - scrollY / 600);
  const textY = scrollY * 0.5;

  return (
    <div className="flex flex-col">
      {/* 主页横幅 - 固定背景 */}
      <div className="relative h-screen bg-gray-900 overflow-hidden">
        {/* 背景加载动画层 */}
        {!imageLoaded && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* 加载动画 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        )}

        {/* 背景图片层 */}
        <motion.div 
          className="absolute inset-0"
          style={{
            opacity: imageLoaded ? backgroundOpacity : 0,
            scale: imageLoaded ? backgroundScale : 1.1,
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0, 
            scale: imageLoaded ? 1 : 1.1 
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: imageLoaded ? 0 : 0.3
          }}
        >
          <Image 
            src="/独立站图片素材/Gemini_Generated_Image_sqh6cusqh6cusqh6.png" 
            alt="东莞晶晶新材料有限公司"
            fill
            style={{objectFit: "cover"}}
            quality={90}
            priority
            onLoad={() => setImageLoaded(true)}
          />
        </motion.div>


        {/* 背景图片加载完成后的淡入效果 */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/30 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: imageLoaded ? 0.5 : 0 }}
        />

        {/* 渐变遮罩层 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/30 to-transparent z-10"></div>
        
        {/* 内容层 */}
        <motion.div 
          className="absolute inset-0 flex items-center z-20"
          style={{
            opacity: imageLoaded ? textOpacity : 0,
            y: imageLoaded ? textY : 50,
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0, 
            y: imageLoaded ? 0 : 50 
          }}
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: imageLoaded ? 0.8 : 0
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* 左侧文字内容 */}
              <div className="flex-1">
                <motion.h2 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {t('home.companyName')}
                </motion.h2>
                <motion.p 
                  className="text-white text-base sm:text-lg md:text-xl max-w-3xl mb-6 sm:mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {t('home.companyDescription')}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 text-center text-base sm:text-lg font-medium">
                    {t('home.learnMore')}
                  </Link>
                  <Link href="/contact" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center text-base sm:text-lg font-medium">
                    {t('home.contactUs')}
                  </Link>
                </motion.div>
              </div>

              {/* 右侧视频组件 */}
              <motion.div 
                className="w-full lg:w-1/2 max-w-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-white/20">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      onLoadStart={() => console.log('视频开始加载')}
                      onCanPlay={() => console.log('视频可以播放')}
                      onError={(e) => console.error('视频加载错误:', e)}
                    >
                      <source src="/videos/homepagevideo.mp4" type="video/mp4" />
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0, 
            y: imageLoaded ? 0 : 20 
          }}
          transition={{ 
            duration: 0.8, 
            delay: imageLoaded ? 1.5 : 0 
          }}
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">{t('home.scrollDown')}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <motion.path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* 关于我们 */}
      <section className="relative py-8 sm:py-12 lg:py-16 bg-white overflow-hidden">
        {/* 顶部渐变过渡层 - 从蓝色到白色 */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-blue-900 to-white z-10"></div>
        {/* 底部渐变过渡层 */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#1e3a8a] to-transparent z-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Image 
                src="/独立站图片素材/Company_Profile.webp" 
                alt="晶晶表面技术公司" 
                width={500} 
                height={400} 
                className="w-full h-auto rounded-lg shadow-lg" 
              />
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">关于我们</h2>
              <p className="text-red-600 mb-4 sm:mb-6 text-sm sm:text-base">{t('home.companyProfileSubtitle')}</p>
              <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                {t('home.companyProfileDesc')}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full inline-block transition-all duration-300 text-sm sm:text-base">
                  {t('home.viewMore')}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 主营业务 */}
      <section className="h-screen flex items-center justify-center relative" style={{ backgroundColor: '#1e3a8a' }}>
        {/* 顶部渐变过渡层 */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent to-[#1e3a8a] z-10"></div>
        
        <motion.div
          className="w-full h-full flex items-center justify-center relative z-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AccordionSlider />
        </motion.div>
      </section>

      {/* 主营业务到最新资讯的过渡 */}
      <div className="h-64 bg-gradient-to-b from-[#1e3a8a] to-white"></div>

      {/* 最新资讯 */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {t('home.latestNews')}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: t('home.news1'),
                date: "15/11/2023",
              },
              {
                title: t('home.news2'),
                date: "28/10/2023",
              },
              {
                title: t('home.news3'),
                date: "20/09/2023",
              }
            ].map((news, index) => (
              <motion.div 
                key={index} 
                className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-4 sm:p-6">
                  <p className="text-gray-500 text-xs sm:text-sm mb-2">{news.date}</p>
                  <h3 className="text-base sm:text-lg font-bold mb-3 hover:text-blue-600 transition-colors leading-tight">{news.title}</h3>
                  <Link href={`/news/${index + 1}`} className="text-blue-600 hover:underline transition-colors text-sm sm:text-base">
                    {t('home.readMore')} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新资讯到联系我们的过渡 */}
      <div className="h-64 bg-gradient-to-b from-white to-gray-100"></div>

      {/* 联系我们（简化版，完整版在联系我们页面） */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{t('home.contactSection')}</h2>
            <p className="mb-6 sm:mb-8 text-gray-700 text-sm sm:text-base">{t('home.contactDesc')}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full inline-block transition-all duration-300 text-sm sm:text-base">
                {t('home.contactNow')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
