// 新闻数据类型
export interface NewsArticle {
  id: number;
  titleZh: string;
  titleEn: string;
  summaryZh: string;
  summaryEn: string;
  contentZh: string;
  contentEn: string;
  image: string;
  date: string;
  authorZh: string;
  authorEn: string;
  slug: string;
}

// 新闻文章数据
export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    titleZh: '深圳新能源产业创新发展论坛成功举办',
    titleEn: 'Shenzhen New Energy Industry Innovation Development Forum Successfully Held',
    summaryZh: '论坛聚焦新能源技术创新与产业化应用，吸引了众多业内专家和企业代表参与。',
    summaryEn: 'The forum focused on new energy technology innovation and industrial applications, attracting many industry experts and business representatives.',
    contentZh: `
      <p>近日，由深圳市发展和改革委员会指导，深圳市工业和信息化局主办的"2023深圳新能源产业创新发展论坛"在深圳会展中心成功举办。本次论坛以"创新引领·绿色发展"为主题，聚焦新能源技术创新与产业化应用，吸引了众多业内专家和企业代表参与。</p>
      
      <p>论坛上，与会专家就新能源汽车、光伏发电、储能技术等热点领域进行了深入探讨，分享了最新的技术突破和市场趋势。深圳市工业和信息化局相关负责人表示，深圳将继续加大对新能源产业的支持力度，促进产业链上下游协同发展，助力深圳建设成为全球新能源创新高地。</p>
      
      <p>据悉，深圳新能源产业近年来保持高速增长，2022年产值突破5000亿元，成为引领深圳经济高质量发展的重要引擎。未来，深圳将进一步完善新能源产业发展政策，加强关键技术攻关，推动新能源与人工智能、大数据等新兴技术深度融合，构建更加完善的新能源产业生态体系。</p>
    `,
    contentEn: `
      <p>Recently, the "2023 Shenzhen New Energy Industry Innovation Development Forum," guided by the Shenzhen Development and Reform Commission and hosted by the Shenzhen Industry and Information Technology Bureau, was successfully held at the Shenzhen Convention and Exhibition Center. The forum, themed "Innovation Leading Green Development," focused on new energy technology innovation and industrial applications, attracting numerous industry experts and business representatives.</p>
      
      <p>During the forum, participating experts conducted in-depth discussions on hot topics such as new energy vehicles, photovoltaic power generation, and energy storage technology, sharing the latest technological breakthroughs and market trends. A representative from the Shenzhen Industry and Information Technology Bureau stated that Shenzhen will continue to increase support for the new energy industry, promote coordinated development of the upstream and downstream industrial chain, and help Shenzhen become a global innovation hub for new energy.</p>
      
      <p>According to reports, Shenzhen's new energy industry has maintained rapid growth in recent years, with output value exceeding 500 billion yuan in 2022, becoming an important engine driving Shenzhen's high-quality economic development. In the future, Shenzhen will further improve new energy industry development policies, strengthen key technology research, promote deep integration of new energy with emerging technologies such as artificial intelligence and big data, and build a more complete new energy industry ecosystem.</p>
    `,
    image: '/images/news/news1.jpg',
    date: '2023-11-15',
    authorZh: '张明',
    authorEn: 'Zhang Ming',
    slug: 'shenzhen-new-energy-forum'
  },
  {
    id: 2,
    titleZh: '我司成功研发新型太阳能电池技术',
    titleEn: 'Our Company Successfully Develops New Solar Cell Technology',
    summaryZh: '突破性技术将太阳能电池转换效率提高至26%，处于国际领先水平。',
    summaryEn: 'Breakthrough technology increases solar cell conversion efficiency to 26%, reaching international leading levels.',
    contentZh: `
      <p>近日，我司研发团队宣布成功研发出新一代高效太阳能电池技术。此项技术采用独特的钙钛矿-硅叠层结构，将太阳能转换效率提升至26%，较传统技术提升约20%，达到国际领先水平。</p>
      
      <p>该技术的核心突破在于解决了钙钛矿材料稳定性差的行业难题，通过创新性的界面工程和封装技术，使电池组件寿命延长至25年以上，满足商业化应用需求。同时，新技术降低了生产成本，有望使太阳能发电成本进一步降低15%-20%。</p>
      
      <p>公司首席技术官李博士表示："这一突破标志着我们在可再生能源领域迈出了重要一步。我们计划在未来12个月内实现量产，为全球清洁能源转型做出贡献。"</p>
      
      <p>业内专家评价，该技术将大幅提升光伏发电的经济性，加速平价上网进程，对推动我国能源结构调整和碳达峰、碳中和目标实现具有重要意义。</p>
    `,
    contentEn: `
      <p>Recently, our company's R&D team announced the successful development of a new generation of high-efficiency solar cell technology. This technology adopts a unique perovskite-silicon tandem structure, increasing solar energy conversion efficiency to 26%, about 20% higher than traditional technology, reaching an international leading level.</p>
      
      <p>The core breakthrough of this technology lies in solving the industry challenge of poor stability in perovskite materials. Through innovative interface engineering and encapsulation technology, the lifespan of battery modules has been extended to over 25 years, meeting the needs of commercial applications. At the same time, the new technology has reduced production costs, potentially further lowering solar power generation costs by 15%-20%.</p>
      
      <p>Dr. Li, the company's Chief Technology Officer, stated: "This breakthrough marks an important step for us in the renewable energy field. We plan to achieve mass production within the next 12 months, contributing to the global clean energy transition."</p>
      
      <p>Industry experts evaluate that this technology will significantly enhance the economics of photovoltaic power generation, accelerate the process of grid parity, and is of great significance for promoting China's energy structure adjustment and achieving carbon peak and carbon neutrality goals.</p>
    `,
    image: '/images/news/news2.jpg',
    date: '2023-10-28',
    authorZh: '李强',
    authorEn: 'Li Qiang',
    slug: 'new-solar-cell-technology'
  },
  {
    id: 3,
    titleZh: '能源行业数字化转型白皮书发布',
    titleEn: 'Energy Industry Digital Transformation White Paper Released',
    summaryZh: '白皮书分析了能源行业数字化转型趋势，提出了未来五年的发展路径。',
    summaryEn: 'The white paper analyzes digital transformation trends in the energy industry and proposes development pathways for the next five years.',
    contentZh: `
      <p>日前，中国能源研究会联合多家行业龙头企业共同发布《能源行业数字化转型白皮书(2023)》。白皮书全面分析了能源行业数字化转型的现状、挑战和未来趋势，为行业企业提供了重要参考。</p>
      
      <p>白皮书指出，数字技术正深刻改变能源行业的生产方式和商业模式。人工智能、大数据、物联网等技术在能源生产、输送、存储、消费全链条的应用，正显著提升能源系统效率，降低运营成本，增强系统安全性和可靠性。</p>
      
      <p>同时，白皮书也指出当前能源行业数字化转型面临标准不统一、数据孤岛、网络安全等挑战。针对这些问题，白皮书提出了构建开放共享的能源数据生态、建立统一的行业标准体系、强化网络安全保障等建议。</p>
      
      <p>白皮书预测，到2028年，我国能源行业数字化转型将进入深度融合阶段，能源互联网将实现规模化应用，虚拟电厂、需求侧响应等新模式将广泛普及，为构建清洁低碳、安全高效的能源体系提供有力支撑。</p>
    `,
    contentEn: `
      <p>Recently, the China Energy Research Association, together with several industry-leading enterprises, jointly released the "Energy Industry Digital Transformation White Paper (2023)." The white paper comprehensively analyzes the current status, challenges, and future trends of digital transformation in the energy industry, providing important references for industry enterprises.</p>
      
      <p>The white paper points out that digital technology is profoundly changing the production methods and business models of the energy industry. The application of technologies such as artificial intelligence, big data, and the Internet of Things across the entire chain of energy production, transmission, storage, and consumption is significantly improving energy system efficiency, reducing operating costs, and enhancing system security and reliability.</p>
      
      <p>At the same time, the white paper also highlights challenges currently faced in the digital transformation of the energy industry, including non-uniform standards, data silos, and cybersecurity issues. In response to these problems, the white paper proposes recommendations such as building an open and shared energy data ecosystem, establishing a unified industry standard system, and strengthening cybersecurity guarantees.</p>
      
      <p>The white paper predicts that by 2028, China's energy industry digital transformation will enter a stage of deep integration, the energy internet will achieve large-scale application, and new models such as virtual power plants and demand-side response will become widespread, providing strong support for building a clean, low-carbon, safe, and efficient energy system.</p>
    `,
    image: '/images/news/news3.jpg',
    date: '2023-09-20',
    authorZh: '王晓峰',
    authorEn: 'Wang Xiaofeng',
    slug: 'energy-digital-transformation-whitepaper'
  }
];