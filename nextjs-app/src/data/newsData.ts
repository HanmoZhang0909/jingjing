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
  category: string;
  tags: string[];
  readTime: number; // 阅读时间（分钟）
}

// 新闻文章数据
export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    titleZh: 'DX-30微裂纹硬铬催化剂中间体技术突破，电流效率提升至25-28%',
    titleEn: 'DX-30 Micro Crack Hard Chromium Catalyst Intermediate Technology Breakthrough, Current Efficiency Improved to 25-28%',
    summaryZh: '我司成功开发DX-30微裂纹硬铬催化剂中间体，电流效率提升25%-27%，沉积速度是传统技术的两倍。',
    summaryEn: 'Our company successfully developed DX-30 micro crack hard chromium catalyst intermediate, improving current efficiency by 25%-27%, with deposition speed twice that of traditional technology.',
    contentZh: `
      <p>近日，东莞晶晶新材料有限公司宣布成功开发DX-30微裂纹硬铬催化剂中间体（产品编号ST-930），在硬铬电镀技术领域取得重大突破。该产品是一种固体粉末中间体，可显著提高电流效率，减少镀液对阳极板的腐蚀。</p>
      
      <p>DX-30技术具有多项突出优势：更高效的阴极电流（高达25%-27%），沉积速度快，是传统技术的两倍。在阴极电流密度70A/dm²，温度55-65℃条件下，电流效率高达25-28%。铬层硬度高，符合GB9790-88标准，硬度范围860-1200 HV，耐用性提高20%-30%。</p>
      
      <p>该产品使成品表面更光滑、更亮，增加涂层硬度，产生更多微裂纹，具有更高的耐腐蚀性。铬层与基体结合更牢固，预处理操作更简单。铬溶液分散性更好，层厚更均匀，表面更光滑，几乎无滚痕。铬溶液不含氟化物，可防止电镀过程中因低电流对工件的腐蚀。</p>
      
      <p>技术参数：外观为白色粉末，分子式NaSO3CH2SO3Na，分子量220.12，纯度99.99%以上。工艺参数为CrO3 250g/L，DX-30 4g/L，工作温度55-65℃，电流密度70A/dm²。</p>
    `,
    contentEn: `
      <p>Recently, Dongguan Jingjing Surface Technology Co., Ltd. announced the successful development of DX-30 micro crack hard chromium catalyst intermediate (Product No. ST-930), achieving a major breakthrough in hard chromium electroplating technology. This product is a solid powder intermediate that can significantly improve current efficiency and reduce corrosion of the plating solution on the anode plate.</p>
      
      <p>DX-30 technology has multiple outstanding advantages: more efficient cathode current (up to 25%-27%), fast deposition speed, twice that of traditional technology. Under cathode current density 70A/dm², temperature 55-65℃, current efficiency as high as 25-28%. High hardness chromium layer, meets GB9790-88 standard, hardness range 860-1200 HV, durability increased by 20%-30%.</p>
      
      <p>This product makes the surface of the finished product smoother and brighter, increases the hardness of the coating, generates more microcracks, and has higher corrosion resistance. The chromium layer bonds more firmly to the substrate, and the pre-treatment operation is simpler. The chromium solution has better dispersibility, more uniform layer thickness, and a smoother surface with almost no rolling.</p>
      
      <p>Technical specifications: White powder appearance, molecular formula NaSO3CH2SO3Na, molecular weight 220.12, purity above 99.99%. Process parameters: CrO3 250g/L, DX-30 4g/L, working temperature 55-65℃, current density 70A/dm².</p>
    `,
    image: '/独立站图片素材/Current_Efficiency_Comparison_Graph_370x350.png',
    date: '2025-10-15',
    authorZh: '张含墨',
    authorEn: 'Hanmo Zhang',
    slug: 'dx30-technology-breakthrough',
    category: 'tech',
    tags: ['DX-30', '硬铬电镀', '催化剂', '技术突破'],
    readTime: 5
  },
  {
    id: 2,
    titleZh: 'FC-T高密度挤压合金阳极成功量产，使用寿命延长至5年',
    titleEn: 'FC-T High-Density Extruded Alloy Anode Successfully Mass Produced, Service Life Extended to 5 Years',
    summaryZh: '我司FC-T铅锡锑高密度挤压合金阳极成功实现量产，使用寿命达3-5年，导电性提升30%。',
    summaryEn: 'Our company\'s FC-T lead-tin-antimony high-density extruded alloy anode successfully achieved mass production, with service life reaching 3-5 years and conductivity improved by 30%.',
    contentZh: `
      <p>近日，东莞晶晶新材料有限公司宣布FC-T铅锡锑高密度挤压合金阳极成功实现量产，标志着公司在镀铬阳极制造技术方面取得重大突破。该产品采用高纯度铅锡锑（含少量银）为原料混合，经过800吨挤压机挤压成型，内部结构致密度高。</p>
      
      <p>FC-T阳极具有多项技术优势：使用寿命长，挤压成型避免了铸造产生的气孔、冷隔，导电性与耐用性能极大提升。沉积速度快，致密性高，导电性能提升，槽电压下降，节能环保。良品率提高，避免合金成分分布不均匀导致的阳极导电不均匀现象。</p>
      
      <p>该产品强度更高，密度高让强度更高，可制造10米长度的阳极，使用中不会因重力而伸长。使用寿命达3-5年，节省约30%的电力消耗，在环保方面实现根本性改善。采用高纯度铅锡锑（含少量银）为原料，锡含量3-10%，锑含量2-3%，银含量0.5-1%。</p>
      
      <p>相比传统铸造工艺，FC-T阳极解决了传统电镀硬铬阳极多年来使用铅锑或铅锡锑金属铸造工艺的问题，避免了内部金相组织疏松、冷隔、铸造结节、缩孔和氧化物夹杂等缺陷，大大提升了产品质量和性能。</p>
    `,
    contentEn: `
      <p>Recently, Dongguan Jingjing New Materials Co., Ltd. announced the successful mass production of FC-T lead-tin-antimony high-density extruded alloy anode, marking a major breakthrough in the company's chrome plating anode manufacturing technology. This product uses high-purity lead-tin-antimony (with a small amount of silver) as raw materials, mixed and extruded into shape by an 800-ton press, resulting in high internal structure density.</p>
      
      <p>FC-T anode has multiple technical advantages: long service life, extrusion molding avoids porosity and cold shuts from casting, greatly enhancing conductivity and durability. Rapid deposition rate, high density improves conductivity, reduces cell voltage, energy saving and environmental protection. Improved yield rate, prevents uneven distribution of alloy components causing uneven anodic conductivity.</p>
      
      <p>This product has greater strength, higher density enhances strength, can manufacture 10-meter-long anodes that do not elongate due to gravity during use. Service life reaches 3-5 years, saves about 30% of electricity consumption, achieving fundamental improvement in environmental protection. Using high-purity lead-tin-antimony (with a small amount of silver) as raw materials, tin content 3-10%, antimony content 2-3%, silver content 0.5-1%.</p>
      
      <p>Compared to traditional casting processes, FC-T anode solves the problems of traditional electroplating hard chromium anodes that have been using lead-antimony or lead-tin-antimony metal casting processes for many years, avoiding defects such as loose internal metallographic structure, cold shuts, cast nodules, shrinkage cavities and oxide inclusions, greatly improving product quality and performance.</p>
    `,
    image: '/独立站图片素材/Deposition_speed_vs_cathode_current_density_310x274.png',
    date: '2025-08-20',
    authorZh: '张含墨',
    authorEn: 'Hanmo Zhang',
    slug: 'fct-anode-mass-production',
    category: 'product',
    tags: ['FC-T', '阳极', '挤压合金', '量产'],
    readTime: 6
  },
  {
    id: 3,
    titleZh: '陶瓷净化系统实现镀液永久循环利用，环保技术再创新高',
    titleEn: 'Ceramic Purification System Achieves Permanent Plating Solution Recycling, Environmental Technology Reaches New Heights',
    summaryZh: '我司独立开发陶瓷净化系统，实现镀铬溶液金属残渣净化技术，使溶液能够永久重复使用。',
    summaryEn: 'Our company independently developed ceramic purification system, achieving metal residue purification technology in chrome plating solutions, allowing permanent solution reuse.',
    contentZh: `
      <p>近日，东莞晶晶新材料有限公司宣布独立开发陶瓷净化系统获得重大突破，成功实现镀铬溶液中金属残渣净化技术，使溶液能够永久重复使用，而不是每3-5年更换一次，大大降低了镀铬企业的原材料成本和化学品对环境造成的损害。</p>
      
      <p>陶瓷净化系统可解决镀铬过程中产生的三价铬过高、铜离子铁离子累积导致的品质问题，实现镀液的循环利用。该系统具有多项技术优势：提高产品品质，解决镀铬过程中产生的三价铬过高、铜离子铁离子累积导致的品质问题；环境保护，解决镀液在金属离子累积到一定程度时无法生产导致报废的问题。</p>
      
      <p>三价铬还原功能：电解过程中可以还原一部分三价铬，解决三价铬过高导致的问题。电解陶瓷隔膜具有优异的物理化学性能，在镀液中不被腐蚀。通过电解作用将杂质阳离子通过陶瓷隔膜毛细孔传输到陶瓷隔膜筒内（阴极区），实现粗化液和镀铬液的净化，延长镀液使用寿命。</p>
      
      <p>技术参数：阳极与阴极表面积比例为2:1，电压4-10V，温度50℃，运行时间3小时以上。电解液成分为铬酸50g/L，硫酸10g/L。该技术的成功应用标志着公司在环保技术方面取得重大突破，为行业绿色发展提供了重要技术支撑。</p>
    `,
    contentEn: `
      <p>Recently, Dongguan Jingjing Surface Technology Co., Ltd. announced a major breakthrough in the independent development of ceramic purification system, successfully achieving metal residue purification technology in chrome plating solutions, allowing the solution to be reused forever instead of being replaced every 3-5 years, greatly reducing the raw material costs of chrome plating enterprises and the environmental damage caused by chemicals.</p>
      
      <p>The ceramic purification system can solve quality problems caused by excessive trivalent chromium and accumulation of copper and iron ions during the chrome plating process, achieving recycling of plating solutions. This system has multiple technical advantages: enhanced product quality, addressing quality issues caused by excessive trivalent chromium and accumulation of copper and iron ions during chrome plating; environmental protection, solving the problem of plating liquids being discarded due to metal ion accumulation.</p>
      
      <p>Trivalent chromium reduction function: the electrolytic process can reduce a portion of trivalent chromium, addressing issues caused by excessive levels. The electrolytic ceramic diaphragm has excellent physicochemical properties and is not corroded in the plating solution. Through electrolysis, impurity cations are transported through ceramic diaphragm capillary pores into the ceramic diaphragm barrel (cathode area), achieving purification of roughening liquid and chrome plating solution, extending plating solution service life.</p>
      
      <p>Technical parameters: anode to cathode surface area ratio is 2:1, voltage 4-10V, temperature 50℃, running time more than 3 hours. Electrolyte composition: chromic acid 50g/L, sulfuric acid 10g/L. The successful application of this technology marks a major breakthrough in the company's environmental technology, providing important technical support for green development in the industry.</p>
    `,
    image: '/独立站图片素材/Electrochemical_performance_comparison_graphs_586x246.png',
    date: '2025-06-15',
    authorZh: '张含墨',
    authorEn: 'Hanmo Zhang',
    slug: 'ceramic-purification-system-breakthrough',
    category: 'environmental',
    tags: ['陶瓷净化', '环保', '循环利用', '镀液处理'],
    readTime: 7
  },
  {
    id: 4,
    titleZh: '公司成功研发新型环保电镀工艺',
    titleEn: 'Company Successfully Develops New Eco-friendly Electroplating Process',
    summaryZh: '我公司研发团队成功开发出新型环保电镀工艺，显著减少重金属排放，提高生产效率。',
    summaryEn: 'Our R&D team has successfully developed a new eco-friendly electroplating process that significantly reduces heavy metal emissions and improves production efficiency.',
    contentZh: `
      <p>近日，东莞晶晶新材料有限公司研发团队宣布成功开发出新型环保电镀工艺，该工艺在保持传统电镀质量的同时，显著减少了重金属排放，为行业绿色发展树立了新标杆。</p>
      
      <p>新工艺采用先进的离子交换技术和膜分离技术，能够有效回收和净化电镀废液中的重金属离子。与传统工艺相比，重金属排放量减少85%以上，同时生产效率提升30%。</p>
      
      <p>该工艺具有以下技术特点：采用新型催化剂，提高电镀效率；使用环保型添加剂，减少有害物质使用；实现废液循环利用，降低生产成本；符合国家环保标准，获得多项环保认证。</p>
      
      <p>公司计划在未来一年内将该工艺推广到所有生产线，预计每年可减少重金属排放50吨，节约用水30万立方米，为环境保护做出重要贡献。</p>
    `,
    contentEn: `
      <p>Recently, the R&D team of Dongguan Jingjing Surface Technology Co., Ltd. announced the successful development of a new eco-friendly electroplating process that significantly reduces heavy metal emissions while maintaining traditional electroplating quality, setting a new benchmark for green development in the industry.</p>
      
      <p>The new process uses advanced ion exchange technology and membrane separation technology to effectively recover and purify heavy metal ions in electroplating waste liquids. Compared with traditional processes, heavy metal emissions are reduced by more than 85%, while production efficiency is improved by 30%.</p>
      
      <p>This process has the following technical characteristics: uses new catalysts to improve electroplating efficiency; uses environmentally friendly additives to reduce the use of harmful substances; achieves waste liquid recycling to reduce production costs; meets national environmental standards and has obtained multiple environmental certifications.</p>
      
      <p>The company plans to promote this process to all production lines within the next year, expecting to reduce heavy metal emissions by 50 tons annually and save 300,000 cubic meters of water, making important contributions to environmental protection.</p>
    `,
    image: '/独立站图片素材/jingjing_logo_blue.jpg',
    date: '2025-04-10',
    authorZh: '张含墨',
    authorEn: 'Hanmo Zhang',
    slug: 'eco-friendly-electroplating-process',
    category: 'tech',
    tags: ['环保电镀', '重金属减排', '离子交换', '膜分离'],
    readTime: 4
  },
  {
    id: 5,
    titleZh: '晶品表面技术参加2023国际表面处理展览会',
    titleEn: 'Crystal Surface Technology Participates in 2023 International Surface Treatment Exhibition',
    summaryZh: '我公司成功参展2023国际表面处理展览会，展示多项创新技术和解决方案，获得行业广泛关注。',
    summaryEn: 'Our company successfully participated in the 2023 International Surface Treatment Exhibition, showcasing numerous innovative technologies and solutions, garnering widespread industry attention.',
    contentZh: `
      <p>2023年9月25日，东莞晶晶新材料有限公司成功参展2023国际表面处理展览会，这是公司连续第五年参加该行业盛会。本次展会，公司展示了多项创新技术和解决方案，吸引了众多国内外客户和合作伙伴的关注。</p>
      
      <p>展会期间，公司重点展示了以下产品和技术：DX-30微裂纹硬铬催化剂中间体、FC-T高密度挤压合金阳极、陶瓷净化系统等核心产品。这些产品在展会现场进行了实际演示，获得了参观者的高度评价。</p>
      
      <p>公司技术团队在展会期间举办了多场技术讲座，分享了公司在表面处理领域的最新研究成果和技术创新。讲座内容涵盖环保电镀工艺、高效阳极材料、废液处理技术等多个方面。</p>
      
      <p>通过本次展会，公司与多家国际知名企业达成了初步合作意向，预计将为公司带来超过5000万元的新订单。同时，公司也获得了行业专家的认可，被评为"2023年度最具创新力企业"。</p>
    `,
    contentEn: `
      <p>On September 25, 2023, Dongguan Jingjing Surface Technology Co., Ltd. successfully participated in the 2023 International Surface Treatment Exhibition, marking the company's fifth consecutive year at this industry event. At this exhibition, the company showcased numerous innovative technologies and solutions, attracting attention from many domestic and international customers and partners.</p>
      
      <p>During the exhibition, the company focused on showcasing the following products and technologies: DX-30 micro crack hard chromium catalyst intermediate, FC-T high-density extruded alloy anode, ceramic purification system and other core products. These products were demonstrated live at the exhibition site and received high praise from visitors.</p>
      
      <p>The company's technical team held multiple technical lectures during the exhibition, sharing the company's latest research results and technological innovations in the field of surface treatment. The lecture content covered eco-friendly electroplating processes, efficient anode materials, waste liquid treatment technology and other aspects.</p>
      
      <p>Through this exhibition, the company reached preliminary cooperation intentions with many internationally renowned enterprises, and is expected to bring new orders worth more than 50 million yuan. At the same time, the company also received recognition from industry experts and was rated as "Most Innovative Enterprise of 2023".</p>
    `,
    image: '/独立站图片素材/Dongguan_Jingjing_Surface_Technology_Inc_Website_1503x734.png',
    date: '2025-02-28',
    authorZh: '张含墨',
    authorEn: 'Hanmo Zhang',
    slug: 'surface-treatment-exhibition-2023',
    category: 'exhibition',
    tags: ['国际展览会', '表面处理', '技术创新', '行业交流'],
    readTime: 5
  },
  {
    id: 6,
    titleZh: '公司与某知名汽车制造商达成战略合作',
    titleEn: 'Company Reaches Strategic Cooperation with Well-known Automotive Manufacturer',
    summaryZh: '我公司与某全球知名汽车制造商签订长期战略合作协议，为其提供高端表面处理技术支持。',
    summaryEn: 'Our company has signed a long-term strategic cooperation agreement with a globally renowned automotive manufacturer to provide high-end surface treatment technical support.',
    contentZh: `
      <p>近日，东莞晶晶新材料有限公司与某全球知名汽车制造商正式签署长期战略合作协议，双方将在汽车零部件表面处理领域展开深度合作。这是公司发展历程中的重要里程碑，标志着公司在高端制造领域的实力得到了国际认可。</p>
      
      <p>根据协议，公司将为该汽车制造商提供以下技术支持：汽车发动机零部件硬铬电镀、传动系统表面处理、制动系统防腐涂层等。合作期限为5年，预计将为公司带来超过2亿元的订单。</p>
      
      <p>该汽车制造商选择与公司合作的原因包括：公司拥有20多年的表面处理经验；技术团队专业水平高，能够提供定制化解决方案；产品质量稳定，符合国际标准；环保技术先进，符合可持续发展要求。</p>
      
      <p>此次合作将进一步提升公司在汽车行业的知名度和影响力，为公司未来在高端制造领域的发展奠定坚实基础。公司将继续加大研发投入，为客户提供更优质的产品和服务。</p>
    `,
    contentEn: `
      <p>Recently, Dongguan Jingjing Surface Technology Co., Ltd. officially signed a long-term strategic cooperation agreement with a globally renowned automotive manufacturer, and the two parties will conduct in-depth cooperation in the field of automotive parts surface treatment. This is an important milestone in the company's development history, marking that the company's strength in the high-end manufacturing field has been internationally recognized.</p>
      
      <p>According to the agreement, the company will provide the following technical support to the automotive manufacturer: hard chromium electroplating for automotive engine parts, surface treatment for transmission systems, anti-corrosion coatings for braking systems, etc. The cooperation period is 5 years, and it is expected to bring orders worth more than 200 million yuan to the company.</p>
      
      <p>The reasons why the automotive manufacturer chose to cooperate with the company include: the company has more than 20 years of surface treatment experience; the technical team has a high professional level and can provide customized solutions; the product quality is stable and meets international standards; the environmental technology is advanced and meets sustainable development requirements.</p>
      
      <p>This cooperation will further enhance the company's reputation and influence in the automotive industry and lay a solid foundation for the company's future development in the high-end manufacturing field. The company will continue to increase R&D investment to provide customers with better products and services.</p>
    `,
    image: '/独立站图片素材/Red_background_logo_with_white_design_110x78.png',
    date: '2024-12-15',
    authorZh: '张含墨',
    authorEn: 'Hanmo Zhang',
    slug: 'automotive-manufacturer-partnership',
    category: 'cooperation',
    tags: ['战略合作', '汽车制造', '表面处理', '高端制造'],
    readTime: 6
  }
];