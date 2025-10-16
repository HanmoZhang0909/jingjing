"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // 页面内容翻译
  const pageContent = {
    title: {
      zh: '产品与工艺',
      en: 'Products & Technology'
    },
    subtitle: {
      zh: 'PRODUCTS & TECHNOLOGY',
      en: 'PRODUCTS & TECHNOLOGY'
    },
    intro: {
      zh: '我们专注于金属表面处理行业，提供先进的产品和技术解决方案，包括DX-30微裂纹硬铬催化剂中间体、FC-T高密度挤压合金阳极和陶瓷净化系统。',
      en: 'We focus on the metal surface treatment industry, providing advanced products and technical solutions, including DX-30 microcrack hard chromium catalyst intermediate, FC-T high-density extruded alloy anode and ceramic purification system.'
    },
    products: [
      {
        id: 'dx30',
        name: {
          zh: 'DX-30微裂纹硬铬催化剂中间体',
          en: 'DX-30 Microcrack Hard Chromium Catalyst Intermediate'
        },
        description: {
          zh: 'DX-30是一种固体粉末中间体，可显著提高电流效率，减少镀液对阳极板的腐蚀。使成品表面更光滑、更亮，增加涂层硬度，产生更多微裂纹，具有更高的耐腐蚀性。',
          en: 'DX-30 is a solid powder intermediate that can significantly improve current efficiency and reduce corrosion of the plating solution on the anode plate. It makes the surface of the finished product smoother and brighter, increases the hardness of the coating, generates more microcracks, and has higher corrosion resistance.'
        },
        features: {
          zh: [
            '更高效的阴极电流（高达25%-27%），沉积速度快，是传统技术的两倍',
            '铬层硬度高，符合GB9790-88标准，硬度范围860-1200 HV',
            '铬层微裂纹多，范围200-1000/cm²，比传统工艺更耐腐蚀',
            '铬层与基体结合更牢固，预处理操作更简单',
            '铬溶液分散性更好，层厚更均匀，表面更光滑',
            '铬溶液不含氟化物，可防止电镀过程中因低电流对工件的腐蚀'
          ],
          en: [
            'More efficient cathode current (up to 25%-27%), fast deposition speed, twice that of traditional technology',
            'High hardness chromium layer, meets GB9790-88 standard, hardness range 860-1200 HV',
            'Many microcracks in chromium layer, range 200-1000/cm², more corrosion-resistant than traditional processes',
            'Chromium layer bonds more firmly to substrate, simpler pre-treatment operation',
            'Better dispersibility of chromium solution, more uniform layer thickness, smoother surface',
            'Chromium solution contains no fluoride, prevents corrosion of workpiece due to low current during electroplating'
          ]
        },
        specifications: {
          zh: {
            status: '白色粉末',
            formula: 'NaSO3CH2SO3Na',
            weight: '220.12',
            purity: '99.99%以上'
          },
          en: {
            status: 'White powder',
            formula: 'NaSO3CH2SO3Na',
            weight: '220.12',
            purity: 'Above 99.99%'
          }
        },
        image: '/独立站图片素材/表面技术抬头.jpg'
      },
      {
        id: 'fct-anode',
        name: {
          zh: 'FC-T铅锡锑高密度挤压合金阳极',
          en: 'FC-T Lead-Tin-Antimony High-Density Extruded Alloy Anode'
        },
        description: {
          zh: '采用高纯度铅锡锑（少量银）为原料混合，经过800吨挤压机挤压成型，内部结构致密度高，使用寿命长，导电性能优异。',
          en: 'Using high-purity lead-tin-antimony (with a small amount of silver) as raw materials, the mixture is extruded into shape by an 800-ton press, resulting in a high atomic packing factor in the internal structure, long service life and excellent conductivity.'
        },
        features: {
          zh: [
            '使用寿命长：挤压成型避免了铸造产生的气孔、冷隔，导电性与耐用性能极大提升',
            '沉积速度快：致密性高，导电性能提升，槽电压下降，节能环保',
            '良品率提高：避免合金成分分布不均匀导致的阳极导电不均匀现象',
            '强度更高：密度高让强度更高，可制造10米长度的阳极',
            '使用寿命达3-5年，节省约30%的电力消耗'
          ],
          en: [
            'Long service life: Extrusion molding avoids porosity and cold shuts from casting, greatly enhancing conductivity and durability',
            'Rapid deposition rate: High density improves conductivity, reduces cell voltage, energy saving and environmental protection',
            'Improved yield rate: Prevents uneven distribution of alloy components causing uneven anodic conductivity',
            'Greater strength: Higher density enhances strength, can manufacture 10-meter-long anodes',
            'Service life reaches 3-5 years, saves about 30% of electricity consumption'
          ]
        },
        specifications: {
          zh: {
            material: '高纯度铅锡锑合金',
            process: '800吨挤压机挤压成型',
            serviceLife: '3-5年',
            conductivity: '提升30%'
          },
          en: {
            material: 'High-purity lead-tin-antimony alloy',
            process: '800-ton press extrusion molding',
            serviceLife: '3-5 years',
            conductivity: '30% improvement'
          }
        },
        image: '/独立站图片素材/新材料抬头.jpg'
      },
      {
        id: 'ceramic-tank',
        name: {
          zh: '陶瓷净化系统',
          en: 'Ceramic Purification System'
        },
        description: {
          zh: '陶瓷桶净化系统可解决镀铬过程中产生的三价铬过高、铜离子铁离子累积导致的品质问题，实现镀液的循环利用。',
          en: 'The ceramic tank purification system can solve quality problems caused by excessive trivalent chromium and accumulation of copper and iron ions during the chrome plating process, achieving recycling of plating solutions.'
        },
        features: {
          zh: [
            '提高产品品质：解决镀铬过程中产生的三价铬过高、铜离子铁离子累积导致的品质问题',
            '环境保护：解决镀液在金属离子累积到一定程度时无法生产导致报废的问题',
            '三价铬还原：电解过程中可以还原一部分三价铬，解决三价铬过高导致的问题',
            '实现粗化液和镀铬液的净化，延长镀液使用寿命'
          ],
          en: [
            'Enhanced product quality: Addresses quality issues caused by excessive trivalent chromium and accumulation of copper and iron ions during chrome plating',
            'Environmental protection: Solves the problem of plating liquids being discarded due to metal ion accumulation',
            'Trivalent chromium reduction: Electrolytic process can reduce trivalent chromium, addressing excessive levels',
            'Achieves purification of roughening liquid and chrome plating solution, extends plating solution service life'
          ]
        },
        specifications: {
          zh: {
            material: '电解陶瓷隔膜',
            voltage: '4-10V',
            temperature: '50℃',
            time: '3小时以上'
          },
          en: {
            material: 'Electrolytic ceramic diaphragm',
            voltage: '4-10V',
            temperature: '50℃',
            time: 'More than 3 hours'
          }
        },
        image: '/独立站图片素材/微信图片_20240411135828.png'
      }
    ],
    technicalAdvantages: {
      title: {
        zh: '技术优势',
        en: 'Technical Advantages'
      },
      subtitle: {
        zh: 'TECHNICAL ADVANTAGES',
        en: 'TECHNICAL ADVANTAGES'
      },
      advantages: [
        {
          title: {
            zh: '高效节能',
            en: 'High Efficiency & Energy Saving'
          },
          description: {
            zh: 'DX-30技术可将电流效率提升25%-27%，沉积速度是传统技术的两倍，大幅降低能耗。',
            en: 'DX-30 technology can improve current efficiency by 25%-27%, deposition speed is twice that of traditional technology, significantly reducing energy consumption.'
          }
        },
        {
          title: {
            zh: '环保可持续',
            en: 'Environmental & Sustainable'
          },
          description: {
            zh: '陶瓷净化系统实现镀液循环利用，减少废液排放，符合环保要求。',
            en: 'Ceramic purification system achieves plating solution recycling, reduces waste discharge, meets environmental requirements.'
          }
        },
        {
          title: {
            zh: '质量稳定',
            en: 'Stable Quality'
          },
          description: {
            zh: '高密度挤压阳极避免铸造缺陷，确保产品质量稳定可靠。',
            en: 'High-density extruded anode avoids casting defects, ensures stable and reliable product quality.'
          }
        },
        {
          title: {
            zh: '使用寿命长',
            en: 'Long Service Life'
          },
          description: {
            zh: 'FC-T阳极使用寿命达3-5年，比传统阳极延长2-4倍。',
            en: 'FC-T anode service life reaches 3-5 years, 2-4 times longer than traditional anodes.'
          }
        }
      ]
    }
  };

  if (!mounted) {
    return <div className="container mx-auto px-4 py-8">加载中...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* 页面标题区域 */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.div 
          className="absolute inset-0 flex flex-col justify-center items-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {pageContent.title[language]}
          </motion.h1>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {pageContent.subtitle[language]}
          </motion.p>
        </motion.div>
        </div>

      {/* 产品介绍 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{pageContent.title[language]}</h2>
            <p className="text-lg text-gray-700">{pageContent.intro[language]}</p>
      </div>

      {/* 产品列表 */}
          <div className="space-y-16">
            {pageContent.products.map((product, index) => (
              <motion.div 
                key={product.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="overflow-hidden rounded-lg shadow-lg"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image 
                      src={product.image} 
                      alt={product.name[language]} 
                      width={600} 
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{product.name[language]}</h3>
                  <p className="text-gray-700 mb-6">{product.description[language]}</p>
                  
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold mb-3">{language === 'zh' ? '产品特点' : 'Product Features'}</h4>
                    <ul className="space-y-2">
                      {product.features[language].map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.8 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-gray-50 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-semibold mb-3">{language === 'zh' ? '技术参数' : 'Technical Specifications'}</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {Object.entries(product.specifications[language]).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium">{key}:</span>
                          <span className="text-gray-600">{value}</span>
            </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* 技术优势 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">{pageContent.technicalAdvantages.title[language]}</h2>
            <p className="text-center text-blue-600 mb-10">{pageContent.technicalAdvantages.subtitle[language]}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pageContent.technicalAdvantages.advantages.map((advantage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{advantage.title[language]}</h3>
                  <p className="text-gray-700">{advantage.description[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 