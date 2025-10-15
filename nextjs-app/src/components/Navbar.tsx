"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

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
                  <div className="w-8 h-8 bg-white text-blue-900 flex items-center justify-center rounded-sm font-bold mr-2">
                    JJ
                  </div>
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
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-white text-blue-900 flex items-center justify-center rounded-sm font-bold mr-2">
                  JP
                </div>
                <span className="text-lg font-bold">{t('site.name')}</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path}
                    className={`px-3 py-2 text-sm font-medium ${
                      pathname === item.path
                        ? 'text-white font-bold'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {t(item.nameKey)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <LanguageSwitcher />
            <span className="ml-2 text-xs bg-blue-800 px-2 py-1 rounded">
              {language === 'zh' ? '当前: 中文' : 'Current: EN'}
            </span>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none"
            >
              <span className="sr-only">打开主菜单</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.path
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                }`}
              >
                {t(item.nameKey)}
              </Link>
            ))}
            <div className="px-3 py-2 flex items-center">
              <LanguageSwitcher />
              <span className="ml-2 text-xs bg-blue-800 px-2 py-1 rounded">
                {language === 'zh' ? '当前: 中文' : 'Current: EN'}
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 