# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

Ice Bath Hub 是一个使用 Next.js 15 + TypeScript 构建的静态内容网站,专注于冰浴设备评测和冷疗指南。项目采用 App Router 架构,通过 Markdown 文件管理内容,使用 Tailwind CSS 实现冰晶主题视觉设计。

## 开发命令

```bash
# 开发服务器(带热重载)
npm run dev

# 构建静态站点(输出到 out/ 目录)
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 核心架构

### 静态导出配置
- `next.config.ts` 配置了 `output: 'export'`,项目构建为纯静态HTML
- 所有页面必须使用静态数据,不支持服务端运行时API
- 图片通过 `unoptimized: true` 处理,避免依赖Next.js图片优化服务

### 内容管理系统
- **内容目录**: `content/` - 存放所有Markdown文章
- **处理逻辑**: `lib/markdown.ts` 提供 `getArticleData()` 函数
  - 使用 `gray-matter` 解析frontmatter元数据
  - 使用 `remark` + `remark-html` 将Markdown转换为HTML
- **文章路由**: `/app/reviews/[slug]/page.tsx` 通过slug读取对应md文件
- **元数据字段**: title, description, category, author, date

### 设计系统

**主题配置** (`tailwind.config.ts`):
- 自定义 `ice` 色系(50-900),用于冰晶冷色调
- 字体变量:
  - `--font-display`: Playfair Display(衬线,用于标题)
  - `--font-body`: JetBrains Mono(等宽,用于正文)

**全局样式** (`app/globals.css`):
- 冰晶浮动动画(`@keyframes float`)
- 文字闪烁动画(`@keyframes shimmer`)
- 自定义prose样式类 `.prose-ice`,用于Markdown渲染内容
- 冰晶背景装饰效果(在 `page.tsx` 中使用固定定位 + blur)

### 路径别名
- `@/` 指向项目根目录(配置在 `tsconfig.json`)
- 示例: `import { getArticleData } from '@/lib/markdown'`

## 关键技术决策

### 为什么使用静态导出
项目目标是内容站点,不需要服务端动态功能,静态导出可直接部署到GitHub Pages/Netlify等平台,无需Node.js运行时。

### Markdown内容处理流程
1. 在 `content/` 创建 `.md` 文件(包含frontmatter)
2. 页面组件调用 `getArticleData(slug)` 读取和转换内容
3. 使用 `dangerouslySetInnerHTML` 渲染HTML(安全,因为内容由项目管理者控制)
4. 通过 `.prose-ice` 类应用统一样式

### 视觉设计理念
采用"冰晶科技感"设计语言:
- 深蓝渐变背景(`#0a1929` → `#0c4a6e`)
- 浮动模糊圆形装饰模拟冰晶
- 玻璃态卡片(backdrop-blur + 半透明边框)
- 冰蓝高亮色强调重点内容

## 新增内容时的工作流程

1. 在 `content/` 创建新Markdown文件
2. 添加必需的frontmatter字段
3. 在 `app/reviews/` 或 `app/guides/` 创建对应路由页面
4. 页面调用 `getArticleData(slug)` 读取内容
5. 使用 `.prose-ice` 样式类渲染内容

## 注意事项

- **不要使用Next.js动态API**: 如 `getServerSideProps`, `revalidate` 等,因为配置了静态导出
- **链接使用相对路径**: 避免硬编码域名,方便不同环境部署
- **保持设计一致性**: 新页面应使用 `ice-*` 色系和已定义的字体变量
- **Markdown渲染**: 确保使用 `.prose-ice` 类以获得正确的文章样式