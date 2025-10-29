"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              东莞晶晶新材料有限公司
            </Link>
            <Link href="/" className="text-white hover:text-blue-200 transition-colors">
              返回首页
            </Link>
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
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">产品中心</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 阳极氧化 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">阳极氧化</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">阳极氧化处理</h3>
                <p className="text-gray-600 mb-4">专业阳极氧化处理技术，提供高质量的表面处理解决方案。</p>
                <Link 
                  href="/products/anode" 
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </motion.div>

            {/* 化学药水 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">化学药水</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">化学药水产品</h3>
                <p className="text-gray-600 mb-4">优质化学药水产品，为金属表面处理提供专业的化学支持。</p>
                <Link 
                  href="/products/chemical" 
                  className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </motion.div>

            {/* 处理设备 */}
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">处理设备</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">表面处理设备</h3>
                <p className="text-gray-600 mb-4">先进表面处理设备，自动化生产线，提高生产效率。</p>
                <Link 
                  href="/products/equipment" 
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  查看详情
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}