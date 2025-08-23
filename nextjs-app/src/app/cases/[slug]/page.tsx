import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// 案例数据（实际应用中可以从API或数据库获取）
// 这里我们简化为直接导入，但应该在实际应用中创建一个共享的数据源
const cases = [
  {
    id: 1,
    title: '某知名汽车零部件厂商电镀技术改造项目',
    summary: '通过应用我司ST-930超高速微裂纹镀铬电工艺，帮助客户提升产品质量和生产效率，降低生产成本，提高市场竞争力。',
    content: `
      <p>客户是一家国内知名汽车零部件制造商，主要生产汽车发动机配件和底盘零部件。面临行业竞争加剧和成本上升的双重压力，客户急需提高产品质量和生产效率。</p>
      
      <h3>面临的挑战</h3>
      <ul>
        <li>传统镀铬工艺效率低，生产周期长</li>
        <li>产品表面处理质量不稳定，返工率高</li>
        <li>环保压力大，传统工艺污染严重</li>
        <li>生产成本持续上升</li>
      </ul>
      
      <h3>我们的解决方案</h3>
      <p>我们为客户提供了完整的ST-930超高速微裂纹镀铬电工艺解决方案，包括：</p>
      <ul>
        <li>生产线技术改造方案设计</li>
        <li>核心材料和设备供应</li>
        <li>工艺参数优化</li>
        <li>技术人员培训</li>
        <li>全程技术支持</li>
      </ul>
      
      <h3>成果</h3>
      <p>通过应用我司的先进工艺，客户获得了显著成效：</p>
      <ul>
        <li>生产效率提升40%，周期缩短35%</li>
        <li>产品合格率提高至99.5%，大幅降低返工率</li>
        <li>镀层硬度和耐磨性提升25%，延长产品使用寿命</li>
        <li>整体生产成本降低15%</li>
        <li>环保指标全面达标，减少废水排放50%</li>
      </ul>
    `,
    image: '/images/cases/automotive-parts.jpg',
    industry: '汽车制造',
    date: '2022-06-15',
    slug: 'automotive-parts-plating'
  },
  {
    id: 2,
    title: '电子元器件厂商精密电镀工艺优化项目',
    summary: '为某电子元器件厂商提供DX-30高效镀铬中间体和技术支持，解决电镀均匀性问题，提高产品稳定性和良品率。',
    content: `
      <p>客户是一家专业生产电子连接器的企业，主要为通讯设备、医疗设备和航空电子产品提供高精密连接器。随着下游客户要求的提高，客户面临产品电镀质量和一致性的严峻挑战。</p>
      
      <h3>面临的挑战</h3>
      <ul>
        <li>微型连接器结构复杂，电镀均匀性差</li>
        <li>批次间产品质量波动大</li>
        <li>高频应用下接触电阻不稳定</li>
        <li>镀层附着力在极端环境下表现不佳</li>
      </ul>
      
      <h3>我们的解决方案</h3>
      <p>我们针对客户需求，提供了定制化解决方案：</p>
      <ul>
        <li>提供DX-30高效镀铬中间体，优化电流分布</li>
        <li>设计特殊治具和挂具，改善电场分布</li>
        <li>开发专用前处理工艺，提高基材活性</li>
        <li>建立精确的过程控制系统</li>
        <li>提供技术培训和长期技术支持</li>
      </ul>
      
      <h3>成果</h3>
      <p>项目实施后取得了显著成效：</p>
      <ul>
        <li>产品电镀均匀性提高60%，批次一致性达到业内领先水平</li>
        <li>产品良品率提升至99.8%</li>
        <li>高频应用下接触电阻稳定性提高45%</li>
        <li>产品通过极端环境测试，包括高温高湿、盐雾和热冲击测试</li>
        <li>客户因产品质量提升成功拓展了高端市场</li>
      </ul>
    `,
    image: '/images/cases/electronic-components.jpg',
    industry: '电子制造',
    date: '2022-09-22',
    slug: 'electronic-components-plating'
  },
  {
    id: 3,
    title: '某通讯设备厂铬雾治理环保改造项目',
    summary: '应用铬雾抑制浮球技术，帮助客户解决铬雾污染问题，显著改善工作环境，同时提高生产效率。',
    content: `
      <p>客户是一家专业生产通讯设备零部件的企业，由于生产过程中的电镀工序产生大量铬雾，造成环境污染和工人健康隐患，同时面临环保部门的严格监管。</p>
      
      <h3>面临的挑战</h3>
      <ul>
        <li>生产过程中铬雾浓度高，工作环境恶劣</li>
        <li>传统抽风系统能耗高，效果有限</li>
        <li>环保部门要求限期整改</li>
        <li>需要在不影响生产效率的前提下进行改造</li>
      </ul>
      
      <h3>我们的解决方案</h3>
      <p>我们为客户设计了一套综合铬雾治理方案：</p>
      <ul>
        <li>提供定制化铬雾抑制浮球，覆盖电镀槽液面</li>
        <li>优化电镀工艺参数，减少铬雾产生</li>
        <li>设计局部抽风和净化系统</li>
        <li>建立完整的环境监测体系</li>
      </ul>
      
      <h3>成果</h3>
      <p>项目实施后，客户获得了全方位的收益：</p>
      <ul>
        <li>工作区域铬雾浓度降低85%，远低于国家标准限值</li>
        <li>通风系统能耗降低40%</li>
        <li>工人工作环境显著改善，减少健康隐患</li>
        <li>顺利通过环保部门验收</li>
        <li>由于铬雾减少，电镀液损耗降低，延长了镀液使用寿命，间接降低了生产成本</li>
      </ul>
    `,
    image: '/images/cases/environmental-improvement.jpg',
    industry: '通讯设备制造',
    date: '2023-01-18',
    slug: 'chrome-mist-control'
  },
  {
    id: 4,
    title: '高端医疗器械部件表面处理项目',
    summary: '为医疗器械制造商提供FC-E电解陶瓷滤膜净化技术，解决医疗器械表面处理高洁净度需求，满足国际标准要求。',
    content: `
      <p>客户是一家生产高端医疗器械的企业，主要产品为植入式医疗设备和手术器械。这类产品对表面处理的纯净度和生物相容性有极高要求，客户需要符合国际医疗器械标准的表面处理解决方案。</p>
      
      <h3>面临的挑战</h3>
      <ul>
        <li>医疗器械表面处理要求极高的纯净度</li>
        <li>需符合ISO 13485和FDA标准</li>
        <li>产品表面不允许有任何杂质残留</li>
        <li>需要保证生物相容性和长期稳定性</li>
      </ul>
      
      <h3>我们的解决方案</h3>
      <p>针对医疗级别的严格要求，我们提供了定制化解决方案：</p>
      <ul>
        <li>应用FC-E电解陶瓷滤膜净化技术，确保电镀液超高纯度</li>
        <li>设计医疗级无尘电镀工艺流程</li>
        <li>提供特殊配方的生物相容性电镀添加剂</li>
        <li>建立全参数实时监控系统</li>
        <li>提供完整的质量追溯体系</li>
      </ul>
      
      <h3>成果</h3>
      <p>项目实施后取得了卓越成效：</p>
      <ul>
        <li>产品表面处理纯度达到医疗级要求，杂质含量低于1ppm</li>
        <li>所有产品顺利通过生物相容性测试</li>
        <li>产品获得FDA和欧盟CE认证</li>
        <li>客户借此成功开拓国际高端医疗器械市场</li>
        <li>建立了长期技术合作关系，持续开发新型医疗器械表面处理技术</li>
      </ul>
    `,
    image: '/images/cases/medical-devices.jpg',
    industry: '医疗器械',
    date: '2023-04-05',
    slug: 'medical-device-surface-treatment'
  },
  {
    id: 5,
    title: '军工电子设备防腐蚀处理项目',
    summary: '为军工电子设备厂商提供JLT铝锌合金高密度挤压成型阳极技术，解决极端环境下电子设备防腐蚀难题。',
    content: `
      <p>客户是一家军工电子设备制造商，其产品需要在极端环境下长期稳定工作，对防腐蚀和耐候性有极高要求。传统防腐蚀技术难以满足其苛刻的使用条件。</p>
      
      <h3>面临的挑战</h3>
      <ul>
        <li>设备需在高盐分、高湿度、高温差环境下长期工作</li>
        <li>产品使用寿命要求超过15年</li>
        <li>防腐蚀处理不得影响电子元器件性能</li>
        <li>需要满足军工级质量标准</li>
      </ul>
      
      <h3>我们的解决方案</h3>
      <p>我们为客户提供了全面的防腐蚀解决方案：</p>
      <ul>
        <li>应用JLT铝锌合金高密度挤压成型阳极技术</li>
        <li>开发特殊合金电镀工艺，提供多层复合防护</li>
        <li>设计特殊密封处理工艺</li>
        <li>提供全方位技术支持和产品测试</li>
      </ul>
      
      <h3>成果</h3>
      <p>项目取得了突破性成果：</p>
      <ul>
        <li>产品通过2000小时盐雾测试，远超行业标准</li>
        <li>在-40℃至+85℃温度循环测试中表现稳定</li>
        <li>产品防腐蚀寿命预测超过20年</li>
        <li>获得军工产品质量认证</li>
        <li>客户因此获得多个重要军工项目</li>
      </ul>
    `,
    image: '/images/cases/military-electronics.jpg',
    industry: '军工电子',
    date: '2023-06-30',
    slug: 'military-electronics-coating'
  },
  {
    id: 6,
    title: '航空零部件表面硬化处理项目',
    summary: '采用ST—927高效微裂纹硬镀铬工艺，为航空零部件提供卓越的硬度和耐磨性，满足航空领域的严格要求。',
    content: `
      <p>客户是一家航空零部件制造商，专注于生产飞机发动机和起落架关键零部件。这些部件工作在高负荷、高磨损环境下，对表面硬度和耐磨性有极高要求。</p>
      
      <h3>面临的挑战</h3>
      <ul>
        <li>零部件需承受极端工作条件和高频振动</li>
        <li>表面硬度和耐磨性要求极高</li>
        <li>部件形状复杂，难以均匀处理</li>
        <li>需符合航空标准AS9100</li>
      </ul>
      
      <h3>我们的解决方案</h3>
      <p>我们为客户定制了专业解决方案：</p>
      <ul>
        <li>应用ST—927高效微裂纹硬镀铬工艺</li>
        <li>设计特殊治具，确保复杂形状部件均匀处理</li>
        <li>开发多级质量控制流程</li>
        <li>建立全参数记录和可追溯系统</li>
      </ul>
      
      <h3>成果</h3>
      <p>项目实施后，客户获得了显著收益：</p>
      <ul>
        <li>零部件表面硬度达到HV950以上，远超传统处理工艺</li>
        <li>耐磨性测试表现优异，磨损率降低70%</li>
        <li>所有产品通过航空标准测试</li>
        <li>零部件使用寿命延长2.5倍</li>
        <li>客户因产品性能提升获得多个重要航空项目合同</li>
      </ul>
    `,
    image: '/images/cases/aerospace-parts.jpg',
    industry: '航空制造',
    date: '2023-08-12',
    slug: 'aerospace-parts-treatment'
  }
];

export default function CaseDetail({ params }: { params: { slug: string } }) {
  const caseItem = cases.find(c => c.slug === params.slug);
  
  if (!caseItem) {
    notFound();
  }

  // 获取相关案例（同一行业的其他案例，或者随机案例）
  const relatedCases = cases
    .filter(c => c.id !== caseItem.id && c.industry === caseItem.industry)
    .slice(0, 2); // 取最多2个相关案例
  
  // 如果相关案例不足两个，补充其他行业的案例
  if (relatedCases.length < 2) {
    const otherCases = cases
      .filter(c => c.id !== caseItem.id && c.industry !== caseItem.industry)
      .slice(0, 2 - relatedCases.length);
    
    relatedCases.push(...otherCases);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 页面标题区域 */}
      <div className="relative w-full h-64 bg-gradient-to-r from-teal-600 to-green-600">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center px-4">{caseItem.title}</h1>
          <div className="text-lg flex items-center space-x-4">
            <span className="inline-block bg-teal-700 px-3 py-1 rounded-full text-sm">
              {caseItem.industry}
            </span>
            <span>{caseItem.date}</span>
          </div>
        </div>
      </div>

      {/* 案例详情 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="h-64 md:h-80 bg-gray-300 flex items-center justify-center mb-8 rounded">
              <span className="text-gray-500">案例图片</span>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">案例概述</h2>
              <p className="text-gray-700 text-lg">{caseItem.summary}</p>
            </div>
            
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: caseItem.content }}></div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/contact" 
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white text-center px-6 py-3 rounded-md font-medium transition-colors"
              >
                咨询类似解决方案
              </Link>
              <Link 
                href="/cases" 
                className="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 text-center px-6 py-3 rounded-md font-medium transition-colors"
              >
                返回案例列表
              </Link>
            </div>
          </div>
        </div>
        
        {/* 相关案例 */}
        {relatedCases.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">相关案例</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedCases.map(related => (
                <div key={related.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">案例图片</span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{related.title}</h3>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {related.industry}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{related.summary}</p>
                    <Link 
                      href={`/cases/${related.slug}`} 
                      className="text-teal-600 hover:text-teal-800 hover:underline"
                    >
                      查看详情 →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 生成静态路径
export async function generateStaticParams() {
  return cases.map((caseItem) => ({
    slug: caseItem.slug,
  }));
} 