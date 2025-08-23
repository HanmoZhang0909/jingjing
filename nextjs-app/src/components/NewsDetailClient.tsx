"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

// 新闻数据类型
interface NewsArticle {
  id: number;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  contentZh: string;
  contentEn: string;
  image: string;
  date: string;
  authorZh: string;
  authorEn: string;
  slug: string;
}

interface NewsDetailClientProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}

export default function NewsDetailClient({ article, relatedArticles }: NewsDetailClientProps) {
  const { language, t } = useLanguage();
  
  // 根据语言获取本地化内容
  const localizedArticle = {
    ...article,
    title: language === 'zh' ? article.titleZh : article.titleEn,
    summary: language === 'zh' ? article.summaryZh : article.summaryEn,
    content: language === 'zh' ? article.contentZh : article.contentEn,
    author: language === 'zh' ? article.authorZh : article.authorEn
  };

  const localizedRelatedArticles = relatedArticles.map(relatedArticle => ({
    ...relatedArticle,
    title: language === 'zh' ? relatedArticle.titleZh : relatedArticle.titleEn,
    summary: language === 'zh' ? relatedArticle.summaryZh : relatedArticle.summaryEn
  }));

  // 获取格式化日期
  const formattedDate = new Date(localizedArticle.date).toLocaleDateString(
    language === 'zh' ? 'zh-CN' : 'en-US', 
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* 返回按钮 */}
        <div className="mb-8">
          <Link 
            href="/news" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('news.back')}
          </Link>
        </div>

        {/* 标题和元信息 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{localizedArticle.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">{formattedDate}</span>
          <span className="mr-4">{t('news.detail.author')}: {localizedArticle.author}</span>
        </div>

        {/* 特色图片 */}
        <div className="mb-8 relative h-[400px] w-full">
          <Image
            src={localizedArticle.image}
            alt={localizedArticle.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* 摘要 */}
        <div className="mb-8">
          <p className="text-xl font-semibold text-gray-700">{localizedArticle.summary}</p>
        </div>

        {/* 内容 */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: localizedArticle.content }}
        />

        {/* 分享按钮 */}
        <div className="mt-12 border-t pt-6">
          <h3 className="text-lg font-medium mb-4">{t('news.detail.share')}</h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </button>
            {/* Twitter */}
            <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </button>
            {/* LinkedIn */}
            <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 相关阅读 */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">{t('news.detail.related')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {localizedRelatedArticles.map(relatedArticle => (
              <Link 
                href={`/news/${relatedArticle.slug}`} 
                key={relatedArticle.id}
                className="group"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-600">{relatedArticle.title}</h4>
                <p className="text-gray-600">{relatedArticle.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}