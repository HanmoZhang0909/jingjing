"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AnodePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              东莞晶晶新材料有限公司
            </Link>
            <div className="flex space-x-4">
              <Link href="/products" className="text-white hover:text-blue-200 transition-colors">
                产品中心
              </Link>
              <Link href="/" className="text-white hover:text-blue-200 transition-colors">
                返回首页
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">镀铬阳极处理</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业镀铬阳极处理技术，提供高质量的表面处理解决方案，提升产品耐腐蚀性和美观度
            </p>
          </div>

          {/* 产品特色 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">技术特点</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">高耐腐蚀性</h3>
                    <p className="text-gray-600">通过镀铬阳极处理，产品表面形成致密的氧化膜，显著提升耐腐蚀性能</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">美观度高</h3>
                    <p className="text-gray-600">表面光滑平整，色泽均匀，具有良好的装饰效果</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">硬度提升</h3>
                    <p className="text-gray-600">氧化膜硬度高，耐磨性能优异，延长产品使用寿命</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">技术参数</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">处理厚度</span>
                  <span className="text-gray-600">5-50μm</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">硬度等级</span>
                  <span className="text-gray-600">HV 300-600</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">耐腐蚀性</span>
                  <span className="text-gray-600">1000小时盐雾</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">表面质量</span>
                  <span className="text-gray-600">Ra ≤ 0.8μm</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 应用领域 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">应用领域</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">航空航天</h3>
                <p className="text-gray-600">飞机零部件、航天器组件等高端应用</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 01-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">汽车工业</h3>
                <p className="text-gray-600">汽车零部件、发动机组件等</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.666.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">电子设备</h3>
                <p className="text-gray-600">电子产品外壳、精密仪器等</p>
              </div>
            </div>
          </motion.div>

          {/* 联系我们 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center bg-blue-600 text-white rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-4">需要镀铬阳极处理服务？</h2>
            <p className="text-xl mb-6">联系我们获取专业的技术咨询和定制化解决方案</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              立即咨询
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
