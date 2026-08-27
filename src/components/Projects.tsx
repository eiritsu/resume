import { motion } from 'framer-motion'
import { GitBranch, ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'

const colorMap = {
  blue: {
    border: 'border-blue-500',
    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
    tag: 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300',
    bullet: 'text-blue-500',
    highlight: 'bg-blue-50 dark:bg-blue-900/20',
    highlightText: 'text-blue-700 dark:text-blue-300',
  },
  purple: {
    border: 'border-purple-500',
    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
    tag: 'bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300',
    bullet: 'text-purple-500',
    highlight: 'bg-purple-50 dark:bg-purple-900/20',
    highlightText: 'text-purple-700 dark:text-purple-300',
  },
  green: {
    border: 'border-green-500',
    badge: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    tag: 'bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300',
    bullet: 'text-green-500',
    highlight: 'bg-green-50 dark:bg-green-900/20',
    highlightText: 'text-green-700 dark:text-green-300',
  },
  red: {
    border: 'border-red-500',
    badge: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
    tag: 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300',
    bullet: 'text-red-500',
    highlight: 'bg-red-50 dark:bg-red-900/20',
    highlightText: 'text-red-700 dark:text-red-300',
  },
  orange: {
    border: 'border-orange-500',
    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
    tag: 'bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300',
    bullet: 'text-orange-500',
    highlight: 'bg-orange-50 dark:bg-orange-900/20',
    highlightText: 'text-orange-700 dark:text-orange-300',
  },
  teal: {
    border: 'border-teal-500',
    badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300',
    tag: 'bg-teal-50 text-teal-700 dark:bg-teal-900/20 dark:text-teal-300',
    bullet: 'text-teal-500',
    highlight: 'bg-teal-50 dark:bg-teal-900/20',
    highlightText: 'text-teal-700 dark:text-teal-300',
  },
  indigo: {
    border: 'border-indigo-500',
    badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300',
    tag: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300',
    bullet: 'text-indigo-500',
    highlight: 'bg-indigo-50 dark:bg-indigo-900/20',
    highlightText: 'text-indigo-700 dark:text-indigo-300',
  },
} as const

type ColorKey = keyof typeof colorMap

interface Project {
  title: string
  period: string
  color: ColorKey
  techStack: string
  role: string
  description: string
  responsibilities: string[]
  achievements: string[]
  highlights: string[]
  github?: string
}

const projects: Project[] = [
  {
    title: '企业级 AI Gateway 与统一身份治理平台 (Identity & AI Gateway)',
    period: '2026.07 - 至今',
    color: 'blue',
    techStack: 'Go / Java / OIDC & OAuth2 / OpenAI Protocol Adapter / 飞书API / Docker / Observability (Prometheus+Loki)',
    role: '架构设计与核心研发',
    description:
      '设计并落地企业级统一 AI 网关与统一身份访问治理平台。对上提供全兼容 OpenAI 协议的多模型统一路由、流式转发与配额限流；对下打通企业协作平台（飞书/钉钉）OIDC 单点登录与员工全生命周期账号自动化。',
    responsibilities: [
      '主导 AI Gateway 架构研发（Go），实现多模型 Provider 协议适配、SSE/WebSocket 高并发流式转发、模型动态热更新与 Token 计量计费',
      '实现企业 OIDC / OAuth2 身份治理网关（Java Spring Boot + Go），打通企业协同办公组织架构，支持免密登录、RBAC 细粒度权限控制与离职自动封禁',
      '搭建企业级通知中心与工作流联动模块，支持消息/审批异步队列消费与跨系统事件分发',
      '建立全链路可观测性体系（Grafana + Prometheus + Loki + Tempo），实现 API 审计日志追溯与异常流量实时告警',
    ],
    achievements: [
      '单节点支持高并发流式请求，平均转发延迟降低至 20ms 以内',
      '实现员工入职、调岗、离职全流程账号自动化同步，权限生效/收回时间缩短至秒级',
      '统一纳管企业内所有大模型调用流量，安全合规与成本审计覆盖率达 100%',
    ],
    highlights: ['OpenAI全协议兼容', '秒级账号生命周期', '高并发流式代理', '全链路可观测性'],
  },
  {
    title: 'HireFlow — 企业级 AI 智能招聘与简历初筛平台',
    period: '2026.07 - 至今',
    color: 'purple',
    techStack: 'Rust (Tauri v2) / React / TypeScript / Vite / TailWind CSS / LLM Pipeline / Document Parsing',
    role: '独立全栈研发',
    description:
      '面向企业 HR 与技术面试官的高性能 AI 招聘平台，提供跨平台桌面端（macOS/Windows）与 Web 端双形态。支持多格式简历批量解析、AI 岗位 JD 智能生成与多维度候选人初筛评分。',
    responsibilities: [
      '采用 Rust (Tauri v2) + React + TypeScript 架构，完成跨平台原生桌面端应用与轻量 Web 端的全栈构建',
      '研发本地/云端混合的多模态文档解析流水线，精准提取 PDF/Word 简历中的技能、履历与项目亮点',
      '设计多轮 LLM 结构化初筛与评估 Prompt 链，实现候选人画像与岗位 JD 的深度匹配打分及风险项自动预警',
      '实现数据导出与本地加密存储，保障候选人隐私数据在端侧与私有化环境中的安全合规',
    ],
    achievements: [
      '单份简历结构化初筛时间从人工 15 分钟缩短至 10 秒以内，初筛效率提升 90%+',
      '完成 macOS (ARM64) 与 Windows (x64) 跨平台安装包自动化打包与发布',
      '成功应用于企业真实招聘场景，累计自动化处理数百份技术与管理岗位候选人评估',
    ],
    highlights: ['Rust+Tauri高性能桌面端', '10秒极速初筛', '跨平台原生支持', '多模态文档解析'],
  },
  {
    title: 'DeepSeek Harness Desktop — AI Agent 桌面端宿主环境',
    period: '2026.07 - 至今',
    color: 'teal',
    techStack: 'TypeScript / Electron / Swift (desktop-shell) / E2E Testing / LLM Replay Engine',
    role: '开源贡献与桌面端研发',
    description:
      '基于 DeepSeek 开源生态的桌面端 Agent 宿主环境，集成原生桌面 Shell、端到端自动化测试套件与 LLM 行为回放机制，提供稳定可靠的本地 AI Agent 运行环境。',
    responsibilities: [
      '基于 Electron + Swift 原生桌面能力，重构单实例运行时管控与桌面端集成逻辑',
      '维护并扩展端到端自动化测试套件（Snapshot & Replay），覆盖 Reasoning、Lifecycle、Queue Actions 等复杂交互场景',
      '实现动态模型目录（Dynamic Catalog）与算力容量感知，提升 Agent 任务调度稳定性',
    ],
    achievements: [
      '完成 macOS 原生 App 架构优化与单运行时约束，提升桌面端稳定性',
      '构建 50+ 项端到端交互回归快照测试，保障 Agent 复杂执行流零退化',
      'GitHub 个人开源发布与持续迭代维护',
    ],
    highlights: ['Agent桌面端Runtime', 'E2E测试快照', 'Swift原生集成', '开源项目'],
    github: 'https://github.com/eiritsu/DeepSeek-Harness-Desktop',
  },
  {
    title: 'DeepSeek Plugin — 智能会话扩展与动态算力调度',
    period: '2026.08 - 至今',
    color: 'orange',
    techStack: 'Python / TypeScript / Dynamic Capacities Engine / 企业协同平台Agent联动',
    role: '独立设计与开发',
    description:
      '为 AI 会话环境打造的智能扩展插件，支持模型动态算力管理、实时协同办公会话发现以及企业聊天 Agent 节点的无缝集成。',
    responsibilities: [
      '设计动态模型容量持久化（Dynamic Model Capacities）机制，实时感知并调整模型可用资源',
      '开发企业协作平台（如飞书/Lark）实时会话自动发现与 Agent 节点配置管理',
      '实现插件生命周期管控与热更新机制，提供高内聚、低耦合的扩展体验',
    ],
    achievements: [
      '实现模型算力与状态的动态自适应调度，降低 Agent 调用超时率',
      '无缝对接企业即时通讯会话，支持多场景下的实时智能协同',
      'GitHub 个人开源仓库管理',
    ],
    highlights: ['动态算力持久化', '企业协同会话联动', '模块化插件架构', '开源项目'],
    github: 'https://github.com/eiritsu/DeepSeek-Plugin',
  },
  {
    title: 'Hermes Wiki — AI Agent 会话知识库插件',
    period: '2026.07',
    color: 'indigo',
    techStack: 'Python / JavaScript / SQLite / LLM / Obsidian Markdown / 7语言i18n',
    role: '独立开发并开源',
    description:
      '基于 Karpathy LLM Wiki 模式，为 Hermes AI Agent 开发的会话知识库插件。自动将 AI 会话转为 Obsidian 风格 Wiki 页面，支持质量评分、主题分类、实体提取，含 Desktop 侧边栏 GUI 和 Gateway RPC 后端。',
    responsibilities: [
      '设计双模式架构：Extension 模式（与 Holographic Memory 共享连接）和 Standalone 模式（独立 SQLite 存储）',
      '开发 LLM 驱动的会话分析引擎，自动生成 Obsidian 风格 Wiki 页面（frontmatter、wiki-link、tag）',
      '实现质量评分系统（1-5分），自动清理低质量页面，只保留精品内容',
      '开发 Desktop 侧边栏 GUI 插件：支持查看、新建、编辑、删除、多选批量操作和导出',
      '编写 install.sh 自动安装脚本，支持 Gateway RPC 补丁自动检测与应用',
    ],
    achievements: [
      '支持 7 语言 i18n（中/英/日/韩/德/法/西）',
      'Python 67.8% + JavaScript 29.6% 全栈独立开发',
      'GitHub 开源：github.com/eiritsu/hermes-wiki-plugin',
    ],
    highlights: ['Karpathy LLM Wiki模式', '7语言i18n', '全栈独立开发', '开源项目'],
    github: 'https://github.com/eiritsu/hermes-wiki-plugin',
  },
  {
    title: 'AI 会议纪要总结与候选人评估 Skill',
    period: '2026.03 - 2026.06',
    color: 'green',
    techStack: 'ASR服务 / 三段式Prompt流水线 / VAD切片 / 响度归一化 / 多语言(中/英/日/韩)',
    role: '设计并开发 Agent Skill',
    description:
      '设计并开发会议/面试音频转结构化纪要的 Agent Skill，支持多语言识别与智能摘要生成，已迭代至 v2.0。',
    responsibilities: [
      '集成 ASR 服务，完成长音频自动切片、VAD 静音检测与说话人识别',
      '搭建三段式 prompt 流水线与 SQLite 结构化存储',
      '已应用于正式办公场景与技术面试候选人评估流程，持续迭代优化',
    ],
    achievements: [
      '1 小时会议录音→结构化纪要压缩至 15 分钟以内',
      '替代第三方商业产品，大幅节省外购成本',
    ],
    highlights: ['15分钟内出纪要', '多语言支持', '开源项目', '面试评估闭环'],
    github: 'https://github.com/eiritsu/meeting-minutes-interview',
  },
  {
    title: 'Google Patents 本地知识库构建',
    period: '2026.02 - 2026.03',
    color: 'teal',
    techStack: 'SQLite / 树形Wiki架构 / 全文检索 / 增量同步',
    role: '主导开发',
    description:
      '基于 Google Patents 公开数据，搭建企业本地 Patents 知识库，主动放弃高误差向量方案改用树形结构 Wiki 架构。',
    responsibilities: [
      '调研并测试 RAG 向量数据库方案，发现向量召回误差大、上下文关联性差，主动放弃改用树形结构 Wiki 架构',
      '设计树形分类目录（按行业→区域→合作伙伴层级），完成 Patents 数据的结构化清洗与入库',
      '基于 SQLite 实现本地轻量化存储，开发增删改查与全文检索接口',
      '编写数据更新脚本，实现数据定期同步与增量更新',
    ],
    achievements: [
      '树形结构检索准确率较向量方案提升显著，业务查询命中率从约 60% 提升至 95%+',
      'SQLite 本地部署零外部依赖，查询响应时间 <200ms',
    ],
    highlights: ['95%+查询命中率', '<200ms响应', '零外部依赖'],
  },
  {
    title: 'CRM 邮件 AI 化与客户画像侧写',
    period: '2025.12 - 2026.06',
    color: 'blue',
    techStack: 'LLM / 开源CRM / Marketing协作',
    role: '主导开发',
    description:
      '基于 LLM + 开源 CRM 系统，构建客户往来邮件智能分析与客户画像自动生成能力，赋能 Marketing 团队精准营销。',
    responsibilities: [
      '负责完成客户往来邮件的自动分析与智能分类',
      '完成客户画像的自动生成与标签体系建设',
      '配合业务部门持续优化模型准确率',
    ],
    achievements: [
      '累计处理 3000+ 封客户邮件，分类准确率达 95%',
      '高价值客户识别准确率达 78%',
    ],
    highlights: ['95%分类准确率', '78%高价值识别率', '3000+邮件处理'],
  },
  {
    title: 'AI 合同审核模块',
    period: '2025.12 - 2026.06',
    color: 'purple',
    techStack: 'LLM / 历史合同数据训练',
    role: '部署与开发',
    description:
      '部署 LLM 合同审核模块，实现风险条款自动标注与修改建议生成，大幅提升法务审核效率。',
    responsibilities: [
      '完成风险条款的自动标注与修改建议生成',
      '基于历史合同数据训练风险识别模型',
    ],
    achievements: [
      '上线后同事反馈节省 70% 以上审核时间',
      '风险条款识别准确率高',
    ],
    highlights: ['70%+时间节省', '高准确率识别'],
  },
  {
    title: '企业网络安全与等保 2.0 改造',
    period: '2023.05 - 2024.09',
    color: 'red',
    techStack: '双防火墙(飞塔+USG6000) / VRRP / 华为AC / SDN威胁情报 / AD域 / VPN',
    role: '主导构建',
    description:
      '主导构建双防火墙主备架构，实施等保 2.0 三级安全改造，全面提升企业网络安全防护能力。',
    responsibilities: [
      '配置华为 AC 控制器及访客隔离策略',
      '实施 AD 域统一身份认证、行为审计与 VPN 加密隧道',
      '配合公安机关完成网络安全审查',
    ],
    achievements: [
      '核心业务网络可用性达 99.99%',
      '阻断 DDoS 攻击，检测效率提升 60%',
      '通过等保 2.0 三级认证',
    ],
    highlights: ['99.99%可用性', '等保三级认证', 'DDoS阻断'],
  },
  {
    title: 'IT 资产全生命周期与 AI 智能管理',
    period: '多阶段',
    color: 'indigo',
    techStack: 'Snipe-IT二次开发 / LLM / fping+ARP+端口扫描 / RFID / 故障预测模型',
    role: '基于 Snipe-IT 二次开发接入 LLM',
    description:
      '基于 Snipe-IT 二次开发，接入 LLM 构建 AI 资产管理体系，覆盖 IT 设备全生命周期管理。',
    responsibilities: [
      '完成 Snipe-IT 资产管理系统的二次开发，接入 LLM 实现网络设备全探测',
      '完成 AI 辅助安全审计模块开发与故障预测',
      '实现 RFID 标签 + 网络扫描的自动化盘点策略',
      '覆盖设备登记、领用、维修、报废的全流程数字化管理',
    ],
    achievements: [
      'AI 接入后实现设备 90% 自动发现，盘点准确率达 99% 以上',
      '安全审计报告生成时间从 4 天缩短至 30 分钟',
      '设备故障率降低 30%，维护成本降低 25%',
    ],
    highlights: ['90%自动发现', '99%盘点准确率', '4天→30分钟', '故障率降30%'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            核心项目
          </h2>
          <motion.div
            className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] }}
          />
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color]
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                }}
                className={cn(
                  'border-l-4 rounded-r-lg p-6 md:p-8',
                  'bg-white dark:bg-gray-800/50',
                  'shadow-md',
                  'hover:-translate-y-1 hover:shadow-xl transition-all duration-300',
                  colors.border
                )}
              >
                {/* Header: period + role + title */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={cn(
                      'px-3 py-1 rounded-full text-sm font-medium',
                      colors.badge
                    )}
                  >
                    {project.period}
                  </span>
                  <span
                    className={cn(
                      'px-3 py-1 rounded-full text-sm font-medium',
                      'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    )}
                  >
                    {project.role}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.split(' / ').map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        'px-3 py-1 rounded-full text-sm',
                        colors.tag
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-sm font-semibold',
                        colors.highlight,
                        colors.highlightText
                      )}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Responsibilities */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    主要职责
                  </h4>
                  <ul className="space-y-1.5">
                    {project.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <ArrowRight className={cn('w-4 h-4 mt-0.5 shrink-0', colors.bullet)} />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    项目成果
                  </h4>
                  <ul className="space-y-1.5">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className={cn('w-1.5 h-1.5 mt-2 rounded-full shrink-0', colors.bullet, 'bg-current')} />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-lg',
                      'text-sm font-medium transition-colors duration-200',
                      'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600',
                      'text-gray-700 dark:text-gray-200'
                    )}
                  >
                    <GitBranch className="w-4 h-4" />
                    GitHub 仓库
                    <ArrowRight className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
