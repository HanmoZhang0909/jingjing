# 东莞晶晶新材料有限公司 - 前端项目文档

## 项目简介

本项目是东莞晶晶新材料有限公司的官方网站前端应用，采用现代化的 Web 技术栈构建，提供多语言支持（中文/英文）、响应式设计和流畅的用户体验。

### 技术栈

- **框架**: Next.js 15.2.3 (App Router)
- **UI 库**: React 19.0.0
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 3.3.0
- **动画**: Framer Motion 12.23.24, GSAP 3.13.0
- **字体**: Inter, Noto Sans SC (Google Fonts)
- **包管理**: npm

### 主要功能

- 多语言支持（中文/英文切换）
- 响应式设计（移动端、平板、桌面端适配）
- 页面动画效果（Framer Motion + GSAP）
- 动态路由（产品、案例、新闻详情页）
- SEO 优化（Next.js 内置支持）

---

## 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
cd nextjs-app
npm install
```

### 本地开发

```bash
npm run dev
```

开发服务器将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

### 代码检查

```bash
npm run lint
```

---

## 项目结构

```
nextjs-app/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── layout.tsx         # 根布局组件（包含 Navbar、Footer）
│   │   ├── page.tsx           # 首页
│   │   ├── globals.css        # 全局样式
│   │   ├── about/             # 关于我们页面
│   │   │   └── page.tsx
│   │   ├── products/          # 产品与服务页面
│   │   │   ├── page.tsx       # 产品列表页
│   │   │   ├── [slug]/       # 产品详情页（动态路由）
│   │   │   ├── anode/         # 镀铬阳极产品页
│   │   │   ├── chemical/      # 化学药水产品页
│   │   │   └── equipment/     # 处理设备产品页
│   │   ├── cases/             # 成功案例页面
│   │   │   ├── page.tsx       # 案例列表页
│   │   │   └── [slug]/       # 案例详情页（动态路由）
│   │   ├── news/              # 新闻资讯页面
│   │   │   ├── page.tsx       # 新闻列表页
│   │   │   └── [slug]/       # 新闻详情页（动态路由）
│   │   ├── contact/           # 联系我们页面
│   │   │   └── page.tsx
│   │   └── language-test/     # 语言测试页面（开发用）
│   ├── components/            # 可复用组件
│   │   ├── Navbar.tsx         # 导航栏组件
│   │   ├── Footer.tsx         # 页脚组件
│   │   ├── FloatingLanguageSwitcher.tsx  # 浮动语言切换按钮
│   │   ├── LanguageSwitcher.tsx          # 语言切换组件
│   │   ├── AccordionSlider.tsx           # 手风琴式滑块（主营业务展示）
│   │   ├── MapComponent.tsx              # 地图组件（高德地图）
│   │   ├── NewsDetailClient.tsx          # 新闻详情客户端组件
│   │   ├── PageContent.tsx               # 页面内容包装组件
│   │   └── PageTransition.tsx            # 页面过渡动画组件
│   ├── contexts/              # React Context
│   │   └── LanguageContext.tsx  # 多语言上下文（语言状态管理）
│   ├── config/                # 配置文件
│   │   └── api.ts             # API 配置（后端接口地址）
│   └── data/                  # 静态数据
│       └── newsData.ts        # 新闻数据（类型定义 + 数据）
├── public/                    # 静态资源
│   ├── images/               # 图片资源
│   ├── videos/               # 视频资源
│   └── 独立站图片素材/       # 网站图片素材
├── next.config.ts            # Next.js 配置
├── tailwind.config.js        # Tailwind CSS 配置
├── tsconfig.json             # TypeScript 配置
├── package.json              # 项目依赖和脚本
└── README.md                 # 项目文档（本文件）
```

### 目录说明

#### `src/app/`
Next.js App Router 的页面目录，每个子目录代表一个路由。使用 `page.tsx` 作为页面入口文件，`layout.tsx` 作为布局文件。

#### `src/components/`
可复用的 React 组件，遵循单一职责原则，每个组件负责特定的 UI 功能。

#### `src/contexts/`
React Context API 实现，用于全局状态管理（目前主要用于多语言）。

#### `src/config/`
项目配置文件，如 API 地址、环境变量等。

#### `src/data/`
静态数据文件，如新闻数据、产品数据等。

---

## 核心模块与函数说明

### 1. 多语言系统

#### `LanguageContext` (src/contexts/LanguageContext.tsx)

**用途**: 提供全局多语言支持，管理当前语言状态和翻译函数。

**主要功能**:
- 语言状态管理（中文 `zh` / 英文 `en`）
- 翻译函数 `t(key: string)`
- 语言持久化（localStorage）
- 客户端水合处理（避免 SSR 不匹配）

**被引用位置**:
- `src/app/layout.tsx` - 根布局，提供 LanguageProvider
- `src/components/Navbar.tsx` - 导航栏文本翻译
- `src/components/Footer.tsx` - 页脚文本翻译
- `src/app/page.tsx` - 首页内容翻译
- 所有页面组件 - 使用 `useLanguage()` Hook 获取翻译函数

**关键 API**:
```typescript
const { language, setLanguage, t } = useLanguage();
// language: 'zh' | 'en'
// setLanguage: (lang: 'zh' | 'en') => void
// t: (key: string) => string
```

**翻译键命名规范**:
- 导航: `nav.*` (如 `nav.home`, `nav.about`)
- 首页: `home.*` (如 `home.companyName`, `home.learnMore`)
- 联系页: `contact.*` (如 `contact.title`, `contact.form.*`)
- 新闻页: `news.*` (如 `news.title`, `news.readmore`)
- 案例页: `cases.*` (如 `cases.title`, `cases.viewdetails`)
- 产品页: `products.*` (如 `products.title`, `products.learnMore`)

---

### 2. 路由模块

项目使用 Next.js App Router，路由结构如下：

#### 静态路由
- `/` - 首页 (`src/app/page.tsx`)
- `/about` - 关于我们 (`src/app/about/page.tsx`)
- `/contact` - 联系我们 (`src/app/contact/page.tsx`)
- `/products` - 产品列表 (`src/app/products/page.tsx`)
- `/products/anode` - 镀铬阳极产品 (`src/app/products/anode/page.tsx`)
- `/products/chemical` - 化学药水产品 (`src/app/products/chemical/page.tsx`)
- `/products/equipment` - 处理设备产品 (`src/app/products/equipment/page.tsx`)
- `/cases` - 案例列表 (`src/app/cases/page.tsx`)
- `/news` - 新闻列表 (`src/app/news/page.tsx`)

#### 动态路由
- `/products/[slug]` - 产品详情页 (`src/app/products/[slug]/page.tsx`)
- `/cases/[slug]` - 案例详情页 (`src/app/cases/[slug]/page.tsx`)
- `/news/[slug]` - 新闻详情页 (`src/app/news/[slug]/page.tsx`)

**路由特点**:
- 所有页面支持服务端渲染（SSR）
- 动态路由通过 `params` 获取 slug 参数
- 页面间使用 Next.js `Link` 组件进行客户端导航

---

### 3. 核心组件

#### `Navbar` (src/components/Navbar.tsx)

**用途**: 网站顶部导航栏，包含 Logo、导航菜单和移动端菜单。

**功能**:
- 响应式设计（桌面端横向菜单，移动端折叠菜单）
- 滚动时自动隐藏/显示
- 当前页面高亮
- 多语言支持

**被引用位置**:
- `src/app/layout.tsx` - 全局布局中使用

**关键 Props**: 无（使用 Context 获取语言状态）

---

#### `Footer` (src/components/Footer.tsx)

**用途**: 网站页脚，包含最新资讯、联系信息和快速联系表单。

**功能**:
- 三栏布局（最新资讯、联系信息、快速联系表单）
- 多语言支持
- 动画效果（Framer Motion）

**被引用位置**:
- `src/app/layout.tsx` - 全局布局中使用

---

#### `FloatingLanguageSwitcher` (src/components/FloatingLanguageSwitcher.tsx)

**用途**: 固定在页面右下角的浮动语言切换按钮。

**功能**:
- 悬浮按钮样式
- 鼠标悬停展开提示
- 点击切换语言
- 动画效果

**被引用位置**:
- `src/app/layout.tsx` - 全局布局中使用

**关键 Props**: 无（使用 Context 管理语言状态）

---

#### `AccordionSlider` (src/components/AccordionSlider.tsx)

**用途**: 首页主营业务展示的手风琴式滑块组件。

**功能**:
- 三个业务板块（镀铬阳极、化学药水、处理设备）
- 鼠标悬停展开，其他板块压缩
- GSAP 动画控制
- 响应式设计

**被引用位置**:
- `src/app/page.tsx` - 首页使用

**技术细节**:
- 使用 `useRef` 管理 DOM 引用
- GSAP 控制 flex 属性动画
- 支持键盘导航（可扩展）

---

#### `MapComponent` (src/components/MapComponent.tsx)

**用途**: 高德地图组件，显示公司位置。

**功能**:
- 动态加载高德地图 API
- 标记公司位置
- 信息窗口显示公司信息
- 多语言支持

**被引用位置**:
- `src/app/contact/page.tsx` - 联系页面使用

**Props**:
```typescript
interface MapComponentProps {
  className?: string;  // 默认: "w-full h-96"
}
```

---

#### `PageContent` (src/components/PageContent.tsx)

**用途**: 页面内容包装组件，用于强制语言切换时重新渲染。

**功能**:
- 使用 `language` 作为 key，确保语言切换时内容完全更新
- 避免语言切换后的渲染不一致问题

**被引用位置**:
- `src/app/layout.tsx` - 包装所有页面内容

**Props**:
```typescript
interface PageContentProps {
  children: React.ReactNode;
}
```

---

### 4. 数据层

#### `newsData.ts` (src/data/newsData.ts)

**用途**: 定义新闻数据类型和提供新闻数据。

**导出内容**:
- `NewsArticle` 接口 - 新闻文章类型定义
- `newsArticles` 数组 - 新闻文章数据（6 篇文章）

**数据结构**:
```typescript
interface NewsArticle {
  id: number;
  titleZh: string;      // 中文标题
  titleEn: string;      // 英文标题
  summaryZh: string;    // 中文摘要
  summaryEn: string;    // 英文摘要
  contentZh: string;    // 中文内容（HTML）
  contentEn: string;    // 英文内容（HTML）
  image: string;        // 图片路径
  date: string;         // 发布日期
  authorZh: string;     // 中文作者名
  authorEn: string;     // 英文作者名
  slug: string;         // URL slug
  category: string;     // 分类
  tags: string[];       // 标签
  readTime: number;     // 阅读时间（分钟）
}
```

**被引用位置**:
- `src/app/news/page.tsx` - 新闻列表页
- `src/app/news/[slug]/page.tsx` - 新闻详情页
- `src/components/NewsDetailClient.tsx` - 新闻详情客户端组件

---

### 5. 配置模块

#### `api.ts` (src/config/api.ts)

**用途**: API 配置文件，定义后端接口地址。

**配置内容**:
```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

export const apiConfig = {
  baseURL: API_BASE_URL,
  timeout: 10000,
}
```

**环境变量**:
- `NEXT_PUBLIC_API_URL` - 后端 API 地址（可选，默认 localhost:3000）

**被引用位置**:
- 目前未使用（预留接口，未来可扩展 API 调用）

---

### 6. 样式系统

#### `globals.css` (src/app/globals.css)

**用途**: 全局样式文件，定义 Tailwind 工具类和自定义样式。

**主要内容**:
- Tailwind 基础样式导入
- CSS 变量定义（颜色、字体）
- 工具类定义：
  - `.section-container` - 容器样式
  - `.heading-1`, `.heading-2`, `.heading-3` - 标题样式
  - `.btn-primary`, `.btn-secondary` - 按钮样式
  - `.btn-outline`, `.btn-outline-primary` - 轮廓按钮样式

**被引用位置**:
- `src/app/layout.tsx` - 全局导入

---

#### `tailwind.config.js`

**用途**: Tailwind CSS 配置文件。

**主要配置**:
- 内容路径（扫描的文件）
- 主题扩展（颜色、字体、间距）
- 插件（aspect-ratio, typography）

**自定义颜色**:
- `primary`: `#1e3a8a` (深蓝色)
- `secondary`: `#4b7eeb` (浅蓝色)

---

## 约定与最佳实践

### 代码组织约定

#### 文件命名规范
- **组件文件**: PascalCase，如 `Navbar.tsx`, `FloatingLanguageSwitcher.tsx`
- **页面文件**: 统一命名为 `page.tsx`（Next.js App Router 要求）
- **类型文件**: PascalCase，如 `NewsArticle.ts`（如果单独存在）
- **工具函数**: camelCase，如 `formatDate.ts`, `apiClient.ts`

#### 目录规范
- **页面**: 放在 `src/app/` 下，按路由结构组织
- **组件**: 放在 `src/components/` 下，按功能分类（可选）
- **Context**: 放在 `src/contexts/` 下
- **工具函数**: 放在 `src/utils/` 下（如需要）
- **类型定义**: 放在 `src/types/` 下（如需要）或与相关文件同目录

#### 组件命名规范
- 组件使用 PascalCase
- 组件文件名与组件名保持一致
- 默认导出组件

#### 代码风格
- 使用 TypeScript 严格模式
- 使用函数式组件和 Hooks
- 优先使用 `const`，避免 `var`
- 使用箭头函数（如适用）
- 组件 Props 使用接口定义类型

---

### 常见模式

#### 如何新增一个页面

1. 在 `src/app/` 下创建新目录，如 `new-page/`
2. 在目录下创建 `page.tsx` 文件
3. 导出默认的 React 组件
4. 如需多语言，使用 `useLanguage()` Hook

**示例**:
```typescript
// src/app/new-page/page.tsx
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

export default function NewPage() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('newPage.title')}</h1>
    </div>
  );
}
```

5. 在 `LanguageContext.tsx` 中添加翻译键

#### 如何新增一个组件

1. 在 `src/components/` 下创建新文件，如 `NewComponent.tsx`
2. 定义组件接口（Props 类型）
3. 实现组件逻辑
4. 如需多语言，使用 `useLanguage()` Hook

**示例**:
```typescript
// src/components/NewComponent.tsx
"use client";

import { useLanguage } from '@/contexts/LanguageContext';

interface NewComponentProps {
  title?: string;
  onClick?: () => void;
}

export default function NewComponent({ title, onClick }: NewComponentProps) {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2>{title || t('newComponent.defaultTitle')}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
```

#### 如何新增翻译键

1. 打开 `src/contexts/LanguageContext.tsx`
2. 在 `translations` 对象中添加新键值对
3. 确保中文和英文都有对应值

**示例**:
```typescript
const translations: Record<string, Record<Language, string>> = {
  // ... 现有翻译
  'newKey.title': {
    zh: '新标题',
    en: 'New Title',
  },
  'newKey.description': {
    zh: '新描述',
    en: 'New Description',
  },
};
```

#### 如何新增 API 接口调用

1. 在 `src/config/api.ts` 中配置 API 地址
2. 创建 API 调用函数（可在 `src/utils/` 或 `src/api/` 目录下）
3. 在组件中使用

**示例**:
```typescript
// src/utils/apiClient.ts
import { apiConfig } from '@/config/api';

export async function fetchNews() {
  const response = await fetch(`${apiConfig.baseURL}/api/news`);
  return response.json();
}
```

#### 如何添加动画效果

项目使用 Framer Motion 和 GSAP，根据需求选择：

**Framer Motion** (推荐用于 React 组件动画):
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

**GSAP** (用于复杂动画或性能要求高的场景):
```typescript
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

const ref = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (ref.current) {
    gsap.to(ref.current, { opacity: 1, y: 0, duration: 0.5 });
  }
}, []);
```

---

## 后续维护说明

### 文档更新原则

1. **新增目录或模块**: 在"项目结构"章节中添加说明
2. **新增核心组件**: 在"核心模块与函数说明"章节中添加组件文档
3. **新增功能模块**: 在相应章节中添加说明
4. **破坏性改动**: 在"变更记录"章节中添加说明

### 变更记录

| 日期 | 变更内容 | 说明 |
|------|---------|------|
| 2025-01-XX | 创建项目文档 | 初始文档版本，包含完整的项目结构、组件说明和开发指南 |

---

## 开发注意事项

### 多语言支持

- 所有用户可见的文本都应支持多语言
- 使用 `useLanguage()` Hook 获取翻译函数
- 翻译键命名遵循层级结构（如 `nav.home`, `home.companyName`）
- 新增翻译键时，确保中英文都有对应值

### 响应式设计

- 使用 Tailwind CSS 响应式类（`sm:`, `md:`, `lg:`, `xl:`）
- 移动端优先设计
- 测试不同屏幕尺寸下的显示效果

### 性能优化

- 使用 Next.js Image 组件优化图片加载
- 合理使用 `"use client"` 指令（仅在需要客户端功能时）
- 避免不必要的重新渲染（使用 `useMemo`, `useCallback`）
- 代码分割（Next.js 自动处理）

### SEO 优化

- 使用 Next.js Metadata API 设置页面元数据
- 确保页面标题和描述支持多语言
- 使用语义化 HTML 标签

### 浏览器兼容性

- 支持现代浏览器（Chrome, Firefox, Safari, Edge 最新版本）
- 移动端浏览器支持
- 考虑使用 Polyfill（如需要）

---

## 部署说明

### 构建配置

项目使用 Next.js Standalone 输出模式（`next.config.ts`），适合 Docker 部署。

### 环境变量

创建 `.env.local` 文件（开发环境）或设置环境变量（生产环境）：

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Docker 部署

项目根目录包含 `Dockerfile`，可使用 Docker 构建和部署。

---

## 常见问题

### Q: 语言切换后页面内容没有更新？

A: 确保组件使用了 `useLanguage()` Hook，并且 `PageContent` 组件正确包装了页面内容。

### Q: 图片加载失败？

A: 检查图片路径是否正确，确保图片文件存在于 `public/` 目录下。

### Q: 动画效果不流畅？

A: 检查是否在客户端组件中使用动画库（使用 `"use client"` 指令）。

### Q: 如何调试多语言问题？

A: 使用 `/language-test` 页面测试语言切换功能。

---

## 相关资源

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Framer Motion 文档](https://www.framer.com/motion/)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

---

## 联系方式

如有问题或建议，请联系开发团队。

---

**最后更新**: 2025-01-XX
