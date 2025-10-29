"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  // 确保在客户端渲染后执行
  useEffect(() => {
    setIsMounted(true);
    console.log('Navbar mounted, current language:', language);
  }, [language]);

  // 滚动检测逻辑
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 如果滚动距离小于100px，始终显示导航栏
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // 向上滚动显示，向下滚动隐藏
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { nameKey: 'nav.home', path: '/' },
    { nameKey: 'nav.about', path: '/about' },
    { nameKey: 'nav.products', path: '/products' },
    { nameKey: 'nav.cases', path: '/cases' },
    { nameKey: 'nav.news', path: '/news' },
    { nameKey: 'nav.contact', path: '/contact' },
  ];

  if (!isMounted) {
    return (
      <nav className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            {/* 左侧区域 - Logo居中 */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <div className="flex items-center">
                <Image 
                  src="/独立站图片素材/jingjing_logo_blue.jpg" 
                  alt="晶晶表面技术Logo" 
                  width={32}
                  height={32}
                  className="w-8 h-8 mr-2"
                />
                <span className="text-xl font-bold">东莞晶晶新材料有限公司</span>
              </div>
            </div>

            {/* 中间区域 - 导航菜单 */}
            <div className="hidden lg:flex flex-1 justify-center lg:ml-8">
              <div className="flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link 
                    key={item.path}
                    href={item.path}
                    className={`px-4 py-2 text-base font-medium transition-colors duration-300 rounded-md whitespace-nowrap ${
                      pathname === item.path
                        ? 'text-white font-bold bg-primary/80'
                        : 'text-gray-300 hover:text-white hover:bg-primary/30'
                    }`}
                  >
                    {t(item.nameKey)}
                  </Link>
                ))}
              </div>
            </div>

            {/* 右侧区域 - 移动端菜单按钮 */}
            <div className="flex-1 flex justify-end lg:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                <span className="sr-only">打开主菜单</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav 
      className="bg-primary text-white fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* 左侧区域 - Logo居中 */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center">
                <motion.div
                  className="w-8 h-8 mr-2 flex-shrink-0 relative"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image 
                    src="/独立站图片素材/jingjing_logo_blue.jpg" 
                    alt="晶晶表面技术Logo" 
                    width={200}
                    height={157}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <span className={`font-bold whitespace-nowrap ${language === 'en' ? 'text-base lg:text-lg' : 'text-xl'}`}>{t('site.name')}</span>
              </Link>
            </motion.div>
          </div>

          {/* 中间区域 - 导航菜单 */}
          <div className="hidden lg:flex flex-1 justify-center lg:ml-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    href={item.path}
                    className={`px-4 py-2 text-base font-medium transition-colors duration-300 rounded-md whitespace-nowrap ${
                      pathname === item.path
                        ? 'text-white font-bold bg-primary/80'
                        : 'text-gray-300 hover:text-white hover:bg-primary/30'
                    }`}
                  >
                    {t(item.nameKey)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 右侧区域 - 移动端菜单按钮 */}
          <div className="flex-1 flex justify-end lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-primary/30 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">打开主菜单</span>
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.svg 
                    key="close"
                    className="block h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg 
                    key="menu"
                    className="block h-6 w-6" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
                      pathname === item.path
                        ? 'bg-primary/80 text-white'
                        : 'text-gray-300 hover:bg-primary/30 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(item.nameKey)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 