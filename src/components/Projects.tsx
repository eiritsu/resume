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
    period: '炽云 · 2026.08 – 至今',
    category: 'AI Agent 项目经历',
    color: 'blue',
    techStack: 'DeepSeek Harness / SQLite / Electron / Swift / OCR',
    role: '企业侧架构与核心研发',
    description:
      '公司以 DeepSeek Harness 企业版作为全员 AI 助手平台，但官方存在 P0 级缺陷：数据分散存储易损坏、版本升级易导致系统崩溃、长时间对话后程序崩溃。',
    responsibilities: [
      '定位并修复缺陷：把分散的会话、工作区、插件、账号凭据统一存入一个数据库，杜绝数据错乱和损坏',
      '设计"分步上线 ➔ 自动自检 ➔ 一键切换"的安全升级流程，升级失败可在毫秒级自动恢复到旧版本',
      '重写长对话的记忆压缩逻辑，解决长时间对话后崩溃的问题',
      '负责桌面客户端在 macOS / Windows 的迭代发布',
    ],
    achievements: [
      '40 名用户的运行环境无感切换',
      '130.75GB 历史数据迁移零缺失、零损坏',
      '每个版本通过自动化测试后发布',
    ],
    highlights: ['全员AI助手', '无感切换', '零缺失迁移', '跨平台发布'],
    github: 'https://github.com/eiritsu/DeepSeek-Harness-Desktop',
  },
  {
    title: '统一身份认证平台与 AI Gateway（自研）',
    period: '炽云 · 2026.08 – 至今',
    category: 'AI Agent 项目经历',
    color: 'purple',
    techStack: 'Go / Java Spring Boot / OIDC / OAuth2 / LDAP / 飞书开放平台 / SSE / WebSocket / Prometheus / Loki',
    role: '架构设计与核心研发',
    description:
      '公司各系统账号分散，员工使用大模型缺乏统一入口，权限、额度和费用难以管控。',
    responsibilities: [
      '以飞书账号作为全公司唯一登录入口，兼容 LDAP 打通内部旧系统，员工一次登录即可使用各应用，应用和权限按部门分配；支持内网、外网两种登录方式',
      '自研 AI 网关，统一管理公司可用的大模型、访问密钥、调用额度与用量审计及告警；额度按"个人 > 所在部门 > 上级部门 > 全公司"逐级继承，修改后下一次调用即生效',
      '接入监控与日志系统，统一规范 112 个模型名称',
    ],
    achievements: [
      '网关单节点延迟 <20ms，支持 AI 回答实时流式输出',
      '8 个内部系统完成统一登录与统一模型调用入口',
      '模型调用额度与费用可按人、按部门出账',
    ],
    highlights: ['统一身份', '模型网关', '额度分级继承', '流式输出'],
  },
  {
    title: 'HireFlow — AI 智能招聘与简历初筛 Agent',
    period: '炽云 · 2026.07 – 至今',
    category: 'AI Agent 项目经历',
    color: 'green',
    techStack: 'Rust Tauri v2 / React / TypeScript / LLM / OCR / 飞书开放平台',
    role: '独立全栈研发',
    description:
      'HR 人工初筛简历耗时长，存在"注水简历"，面试安排与评价分散在多个工具中。',
    responsibilities: [
      '搭建 AI 初筛：自动读取简历（含扫描件识别），按岗位要求打分，识别注水简历并提示候选人风险，并可自动生成 JD',
      '建设人才库：支持批量导入，自动识别重复简历并保留历史版本',
      '打通飞书：自动发送通知、创建面试日程、预约 / 改期 / 取消会议室，两位面试官分别独立评价；HR 复核任务自动分配与释放，避免重复处理',
      '交付 macOS / Windows 桌面端与网页端，并编写使用手册，HR 可独立使用',
    ],
    achievements: [
      '单份简历初筛由人工约 15 分钟缩短至 10 秒内',
      '实现"简历识别 ➔ AI 评分 ➔ HR 复核 ➔ 面试安排 ➔ 评价记录"全流程线上闭环',
    ],
    highlights: ['10秒初筛', '飞书全链路', '桌面端交付', '注水简历识别'],
  },
  {
    title: '企业运营管理 SaaS 与 AI 预警',
    period: '炽云 · 2026.09 – 至今',
    category: 'AI Agent 项目经历',
    color: 'teal',
    techStack: 'LLM / Docker / SQL / SSO / Playwright',
    role: '架构与核心研发',
    description:
      '销售、采购、库存、物流、制造、项目、HR 七大业务板块流程分散，业务异常主要靠人工发现。',
    responsibilities: [
      '搭建七大板块统一的业务提交与审批平台，每家客户企业可自行设置审批方式（单人审批 / 依次会签 / 同时会签）、处理时限和撤回规则',
      '自研审批流程引擎：自动检查流程配置错误（如死循环、走不通的节点），防止重复发起，AI 处理不了的事项自动转人工',
      '设计 AI 双重预警：员工可随时让 AI 分析业务数据，系统也按设定频率（5 分钟至 24 小时）自动巡检七大板块，推送预警与待办且不重复打扰',
      '完成数据库、部署方式与登录系统重构及历史数据迁移',
    ],
    achievements: [
      '七大板块全部通过自动化浏览器验收，411/411 项测试通过',
      '生产环境部署运行正常，保留可随时回退的版本与数据库备份',
    ],
    highlights: ['七大板块', 'AI双重预警', '411/411测试', '流程引擎自研'],
  },
  {
    title: '飞书项目管理 Agent',
    period: '炽云 · 2026.08 – 至今',
    category: 'AI Agent 项目经历',
    color: 'indigo',
    techStack: '飞书开放平台 / LLM',
    role: '独立设计与开发',
    description:
      '项目沟通散落在各个群聊中，待办事项和周报依赖人工整理。',
    responsibilities: [
      '开发飞书机器人：自动归档群聊消息，实时拆分、合并、转交待办，支持用自然语言查找工作记录、自动生成个人周报',
      '支持导入飞书妙记会议记录、生成 PPT / Excel；主模型故障时自动切换备用模型（三级切换）',
    ],
    achievements: [
      '每周一 08:30 自动推送待办、周五 17:00 自动推送项目周报',
    ],
    highlights: ['群聊转待办', '自动周报', '三级模型切换'],
  },
  {
    title: '企业 AI 助手平台与业务 AI 应用',
    period: '恒方 · 2025.08 – 2026.06',
    category: 'AI Agent 项目经历',
    color: 'orange',
    techStack: 'Dify / n8n / OpenClaw / OpenAI / Gemini / MiniMax / Python / FastAPI / Vue',
    role: '平台搭建与业务落地',
    description:
      '知识产权咨询公司，三地办公；客户邮件跟进、合同审核、周报等工作大量依赖人工。',
    responsibilities: [
      '搭建公司 AI 平台，接入多家大模型，开发按任务难易程度自动选择模型的中间程序；打通钉钉 / 飞书 / 企微单点登录',
      'CRM 邮件 AI（2025.12 – 2026.06）：自动给客户邮件分级、提取意向线索、生成客户画像，识别高价值客户',
      'AI 合同审核（2025.12 – 2026.06）：自动标出风险条款并给出修改建议',
      'AI 周报与表单预审：Marketing 周报由人工做 PPT 改为自动生成；12 类行政与业务表单采用"AI 预审 + 人工复核"',
      '自研 AI 轻量 ERP + 数据看板（2025.10 起），AI 可直接读取业务数据进行分析汇总',
    ],
    achievements: [
      '大模型调用成本降低 30%',
      '3000+ 封客户邮件分类准确率 95%，高价值客户识别准确率 78%',
      '合同审核时间节省 70%+（用户反馈）',
      '周报耗时从 1–2 天缩短至 3 小时内',
      'ERP 核心模块 1 人 30 天上线',
    ],
    highlights: ['成本降30%', '95%分类准确率', '合同审核省时70%', '1人30天上线'],
  },
  {
    title: '专利本地知识库',
    period: '恒方 · 2026.02 – 2026.03',
    category: 'AI Agent 项目经历',
    color: 'red',
    techStack: 'RAG / SQLite / Python',
    role: '主导开发',
    description:
      '业务部门需要快速检索 Google Patents 专利数据，常规 AI 知识库方案（向量检索 RAG）找得不准。',
    responsibilities: [
      '评估后放弃常规方案，改为按"行业 ➔ 地区 ➔ 专利"分层目录组织数据，完成数据清洗入库与定期增量更新，并提供查询接口',
    ],
    achievements: [
      '检索命中率由约 60% 提升至 95%+，查询响应 <200ms',
      '本地部署，不依赖外部服务',
    ],
    highlights: ['60% ➔ 95%命中率', '<200ms响应', '零外部依赖'],
  },
  {
    title: '跨境网络降本与上海办公室网络安全建设',
    period: '炽云 · 2026.08 – 至今',
    category: 'IT 基础设施项目',
    color: 'blue',
    techStack: '华为 USG6000E / S5735 / WireGuard / SmartDNS',
    role: '方案设计 + 实施交付',
    description:
      '公司跨境访问依赖 SD-WAN 专线，费用高；上海办公室网络需要重新建设。',
    responsibilities: [
      '完成电信固定 IP 专线从拉光纤、装机到开通割接的全过程；完成华为防火墙与交换机验收上线，按端口划分网络隔离，并编写运维文档',
      '自建新加坡海外双节点互为备份，配合智能 DNS 分流与 VPN，替代原 SD-WAN 专线',
      '自研网络运行中心（NOC），统一监控网络设备和员工电脑，实时显示网络流量',
    ],
    achievements: [
      '每月为公司节省 3～7 万元',
      '专线资费谈判由 2388 元/月降至 1194 元/月',
      '跨境访问稳定性同步提升',
    ],
    highlights: ['月省3~7万', '专线对折', '自研NOC', '端口级隔离'],
  },
  {
    title: '服务器虚拟化与终端标准化',
    period: '云鹊 / 恒方 · 2023.05 – 2024.09',
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
      '电脑故障率 1 年内降低 60%',
      '核心业务可用性 99.99%（年停机 ≤6 小时）',
      '服务器利用率从 30% 提升至 70%',
    ],
    highlights: ['故障率降60%', '可用性99.99%', '利用率30%➔70%'],
  },
  {
    title: '全球网络与远程会议优化',
    period: '云鹊 / 恒方 · 2023.05 – 2024.09',
    category: 'IT 基础设施项目',
    color: 'green',
    techStack: 'SD-WAN / QoS / VPN',
    role: '主导实施',
    description:
      '跨国视频会议卡顿，SD-WAN 通信费用高。',
    responsibilities: [
      '调整全球网络节点，对 Zoom 视频流量专项优化，设置带宽优先级与加密通道；网络分层隔离，支持多终端安全接入，并为重要会议提供全程保障',
    ],
    achievements: [
      '高清视频流畅度 98%+',
      '每年节省 SD-WAN 通信成本 17 万元',
    ],
    highlights: ['流畅度98%+', '年省17万'],
  },
  {
    title: '办公搬迁网络重构',
    period: '恒方 · 2025.08 – 2025.09',
    category: 'IT 基础设施项目',
    color: 'teal',
    techStack: 'x86 软路由 / 开源 SSLVPN / Cisco',
    role: '方案设计与实施',
    description:
      '公司搬迁，需用 2014 年的老旧思科设备异地组网，原有 VPN 不兼容 Win10 及以上系统。',
    responsibilities: [
      '用 x86 服务器搭建软路由和防火墙，替代性能衰减的老硬件；部署开源 VPN 解决远程办公接入；制定 IP 规划与切换方案，快速完成重建',
    ],
    achievements: [
      '零硬件采购预算完成升级',
      '搬迁期间业务系统 0 停机、0 数据丢失',
    ],
    highlights: ['零预算升级', '0停机0丢失'],
  },
  {
    title: 'IT 资产全生命周期与 AI 智能管理',
    period: '东伽 / 云鹊 / 恒方 · 2019.07 – 2026.06',
    category: 'IT 基础设施项目',
    color: 'indigo',
    techStack: 'Snipe-IT / RFID / LLM / Python',
    role: '二次开发 + 架构设计',
    description:
      '设备数量多，人工盘点慢、易出错，设备故障难以提前发现。',
    responsibilities: [
      '资产数字化（2019 起）：引入 Snipe-IT 资产系统 + RFID 标签，覆盖采购、领用、维修、报废全流程，以"RFID + 网络扫描"替代逐台人工盘点',
      'AI 智能管理（2025 起）：二次开发接入大模型，自动扫描发现网络设备、自动生成安全审计报告、根据历史工单预测易故障设备',
    ],
    achievements: [
      '资产数字化累计管理 1800+ 台设备',
      'AI 阶段（2025 起）实现 90% 设备自动发现，审计报告 4 天 ➔ 30 分钟，设备故障率降低 30%，维护成本降低 25%',
    ],
    highlights: ['1800+设备', '90%自动发现', '4天➔30分钟', '故障率降30%'],
  },
  {
    title: 'Hermes Wiki — AI Agent 会话知识库插件',
    period: '独立开发 · 2025.07 – 2026.07',
    category: '开源项目',
    color: 'orange',
    techStack: 'Python / JavaScript / SQLite / LLM / Obsidian Markdown / 7语言i18n',
    role: '独立开发并开源',
    description:
      '基于 Karpathy LLM Wiki 模式，自动将 AI 会话转为 Obsidian 风格 Wiki 页面，支持质量评分、主题分类与实体提取。',
    responsibilities: [
      '设计双模式架构：Extension 模式（与 Holographic Memory 共享连接）和 Standalone 模式（独立 SQLite 存储）',
      '开发 LLM 驱动的会话分析引擎，自动生成 Obsidian 风格 Wiki 页面（frontmatter、wiki-link、tag）',
      '实现质量评分系统（1-5 分），自动清理低质量页面，只保留精品内容',
      '开发 Desktop 侧边栏 GUI 插件，支持查看、新建、编辑、删除、多选批量操作和导出',
    ],
    achievements: [
      '支持 7 语言 i18n（中 / 英 / 日 / 韩 / 德 / 法 / 西）',
      'Python 67.8% + JavaScript 29.6% 全栈独立开发',
    ],
    highlights: ['Karpathy LLM Wiki模式', '7语言i18n', '全栈独立开发', '开源项目'],
    github: 'https://github.com/eiritsu/hermes-wiki-plugin',
  },
  {
    title: 'AI 会议纪要与候选人评估 Skill',
    period: '独立开发 · 2026.03 – 2026.06',
    category: '开源项目',
    color: 'red',
    techStack: 'ASR 服务 / 三段式 Prompt 流水线 / VAD 切片 / 响度归一化 / 多语言',
    role: '设计并开发 Agent Skill',
    description:
      '设计并开发会议 / 面试音频转结构化纪要的 Agent Skill，支持多语言识别与智能摘要生成，已迭代至 v2.0。',
    responsibilities: [
      '集成 ASR 服务，完成长音频自动切片、VAD 静音检测与说话人识别',
      '搭建三段式 Prompt 流水线与 SQLite 结构化存储',
      '已应用于正式办公场景与技术面试候选人评估流程，持续迭代优化',
    ],
    achievements: [
      '1 小时会议录音 ➔ 结构化纪要压缩至 15 分钟以内',
      '替代第三方商业产品，节省外购成本',
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
