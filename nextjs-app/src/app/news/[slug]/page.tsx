import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { newsArticles } from '@/data/newsData';
import NewsDetailClient from '@/components/NewsDetailClient';

// 元数据生成函数
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find(article => article.slug === slug);
  
  if (!article) {
    return {
      title: '文章未找到 | 公司名称',
      description: '抱歉，您请求的文章不存在。'
    };
  }
  
  return {
    title: `${article.titleZh} | 公司名称`,
    description: article.summaryZh,
    openGraph: {
      title: article.titleZh,
      description: article.summaryZh,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
      authors: [article.authorZh],
    },
  };
}

export default async function NewsDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  // 在服务器端查找文章
  const article = newsArticles.find((article) => article.slug === slug);
  
  // 如果找不到对应的新闻，显示404页面
  if (!article) {
    notFound();
  }

  // 获取相关文章
  const relatedArticles = newsArticles
    .filter(relatedArticle => relatedArticle.id !== article.id)
    .slice(0, 2);

  return (
    <NewsDetailClient 
      article={article} 
      relatedArticles={relatedArticles} 
    />
  );
} 