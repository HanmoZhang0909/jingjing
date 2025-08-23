"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 支持的语言
type Language = 'zh' | 'en';

// 上下文类型
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// 创建上下文
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 翻译文本数据
const translations: Record<string, Record<Language, string>> = {
  // 通用
  'site.name': {
    zh: '公司名称',
    en: 'Company Name',
  },
  'nav.home': {
    zh: '首页',
    en: 'Home',
  },
  'nav.about': {
    zh: '关于我们',
    en: 'About Us',
  },
  'nav.products': {
    zh: '产品与服务',
    en: 'Products & Services',
  },
  'nav.cases': {
    zh: '成功案例',
    en: 'Case Studies',
  },
  'nav.news': {
    zh: '新闻资讯',
    en: 'News',
  },
  'nav.contact': {
    zh: '联系我们',
    en: 'Contact Us',
  },
  'switchLanguage.text': {
    zh: 'EN',
    en: '中文',
  },
  // 联系页面
  'contact.title': {
    zh: '联系我们',
    en: 'Contact Us',
  },
  'contact.subtitle': {
    zh: '随时为您提供专业支持与服务',
    en: 'Professional support and service at your convenience',
  },
  'contact.info.title': {
    zh: '公司联系方式',
    en: 'Company Contact Information',
  },
  'contact.address.title': {
    zh: '公司地址',
    en: 'Address',
  },
  'contact.address.value': {
    zh: '广东省深圳市南山区科技园高新南四道W1-A栋2层',
    en: 'Floor 2, Building W1-A, Hi-Tech South 4th Road, Science Park, Nanshan District, Shenzhen, Guangdong Province, China',
  },
  'contact.phone.title': {
    zh: '联系电话',
    en: 'Phone',
  },
  'contact.phone.sales': {
    zh: '销售热线: 0755-1234-5678',
    en: 'Sales: 0755-1234-5678',
  },
  'contact.phone.support': {
    zh: '技术支持: 0755-8765-4321',
    en: 'Technical Support: 0755-8765-4321',
  },
  'contact.email.title': {
    zh: '电子邮箱',
    en: 'Email',
  },
  'contact.email.sales': {
    zh: 'sales@company.com (销售咨询)',
    en: 'sales@company.com (Sales Inquiry)',
  },
  'contact.email.support': {
    zh: 'support@company.com (技术支持)',
    en: 'support@company.com (Technical Support)',
  },
  'contact.hours.title': {
    zh: '工作时间',
    en: 'Working Hours',
  },
  'contact.hours.weekdays': {
    zh: '周一至周五: 9:00 - 18:00',
    en: 'Monday to Friday: 9:00 AM - 6:00 PM',
  },
  'contact.hours.weekends': {
    zh: '周六、周日及法定节假日休息',
    en: 'Closed on Weekends and Public Holidays',
  },
  'contact.social.title': {
    zh: '关注我们',
    en: 'Follow Us',
  },
  'contact.form.title': {
    zh: '发送消息',
    en: 'Send a Message',
  },
  'contact.form.name': {
    zh: '姓名',
    en: 'Name',
  },
  'contact.form.name.placeholder': {
    zh: '您的姓名',
    en: 'Your Name',
  },
  'contact.form.email': {
    zh: '电子邮箱',
    en: 'Email',
  },
  'contact.form.phone': {
    zh: '联系电话',
    en: 'Phone Number',
  },
  'contact.form.phone.placeholder': {
    zh: '您的联系电话',
    en: 'Your Phone Number',
  },
  'contact.form.subject': {
    zh: '主题',
    en: 'Subject',
  },
  'contact.form.subject.placeholder': {
    zh: '请选择咨询主题',
    en: 'Please select a subject',
  },
  'contact.form.subject.product': {
    zh: '产品咨询',
    en: 'Product Inquiry',
  },
  'contact.form.subject.support': {
    zh: '技术支持',
    en: 'Technical Support',
  },
  'contact.form.subject.sales': {
    zh: '销售合作',
    en: 'Sales Cooperation',
  },
  'contact.form.subject.hr': {
    zh: '人才招聘',
    en: 'Recruitment',
  },
  'contact.form.subject.other': {
    zh: '其他问题',
    en: 'Other Questions',
  },
  'contact.form.message': {
    zh: '留言内容',
    en: 'Message',
  },
  'contact.form.message.placeholder': {
    zh: '请详细描述您的需求或问题...',
    en: 'Please describe your requirements or questions in detail...',
  },
  'contact.form.submit': {
    zh: '提交留言',
    en: 'Submit Message',
  },
  'contact.map.title': {
    zh: '公司位置',
    en: 'Our Location',
  },
  'contact.map.loading': {
    zh: '地图加载中...',
    en: 'Map loading...',
  },
  
  // 新闻页面
  'news.title': {
    zh: '新闻资讯',
    en: 'News & Updates',
  },
  'news.subtitle': {
    zh: '了解我们最新的动态和行业资讯',
    en: 'Stay updated with our latest news and industry insights',
  },
  'news.featured': {
    zh: '头条新闻',
    en: 'Featured News',
  },
  'news.readmore': {
    zh: '阅读全文',
    en: 'Read More',
  },
  'news.pagination.prev': {
    zh: '上一页',
    en: 'Previous',
  },
  'news.pagination.next': {
    zh: '下一页',
    en: 'Next',
  },
  'news.back': {
    zh: '返回新闻列表',
    en: 'Back to News',
  },
  'news.detail.author': {
    zh: '作者',
    en: 'Author',
  },
  'news.detail.share': {
    zh: '分享这篇文章',
    en: 'Share this Article',
  },
  'news.detail.related': {
    zh: '相关阅读',
    en: 'Related Articles',
  },
  
  // 案例页面
  'cases.title': {
    zh: '成功案例',
    en: 'Success Stories',
  },
  'cases.subtitle': {
    zh: 'SUCCESS STORIES',
    en: 'SUCCESS STORIES',
  },
  'cases.viewdetails': {
    zh: '查看详情',
    en: 'View Details',
  },
  'cases.practice': {
    zh: '我们的成功实践',
    en: 'Our Successful Practices',
  },
  'cases.detail.overview': {
    zh: '案例概述',
    en: 'Case Overview',
  },
  'cases.detail.consult': {
    zh: '咨询类似解决方案',
    en: 'Consult Similar Solutions',
  },
  'cases.detail.back': {
    zh: '返回案例列表',
    en: 'Back to Cases',
  },
  'cases.detail.related': {
    zh: '相关案例',
    en: 'Related Cases',
  },
};

// Provider组件
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 使用一个标志来跟踪客户端水合状态
  const [isClient, setIsClient] = useState(false);
  
  // 首先设置默认语言为中文
  const [language, setLanguage] = useState<Language>('zh');
  
  // 在客户端渲染后，检查localStorage中的语言设置
  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage === 'en') {
      setLanguage('en');
    }
  }, []);

  // 翻译函数
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language] || key;
  };

  // 当语言发生变化时，保存到localStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('language', language);
    }
  }, [language, isClient]);

  const value = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// 自定义钩子，方便组件中使用语言上下文
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 