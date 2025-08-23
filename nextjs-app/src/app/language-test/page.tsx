"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

export default function LanguageTestPage() {
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [storageLanguage, setStorageLanguage] = useState<string | null>(null);
  
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      setStorageLanguage(localStorage.getItem('language'));
    }
  }, []);
  
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      setStorageLanguage(localStorage.getItem('language'));
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    console.log('Language changed to:', newLang);
  };

  if (!mounted) {
    return <div className="p-8">加载中...</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'zh' ? '语言切换测试页面' : 'Language Switching Test Page'}
        </h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'zh' ? '调试信息' : 'Debug Information'}
          </h2>
          
          <div className="bg-white p-4 rounded-lg mb-4">
            <p className="mb-2"><strong>{language === 'zh' ? '当前应用语言' : 'Current App Language'}:</strong> {language}</p>
            <p className="mb-2"><strong>{language === 'zh' ? 'localStorage 中的语言设置' : 'Language Setting in localStorage'}:</strong> {storageLanguage || '(未设置)'}</p>
            <p className="mb-2"><strong>{language === 'zh' ? '浏览器语言' : 'Browser Language'}:</strong> {navigator.language}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button 
              onClick={() => setLanguage('zh')}
              className={`p-4 rounded-lg font-bold ${language === 'zh' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              设置为中文
            </button>
            
            <button 
              onClick={() => setLanguage('en')}
              className={`p-4 rounded-lg font-bold ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            >
              Set to English
            </button>
          </div>
          
          <div className="mb-6">
            <button 
              onClick={toggleLanguage}
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-700 transition-colors"
            >
              {language === 'zh' ? '切换语言' : 'Toggle Language'}
            </button>
          </div>
          
          <div>
            <button 
              onClick={() => {
                localStorage.removeItem('language');
                setStorageLanguage(null);
                window.location.reload();
              }}
              className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
            >
              {language === 'zh' ? '清除语言设置并刷新' : 'Clear Language Setting & Refresh'}
            </button>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            {language === 'zh' ? '翻译示例' : 'Translation Examples'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg">
            <div>
              <h3 className="text-xl font-bold mb-2">导航翻译</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t('nav.home')}</li>
                <li>{t('nav.about')}</li>
                <li>{t('nav.products')}</li>
                <li>{t('nav.cases')}</li>
                <li>{t('nav.news')}</li>
                <li>{t('nav.contact')}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">联系页面翻译</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t('contact.title')}</li>
                <li>{t('contact.subtitle')}</li>
                <li>{t('contact.info.title')}</li>
                <li>{t('contact.form.title')}</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/"
            className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {language === 'zh' ? '返回首页' : 'Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
} 