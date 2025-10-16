"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewsPage() {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // 新闻数据
  const newsArticles = [
    {
      id: 1,
      title: {
        zh: '公司成功研发新型环保电镀工艺',
        en: 'Company Successfully Develops New Eco-friendly Electroplating Process'
      },
      summary: {
        zh: '我公司研发团队成功开发出新型环保电镀工艺，显著减少重金属排放，提高生产效率。',
        en: 'Our R&D team has successfully developed a new eco-friendly electroplating process that significantly reduces heavy metal emissions and improves production efficiency.'
      },
      image: '/独立站图片素材/Current_Efficiency_Comparison_Graph_370x350.png',
      date: '2023-10-15',
      author: {
        zh: '技术部',
        en: 'Technical Department'
      },
      slug: 'eco-friendly-electroplating-process'
    },
    {
      id: 2,
      title: {
        zh: '晶品表面技术参加2023国际表面处理展览会',
        en: 'Crystal Surface Technology Participates in 2023 International Surface Treatment Exhibition'
      },
      summary: {
        zh: '我公司成功参展2023国际表面处理展览会，展示多项创新技术和解决方案，获得行业广泛关注。',
        en: 'Our company successfully participated in the 2023 International Surface Treatment Exhibition, showcasing numerous innovative technologies and solutions, garnering widespread industry attention.'
      },
      image: '/独立站图片素材/Deposition_speed_vs_cathode_current_density_310x274.png',
      date: '2023-09-25',
      author: {
        zh: '市场部',
        en: 'Marketing Department'
      },
      slug: 'surface-treatment-exhibition-2023'
    },
    {
      id: 3,
      title: {
        zh: '公司与某知名汽车制造商达成战略合作',
        en: 'Company Reaches Strategic Cooperation with Well-known Automotive Manufacturer'
      },
      summary: {
        zh: '我公司与某全球知名汽车制造商签订长期战略合作协议，为其提供高端表面处理技术支持。',
        en: 'Our company has signed a long-term strategic cooperation agreement with a globally renowned automotive manufacturer to provide high-end surface treatment technical support.'
      },
      image: '/独立站图片素材/Electrochemical_performance_comparison_graphs_586x246.png',
      date: '2023-08-18',
      author: {
        zh: '商务部',
        en: 'Business Department'
      },
      slug: 'automotive-manufacturer-partnership'
    },
    {
      id: 4,
      title: {
        zh: '公司荣获"年度创新技术企业"称号',
        en: 'Company Awarded "Innovative Technology Enterprise of the Year"'
      },
      summary: {
        zh: '我公司凭借在表面处理领域的持续创新和突出贡献，荣获行业协会颁发的"年度创新技术企业"称号。',
        en: 'Our company has been awarded the "Innovative Technology Enterprise of the Year" by the industry association for continuous innovation and outstanding contributions in the field of surface treatment.'
      },
      image: '/独立站图片素材/Red_and_white_logo_with_stylized_letter_N_200x157.png',
      date: '2023-07-22',
      author: {
        zh: '行政部',
        en: 'Administrative Department'
      },
      slug: 'innovative-technology-enterprise-award'
    },
    {
      id: 5,
      title: {
        zh: '公司发布最新表面处理解决方案目录',
        en: 'Company Releases Latest Surface Treatment Solutions Catalog'
      },
      summary: {
        zh: '我公司发布2023年度最新表面处理解决方案目录，涵盖多个行业应用和技术创新。',
        en: 'Our company has released the latest surface treatment solutions catalog for 2023, covering multiple industry applications and technological innovations.'
      },
      image: '/独立站图片素材/Red_and_white_logo_with_stylized_letter_N_200x157.png',
      date: '2023-06-30',
      author: {
        zh: '产品部',
        en: 'Product Department'
      },
      slug: 'surface-treatment-solutions-catalog-2023'
    },
    {
      id: 6,
      title: {
        zh: '公司完成年度环保审核，获评A级企业',
        en: 'Company Completes Annual Environmental Audit, Rated as Grade A Enterprise'
      },
      summary: {
        zh: '我公司顺利通过年度环保审核，凭借先进的环保设施和严格的排放管理，获评A级环保企业。',
        en: 'Our company has successfully passed the annual environmental audit and been rated as a Grade A environmental protection enterprise thanks to advanced environmental facilities and strict emission management.'
      },
      image: '/独立站图片素材/Dongguan_Jingjing_Surface_Technology_Inc_Website_1503x734.png',
      date: '2023-05-19',
      author: {
        zh: '环保部',
        en: 'Environmental Protection Department'
      },
      slug: 'environmental-audit-grade-a'
    }
  ];

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
            <Link href={`/news/${newsArticles[0].slug}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image 
                      src={newsArticles[0].image} 
                      alt={newsArticles[0].title[language]} 
                      width={800} 
                      height={600}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="text-gray-500 mb-2">
                      {newsArticles[0].date} | {newsArticles[0].author[language]}
                    </div>
                    <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">
                      {newsArticles[0].title[language]}
                    </h2>
                    <p className="text-gray-600 mb-4">{newsArticles[0].summary[language]}</p>
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
            {newsArticles.slice(1).map((article) => (
              <Link href={`/news/${article.slug}`} key={article.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={article.title[language]} 
                      width={400} 
                      height={300}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-gray-500 text-sm mb-2">
                      {article.date} | {article.author[language]}
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-4">{article.summary[language]}</p>
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