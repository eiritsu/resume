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
    title: 'CRM邮件AI化与客户画像侧写',
    period: '2025.12 - 2026.06',
    color: 'blue',
    techStack: 'LLM / 开源CRM / Marketing协作',
    role: '主导开发',
    description:
      '基于LLM+开源CRM系统，构建客户往来邮件智能分析与客户画像自动生成能力，赋能Marketing团队精准营销。',
    responsibilities: [
      '负责完成客户往来邮件的自动分析与智能分类',
      '完成客户画像的自动生成与标签体系建设',
      '配合Marketing部门持续优化模型准确率',
    ],
    achievements: [
      '累计处理3000+封客户邮件，分类准确率达95%',
      '高价值客户识别准确率达78%',
    ],
    highlights: ['95%分类准确率', '78%高价值识别率', '3000+邮件处理'],
  },
  {
    title: 'AI合同审核模块',
    period: '2025.12 - 2026.06',
    color: 'purple',
    techStack: 'LLM / 历史合同数据训练',
    role: '部署与开发',
    description:
      '部署LLM合同审核模块，实现风险条款自动标注与修改建议生成，大幅提升法务审核效率。',
    responsibilities: [
      '完成风险条款的自动标注与修改建议生成',
      '基于历史合同数据训练风险识别模型',
    ],
    achievements: [
      '上线后同事反馈节省70%以上审核时间',
      '风险条款识别准确率高',
    ],
    highlights: ['70%+时间节省', '高准确率识别'],
  },
  {
    title: 'Google Patants 本地知识库构建',
    period: '2026.02 - 2026.03',
    color: 'teal',
    techStack: 'SQLite / 树形Wiki架构 / 全文检索 / 增量同步',
    role: '主导开发',
    description:
      '基于Google Patants公开数据，搭建企业本地Patents知识库，主动放弃向量数据库方案改用树形结构Wiki架构。',
    responsibilities: [
      '调研并测试RAG向量数据库方案，发现向量召回误差大、上下文关联性差，主动放弃改用树形结构Wiki架构',
      '设计树形分类目录（按行业→区域→合作伙伴层级），完成Google Patants数据的结构化清洗与入库',
      '基于SQLite实现本地轻量化存储，开发增删改查与全文检索接口',
      '编写数据更新脚本，实现Patents数据的定期同步与增量更新',
    ],
    achievements: [
      '树形结构检索准确率较向量方案提升显著，业务查询命中率从约60%提升至95%+',
      'SQLite本地部署零外部依赖，查询响应时间<200ms',
    ],
    highlights: ['95%+查询命中率', '<200ms响应', '零外部依赖'],
  },
  {
    title: 'AI会议纪要总结',
    period: '2026.03 - 2026.06',
    color: 'green',
    techStack: 'ASR服务 / 三段式Prompt流水线 / 多语言(中/英/日/韩)',
    role: '设计并开发Agent Skill',
    description:
      '设计并开发会议/面试音频转结构化纪要的Agent Skill，支持多语言识别与智能摘要生成。',
    responsibilities: [
      '集成ASR服务，完成长音频自动切片与说话人识别',
      '搭建三段式prompt流水线',
      '已应用于正式办公场景并持续迭代优化',
    ],
    achievements: [
      '1小时会议录音→结构化纪要压缩至15分钟以内',
      '替代第三方产品，节省外购成本',
    ],
    highlights: ['15分钟内出纪要', '多语言支持', '成本节约'],
    github: 'https://github.com/eiritsu/meeting-minutes-interview',
  },
  {
    title: '企业网络安全与等保2.0改造',
    period: '2023.05 - 2024.09',
    color: 'red',
    techStack: '双防火墙(飞塔+USG6000) / VRRP / 华为AC / SDN威胁情报 / AD域 / VPN',
    role: '主导构建',
    description:
      '主导构建双防火墙主备架构，实施等保2.0三级安全改造，全面提升企业网络安全防护能力。',
    responsibilities: [
      '配置华为AC控制器及访客隔离策略',
      '实施AD域统一身份认证、行为审计与VPN加密隧道',
      '配合公安机关完成网络安全审查',
    ],
    achievements: [
      '核心业务网络可用性达99.99%',
      '阻断DDoS攻击，检测效率提升60%',
      '通过等保2.0三级认证',
    ],
    highlights: ['99.99%可用性', '等保三级认证', 'DDoS阻断'],
  },
  {
    title: '远程会议网络加速与全球通信优化',
    period: '多阶段',
    color: 'orange',
    techStack: 'Teams / Zoom UDP调优 / QoS策略 / 加密隧道 / SD-WAN / 网络分层隔离',
    role: '完成优化与保障',
    description:
      '完成全球节点网络优化与Teams/Zoom UDP流量专项调优，显著提升远程会议质量并降低通信成本。',
    responsibilities: [
      '完成Teams/Zoom UDP流量的专项调优',
      '完成网络分层隔离策略的实施',
      '负责重要跨国会议的全程技术保障',
    ],
    achievements: [
      '高清视频流畅度达98%以上',
      '年节省SD-WAN通信成本17万元',
    ],
    highlights: ['98%视频流畅度', '年省17万成本', '95%网络稳定率'],
  },
  {
    title: '复杂网络架构重构与平滑迁移',
    period: '2025.08 - 2025.09',
    color: 'teal',
    techStack: '软路由(X86) / 动态防火墙 / 开源VPN协议 / IP映射 / 流量切换',
    role: '完成架构现代化升级',
    description:
      '完成公司搬迁过程中的网络架构现代化升级，实现零预算、零停机的平滑迁移。',
    responsibilities: [
      '完成2014年老旧思科设备的异地组网方案设计',
      '利用X86服务器搭建软路由系统与动态防火墙',
      '部署基于开源协议的VPN隧道',
      '完成IP映射与流量切换方案',
    ],
    achievements: [
      '零硬件采购预算下完成现代化升级',
      '搬迁期间业务系统0停机、0数据丢失',
      '解决历史遗留远程接入难题',
    ],
    highlights: ['零预算升级', '0停机迁移', '远程接入解决'],
  },
  {
    title: 'IT资产全生命周期与AI智能管理',
    period: '多阶段',
    color: 'indigo',
    techStack: 'Snipe-IT二次开发 / LLM / fping+ARP+端口扫描 / RFID / 故障预测模型',
    role: '基于Snipe-IT二次开发接入LLM',
    description:
      '基于Snipe-IT二次开发，接入LLM构建AI资产管理体系，覆盖IT设备全生命周期管理。',
    responsibilities: [
      '完成Snipe-IT资产管理系统的二次开发，接入LLM实现网络设备全探测',
      '完成AI辅助安全审计模块开发',
      '完成AI分析设备状态与预测故障功能',
      '实现RFID标签+网络扫描的自动化盘点策略',
      '覆盖设备登记、领用、维修、报废的全流程数字化管理',
    ],
    achievements: [
      'AI接入后实现设备90%自动发现，盘点准确率达99%以上',
      '安全审计报告生成时间从4天缩短至30分钟',
      '设备故障率降低30%，维护成本降低25%',
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

                {/* GitHub Link — only for AI会议纪要总结 */}
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
