"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  // 用于客户端水合的状态
  const [mounted, setMounted] = useState(false);

  // 确保只在客户端执行
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
    console.log('Language switched to:', language === 'zh' ? 'en' : 'zh');
  };

  // 如果没有挂载，显示加载状态
  if (!mounted) {
    return (
      <button 
        className="flex items-center justify-center px-4 py-2 ml-4 bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
      >
        ...
      </button>
    );
  }

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center justify-center px-4 py-2 ml-4 bg-transparent border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none transition-colors"
    >
      {t('switchLanguage.text')}
    </button>
  );
} 