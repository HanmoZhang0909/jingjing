# Jingjing Project

这是一个全栈项目，包含NestJS后端API和Next.js前端应用。

## 项目结构

```
jingjing/
├── nestjs-api/          # NestJS后端API
└── nextjs-app/          # Next.js前端应用
```

## 技术栈

### 后端 (nestjs-api)
- **NestJS** - Node.js后端框架
- **TypeScript** - 编程语言
- **Jest** - 测试框架

### 前端 (nextjs-app)
- **Next.js** - React全栈框架
- **TypeScript** - 编程语言
- **Tailwind CSS** - CSS框架
- **React** - 用户界面库

## 快速开始

### 后端设置

```bash
cd nestjs-api
npm install
npm run start:dev
```

### 前端设置

```bash
cd nextjs-app
npm install
npm run dev
```

## 开发

### 后端开发
- 开发服务器: `npm run start:dev`
- 生产构建: `npm run build`
- 测试: `npm run test`

### 前端开发
- 开发服务器: `npm run dev`
- 生产构建: `npm run build`
- 启动生产服务器: `npm run start`

## API文档

后端API运行在 `http://localhost:3000`

## 贡献

1. Fork项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开Pull Request

## 许可证

该项目使用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。