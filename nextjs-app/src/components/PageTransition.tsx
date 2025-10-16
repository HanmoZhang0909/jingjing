"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const { language } = useLanguage();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    // 确保页面内容完全加载后再显示
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [language]);

  return (
    <motion.div
      key={language}
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: isReady ? 1 : 0,
        y: isReady ? 0 : 10
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeOut"
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
