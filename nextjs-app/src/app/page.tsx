"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* 主页横幅 */}
      <div className="relative h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4">东莞晶品表面技术公司</h2>
            <p className="text-white text-lg max-w-2xl mb-6">
              ST-930晶面处理技术全球领先的电镀行业品质保障典范之一。效率高，性能稳定，口碑佳，已在电子，
              电镀市场得到认可，电路加工设备，PCB制作，汽车，配件，电镀电器医疗仪器，家电等
              各领域广泛应用。提高了电镀产品的质量和综合性能，打破西方ST-930表面处理的钿控技术垄断，
            </p>
            <div className="flex space-x-4">
              <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                了解更多
              </Link>
              <Link href="/contact" className="border border-white text-white px-6 py-2 rounded-full hover:bg-white/10">
                联系我们
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image 
            src="/banner.jpg" 
            alt="公司生产线"
            fill
            style={{objectFit: "cover"}}
            quality={90}
            priority
          />
        </div>
      </div>

      {/* 我们的优势 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">我们的优势</h2>
          <p className="text-center text-red-600 mb-12">Our advantages</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">先进工艺</h3>
              <p className="text-gray-600">工艺技术不断优化升级，产品质量稳定</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">品控流程</h3>
              <p className="text-gray-600">严谨的品控流程与环保标准，国际一流水准的产品</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-500 mb-2">专业服务</h3>
              <p className="text-gray-600">结构化的服务流程体系，客户为先的产品人性化的服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* 公司简介 */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Image src="/company.jpg" alt="公司简介" width={500} height={400} className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2">公司简介</h2>
              <p className="text-red-600 mb-6">Company Profile</p>
              <p className="text-gray-700 mb-6">
                东莞晶品表面技术有限公司成立于2004年，我们专注于各类金属表面处理行业，专注于表面技术的研发和化工产品（高效镀层设备与添加剂）的制造。经过多年的努力研发，基于东莞晶品新材料有限公司强大的质量保障体系的支持，我们的产品获得了国内和国外很多客户的认可，给客户带来了良好的增值与减少的下降，并且环保稳定的体验增加了信赖。
              </p>
              <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full inline-block">
                查看更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 最新资讯 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">最新资讯</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "中国镀铜电镀项目在河南开展科研实验",
                date: "15/10/2018",
              },
              {
                title: "提高铜表面硬度方法的优化研究",
                date: "23/04/2018",
              },
              {
                title: "镀铬镀铂的区别与各自性能优势分析",
                date: "23/04/2018",
              }
            ].map((news, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <p className="text-gray-500 text-sm mb-2">{news.date}</p>
                  <h3 className="text-lg font-bold mb-2 hover:text-blue-600">{news.title}</h3>
                  <Link href={`/news/${index + 1}`} className="text-blue-600 hover:underline">
                    阅读更多 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系我们（简化版，完整版在联系我们页面） */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">联系我们</h2>
          <p className="mb-8 text-gray-700">如有任何问题，欢迎随时与我们联系</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-block">
            立即咨询
          </Link>
        </div>
      </section>

      {/* 添加语言切换调试区域 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {language === 'zh' ? '语言切换测试' : 'Language Switching Test'}
            </h2>
            
            <div className="mb-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-lg mb-4">
                {language === 'zh' 
                  ? '当前语言: 中文' 
                  : 'Current Language: English'}
              </p>
              <button 
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                {language === 'zh' ? '切换到英文' : 'Switch to Chinese'}
              </button>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-xl">
                {language === 'zh' 
                  ? '这是一个支持中英文切换的示例网站。您可以点击上方导航栏中的语言切换按钮，或者使用上面的调试按钮来切换语言。' 
                  : 'This is a sample website that supports switching between Chinese and English. You can click the language toggle button in the navigation bar above, or use the debug button above to switch languages.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
