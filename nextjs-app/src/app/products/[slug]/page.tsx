import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// 产品数据，实际应用中可以从API或数据库获取
const productsData = [
  {
    id: 1,
    title: 'ST-930超高速微裂纹镀铬电工艺',
    shortDesc: 'ST-930超高速微裂纹硬铬电镀技术(以下简称ST-930工艺)是建筑上汽中继器产品，本工艺面向电子产品领域，能化心，有更高的深入深及效果和力可更多的使用，一般应用到电路、',
    fullDesc: `
      <p>ST-930超高速微裂纹硬铬电镀技术(以下简称ST-930工艺)是我公司开发的新一代电镀技术，专为高端电子产品和精密机械部件设计。这一创新工艺突破了传统镀铬技术的局限，实现了更高效率、更高质量的表面处理效果。</p>
      
      <p>本工艺的主要特点包括：</p>
      <ul>
        <li>超高速电镀效率，比传统工艺速度提升30-50%</li>
        <li>形成均匀微裂纹结构，提高附着力和耐磨性</li>
        <li>优异的抗腐蚀性能，延长产品使用寿命</li>
        <li>更高的硬度和韧性平衡，满足苛刻应用环境需求</li>
        <li>适应复杂形状部件的均匀电镀</li>
      </ul>
      
      <p>ST-930工艺广泛应用于电子元器件、精密机械部件、汽车零部件、航空航天组件等行业。通过使用我们的ST-930技术，客户可以显著提高产品质量，降低生产成本，增强市场竞争力。</p>
      
      <p>我们不仅提供完整的ST-930工艺解决方案，还包括全面的技术支持和售后服务，确保客户能够充分发挥这一先进技术的优势。</p>
    `,
    image: '/images/products/st-930.jpg',
    features: [
      '超高速电镀效率',
      '形成均匀微裂纹结构',
      '优异的抗腐蚀性能',
      '高硬度和韧性平衡',
      '适应复杂形状部件'
    ],
    applications: [
      '电子元器件',
      '精密机械部件',
      '汽车零部件',
      '航空航天组件'
    ],
    slug: 'st-930'
  },
  {
    id: 2,
    title: 'ST—927高效微裂纹硬镀铬工艺',
    shortDesc: 'ST—927高效微裂纹硬镀铬添加剂工艺三代(修光用)，在镀好了后芯子使光身(如铝桶土，碳棒）的添性能（硬度高，高密度与高强韧性）的同时，立即8个7月份可收取的电，工作辐射0处使用设置，',
    fullDesc: `
      <p>ST—927高效微裂纹硬镀铬添加剂工艺是我公司开发的第三代镀铬技术，特别适用于需要表面光亮度的部件处理。该工艺能够在保证镀层硬度、密度和韧性的同时，提供卓越的表面光洁度。</p>
      
      <p>本工艺的核心优势：</p>
      <ul>
        <li>优化的添加剂配方，确保镀层质量稳定</li>
        <li>高效率电流分布，减少能源消耗</li>
        <li>微裂纹结构设计，提高应力分散能力</li>
        <li>镀层光亮度高，减少后续打磨工序</li>
        <li>环保配方，减少有害物质排放</li>
      </ul>
      
      <p>ST-927工艺特别适用于高端装饰件、精密轴承、液压缸筒等需要同时满足外观和性能要求的部件。我们的客户反馈，使用该工艺后产品返修率显著降低，生产效率提升25%以上。</p>
      
      <p>我们为客户提供完整的工艺参数设置指导、设备调试支持以及定期的技术培训，确保您能够获得最佳的应用效果。</p>
    `,
    image: '/images/products/st-927.jpg',
    features: [
      '优化的添加剂配方',
      '高效率电流分布',
      '微裂纹结构设计',
      '高镀层光亮度',
      '环保配方'
    ],
    applications: [
      '高端装饰件',
      '精密轴承',
      '液压缸筒',
      '精密机械零件'
    ],
    slug: 'st-927'
  },
  {
    id: 3,
    title: 'DX—30高效镀铬中间体',
    shortDesc: 'DX—30高效镀铬中间体是银行—种组合的配件中的体，它可以组织与应用电流水平，改善威力与拉延度的匹配，能效的产品表现快淋，镀层硬度更高，高效优极更多，具有更高的耐磨性能，在',
    fullDesc: `
      <p>DX—30高效镀铬中间体是我公司研发的专业电镀辅助材料，它是一种复合型添加剂中间体，能够显著改善镀铬过程中的电流分布和镀层性能。</p>
      
      <p>DX-30的主要技术特点：</p>
      <ul>
        <li>优化电流分布，提高阴极效率</li>
        <li>改善镀层的内应力分布</li>
        <li>增强镀层与基体的结合力</li>
        <li>提高镀层硬度和耐磨性</li>
        <li>延长镀液使用寿命，降低维护成本</li>
      </ul>
      
      <p>DX-30中间体适用于各类镀铬工艺，尤其在硬铬电镀过程中效果显著。通过添加适量的DX-30，可以使镀层硬度提高15%以上，耐磨性提升30%，同时减少镀层开裂和脱落的风险。</p>
      
      <p>我们提供详细的使用指南和技术支持，帮助客户根据自身生产需求调整DX-30的使用参数，以获得最佳效果。</p>
    `,
    image: '/images/products/dx-30.jpg',
    features: [
      '优化电流分布',
      '改善内应力分布',
      '增强结合力',
      '提高硬度和耐磨性',
      '延长镀液寿命'
    ],
    applications: [
      '硬铬电镀',
      '装饰铬电镀',
      '特种铬合金电镀',
      '高性能部件处理'
    ],
    slug: 'dx-30'
  },
  {
    id: 4,
    title: 'JLT铝锌合金高密度挤压成型阳极',
    shortDesc: '我们在AI合金中含铁量达2wt，使得高密度挤压压力工艺（1000吨级别），经过采用高品级的纯锡细料材料(纯度>99.9%)，增加铝锌合金对的导电，优化采购对品与导电性的挂接工艺，极致的',
    fullDesc: `
      <p>JLT铝锌合金高密度挤压成型阳极是我公司采用先进工艺制造的专业电镀阳极产品。我们在铝合金中添加特定比例的铁元素，采用1000吨级别的高密度挤压工艺，结合高纯度原材料(纯度>99.9%)，打造出性能卓越的电镀阳极。</p>
      
      <p>JLT阳极的核心优势：</p>
      <ul>
        <li>特殊成分配比，提高导电性能</li>
        <li>高密度挤压成型，减少气孔和杂质</li>
        <li>优化的表面处理，延长使用寿命</li>
        <li>均匀的电流分布，提高镀层质量</li>
        <li>耐腐蚀性强，适用于多种电镀环境</li>
      </ul>
      
      <p>JLT阳极广泛应用于高精度电镀、贵金属电镀以及特殊合金电镀工艺中。客户使用我们的JLT阳极后，普遍反映电镀效率提升20%以上，阳极寿命延长40%，同时镀层质量显著提高。</p>
      
      <p>我们可以根据客户的具体需求，定制不同规格和形状的JLT阳极，并提供专业的技术支持和使用建议。</p>
    `,
    image: '/images/products/jlt.jpg',
    features: [
      '特殊成分配比',
      '高密度挤压成型',
      '优化表面处理',
      '均匀电流分布',
      '强耐腐蚀性'
    ],
    applications: [
      '高精度电镀',
      '贵金属电镀',
      '特殊合金电镀',
      '精密电子元件镀层'
    ],
    slug: 'jlt'
  },
  {
    id: 5,
    title: 'FC-E电解陶瓷滤膜(陶瓷过滤器)净化技术',
    shortDesc: '传统技术的可塑性高混合成田本类产品应用实、包括对FC-E电解陶瓷滤器净化技术，可以使长使高度实的应用领域，降低三价镀铬浓度的可能，从用大大减少使用吨用',
    fullDesc: `
      <p>FC-E电解陶瓷滤膜净化技术是我公司开发的先进过滤系统，专为电镀液净化和杂质控制设计。该技术采用特殊陶瓷材料制成多孔滤膜，结合电解作用，能够高效去除电镀液中的杂质和有害物质。</p>
      
      <p>FC-E技术的主要特点：</p>
      <ul>
        <li>高精度过滤，可去除微米级杂质</li>
        <li>电解辅助作用，降解有机污染物</li>
        <li>延长电镀液使用寿命，降低更换频率</li>
        <li>减少三价铬积累，维持镀液活性</li>
        <li>模块化设计，易于安装和维护</li>
      </ul>
      
      <p>FC-E净化技术适用于各类电镀生产线，特别是对镀液纯度要求较高的精密电镀工艺。实际应用表明，使用FC-E技术后，电镀液寿命可延长2-3倍，镀层缺陷率降低60%以上，同时减少了废液处理成本。</p>
      
      <p>我们为客户提供完整的FC-E系统解决方案，包括设备选型、安装指导、操作培训和定期维护服务，确保系统长期稳定运行。</p>
    `,
    image: '/images/products/fc-e.jpg',
    features: [
      '高精度过滤',
      '电解辅助作用',
      '延长镀液寿命',
      '减少三价铬积累',
      '模块化设计'
    ],
    applications: [
      '精密电镀生产线',
      '贵金属电镀工艺',
      '高要求表面处理',
      '航空航天零部件电镀'
    ],
    slug: 'fc-e'
  },
  {
    id: 6,
    title: '铬雾抑制浮球',
    shortDesc: '多年来，铬镀在水上表面可对有多变更使能沟中特绘释的高度悬久，利用，能关人力成技绝缘访回发球管理，此高产品不浮沉，可效底镕浮水充无体现应当工况环境体育测试达水平完多，锌公司可生产不应',
    fullDesc: `
      <p>铬雾抑制浮球是我公司研发的专用电镀槽辅助产品，用于有效控制电镀过程中产生的有害铬雾。这种创新设计的浮球采用特殊材料制成，能够在电镀液表面形成物理屏障，大幅减少铬雾的释放。</p>
      
      <p>铬雾抑制浮球的技术优势：</p>
      <ul>
        <li>特殊材料制造，耐酸碱腐蚀</li>
        <li>优化形状设计，最大化覆盖面积</li>
        <li>轻质浮力均衡，稳定漂浮于液面</li>
        <li>长寿命设计，可持续使用数年</li>
        <li>无污染，不影响电镀质量</li>
      </ul>
      
      <p>铬雾抑制浮球适用于各类铬电镀工艺，特别是大型电镀槽和高温电镀工艺。客户使用后反馈，工作环境中铬雾浓度降低80%以上，显著改善了工作条件，同时减少了环保处理压力。</p>
      
      <p>我们提供不同规格的铬雾抑制浮球，以适应各种槽体尺寸。同时，我们的技术团队可以根据客户具体需求，提供定制化的浮球解决方案。</p>
    `,
    image: '/images/products/floating-ball.jpg',
    features: [
      '特殊耐腐蚀材料',
      '优化形状设计',
      '轻质浮力均衡',
      '长寿命设计',
      '无污染'
    ],
    applications: [
      '铬电镀工艺',
      '大型电镀槽',
      '高温电镀工艺',
      '需要环保改造的电镀线'
    ],
    slug: 'floating-ball'
  }
];

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = productsData.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* 页面标题区域 */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <div className="text-lg text-blue-100">产品详情</div>
        </div>
      </div>

      {/* 产品详情 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-6 bg-gray-50">
              <div className="w-full h-64 bg-gray-300 flex items-center justify-center mb-6">
                <span className="text-gray-500">产品图片</span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">产品特点</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">应用领域</h3>
                <ul className="space-y-2">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="md:w-2/3 p-6">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: product.fullDesc }} />
              
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  咨询此产品
                </Link>
                <Link 
                  href="/products" 
                  className="inline-block ml-4 text-blue-600 hover:text-blue-800 hover:underline"
                >
                  返回产品列表
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* 相关产品 */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">相关产品</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productsData
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="h-40 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">产品图片</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{relatedProduct.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.shortDesc}</p>
                    <Link 
                      href={`/products/${relatedProduct.slug}`} 
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      查看详情 →
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// 生成静态路径
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
} 