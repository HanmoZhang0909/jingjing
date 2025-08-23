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
      zh: '东莞晶品表面技术有限公司成立于2004年，我们专注于各类金属表面处理行业，专注于表面技术的研发和化工产品（高效镀层设备与添加剂）的制造。经过多年的努力研发，基于东莞晶品新材料有限公司强大的质量保障体系的支持，我们的产品获得了国内和国外很多客户的认可，给客户带来了良好的增值与减少的下降，并且环保稳定的体验增加了信赖。',
      en: 'Dongguan Jingpin Surface Technology Co., Ltd. was established in 2004. We focus on various metal surface treatment industries, specializing in the research and development of surface technology and the manufacturing of chemical products (efficient plating equipment and additives). After years of research and development efforts, based on the strong quality assurance system of Dongguan Jingpin New Materials Co., Ltd., our products have been recognized by many domestic and foreign customers, bringing good value addition and reduced costs, and the environmentally friendly and stable experience has increased trust.'
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
        zh: '公司成立至今，我们一直坚持"科技创新、品质为先"的企业宗旨。通过不断研发创新，提高产品品质和服务水平，我们已成为行业内具有影响力的企业之一。未来，我们将继续致力于表面处理技术的研发和应用，为客户提供更优质的产品和服务。',
        en: 'Since the establishment of the company, we have always adhered to the corporate mission of "technological innovation and quality first." Through continuous research and innovation, improving product quality and service levels, we have become one of the influential enterprises in the industry. In the future, we will continue to focus on the research and application of surface treatment technology, providing customers with better products and services.'
      },
      milestones: [
        {
          year: '2004',
          eventZh: '公司成立，专注于表面处理技术研发',
          eventEn: 'Company established, focusing on surface treatment technology R&D'
        },
        {
          year: '2008',
          eventZh: '成功研发ST-930系列产品，打破国外技术垄断',
          eventEn: 'Successfully developed ST-930 series products, breaking foreign technology monopoly'
        },
        {
          year: '2012',
          eventZh: '通过ISO9001质量管理体系认证',
          eventEn: 'Passed ISO9001 quality management system certification'
        },
        {
          year: '2016',
          eventZh: '设立美国分公司，产品出口至全球20多个国家和地区',
          eventEn: 'Established a branch in the United States, exporting products to more than 20 countries and regions worldwide'
        },
        {
          year: '2020',
          eventZh: '成功研发环保型表面处理剂，获得多项发明专利',
          eventEn: 'Successfully developed environmentally friendly surface treatment agents, obtaining multiple invention patents'
        },
        {
          year: '2023',
          eventZh: '新工厂投产，年产能提升50%',
          eventEn: 'New factory put into production, annual capacity increased by 50%'
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
        zh: '我们拥有一支专业的研发和技术服务团队，团队成员均有丰富的行业经验和专业知识。',
        en: 'We have a professional R&D and technical service team, all team members have rich industry experience and professional knowledge.'
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
            zh: '20年表面处理行业经验，曾就职于多家知名企业，带领团队取得多项技术突破。',
            en: '20 years of experience in the surface treatment industry, previously worked for several well-known companies, led the team to achieve multiple technological breakthroughs.'
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
            zh: '化学工程博士，专注于电镀添加剂研究，拥有多项发明专利。',
            en: 'Ph.D. in Chemical Engineering, focusing on research of electroplating additives, holds multiple invention patents.'
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
            zh: '负责公司国内外市场的拓展，建立了完善的销售网络和客户服务体系。',
            en: 'Responsible for the expansion of domestic and foreign markets, established a comprehensive sales network and customer service system.'
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
            zh: '品质至上',
            en: 'Quality First'
          },
          description: {
            zh: '坚持高标准，对产品品质零妥协，确保为客户提供稳定可靠的产品。',
            en: 'Adhere to high standards, zero compromise on product quality, ensure stable and reliable products for customers.'
          }
        },
        {
          title: {
            zh: '创新驱动',
            en: 'Innovation Driven'
          },
          description: {
            zh: '不断投入研发，持续创新，引领行业技术发展方向。',
            en: 'Continuously invest in R&D, sustain innovation, lead the direction of industry technology development.'
          }
        },
        {
          title: {
            zh: '客户为先',
            en: 'Customer First'
          },
          description: {
            zh: '以客户需求为中心，提供专业的技术支持和完善的售后服务。',
            en: 'Customer needs centered, provide professional technical support and comprehensive after-sales service.'
          }
        },
        {
          title: {
            zh: '环保责任',
            en: 'Environmental Responsibility'
          },
          description: {
            zh: '注重产品的环保性能，积极承担社会责任，推动行业绿色发展。',
            en: 'Focus on environmental performance of products, actively assume social responsibility, promote green development of the industry.'
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