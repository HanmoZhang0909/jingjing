"use client";

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function Footer() {
  const { language } = useLanguage();

  // 新闻数据
  const newsItems = [
    {
      id: 1,
      titleZh: '东莞晶晶表面技术有限公司成功开发DX-30微裂纹硬铬催化剂',
      titleEn: 'Dongguan Jingjing Surface Technology Successfully Develops DX-30 Micro Crack Hard Chromium Catalyst',
      date: '2023-11-15',
      slug: 'dx-30-micro-crack-catalyst'
    },
    {
      id: 2,
      titleZh: '我司独立开发镀铬溶液金属残渣净化技术获得重大突破',
      titleEn: 'Our Company Achieves Major Breakthrough in Independent Development of Chromium Plating Solution Metal Residue Purification Technology',
      date: '2023-10-28',
      slug: 'chromium-solution-purification-technology'
    },
    {
      id: 3,
      titleZh: '金属表面处理行业环保技术发展白皮书发布',
      titleEn: 'White Paper on Environmental Technology Development in Metal Surface Treatment Industry Released',
      date: '2023-09-20',
      slug: 'metal-surface-treatment-environmental-technology-whitepaper'
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
      zh: '广东省东莞市石碣镇科技中路64号昌盛工业园',
      en: 'Changsheng Industrial Park, No. 64, Science and Technology Middle Road, Shijie Town, Dongguan City, Guangdong Province, China'
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
      zh: '© ' + new Date().getFullYear() + ' 东莞晶晶表面技术有限公司 版权所有',
      en: '© ' + new Date().getFullYear() + ' Dongguan Jingjing Surface Technology Co., Ltd. All Rights Reserved.'
    }
  };

  return (
    <motion.footer 
      className="bg-gray-800 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{footerTranslations.latestNews[language]}</h3>
            <ul className="space-y-2">
              {newsItems.map((news, index) => (
                <motion.li 
                  key={news.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <Link href={`/news/${news.slug}`} className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base leading-tight">
                    {language === 'zh' ? news.titleZh : news.titleEn}
                  </Link>
                  <p className="text-gray-400 text-xs sm:text-sm">{formatDate(news.date)}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{footerTranslations.contactInfo[language]}</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { label: footerTranslations.companyAddress[language], value: footerTranslations.addressValue[language] },
                { label: footerTranslations.phone[language], value: "0769-8888-8888" },
                { label: footerTranslations.usOffice[language], value: "305 Inglewood ave, La Verne, CA 91750, USA" },
                { label: footerTranslations.usPhone[language], value: "+1 626-606-6126" },
                { label: footerTranslations.email[language], value: "contact@jingjing-surface.com" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold mr-2 text-xs sm:text-sm">{item.label}</span>
                  <span className="text-xs sm:text-sm">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{footerTranslations.contactUs[language]}</h3>
            <form className="space-y-3 sm:space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <input 
                  type="text" 
                  placeholder={footerTranslations.namePlaceholder[language]} 
                  className="w-full p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <input 
                  type="email" 
                  placeholder={footerTranslations.emailPlaceholder[language]} 
                  className="w-full p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <textarea 
                  placeholder={footerTranslations.messagePlaceholder[language]} 
                  rows={3}
                  className="w-full p-2 sm:p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm sm:text-base"
                ></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {footerTranslations.send[language]}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs sm:text-sm">{footerTranslations.copyright[language]}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
} 