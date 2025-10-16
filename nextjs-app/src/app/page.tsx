"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* 主页横幅 */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
        <motion.div 
          className="absolute inset-0 flex items-center z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('home.companyName')}
            </motion.h2>
            <motion.p 
              className="text-white text-sm sm:text-base md:text-lg max-w-2xl mb-4 sm:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.companyDescription')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base">
                {t('home.learnMore')}
              </Link>
              <Link href="/contact" className="border border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 text-center text-sm sm:text-base">
                {t('home.contactUs')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image 
            src="/独立站图片素材/表面技术抬头.jpg" 
            alt="晶晶表面技术公司"
            fill
            style={{objectFit: "cover"}}
            quality={90}
            priority
          />
        </motion.div>
      </div>

      {/* 我们的优势 */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-2">{t('home.ourAdvantages')}</h2>
            <p className="text-center text-red-600 mb-8 sm:mb-12 text-sm sm:text-base">{t('home.ourAdvantagesSubtitle')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                ),
                title: t('home.advancedTechnology'),
                description: t('home.advancedTechnologyDesc')
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ),
                title: t('home.qualityControl'),
                description: t('home.qualityControlDesc')
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                ),
                title: t('home.professionalService'),
                description: t('home.professionalServiceDesc')
              }
            ].map((advantage, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {advantage.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-yellow-500 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-8 sm:py-12 lg:py-16 bg-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image 
                src="/独立站图片素材/Ha095e70a70a84d8ead697d10c5b6fd98G.webp" 
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
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{t('home.companyProfile')}</h2>
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

      {/* 最新资讯 */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
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

      {/* 联系我们（简化版，完整版在联系我们页面） */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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
