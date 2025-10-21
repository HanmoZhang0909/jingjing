"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { newsArticles } from '@/data/newsData';

export default function NewsPage() {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // 根据语言获取本地化新闻数据
  const localizedNewsArticles = newsArticles.map(article => ({
    ...article,
    title: language === 'zh' ? article.titleZh : article.titleEn,
    summary: language === 'zh' ? article.summaryZh : article.summaryEn,
    author: language === 'zh' ? article.authorZh : article.authorEn
  }));

  if (!mounted) {
    return <div className="container mx-auto px-4 py-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* 页面标题区域 */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t('news.title')}</h1>
          <p className="text-xl">{t('news.subtitle')}</p>
        </div>
      </div>

      {/* 新闻列表 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* 头条新闻 */}
          <div className="mb-12">
            <Link href={`/news/${localizedNewsArticles[0].slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image 
                      src={localizedNewsArticles[0].image} 
                      alt={localizedNewsArticles[0].title} 
                      width={800} 
                      height={600}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="text-gray-500 mb-2">
                      {localizedNewsArticles[0].date} | {localizedNewsArticles[0].author}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {localizedNewsArticles[0].title}
                    </h2>
                    <p className="text-gray-600 mb-4">{localizedNewsArticles[0].summary}</p>
                    <p className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                      {t('news.readmore')} 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* 其他新闻 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {localizedNewsArticles.slice(1).map((article) => (
              <Link href={`/news/${article.slug}`} key={article.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      width={400} 
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-gray-500 text-sm mb-2">
                      {article.date} | {article.author}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.summary}</p>
                    <p className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                      {t('news.readmore')} 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 订阅区域 */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'zh' ? '订阅我们的新闻通讯' : 'Subscribe to Our Newsletter'}
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '订阅我们的新闻通讯，获取最新的产品、技术和行业信息。' 
                : 'Subscribe to our newsletter to receive the latest product, technology, and industry information.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={language === 'zh' ? "您的电子邮件地址" : "Your email address"} 
                className="flex-grow px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
                {language === 'zh' ? '订阅' : 'Subscribe'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 