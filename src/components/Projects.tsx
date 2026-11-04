import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, GitBranch, Terminal, ChevronRight, CheckCircle2 } from 'lucide-react'
import { cn } from '../lib/utils'

interface Project {
  id: string
  title: string
  category: 'AI Agent' | 'AI Infra' | 'IT Infra' | '开源'
  role: string
  headline: string
  overview: string
  highlights: string[]
  achievements: string[]
  tags: string[]
  github?: string
}

const projects: Project[] = [
  {
    id: 'ai-gateway',
    title: '统一身份认证平台与自研 AI Gateway',
    category: 'AI Infra',
    role: '架构设计与核心研发',
    headline: '8 个内部系统统一登录、多模型按任务路由与额度成本实时治理',
    overview: '解决企业内部各系统账号孤岛与员工无序调用商业大模型的成本失控问题。以飞书账号作为唯一入口（兼容 LDAP），自研 AI Gateway 支持多供应商模型统一路由、SSE/WebSocket 流式转发与配额层级继承。',
    highlights: [
      '自建 OIDC 授权服务器（支持 PKCE 与密钥轮换），员工飞书一键免密登录',
      '模型额度按「员工 > 所在部门 > 上级部门 > 全局」继承，变更实时生效',
      '规范 112 个模型标识，集成 Prometheus + Loki 进行实时 API 审计追溯',
    ],
    achievements: [
      '单节点平均延迟 <20ms，支持高并发实时流式输出',
      '支撑公司 8 个自研业务系统的统一准入与模型计费',
    ],
    tags: ['Go', 'Java', 'OIDC', 'OAuth2', 'LDAP', '飞书开放平台', 'SSE', 'Prometheus'],
  },
  {
    id: 'hireflow',
    title: 'HireFlow — 智能招聘与简历初筛 Agent',
    category: 'AI Agent',
    role: '独立全栈研发',
    headline: '多模态文档解析、10秒智能初筛打分与飞书面试全流程闭环',
    overview: '面向 HR 与技术面试官的端侧 AI 招聘工具。采用 Rust (Tauri v2) + React 构建跨平台桌面应用，通过本地/云端混合解析流水线自动识别注水简历，并与飞书日历、会议室及评价卡片深度联动。',
    highlights: [
      '支持 PDF/Word 简历与图片 OCR 智能提取，自动识别注水与风险项',
      '自研人才库 SHA-256 内容去重与多版本对比机制',
      '打通飞书：自动发卡片通知、预约会议室、双面试官免密独立评价',
    ],
    achievements: [
      '单份简历初筛时间从人工约 15 分钟缩短至 10 秒以内',
      '交付跨平台桌面端（macOS/Windows）与网页端，HR 独立上线使用',
    ],
    tags: ['Rust (Tauri v2)', 'React', 'TypeScript', 'LLM Pipeline', 'OCR', '飞书开放平台'],
  },
  {
    id: 'dsh-desktop',
    title: '企业级 AI Agent 桌面宿主环境',
    category: 'AI Infra',
    role: '企业侧架构与开发',
    headline: 'DeepSeek Harness 运行时企业化改造与跨平台稳定发布',
    overview: '在官方开源桌面 Agent 框架基础上进行企业级增强改造，统一收敛会话持久化存储，设计自动化自检与回滚机制，保障长对话稳定性。',
    highlights: [
      '解决官方会话数据分散易损坏问题，收敛为 SQLite 单库事务管理',
      '建立「分步上线 ➔ 自动自检 ➔ 一键切换」升级链路，失败毫秒级回滚',
      '重构长对话上下文压缩（Compaction）机制，保障长时间会话不崩溃',
    ],
    achievements: [
      '支撑 40+ 员工运行环境无感切换，迁移 130+GB 历史归档数据零损坏',
      '覆盖 macOS (Swift) 与 Windows 原生打包持续交付',
    ],
    tags: ['DeepSeek Harness', 'SQLite', 'Electron', 'Swift', 'OCR'],
    github: 'https://github.com/eiritsu/DeepSeek-Harness-Desktop',
  },
  {
    id: 'operations-saas',
    title: '企业运营管理 SaaS 与 AI 双重预警',
    category: 'AI Agent',
    role: '架构与核心研发',
    headline: '覆盖进销存七大板块的自研工作流引擎与智能巡检系统',
    overview: '打通销售、采购、库存、物流、制造、项目、HR 七大业务板块。内建可视化审批流程引擎与 AI 双重预警机制，实现业务异常主动推送与待办闭环。',
    highlights: [
      '自研审批流程引擎：自动校验死循环与死节点，AI 处理受阻自动转人工',
      'AI 双重预警：支持随时主动分析，同时系统按 5m~24h 自动巡检七大板块',
      '采购定点前自动进行供应商 A/B/C 匿名化比价脱敏处理',
    ],
    achievements: [
      '七大板块全部通过 Playwright 浏览器自动化验收（411/411 测试通过）',
      '生产环境稳定运行，具备随时回退与数据库增量备份机制',
    ],
    tags: ['Node.js', 'React', 'Docker', 'SQLite', 'Playwright', 'SSO'],
  },
  {
    id: 'feishu-agent',
    title: '飞书项目管理 Agent 与自动化周报',
    category: 'AI Agent',
    role: '独立设计与开发',
    headline: '群聊信息智能归档、待办原子拆解与周报定时生成',
    overview: '针对项目沟通散落在 IM 群聊的痛点开发的常驻飞书机器人。实时归档讨论事实，智能拆分合并任务卡片，并自动汇总跨系统进度生成项目周报。',
    highlights: [
      '群聊消息实时归档与自然语言多维工作事实检索',
      '支持从飞书妙记会议记录自动提炼待办并生成 PPT/Excel 文档',
      '主模型发生故障时自动触发三级备用模型平滑容灾切换',
    ],
    achievements: [
      '固定周一 08:30 自动推送待办卡片、周五 17:00 自动生成周报',
    ],
    tags: ['飞书开放平台', 'LLM Pipeline', 'Task Automation', 'Python'],
  },
  {
    id: 'patents-wiki',
    title: '企业专利本地知识库 (RAG 架构重构)',
    category: 'AI Agent',
    role: '架构设计与落地',
    headline: '放弃传统向量数据库缺陷，基于树形 Wiki 架构将准确率提至 95%+',
    overview: '针对企业内部快速检索 Google Patents 专利数据的需求。在早期向量数据库（Vector RAG）检索准确率低且误差大的情况下，果断重构为分层树形 Wiki 目录检索方案。',
    highlights: [
      '按「行业 ➔ 地区 ➔ 专利」分层目录清洗入库，建立结构化倒排索引',
      '基于轻量 SQLite 实现完全本地化部署，不依赖第三方云向量接口',
    ],
    achievements: [
      '检索命中率从早期向量方案约 60% 大幅跃升至 95%+',
      '单次查询响应时间 <200ms，实现零外部依赖纯私有运行',
    ],
    tags: ['Knowledge Base', 'RAG Evaluation', 'SQLite', 'Python'],
  },
  {
    id: 'infra-network',
    title: '跨国专线优化与自研网络中心 (NOC)',
    category: 'IT Infra',
    role: '方案设计与交付',
    headline: '专线光纤割接、自建海外双节点替代 SD-WAN 专线（月省数万）',
    overview: '主导办公室网络与服务器物理机房重建。割接固定 IP 专线，自建新加坡海外互备节点降低跨国 SaaS 延迟与高昂资费，并自研轻量 NOC 监控系统。',
    highlights: [
      '电信专线光纤拉线/装机全程闭环，华为 USG6000E + S5735 端口级隔离',
      '自建新加坡双 VPS 节点配合 SmartDNS 与 WireGuard 替代高价 SD-WAN',
      '自研 NOC 平台，实时纳管网管设备与主机，实现配置热重载与流量拓扑',
    ],
    achievements: [
      '每月为公司节省 3～7 万元跨境网络运营费用；专线租费成功谈判降价 50%',
      '网络故障排查由过去盲盒状态提升为秒级链路精准定位',
    ],
    tags: ['华为 USG/S5735', 'WireGuard', 'SmartDNS', 'VLAN 隔离', 'Linux'],
  },
  {
    id: 'hermes-wiki',
    title: 'Hermes Wiki — AI 会话知识库插件',
    category: '开源',
    role: '独立全栈开发',
    headline: '基于 Karpathy LLM Wiki 范式的多语言会话知识沉淀开源工具',
    overview: '为 Hermes AI Agent 生态打造的智能知识库插件。自动将零散的人机交互会话提炼为结构化 Obsidian 风格 Wiki 页面，具备实体抽取与质量评估体系。',
    highlights: [
      '设计 Extension 模式与 Standalone 独立 SQLite 双架构方案',
      '支持 7 种语言国际化（i18n），提供原生桌面端侧边栏交互面板',
    ],
    achievements: [
      '全栈独立实现（Python + JavaScript），在 GitHub 开源维护',
    ],
    tags: ['Python', 'JavaScript', 'SQLite', 'Obsidian', '7-Lang i18n'],
    github: 'https://github.com/eiritsu/hermes-wiki-plugin',
  },
]

const categories = ['全部', 'AI Agent', 'AI Infra', 'IT Infra', '开源'] as const

export function Projects() {
  const [activeTab, setActiveTab] = useState<typeof categories[number]>('全部')

  const filtered = activeTab === '全部'
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <section id="projects" className="py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              03 / WORKS & ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              精选生产项目
            </h2>
          </div>

          {/* Minimalist Category Filter */}
          <div className="flex flex-wrap gap-1 bg-neutral-900/80 p-1 rounded-lg border border-neutral-800/80">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={cn(
                  'px-3 py-1 text-xs font-mono tracking-wider transition-colors rounded-md',
                  activeTab === cat
                    ? 'bg-neutral-800 text-white font-medium shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Minimalist Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="hairline-card flex flex-col justify-between group"
              >
                <div>
                  {/* Card Meta Top */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="mono-tag text-[10px]">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-neutral-500">
                      {item.role}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-300 font-medium mb-4 leading-relaxed">
                    {item.headline}
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-5 font-sans">
                    {item.overview}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-900">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 block">
                      架构设计要点
                    </span>
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                          <ChevronRight className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-1.5 mb-6 bg-neutral-900/50 p-3 rounded-lg border border-neutral-800/60">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                      成果指标
                    </span>
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-emerald-400/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-400" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tags & GitBranch */}
                <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-300 hover:text-white transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
