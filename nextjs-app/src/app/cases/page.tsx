"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function CasesPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // 页面内容翻译
  const pageContent = {
    title: {
      zh: '应用场景',
      en: 'Application Scenarios'
    },
    subtitle: {
      zh: 'APPLICATION SCENARIOS',
      en: 'APPLICATION SCENARIOS'
    },
    intro: {
      zh: '我们的产品和技术广泛应用于各个行业，为不同领域的客户提供专业的金属表面处理解决方案。',
      en: 'Our products and technologies are widely used in various industries, providing professional metal surface treatment solutions for customers in different fields.'
    },
    applicationAreas: [
      {
        id: 'automotive',
        name: {
          zh: '汽车工业',
          en: 'Automotive Industry'
        },
        description: {
          zh: '汽车零部件、发动机部件、制动系统等需要高硬度和耐腐蚀性的镀铬处理。',
          en: 'Automotive parts, engine components, brake systems and other components requiring high hardness and corrosion resistance chrome plating.'
        },
        applications: {
          zh: [
            '发动机缸体镀铬',
            '制动盘表面处理',
            '传动轴镀铬',
            '减震器活塞杆',
            '转向系统部件'
          ],
          en: [
            'Engine block chrome plating',
            'Brake disc surface treatment',
            'Drive shaft chrome plating',
            'Shock absorber piston rod',
            'Steering system components'
          ]
        },
        image: '/独立站图片素材/应用场景/1.jpg'
      },
      {
        id: 'electronics',
        name: {
          zh: '电子电器',
          en: 'Electronics & Electrical'
        },
        description: {
          zh: '电子设备外壳、连接器、开关等需要良好的导电性和耐腐蚀性。',
          en: 'Electronic device housings, connectors, switches and other components requiring good conductivity and corrosion resistance.'
        },
        applications: {
          zh: [
            '手机外壳镀铬',
            '电脑连接器',
            '开关触点处理',
            'LED散热器',
            '电路板连接器'
          ],
          en: [
            'Mobile phone housing chrome plating',
            'Computer connectors',
            'Switch contact treatment',
            'LED heat sinks',
            'PCB connectors'
          ]
        },
        image: '/独立站图片素材/应用场景/2.jpg'
      },
      {
        id: 'machinery',
        name: {
          zh: '机械制造',
          en: 'Machinery Manufacturing'
        },
        description: {
          zh: '各种机械零件、工具、模具等需要高硬度和耐磨性的表面处理。',
          en: 'Various mechanical parts, tools, molds and other components requiring high hardness and wear resistance surface treatment.'
        },
        applications: {
          zh: [
            '液压缸活塞杆',
            '模具表面处理',
            '轴承套圈镀铬',
            '刀具表面强化',
            '齿轮表面处理'
          ],
          en: [
            'Hydraulic cylinder piston rod',
            'Mold surface treatment',
            'Bearing ring chrome plating',
            'Tool surface strengthening',
            'Gear surface treatment'
          ]
        },
        image: '/独立站图片素材/应用场景/3.jpg'
      },
      {
        id: 'aerospace',
        name: {
          zh: '航空航天',
          en: 'Aerospace'
        },
        description: {
          zh: '航空发动机部件、起落架、液压系统等需要极高的耐腐蚀性和可靠性。',
          en: 'Aircraft engine components, landing gear, hydraulic systems and other components requiring extremely high corrosion resistance and reliability.'
        },
        applications: {
          zh: [
            '航空发动机叶片',
            '起落架部件',
            '液压系统活塞',
            '燃料系统部件',
            '导航设备外壳'
          ],
          en: [
            'Aircraft engine blades',
            'Landing gear components',
            'Hydraulic system pistons',
            'Fuel system components',
            'Navigation equipment housing'
          ]
        },
        image: '/独立站图片素材/应用场景/4.jpg'
      },
      {
        id: 'medical',
        name: {
          zh: '医疗器械',
          en: 'Medical Devices'
        },
        description: {
          zh: '医疗器械需要生物相容性、耐腐蚀性和易于清洁的表面处理。',
          en: 'Medical devices require biocompatible, corrosion-resistant and easy-to-clean surface treatment.'
        },
        applications: {
          zh: [
            '手术器械镀铬',
            '植入物表面处理',
            '医疗设备外壳',
            '诊断设备部件',
            '康复器械表面'
          ],
          en: [
            'Surgical instrument chrome plating',
            'Implant surface treatment',
            'Medical device housing',
            'Diagnostic equipment components',
            'Rehabilitation equipment surface'
          ]
        },
        image: '/独立站图片素材/应用场景/5.jpg'
      },
      {
        id: 'home-appliances',
        name: {
          zh: '家电行业',
          en: 'Home Appliances'
        },
        description: {
          zh: '家电产品需要美观、耐用的表面处理，提升产品品质和用户体验。',
          en: 'Home appliances require beautiful and durable surface treatment to improve product quality and user experience.'
        },
        applications: {
          zh: [
            '洗衣机内筒镀铬',
            '冰箱门把手',
            '空调外壳处理',
            '热水器内胆',
            '厨房电器表面'
          ],
          en: [
            'Washing machine drum chrome plating',
            'Refrigerator door handles',
            'Air conditioner housing treatment',
            'Water heater inner tank',
            'Kitchen appliance surface'
          ]
        },
        image: '/独立站图片素材/应用场景/6.jpg'
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
            zh: '高硬度涂层',
            en: 'High Hardness Coating'
          },
          description: {
            zh: 'DX-30技术可达到860-1200 HV的硬度，满足各种高要求应用场景。',
            en: 'DX-30 technology can achieve 860-1200 HV hardness, meeting various high-demand application scenarios.'
          },
          icon: '🔧'
        },
        {
          title: {
            zh: '优异耐腐蚀性',
            en: 'Excellent Corrosion Resistance'
          },
          description: {
            zh: '微裂纹结构提供更好的耐腐蚀性能，延长产品使用寿命。',
            en: 'Microcrack structure provides better corrosion resistance, extending product service life.'
          },
          icon: '🛡️'
        },
        {
          title: {
            zh: '环保节能',
            en: 'Environmental & Energy Saving'
          },
          description: {
            zh: '陶瓷净化系统实现镀液循环利用，减少环境污染。',
            en: 'Ceramic purification system achieves plating solution recycling, reducing environmental pollution.'
          },
          icon: '🌱'
        },
        {
          title: {
            zh: '高效生产',
            en: 'Efficient Production'
          },
          description: {
            zh: '沉积速度是传统技术的两倍，大幅提高生产效率。',
            en: 'Deposition speed is twice that of traditional technology, significantly improving production efficiency.'
          },
          icon: '⚡'
        }
      ]
    },
    successStories: {
      title: {
        zh: '成功案例',
        en: 'Success Stories'
      },
      subtitle: {
        zh: 'SUCCESS STORIES',
        en: 'SUCCESS STORIES'
      },
      stories: [
        {
          title: {
            zh: '某知名汽车制造商',
            en: 'Famous Automobile Manufacturer'
          },
          description: {
            zh: '采用我们的DX-30技术和FC-T阳极，发动机缸体镀铬质量显著提升，良品率提高15%，能耗降低30%。',
            en: 'Using our DX-30 technology and FC-T anode, engine block chrome plating quality significantly improved, yield rate increased by 15%, energy consumption reduced by 30%.'
          },
          results: {
            zh: ['良品率提升15%', '能耗降低30%', '使用寿命延长2倍'],
            en: ['Yield rate increased by 15%', 'Energy consumption reduced by 30%', 'Service life extended by 2x']
          }
        },
        {
          title: {
            zh: '电子设备制造商',
            en: 'Electronic Device Manufacturer'
          },
          description: {
            zh: '使用我们的陶瓷净化系统，实现了镀液的循环利用，年节约成本200万元，环保效益显著。',
            en: 'Using our ceramic purification system, achieved plating solution recycling, annual cost savings of 2 million yuan, significant environmental benefits.'
          },
          results: {
            zh: ['年节约成本200万元', '废液排放减少80%', '镀液使用寿命延长3倍'],
            en: ['Annual cost savings of 2 million yuan', 'Waste discharge reduced by 80%', 'Plating solution service life extended by 3x']
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
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-800 to-blue-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{pageContent.title[language]}</h1>
          <p className="text-xl">{pageContent.subtitle[language]}</p>
        </div>
      </div>

      {/* 应用领域介绍 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">{pageContent.title[language]}</h2>
            <p className="text-lg text-gray-700">{pageContent.intro[language]}</p>
          </div>

          {/* 应用领域网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageContent.applicationAreas.map((area, index) => (
              <motion.div 
                key={area.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="relative h-48"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={area.image} 
                    alt={area.name[language]} 
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{area.name[language]}</h3>
                  <p className="text-gray-700 mb-4">{area.description[language]}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">
                      {language === 'zh' ? '主要应用：' : 'Main Applications:'}
                    </h4>
                    <ul className="space-y-1">
                      {area.applications[language].slice(0, 3).map((app, appIndex) => (
                        <motion.li 
                          key={appIndex} 
                          className="text-sm text-gray-600 flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 + appIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{app}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                  <div className="text-3xl mr-4">{advantage.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-600 mb-3">{advantage.title[language]}</h3>
                    <p className="text-gray-700">{advantage.description[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 成功案例 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">{pageContent.successStories.title[language]}</h2>
            <p className="text-center text-blue-600 mb-10">{pageContent.successStories.subtitle[language]}</p>
            
            <div className="space-y-8">
              {pageContent.successStories.stories.map((story, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{story.title[language]}</h3>
                  <p className="text-gray-700 mb-6">{story.description[language]}</p>
                  <div>
                    <h4 className="text-lg font-semibold mb-3">{language === 'zh' ? '取得成果：' : 'Achievements:'}</h4>
                    <div className="flex flex-wrap gap-3">
                      {story.results[language].map((result, resultIndex) => (
                        <span key={resultIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'zh' ? '需要定制化解决方案？' : 'Need Customized Solutions?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === 'zh' ? '我们的专业团队为您提供最适合的技术方案' : 'Our professional team provides you with the most suitable technical solutions'}
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            {language === 'zh' ? '立即咨询' : 'Contact Us Now'}
          </Link>
        </div>
      </section>
    </div>
  );
}