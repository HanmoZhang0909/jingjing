"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CasesPage() {
  const { language, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // 案例数据
  const caseItems = [
    {
      id: 1,
      image: '/case1.jpg',
      title: {
        zh: '智能手表电镀工艺改进项目',
        en: 'Smart Watch Electroplating Process Improvement Project'
      },
      summary: {
        zh: '为领先智能手表制造商提供电镀工艺解决方案，大幅提升产品质量和良率。',
        en: 'Providing electroplating process solutions for a leading smart watch manufacturer, significantly improving product quality and yield.'
      },
      category: {
        zh: '消费电子',
        en: 'Consumer Electronics'
      },
      slug: 'smartwatch-plating'
    },
    {
      id: 2,
      image: '/case2.jpg',
      title: {
        zh: '汽车零部件表面处理技术优化',
        en: 'Automotive Parts Surface Treatment Technology Optimization'
      },
      summary: {
        zh: '为知名汽车制造商开发定制化表面处理解决方案，提高零部件耐腐蚀性能。',
        en: 'Developing customized surface treatment solutions for well-known automotive manufacturers to improve the corrosion resistance of components.'
      },
      category: {
        zh: '汽车工业',
        en: 'Automotive Industry'
      },
      slug: 'automotive-parts'
    },
    {
      id: 3,
      image: '/case3.jpg',
      title: {
        zh: '医疗器械镀铬工艺研发',
        en: 'Medical Device Chrome Plating Process Development'
      },
      summary: {
        zh: '为医疗器械企业研发环保型镀铬工艺，满足严格的医疗器械标准要求。',
        en: 'Developing eco-friendly chrome plating processes for medical device companies to meet strict medical device standards.'
      },
      category: {
        zh: '医疗器械',
        en: 'Medical Devices'
      },
      slug: 'medical-chrome-plating'
    },
    {
      id: 4,
      image: '/case4.jpg',
      title: {
        zh: '高端厨具表面处理项目',
        en: 'High-end Kitchenware Surface Treatment Project'
      },
      summary: {
        zh: '为国际高端厨具品牌提供表面处理工艺，实现美观与耐用的完美结合。',
        en: 'Providing surface treatment processes for international high-end kitchenware brands, achieving a perfect combination of aesthetics and durability.'
      },
      category: {
        zh: '家居用品',
        en: 'Home Products'
      },
      slug: 'kitchenware-treatment'
    },
    {
      id: 5,
      image: '/case5.jpg',
      title: {
        zh: 'PCB镀金工艺技术突破',
        en: 'PCB Gold Plating Technology Breakthrough'
      },
      summary: {
        zh: '为电子制造企业开发高精度PCB镀金工艺，显著提高导电性能和焊接质量。',
        en: 'Developing high-precision PCB gold plating processes for electronic manufacturing companies, significantly improving conductivity and soldering quality.'
      },
      category: {
        zh: '电子制造',
        en: 'Electronic Manufacturing'
      },
      slug: 'pcb-gold-plating'
    },
    {
      id: 6,
      image: '/case6.jpg',
      title: {
        zh: '航空零部件表面处理解决方案',
        en: 'Aviation Components Surface Treatment Solutions'
      },
      summary: {
        zh: '为航空制造商提供高性能表面处理解决方案，满足极端环境下的使用要求。',
        en: 'Providing high-performance surface treatment solutions for aviation manufacturers to meet usage requirements in extreme environments.'
      },
      category: {
        zh: '航空航天',
        en: 'Aerospace'
      },
      slug: 'aviation-components'
    },
    {
      id: 7,
      image: '/case7.jpg',
      title: {
        zh: '新能源汽车电池连接器镀层项目',
        en: 'New Energy Vehicle Battery Connector Coating Project'
      },
      summary: {
        zh: '为新能源汽车电池制造商开发高导电性镀层工艺，提升电池使用寿命和安全性。',
        en: 'Developing highly conductive coating processes for new energy vehicle battery manufacturers to improve battery life and safety.'
      },
      category: {
        zh: '新能源',
        en: 'New Energy'
      },
      slug: 'ev-battery-connector'
    },
    {
      id: 8,
      image: '/case8.jpg',
      title: {
        zh: '光学镜片镀膜技术研发',
        en: 'Optical Lens Coating Technology Development'
      },
      summary: {
        zh: '为光学制造商研发特种镀膜技术，实现光学镜片的特殊性能要求。',
        en: 'Developing special coating technologies for optical manufacturers to achieve special performance requirements for optical lenses.'
      },
      category: {
        zh: '光学制造',
        en: 'Optical Manufacturing'
      },
      slug: 'optical-lens-coating'
    },
    {
      id: 9,
      image: '/case9.jpg',
      title: {
        zh: '工业阀门防腐蚀处理方案',
        en: 'Industrial Valve Anti-corrosion Treatment Solution'
      },
      summary: {
        zh: '为石化行业提供工业阀门防腐蚀表面处理方案，延长设备使用寿命。',
        en: 'Providing industrial valve anti-corrosion surface treatment solutions for the petrochemical industry to extend equipment life.'
      },
      category: {
        zh: '工业设备',
        en: 'Industrial Equipment'
      },
      slug: 'valve-anticorrosion'
    }
  ];

  // 按行业分类
  const categories = [
    { key: 'all', nameZh: '全部', nameEn: 'All' },
    { key: 'electronics', nameZh: '电子行业', nameEn: 'Electronics' },
    { key: 'automotive', nameZh: '汽车行业', nameEn: 'Automotive' },
    { key: 'medical', nameZh: '医疗器械', nameEn: 'Medical Devices' },
    { key: 'industrial', nameZh: '工业应用', nameEn: 'Industrial' }
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{t('cases.title')}</h1>
          <p className="text-xl">{t('cases.subtitle')}</p>
        </div>
      </div>

      {/* 案例说明 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('cases.practice')}</h2>
            <p className="text-gray-700 mb-8">
              {language === 'zh' 
                ? '以下是我们为不同行业客户提供的表面处理解决方案案例，展示了我们的技术能力和行业经验。' 
                : 'Below are case studies of surface treatment solutions we have provided to clients across various industries, showcasing our technical capabilities and industry experience.'}
            </p>
            
            {/* 分类筛选 */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((category) => (
                <button
                  key={category.key}
                  className="px-4 py-2 bg-gray-100 hover:bg-blue-100 rounded-full text-gray-800 hover:text-blue-800 transition-colors"
                >
                  {language === 'zh' ? category.nameZh : category.nameEn}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 案例展示 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseItems.map((item) => (
              <Link href={`/cases/${item.slug}`} key={item.id} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <div className="relative h-60 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title[language]} 
                      width={600} 
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {item.category[language]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.summary[language]}</p>
                    <p className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-2 transition-transform">
                      {t('cases.viewdetails')} 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 联系咨询 */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'zh' ? '需要专业的表面处理解决方案？' : 'Need Professional Surface Treatment Solutions?'}
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            {language === 'zh' 
              ? '无论您的行业或需求如何，我们都能为您提供定制化的表面处理解决方案。立即联系我们，获取专业咨询。' 
              : 'Regardless of your industry or requirements, we can provide you with customized surface treatment solutions. Contact us now for professional consultation.'}
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-full hover:bg-blue-100 transition-colors"
          >
            {language === 'zh' ? '联系我们' : 'Contact Us'}
          </Link>
        </div>
      </section>
    </div>
  );
} 