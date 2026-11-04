import { motion } from 'framer-motion'
import { Fragment } from 'react'
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
  category: string
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
    title: '企业级 AI Agent 平台（DeepSeek Harness 企业版）',
    period: '2026.08 – 至今',
    category: 'AI Agent 项目经历',
    color: 'blue',
    techStack: 'DeepSeek Harness / SQLite / Electron / Swift / OCR',
    role: '企业侧架构与核心研发',
    description:
      '公司以 DeepSeek Harness 企业版作为全员 AI 助手平台，但官方存在 P0 级缺陷：数据分散存储易损坏、版本升级易导致系统崩溃、长时间对话后程序崩溃。',
    responsibilities: [
      '修复会话、工作区、插件与凭据分散存储导致的损坏问题，统一收敛存储',
      '设计「分步上线 ➔ 自动自检 ➔ 一键切换」升级流程，失败自动回滚旧版本',
      '重写长对话记忆压缩逻辑解决长会话崩溃；负责 macOS / Windows 客户端迭代发布',
    ],
    achievements: [
      '40 名用户运行环境无感切换，130.75GB 历史数据迁移零缺失零损坏',
      '每个版本通过自动化测试后发布',
    ],
    highlights: ['全员AI助手', '无感切换', '零缺失迁移', '跨平台发布'],
    github: 'https://github.com/eiritsu/DeepSeek-Harness-Desktop',
  },
  {
    title: '统一身份认证平台与 AI Gateway（自研）',
    period: '2026.08 – 至今',
    category: 'AI Agent 项目经历',
    color: 'purple',
    techStack: 'Go / Java Spring Boot / OIDC / OAuth2 / LDAP / 飞书开放平台 / SSE / WebSocket / Prometheus / Loki',
    role: '架构设计与核心研发',
    description:
      '各系统账号分散，员工使用大模型缺乏统一入口，权限、额度和费用难以管控。',
    responsibilities: [
      '以飞书账号作为唯一登录入口，兼容 LDAP 打通内部旧系统，权限按部门分配',
      '自研 AI 网关统一管理模型、密钥、额度与用量审计，额度按「个人 > 部门 > 上级部门 > 全公司」逐级继承',
      '接入监控与日志系统，统一规范 112 个模型名称',
    ],
    achievements: [
      '网关单节点延迟 <20ms，支持 AI 回答实时流式输出',
      '8 个内部系统完成统一登录与统一模型调用入口',
    ],
    highlights: ['统一身份', '模型网关', '额度分级继承', '流式输出'],
  },
  {
    title: 'HireFlow — AI 智能招聘与简历初筛 Agent',
    period: '2026.07 – 至今',
    category: 'AI Agent 项目经历',
    color: 'green',
    techStack: 'Rust Tauri v2 / React / TypeScript / LLM / OCR / 飞书开放平台',
    role: '独立全栈研发',
    description:
      'HR 人工初筛简历耗时长，存在「注水简历」，面试安排与评价分散在多个工具中。',
    responsibilities: [
      '自动读取简历（含扫描件识别）按岗位打分，识别注水简历并提示风险，自动生成 JD',
      '人才库支持批量导入，自动识别重复简历并保留历史版本',
      '打通飞书通知、日程与会议室预约，两位面试官独立评价；交付桌面端与网页端及使用手册',
    ],
    achievements: [
      '单份简历初筛由人工约 15 分钟缩短至 10 秒内',
      '简历识别 ➔ AI 评分 ➔ HR 复核 ➔ 面试安排 ➔ 评价记录全流程线上闭环',
    ],
    highlights: ['10秒初筛', '飞书全链路', '桌面端交付', '注水简历识别'],
  },
  {
    title: '企业运营管理 SaaS 与 AI 预警',
    period: '2026.09 – 至今',
    category: 'AI Agent 项目经历',
    color: 'teal',
    techStack: 'LLM / Docker / SQL / SSO / Playwright',
    role: '架构与核心研发',
    description:
      '销售、采购、库存、物流、制造、项目、HR 七大业务板块流程分散，业务异常主要靠人工发现。',
    responsibilities: [
      '统一七大板块的提交与审批入口，支持单人审批、依次会签、同时会签与撤回规则',
      '自研审批流程引擎，自动检查死循环、走不通节点等配置错误，AI 处理不了的事项转人工',
      'AI 双重预警：员工随时让 AI 分析数据，系统按 5 分钟至 24 小时自动巡检并推送待办',
    ],
    achievements: [
      '七大板块全部通过自动化浏览器验收，411/411 项测试通过',
      '生产环境运行正常，保留可随时回退的版本与数据库备份',
    ],
    highlights: ['七大板块', 'AI双重预警', '411/411测试', '流程引擎自研'],
  },
  {
    title: '飞书项目管理 Agent',
    period: '2026.08 – 至今',
    category: 'AI Agent 项目经历',
    color: 'indigo',
    techStack: '飞书开放平台 / LLM',
    role: '独立设计与开发',
    description:
      '项目沟通散落在各个群聊中，待办事项和周报依赖人工整理。',
    responsibilities: [
      '飞书机器人自动归档群聊消息，实时拆分、合并、转交待办，支持自然语言检索工作记录',
      '自动生成个人与项目周报，支持导入妙记会议记录并生成 PPT / Excel；主模型故障三级切换',
    ],
    achievements: [
      '每周一 08:30 自动推送待办、周五 17:00 自动推送项目周报',
    ],
    highlights: ['群聊转待办', '自动周报', '三级模型切换'],
  },
  {
    title: '企业 AI 助手平台与业务 AI 应用',
    period: '2025.08 – 2026.06',
    category: 'AI Agent 项目经历',
    color: 'orange',
    techStack: 'Dify / n8n / OpenClaw / OpenAI / Gemini / MiniMax / Python / FastAPI / Vue',
    role: '平台搭建与业务落地',
    description:
      '三地办公的知识产权咨询公司，客户邮件跟进、合同审核、周报等工作大量依赖人工。',
    responsibilities: [
      '搭建公司 AI 平台接入多家大模型，按任务难易自动选模型；打通钉钉 / 飞书 / 企微单点登录',
      'CRM 邮件 AI：客户邮件自动分级、提取意向线索、生成客户画像',
      'AI 合同审核：自动标出风险条款并给出修改建议；周报与表单预审改为自动生成 + 人工复核',
    ],
    achievements: [
      '大模型调用成本降低 30%；3000+ 封邮件分类准确率 95%，高价值客户识别 78%',
      '合同审核时间节省 70%+；周报耗时从 1–2 天缩短至 3 小时内',
    ],
    highlights: ['成本降30%', '95%分类准确率', '合同审核省时70%', '自动周报'],
  },
  {
    title: '专利本地知识库',
    period: '2026.02 – 2026.03',
    category: 'AI Agent 项目经历',
    color: 'red',
    techStack: 'RAG / SQLite / Python',
    role: '主导开发',
    description:
      '业务部门需要快速检索 Google Patents 专利数据，常规 AI 知识库方案（向量检索 RAG）找得不准。',
    responsibilities: [
      '评估后放弃常规方案，改为按「行业 ➔ 地区 ➔ 专利」分层目录组织数据，提供查询接口与定期增量更新',
    ],
    achievements: [
      '检索命中率由约 60% 提升至 95%+，查询响应 <200ms',
      '本地部署，不依赖外部服务',
    ],
    highlights: ['60% ➔ 95%命中率', '<200ms响应', '零外部依赖'],
  },
  {
    title: '跨境网络降本与办公网络安全建设',
    period: '2026.08 – 至今',
    category: 'IT 基础设施项目',
    color: 'blue',
    techStack: '华为 USG6000E / S5735 / WireGuard / SmartDNS',
    role: '方案设计 + 实施交付',
    description:
      '跨境访问依赖 SD-WAN 专线，费用高；办公网络需要重新建设。',
    responsibilities: [
      '完成电信固定 IP 专线从拉光纤、装机到开通割接全过程；华为防火墙与交换机验收上线，按端口划分隔离',
      '自建海外双节点互备，配合智能 DNS 分流与 VPN 替代原 SD-WAN 专线',
      '自研网络运行中心（NOC），统一监控网络设备与员工电脑，实时显示网络流量',
    ],
    achievements: [
      '每月为公司节省 3～7 万元，专线资费谈判由 2388 元/月降至 1194 元/月',
    ],
    highlights: ['月省3~7万', '专线对折', '自研NOC', '端口级隔离'],
  },
  {
    title: '服务器虚拟化与终端标准化',
    period: '2022.07 – 2024.09',
    category: 'IT 基础设施项目',
    color: 'purple',
    techStack: 'VMware / 超融合 / 桌面云 / AD / 组策略',
    role: '主导设计与实施',
    description:
      '公司电脑配置不统一、故障多，服务器资源利用率低。',
    responsibilities: [
      '统一封装 Windows 系统镜像，配合 AD 域与组策略统一管理全员电脑',
      '搭建虚拟化集群（VMware + 超融合 + 桌面云），承载核心业务系统',
    ],
    achievements: [
      '电脑故障率 1 年内降低 60%，核心业务可用性 99.99%（年停机 ≤6 小时）',
      '服务器利用率从 30% 提升至 70%',
    ],
    highlights: ['故障率降60%', '可用性99.99%', '利用率30%➔70%'],
  },
  {
    title: '全球网络与远程会议优化',
    period: '2022.07 – 2024.09',
    category: 'IT 基础设施项目',
    color: 'green',
    techStack: 'SD-WAN / QoS / VPN',
    role: '主导实施',
    description:
      '跨国视频会议卡顿，SD-WAN 通信费用高。',
    responsibilities: [
      '调整全球网络节点，对 Zoom 视频流量专项优化，设置带宽优先级与加密通道；网络分层隔离，支持多终端安全接入',
    ],
    achievements: [
      '高清视频流畅度 98%+，每年节省 SD-WAN 通信成本 17 万元',
    ],
    highlights: ['流畅度98%+', '年省17万'],
  },
  {
    title: '办公搬迁网络重构',
    period: '2025.08 – 2025.09',
    category: 'IT 基础设施项目',
    color: 'teal',
    techStack: 'x86 软路由 / 开源 SSLVPN / Cisco',
    role: '方案设计与实施',
    description:
      '公司搬迁，需用老旧思科设备异地组网，原有 VPN 不兼容 Win10 及以上系统。',
    responsibilities: [
      '用 x86 服务器搭建软路由和防火墙替代老化硬件；部署开源 VPN 解决远程办公接入；制定 IP 规划与切换方案',
    ],
    achievements: [
      '零硬件采购预算完成升级，搬迁期间业务系统 0 停机、0 数据丢失',
    ],
    highlights: ['零预算升级', '0停机0丢失'],
  },
  {
    title: 'IT 资产全生命周期与 AI 智能管理',
    period: '2019.07 – 2026.06',
    category: 'IT 基础设施项目',
    color: 'indigo',
    techStack: 'Snipe-IT / RFID / LLM / Python',
    role: '二次开发 + 架构设计',
    description:
      '设备数量多，人工盘点慢、易出错，设备故障难以提前发现。',
    responsibilities: [
      '引入 Snipe-IT + RFID 标签，覆盖采购、领用、维修、报废全流程，以网络扫描替代逐台人工盘点',
      '二次开发接入大模型，自动扫描发现网络设备、生成安全审计报告、预测易故障设备',
    ],
    achievements: [
      '累计管理 1800+ 台设备，AI 阶段实现 90% 自动发现，审计报告 4 天 ➔ 30 分钟',
    ],
    highlights: ['1800+设备', '90%自动发现', '4天➔30分钟', '故障率降30%'],
  },
  {
    title: 'Hermes Wiki — AI Agent 会话知识库插件',
    period: '2025.07 – 2026.07',
    category: '开源项目',
    color: 'orange',
    techStack: 'Python / JavaScript / SQLite / LLM / Obsidian Markdown / 7语言i18n',
    role: '独立开发并开源',
    description:
      '基于 Karpathy LLM Wiki 模式，自动将 AI 会话转为 Obsidian 风格 Wiki 页面，支持质量评分与主题分类。',
    responsibilities: [
      '设计双模式架构：Extension 模式与 Standalone 模式（独立 SQLite 存储）',
      '开发 LLM 驱动的会话分析引擎，自动生成带 frontmatter、wiki-link、tag 的 Wiki 页面',
      '开发 Desktop 侧边栏 GUI，支持查看、编辑、批量操作与导出',
    ],
    achievements: [
      '支持 7 语言 i18n，Python + JavaScript 全栈独立开发',
    ],
    highlights: ['Karpathy LLM Wiki模式', '7语言i18n', '全栈独立开发', '开源项目'],
    github: 'https://github.com/eiritsu/hermes-wiki-plugin',
  },
  {
    title: 'AI 会议纪要与候选人评估 Skill',
    period: '2026.03 – 2026.06',
    category: '开源项目',
    color: 'red',
    techStack: 'ASR 服务 / 三段式 Prompt 流水线 / VAD 切片 / 多语言',
    role: '设计并开发 Agent Skill',
    description:
      '设计并开发会议 / 面试音频转结构化纪要的 Agent Skill，支持多语言识别与智能摘要生成，已迭代至 v2.0。',
    responsibilities: [
      '集成 ASR 服务，完成长音频自动切片、VAD 静音检测与说话人识别',
      '搭建三段式 Prompt 流水线与 SQLite 结构化存储，已应用于面试候选人评估流程',
    ],
    achievements: [
      '1 小时会议录音 ➔ 结构化纪要压缩至 15 分钟以内',
    ],
    highlights: ['15分钟内出纪要', '多语言支持', '开源项目', '面试评估闭环'],
    github: 'https://github.com/eiritsu/meeting-minutes-interview',
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
            const showCategory = index === 0 || projects[index - 1].category !== project.category
            return (
              <Fragment key={project.title}>
              {showCategory && (
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 pt-4 first:pt-0">
                  {project.category}
                </h3>
              )}
              <motion.div
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
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
