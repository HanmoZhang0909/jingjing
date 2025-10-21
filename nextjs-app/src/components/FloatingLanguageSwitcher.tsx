"use client";

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingLanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // 确保在客户端渲染后执行
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setIsExpanded(false);
    // 立即切换语言，不延迟
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
    
    // 强制页面重新渲染
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  // 如果没有挂载，不显示任何内容
  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 主按钮 */}
        <motion.button
          onClick={toggleLanguage}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            scale: isExpanded ? 1.05 : 1,
            backgroundColor: isExpanded ? "#1d4ed8" : "#2563eb",
            boxShadow: isExpanded ? "0 8px 25px rgba(37, 99, 235, 0.4)" : "0 4px 15px rgba(37, 99, 235, 0.2)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            key={language}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="font-bold text-sm sm:text-lg"
          >
            {language === 'zh' ? 'EN' : '中文'}
          </motion.span>
        </motion.button>

        {/* 展开的提示信息 */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap hidden sm:block"
            >
              <div className="text-sm font-medium">
                {language === 'zh' ? 'Switch to English' : '切换到中文'}
              </div>
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 语言切换动画效果 */}
        <AnimatePresence>
          <motion.div
            key={`switch-${language}`}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 rounded-full border-2 border-white pointer-events-none"
          />
        </AnimatePresence>
      </div>

      {/* 简单的页面过渡效果 */}
      <AnimatePresence>
        <motion.div
          key={`page-fade-${language}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0.1 }}
          transition={{ duration: 0.1 }}
          className="fixed inset-0 bg-blue-600 pointer-events-none"
        />
      </AnimatePresence>
    </motion.div>
  );
}
