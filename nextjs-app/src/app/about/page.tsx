"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // 页面内容翻译
  const pageContent = {
    title: {
      zh: '关于我们',
      en: 'About Us'
    },
    subtitle: {
      zh: 'ABOUT US',
      en: 'ABOUT US'
    },
    intro: {
      zh: '东莞晶晶表面技术有限公司成立于2004年，专注于金属表面处理行业的领先企业。我们专注于镀铬技术研发、化工产品生产销售、镀铬设备及配件制造。开发了新型高效的微裂纹硬铬催化剂中间体DX-30（产品编号ST-930），在节能环保方面具有突出优势。2021年成立金属材料制造部（东莞晶晶新材料有限公司），专业制造镀铬阳极，采用大吨位挤压设备，从传统铸造工艺转向挤压成型工艺，大幅提升导电性和使用寿命。',
      en: 'Dongguan Jingjing Surface Technology Co., Ltd. was established in 2004. It is a leading enterprise specializing in the metal surface treatment industry, focusing on the research and development of chrome plating technology, the production and sales of chemical products, chrome plating equipment and accessories. We have developed a new and more effective micro crack hard chromium catalyst intermediate DX-30, which is a high-purity product and named as product number ST-930. In 2021, we established the Metal Materials Manufacturing Department (Dongguan Jingjing New Materials Co., Ltd.), specializing in the manufacturing of anodes for chrome plating. On the basis of traditional casting and drawing forming technologies, we introduced large tonnage extrusion equipment, which changed from years of casting process to extrusion forming process, greatly improving the conductivity and service life of chrome plating anodes.'
    },
    history: {
      title: {
        zh: '公司历程',
        en: 'Company History'
      },
      subtitle: {
        zh: 'OUR HISTORY',
        en: 'OUR HISTORY'
      },
      content: {
        zh: '公司成立至今，我们一直坚持"专业、更专业、最专业"的企业使命。通过不断研发创新，我们独立开发了镀铬溶液中金属残渣净化技术，使溶液能够永久重复使用，而不是每3-5年更换一次。这大大降低了镀铬企业的原材料成本和化学品对环境造成的损害。我们配备多名高级工程师和各种检测仪器，确保电镀溶液分析准确和镀铬阳极产品质量。',
        en: 'Since the establishment of the company, we have always adhered to the corporate mission of "professional, more professional, and the most professional." Through continuous research and innovation, we have independently developed another breakthrough technology, which is the purification of metal residues in chromium plating solutions, allowing the solution to be reused forever instead of being replaced every 3-5 years. It greatly reduces the raw material costs of chrome plating enterprises and the environmental damage caused by chemicals. We are equipped with multiple senior engineers and various testing instruments to ensure accurate analysis of electroplating solutions and high-quality anode products for chrome plating.'
      },
      milestones: [
        {
          year: '2004',
          eventZh: '东莞晶晶表面技术有限公司成立，专注于金属表面处理行业',
          eventEn: 'Dongguan Jingjing Surface Technology Co., Ltd. established, focusing on metal surface treatment industry'
        },
        {
          year: '2008',
          eventZh: '成功开发微裂纹硬铬催化剂中间体DX-30（产品编号ST-930）',
          eventEn: 'Successfully developed micro crack hard chromium catalyst intermediate DX-30 (Product No. ST-930)'
        },
        {
          year: '2012',
          eventZh: '产品获得国内外客户广泛认可，建立完善的质量保障体系',
          eventEn: 'Products widely recognized by domestic and foreign customers, established comprehensive quality assurance system'
        },
        {
          year: '2016',
          eventZh: '业务扩展至全球市场，产品出口多个国家和地区',
          eventEn: 'Business expanded to global markets, products exported to multiple countries and regions'
        },
        {
          year: '2021',
          eventZh: '成立金属材料制造部（东莞晶晶新材料有限公司），专业制造镀铬阳极',
          eventEn: 'Established Metal Materials Manufacturing Department (Dongguan Jingjing New Materials Co., Ltd.), specializing in chrome plating anode manufacturing'
        },
        {
          year: '2023',
          eventZh: '独立开发镀铬溶液金属残渣净化技术，实现溶液永久重复使用',
          eventEn: 'Independently developed chromium plating solution metal residue purification technology, achieving permanent solution reuse'
        }
      ]
    },
    team: {
      title: {
        zh: '我们的团队',
        en: 'Our Team'
      },
      subtitle: {
        zh: 'MEET OUR TEAM',
        en: 'MEET OUR TEAM'
      },
      description: {
        zh: '我们配备多名高级工程师和各种检测仪器，团队成员均有丰富的金属表面处理行业经验和专业知识，确保电镀溶液分析准确和镀铬阳极产品质量。',
        en: 'We are equipped with multiple senior engineers and various testing instruments. All team members have rich experience in the metal surface treatment industry and professional knowledge, ensuring accurate analysis of electroplating solutions and high-quality chrome plating anode products.'
      },
      members: [
        {
          name: '张明',
          nameEn: 'Zhang Ming',
          title: {
            zh: '总经理',
            en: 'General Manager'
          },
          bio: {
            zh: '20年金属表面处理行业经验，专注于镀铬技术研发，带领团队成功开发DX-30微裂纹硬铬催化剂中间体。',
            en: '20 years of experience in metal surface treatment industry, focusing on chrome plating technology R&D, led the team to successfully develop DX-30 micro crack hard chromium catalyst intermediate.'
          }
        },
        {
          name: '李强',
          nameEn: 'Li Qiang',
          title: {
            zh: '技术总监',
            en: 'Technical Director'
          },
          bio: {
            zh: '化学工程博士，专注于镀铬添加剂和阳极制造技术研究，拥有多项发明专利，负责大吨位挤压设备技术升级。',
            en: 'Ph.D. in Chemical Engineering, focusing on chrome plating additives and anode manufacturing technology research, holds multiple invention patents, responsible for large tonnage extrusion equipment technology upgrade.'
          }
        },
        {
          name: '王晓峰',
          nameEn: 'Wang Xiaofeng',
          title: {
            zh: '销售总监',
            en: 'Sales Director'
          },
          bio: {
            zh: '负责公司国内外市场拓展，建立了完善的销售网络和客户服务体系，产品出口至全球多个国家和地区。',
            en: 'Responsible for domestic and foreign market expansion, established comprehensive sales network and customer service system, products exported to multiple countries and regions worldwide.'
          }
        }
      ]
    },
    values: {
      title: {
        zh: '企业价值观',
        en: 'Corporate Values'
      },
      subtitle: {
        zh: 'OUR VALUES',
        en: 'OUR VALUES'
      },
      items: [
        {
          title: {
            zh: '专业至上',
            en: 'Professional Excellence'
          },
          description: {
            zh: '坚持"专业、更专业、最专业"的企业使命，配备多名高级工程师和各种检测仪器，确保产品质量。',
            en: 'Adhere to the corporate mission of "professional, more professional, and the most professional", equipped with multiple senior engineers and various testing instruments to ensure product quality.'
          }
        },
        {
          title: {
            zh: '技术创新',
            en: 'Technological Innovation'
          },
          description: {
            zh: '独立开发镀铬溶液金属残渣净化技术，实现溶液永久重复使用，大幅降低原材料成本和环境损害。',
            en: 'Independently developed chromium plating solution metal residue purification technology, achieving permanent solution reuse, greatly reducing raw material costs and environmental damage.'
          }
        },
        {
          title: {
            zh: '客户价值',
            en: 'Customer Value'
          },
          description: {
            zh: '以客户需求为中心，提供专业的技术支持和完善的售后服务，产品获得国内外客户广泛认可。',
            en: 'Customer needs centered, provide professional technical support and comprehensive after-sales service, products widely recognized by domestic and foreign customers.'
          }
        },
        {
          title: {
            zh: '环保责任',
            en: 'Environmental Responsibility'
          },
          description: {
            zh: '注重产品的环保性能，开发节能环保技术，减少化学品对环境造成的损害，推动行业绿色发展。',
            en: 'Focus on environmental performance of products, develop energy-saving and environmentally friendly technologies, reduce environmental damage caused by chemicals, promote green development of the industry.'
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

      {/* 公司简介 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">{pageContent.title[language]}</h2>
            <div className="mb-8 text-lg text-gray-700 leading-relaxed">
              <p className="mb-4">{pageContent.intro[language]}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src="/company1.jpg" 
                  alt={pageContent.title[language]} 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src="/company2.jpg" 
                  alt={pageContent.title[language]} 
                  width={600} 
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司历程 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2">{pageContent.history.title[language]}</h2>
            <p className="text-center text-blue-600 mb-10">{pageContent.history.subtitle[language]}</p>
            <p className="mb-10 text-lg text-gray-700">{pageContent.history.content[language]}</p>
            
            <div className="relative">
              {/* 时间线 */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* 时间点 */}
              <div className="space-y-12">
                {pageContent.history.milestones.map((milestone, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="w-1/2"></div>
                    <div className="z-10 flex flex-col items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="w-1/2 p-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                        <p>{language === 'zh' ? milestone.eventZh : milestone.eventEn}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">{pageContent.team.title[language]}</h2>
          <p className="text-center text-blue-600 mb-10">{pageContent.team.subtitle[language]}</p>
          <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 mb-10">{pageContent.team.description[language]}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pageContent.team.members.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{language === 'zh' ? member.name : member.nameEn}</h3>
                  <p className="text-blue-600 mb-4">{member.title[language]}</p>
                  <p className="text-gray-700">{member.bio[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业价值观 */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">{pageContent.values.title[language]}</h2>
          <p className="text-center text-blue-600 mb-10">{pageContent.values.subtitle[language]}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pageContent.values.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{item.title[language]}</h3>
                <p className="text-gray-700">{item.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 