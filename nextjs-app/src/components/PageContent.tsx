"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageContentProps {
  children: React.ReactNode;
}

export default function PageContent({ children }: PageContentProps) {
  const { language } = useLanguage();
  
  // 使用language作为key强制重新渲染，确保内容完全更新
  return (
    <div key={language} className="w-full">
      {children}
    </div>
  );
}
