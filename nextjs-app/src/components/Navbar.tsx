"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [isMounted, setIsMounted] = useState(false);

  // 确保在客户端渲染后执行
  useEffect(() => {
    setIsMounted(true);
    console.log('Navbar mounted, current language:', language);
  }, [language]);

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
      <nav className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="flex items-center">
                    <img 
                      src="/独立站图片素材/Red_and_white_logo_with_stylized_letter_N_200x157.png" 
                      alt="晶晶表面技术Logo" 
                      className="w-8 h-8 mr-2"
                    />
                    <span className="text-lg font-bold">东莞晶晶表面技术有限公司</span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav 
      className="bg-blue-900 text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1 min-w-0">
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/" className="flex items-center">
                    <motion.img 
                      src="/独立站图片素材/Red_and_white_logo_with_stylized_letter_N_200x157.png" 
                      alt="晶晶表面技术Logo" 
                      className="w-8 h-8 mr-2 flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className={`font-bold whitespace-nowrap ${language === 'en' ? 'text-sm lg:text-base' : 'text-lg'}`}>{t('site.name')}</span>
                  </Link>
                </motion.div>
              </div>
            <div className="hidden lg:block ml-4">
              <div className="flex items-baseline space-x-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                        pathname === item.path
                          ? 'text-white font-bold'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {t(item.nameKey)}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none"
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
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      pathname === item.path
                        ? 'bg-blue-800 text-white'
                        : 'text-gray-300 hover:bg-blue-800 hover:text-white'
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