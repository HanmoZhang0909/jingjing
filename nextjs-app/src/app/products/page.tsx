import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'ST-930超高速微裂纹镀铬电工艺',
    desc: 'ST-930超高速微裂纹硬铬电镀技术(以下简称ST-930工艺)是建筑上汽中继器产品，本工艺面向电子产品领域，能化心，有更高的深入深及效果和力可更多的使用，一般应用到电路、',
    image: '/images/products/st-930.jpg',
    slug: 'st-930'
  },
  {
    id: 2,
    title: 'ST—927高效微裂纹硬镀铬工艺',
    desc: 'ST—927高效微裂纹硬镀铬添加剂工艺三代(修光用)，在镀好了后芯子使光身(如铝桶土，碳棒）的添性能（硬度高，高密度与高强韧性）的同时，立即8个7月份可收取的电，工作辐射0处使用设置，',
    image: '/images/products/st-927.jpg',
    slug: 'st-927'
  },
  {
    id: 3,
    title: 'DX—30高效镀铬中间体',
    desc: 'DX—30高效镀铬中间体是银行—种组合的配件中的体，它可以组织与应用电流水平，改善威力与拉延度的匹配，能效的产品表现快淋，镀层硬度更高，高效优极更多，具有更高的耐磨性能，在',
    image: '/images/products/dx-30.jpg',
    slug: 'dx-30'
  },
  {
    id: 4,
    title: 'JLT铝锌合金高密度挤压成型阳极',
    desc: '我们在AI合金中含铁量达2wt，使得高密度挤压压力工艺（1000吨级别），经过采用高品级的纯锡细料材料(纯度>99.9%)，增加铝锌合金对的导电，优化采购对品与导电性的挂接工艺，极致的',
    image: '/images/products/jlt.jpg',
    slug: 'jlt'
  },
  {
    id: 5,
    title: 'FC-E电解陶瓷滤膜(陶瓷过滤器)净化技术',
    desc: '传统技术的可塑性高混合成田本类产品应用实、包括对FC-E电解陶瓷滤器净化技术，可以使长使高度实的应用领域，降低三价镀铬浓度的可能，从用大大减少使用吨用',
    image: '/images/products/fc-e.jpg',
    slug: 'fc-e'
  },
  {
    id: 6,
    title: '铬雾抑制浮球',
    desc: '多年来，铬镀在水上表面可对有多变更使能沟中特绘释的高度悬久，利用，能关人力成技绝缘访回发球管理，此高产品不浮沉，可效底镕浮水充无体现应当工况环境体育测试达水平完多，锌公司可生产不应',
    image: '/images/products/floating-ball.jpg',
    slug: 'floating-ball'
  }
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 页面标题区域 */}
      <div className="relative w-full h-64 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">产品与工艺</h1>
          <div className="text-lg text-blue-100">PRODUCTS & TECHNOLOGY</div>
        </div>
      </div>

      {/* 产品列表 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3 h-48 md:h-auto relative">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">产品图片</span>
                </div>
              </div>
              <div className="md:w-2/3 p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h2>
                <p className="text-gray-600 mb-5">{product.desc}</p>
                <Link 
                  href={`/products/${product.slug}`} 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEO优化文本内容 */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">我们的产品与技术优势</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              东莞晶品表面技术有限公司专注于金属表面处理技术的研发与应用，多年来我们不断创新和优化各种电镀工艺，为客户提供高品质、高性能的表面处理解决方案。我们的产品涵盖多个领域，包括超高速微裂纹镀铬技术、高效镀铬中间体、铝锌合金阳极以及各种环保型电镀添加剂等。
            </p>
            <p className="mb-4">
              我们的ST-930超高速微裂纹镀铬电工艺在行业内处于领先地位，不仅能够提供出色的耐腐蚀性能，还能保证镀层的均匀性和附着力。这种工艺特别适用于电子产品、航空航天零部件、汽车配件等高精密要求的领域。
            </p>
            <p className="mb-4">
              企业拥有先进的生产设备和专业的技术团队，我们不断探索创新技术，追求产品质量的持续提升。我们的产品已广泛应用于电子、汽车、通讯、家电等多个行业，赢得了众多客户的信赖与好评。
            </p>
            <p>
              欢迎联系我们，了解更多关于我们产品与工艺的详细信息，我们的技术团队将为您提供专业的咨询和支持。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 