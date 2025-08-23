"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  // 新闻数据
  const newsItems = [
    {
      id: 1,
      titleZh: '深圳新能源产业创新发展论坛成功举办',
      titleEn: 'Shenzhen New Energy Industry Innovation Forum Successfully Held',
      date: '2023-11-15',
      slug: 'shenzhen-new-energy-forum'
    },
    {
      id: 2,
      titleZh: '我司成功研发新型太阳能电池技术',
      titleEn: 'Our Company Successfully Develops New Solar Cell Technology',
      date: '2023-10-28',
      slug: 'new-solar-cell-technology'
    },
    {
      id: 3,
      titleZh: '能源行业数字化转型白皮书发布',
      titleEn: 'Energy Industry Digital Transformation White Paper Released',
      date: '2023-09-20',
      slug: 'energy-digital-transformation-whitepaper'
    }
  ];

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    });
  };

  const footerTranslations = {
    latestNews: {
      zh: '最新资讯',
      en: 'Latest News'
    },
    contactInfo: {
      zh: '联系方式',
      en: 'Contact Information'
    },
    companyAddress: {
      zh: '公司地址：',
      en: 'Address: '
    },
    addressValue: {
      zh: '广东省深圳市南山区科技园高新南四道W1-A栋2层',
      en: 'Floor 2, Building W1-A, Hi-Tech South 4th Road, Science Park, Nanshan District, Shenzhen, Guangdong Province, China'
    },
    phone: {
      zh: '联系电话：',
      en: 'Phone: '
    },
    usOffice: {
      zh: '美国分公司地址：',
      en: 'US Office Address: '
    },
    usPhone: {
      zh: '美国联系电话：',
      en: 'US Phone: '
    },
    email: {
      zh: '联系邮箱：',
      en: 'Email: '
    },
    contactUs: {
      zh: '在线联系',
      en: 'Contact Us'
    },
    namePlaceholder: {
      zh: '您的称呼',
      en: 'Your Name'
    },
    emailPlaceholder: {
      zh: '电子邮箱',
      en: 'Email Address'
    },
    messagePlaceholder: {
      zh: '留言内容',
      en: 'Message'
    },
    send: {
      zh: '发送',
      en: 'Send'
    },
    copyright: {
      zh: '© ' + new Date().getFullYear() + ' 公司名称 版权所有',
      en: '© ' + new Date().getFullYear() + ' Company Name. All Rights Reserved.'
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerTranslations.latestNews[language]}</h3>
            <ul className="space-y-2">
              {newsItems.map(news => (
                <li key={news.id}>
                  <Link href={`/news/${news.slug}`} className="text-gray-300 hover:text-white">
                    {language === 'zh' ? news.titleZh : news.titleEn}
                  </Link>
                  <p className="text-gray-400 text-sm">{formatDate(news.date)}</p>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerTranslations.contactInfo[language]}</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="font-semibold mr-2">{footerTranslations.companyAddress[language]}</span>
                <span>{footerTranslations.addressValue[language]}</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">{footerTranslations.phone[language]}</span>
                <span>0755-1234-5678</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">{footerTranslations.usOffice[language]}</span>
                <span>305 Inglewood ave, La Verne, CA 91750, USA</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">{footerTranslations.usPhone[language]}</span>
                <span>+1 626-606-6126</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">{footerTranslations.email[language]}</span>
                <span>contact@company.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerTranslations.contactUs[language]}</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder={footerTranslations.namePlaceholder[language]} 
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder={footerTranslations.emailPlaceholder[language]} 
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder={footerTranslations.messagePlaceholder[language]} 
                  rows={3}
                  className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                {footerTranslations.send[language]}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>{footerTranslations.copyright[language]}</p>
        </div>
      </div>
    </footer>
  );
} 