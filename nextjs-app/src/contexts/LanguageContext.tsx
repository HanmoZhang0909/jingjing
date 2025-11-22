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
    zh: '东莞晶晶新材料有限公司',
    en: 'Dongguan Jingjing New Materials Co., Ltd.',
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
    zh: '广东省东莞市石碣镇横滘向阳街2号楼101室',
    en: 'Room 101, Building 2, No. 2, Xiangyang Street, Hengjiao, Shijie Town, Dongguan City, Guangdong Province, China',
  },
  'contact.phone.title': {
    zh: '联系电话',
    en: 'Phone',
  },
  'contact.phone.sales': {
    zh: '13790181730',
    en: '13790181730',
  },
  'contact.phone.support': {
    zh: '张宗寿',
    en: 'Tristan Zhang',
  },
  'contact.email.title': {
    zh: '电子邮箱',
    en: 'Email',
  },
  'contact.email.sales': {
    zh: 'jingjinggddg@gmail.com',
    en: 'jingjinggddg@gmail.com',
  },
  'contact.email.support': {
    zh: '联系人',
    en: 'Contact Person',
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
  'news.detail.tags': {
    zh: '标签',
    en: 'Tags',
  },
  'news.detail.readTime': {
    zh: '分钟阅读',
    en: 'min read',
  },
  'news.category.tech': {
    zh: '技术突破',
    en: 'Technology Breakthrough',
  },
  'news.category.product': {
    zh: '产品发布',
    en: 'Product Launch',
  },
  'news.category.environmental': {
    zh: '环保技术',
    en: 'Environmental Technology',
  },
  'news.category.exhibition': {
    zh: '展会活动',
    en: 'Exhibition & Events',
  },
  'news.category.cooperation': {
    zh: '商务合作',
    en: 'Business Cooperation',
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
  
  // 产品页面
  'products.title': {
    zh: '产品与工艺',
    en: 'Products & Technology',
  },
  'products.subtitle': {
    zh: 'PRODUCTS & TECHNOLOGY',
    en: 'PRODUCTS & TECHNOLOGY',
  },
  'products.learnMore': {
    zh: '了解更多',
    en: 'Learn More',
  },
  'products.technicalAdvantages': {
    zh: '我们的产品与技术优势',
    en: 'Our Product & Technical Advantages',
  },
  
  // 应用场景页面
  'cases.ourApplicationAreas': {
    zh: '我们的应用领域',
    en: 'Our Application Areas',
  },
  'cases.technicalAdvantages': {
    zh: '技术优势',
    en: 'Technical Advantages',
  },
  'cases.mainApplications': {
    zh: '主要应用：',
    en: 'Main Applications:',
  },
  
  // 首页内容
  'home.companyName': {
    zh: '东莞晶晶新材料有限公司',
    en: 'Dongguan Jingjing New Materials Co., Ltd.',
  },
  'home.companyDescription': {
    zh: '成立于2004年，专注于金属表面处理行业的领先企业。我们专注于镀铬技术研发、化工产品生产销售、镀铬设备及配件制造。开发了新型高效的微裂纹硬铬催化剂中间体DX-30（产品编号ST-930），电流效率提升25%-27%，沉积速度是传统技术的两倍。2021年成立金属材料制造部，专业制造FC-T高密度挤压合金阳极，使用寿命达3-5年，节省约30%的电力消耗。',
    en: 'Established in 2004, we are a leading enterprise specializing in the metal surface treatment industry. We focus on chrome plating technology R&D, chemical product production and sales, chrome plating equipment and accessories manufacturing. We have developed a new and efficient micro crack hard chromium catalyst intermediate DX-30 (Product No. ST-930), improving current efficiency by 25%-27%, with deposition speed twice that of traditional technology. In 2021, we established the Metal Materials Manufacturing Department, specializing in FC-T high-density extruded alloy anode manufacturing, with service life reaching 3-5 years and saving about 30% of electricity consumption.',
  },
  'home.learnMore': {
    zh: '了解更多',
    en: 'Learn More',
  },
  'home.contactUs': {
    zh: '联系我们',
    en: 'Contact Us',
  },
  'home.ourAdvantages': {
    zh: '我们的优势',
    en: 'Our Advantages',
  },
  'home.ourAdvantagesSubtitle': {
    zh: 'Our advantages',
    en: 'Our advantages',
  },
  'home.advancedTechnology': {
    zh: '先进工艺',
    en: 'Advanced Technology',
  },
  'home.advancedTechnologyDesc': {
    zh: 'DX-30技术电流效率提升25%-27%，沉积速度是传统技术的两倍。FC-T阳极采用800吨挤压机挤压成型，使用寿命达3-5年，导电性提升30%',
    en: 'DX-30 technology improves current efficiency by 25%-27%, deposition speed is twice that of traditional technology. FC-T anode uses 800-ton press extrusion molding, service life reaches 3-5 years, conductivity improved by 30%',
  },
  'home.qualityControl': {
    zh: '品控流程',
    en: 'Quality Control',
  },
  'home.qualityControlDesc': {
    zh: '配备多名高级工程师和各种检测仪器，确保电镀溶液分析准确和镀铬阳极产品质量',
    en: 'Equipped with multiple senior engineers and various testing instruments to ensure accurate electroplating solution analysis and high-quality chrome plating anode products',
  },
  'home.professionalService': {
    zh: '专业服务',
    en: 'Professional Service',
  },
  'home.professionalServiceDesc': {
    zh: '独立开发镀铬溶液中金属残渣净化技术，实现溶液永久重复使用，而不是每3-5年更换一次，大大降低原材料成本和环境损害',
    en: 'Independently developed metal residue purification technology in chrome plating solutions, achieving permanent solution reuse instead of replacement every 3-5 years, greatly reducing raw material costs and environmental damage',
  },
  'home.companyProfile': {
    zh: '公司简介',
    en: 'Company Profile',
  },
  'home.companyProfileSubtitle': {
    zh: 'Company Profile',
    en: 'Company Profile',
  },
  'home.companyProfileDesc': {
    zh: '成立于2004年，是一家专注于金属表面处理技术服务的领先企业。我们专注于镀铬技术研发、化工产品生产销售、镀铬设备及配件制造。开发了新型高效的微裂纹硬铬催化剂中间体DX-30，电流效率提升25%-27%，沉积速度是传统技术的两倍。2021年成立金属材料制造部，专业制造高密度挤压合金阳极，使用寿命达3-5年，节省约20%的电力消耗。',
    en: 'Dongguan Jingjing New Materials Co., Ltd. was established in 2004, focusing on the metal surface treatment industry as a leading enterprise. We focus on chrome plating technology R&D, chemical product production and sales, chrome plating equipment and accessories manufacturing. We have developed a new and efficient micro crack hard chromium catalyst intermediate DX-30 (Product No. ST-930), improving current efficiency by 25%-27%, with deposition speed twice that of traditional technology. In 2021, we established the Metal Materials Manufacturing Department, specializing in FC-T high-density extruded alloy anode manufacturing, with service life reaching 3-5 years and saving about 30% of electricity consumption. We have independently developed metal residue purification technology in chrome plating solutions, achieving permanent solution reuse.',
  },
  'home.viewMore': {
    zh: '查看更多',
    en: 'View More',
  },
  'home.scrollDown': {
    zh: '向下滚动',
    en: 'Scroll Down',
  },
  'home.latestNews': {
    zh: '最新资讯',
    en: 'Latest News',
  },
  'home.news1': {
    zh: 'DX-30微裂纹硬铬催化剂中间体技术突破，电流效率提升至25-28%',
    en: 'DX-30 Micro Crack Hard Chromium Catalyst Intermediate Technology Breakthrough, Current Efficiency Improved to 25-28%',
  },
  'home.news2': {
    zh: 'FC-T高密度挤压合金阳极成功量产，使用寿命延长至5年',
    en: 'FC-T High-Density Extruded Alloy Anode Successfully Mass Produced, Service Life Extended to 5 Years',
  },
  'home.news3': {
    zh: '陶瓷净化系统实现镀液永久循环利用，环保技术再创新高',
    en: 'Ceramic Purification System Achieves Permanent Plating Solution Recycling, Environmental Technology Reaches New Heights',
  },
  'home.readMore': {
    zh: '阅读更多',
    en: 'Read More',
  },
  'home.contactSection': {
    zh: '联系我们',
    en: 'Contact Us',
  },
  'home.contactDesc': {
    zh: '如有任何问题，欢迎随时与我们联系',
    en: 'If you have any questions, please feel free to contact us',
  },
  'home.contactNow': {
    zh: '立即咨询',
    en: 'Contact Now',
  },
  'home.mainBusiness': {
    zh: '主营业务',
    en: 'Main Business',
  },
  'home.aboutUs': {
    zh: '关于我们',
    en: 'About Us',
  },
  'business.anode': {
    zh: '镀铬阳极',
    en: 'Chrome Plating Anode',
  },
  'business.chemical': {
    zh: '化学药水',
    en: 'Chemical Solutions',
  },
  'business.equipment': {
    zh: '处理设备',
    en: 'Processing Equipment',
  },
  'business.learnMore': {
    zh: '了解更多',
    en: 'Learn More',
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

  // 当语言发生变化时，立即保存到localStorage
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