# Yoeiritsu - 个人简历网站

Apple 风格的动态简历静态网站，基于 React + TypeScript + Tailwind CSS + Framer Motion 构建，可部署在 GitHub Pages 上。

## 🎨 设计特色

- **Apple 官网风格**：采用 SF Pro 字体系统、苹果蓝 (#0071e3) 主色调、大量留白、圆角卡片、毛玻璃效果
- **流畅动画**：Framer Motion 驱动的滚动进入动画、悬停交互、页面加载动画、主题切换过渡
- **深色模式**：完整支持浅色/深色/跟随系统三种模式，持久化存储用户偏好
- **响应式设计**：移动端优先，完美适配各种屏幕尺寸
- **无障碍访问**：语义化 HTML、ARIA 标签、键盘导航、focus-visible 样式

## 🚀 技术栈

- **框架**：React 18 + TypeScript
- **构建工具**：Vite 5
- **样式**：Tailwind CSS 3 (自定义 Apple 设计系统)
- **动画**：Framer Motion 11
- **图标**：Lucide React
- **部署**：GitHub Pages + GitHub Actions

## 📦 项目结构

```
resume/
├── .github/workflows/deploy.yml  # GitHub Actions 部署配置
├── public/
│   ├── favicon.svg               # 网站图标
│   └── og-image.svg              # 社交分享图片
├── src/
│   ├── components/
│   │   ├── Navigation.tsx        # 导航栏 (含滚动高亮、移动端菜单、主题切换)
│   │   ├── Hero.tsx              # 首屏 Hero 区域
│   │   ├── About.tsx             # 关于我 / 个人优势
│   │   ├── Skills.tsx            # 核心技能矩阵
│   │   ├── Experience.tsx        # 工作经历 (时间轴设计)
│   │   ├── Projects.tsx          # 项目经历卡片
│   │   ├── Education.tsx         # 教育背景、证书、语言
│   │   ├── Footer.tsx            # 页脚
│   │   └── ScrollObserver.tsx    # 滚动触发动画观察器
│   ├── context/
│   │   └── ThemeContext.tsx      # 主题状态管理
│   ├── lib/
│   │   └── utils.ts              # 工具函数 (cn, 日期格式化等)
│   ├── App.tsx                   # 根组件
│   ├── main.tsx                  # 入口文件
│   └── index.css                 # 全局样式 + Tailwind 指令
├── index.html                    # HTML 模板
├── vite.config.ts                # Vite 配置 (含 base 路径)
├── tailwind.config.js            # Tailwind 配置 (Apple 设计系统)
├── postcss.config.js             # PostCSS 配置
├── tsconfig.json                 # TypeScript 配置
└── package.json
```

## 🛠️ 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 🌐 GitHub Pages 部署

1. **推送到 GitHub 仓库**：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用户名/resume.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**：
   - 进入仓库 Settings → Pages
   - Source 选择 "GitHub Actions"
   - 推送到 main 分支会自动触发部署

3. **访问地址**：
   - `https://你的用户名.github.io/resume/`

> **注意**：`vite.config.ts` 中配置了 `base: '/resume/'`，请确保仓库名称一致，或修改此配置。

## ✨ 核心组件说明

### Navigation 导航栏
- 固定顶部，滚动后显示毛玻璃背景
- 滚动监听自动高亮当前区域
- 移动端抽屉式菜单
- 主题切换按钮 (浅色/深色/跟随系统)
- 平滑滚动锚点导航

### Hero 首屏
- 大标题动画入场
- 渐变背景 + 径向光晕
- CTA 按钮组 (联系我 / 查看项目)
- 社交链接图标组
- 向下滚动指示器

### Skills 技能矩阵
- 7 大技能分类卡片网格
- 标签式技能展示，悬停变色
- 关键数据统计卡片 (8年/5年/3年/1800+)

### Experience 工作经历
- 交替左右布局的时间轴设计
- 职责与业绩双栏对比
- 关键指标高亮展示

### Projects 项目经历
- 8 个核心项目卡片
- 技术栈标签、职责、业绩完整展示
- 高亮标签快速浏览核心成果

### Education 教育背景
- 学历、证书、语言能力三板块
- 证书卡片悬停动画
- 语言熟练度标签

## 🎨 自定义主题

主要设计令牌在 `tailwind.config.js` 中：

```js
colors: {
  apple: {
    blue: '#0071e3',
    blueHover: '#0077ed',
    blueLight: '#e8f0fe',
    gray: '#86868b',
    grayLight: '#f5f5f7',
    grayDark: '#1d1d1f',
    // ...
  }
},
fontSize: {
  'display-1': '80px',
  'display-2': '56px',
  'title-1': '32px',
  // 对应 Apple 官网排版规范
}
```

## 📝 许可证

MIT License - 可自由用于个人简历网站构建

---

**联系方式**：yoeiritsu@gmail.com | 177-4088-6364 | 上海