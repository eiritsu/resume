import { motion } from 'framer-motion'
import {
  Briefcase,
  Cpu,
  Code2,
  Bot,
  Network,
  Shield,
  Mail,
  GitBranch,
} from 'lucide-react'
import { cn } from '../lib/utils'

const strengths = [
  {
    title: '8年甲方IT管理经验',
    icon: Briefcase,
    color: 'blue',
    description: '6年团队管理 + 3年AI业务化落地，最小团队独立负责三地IT',
  },
  {
    title: '企业AI平台从0建设',
    icon: Bot,
    color: 'purple',
    description: '统一身份 + AI Gateway + Agent运行时，8个内部系统统一登录',
  },
  {
    title: 'AI Agent 全链路落地',
    icon: Cpu,
    color: 'green',
    description: '招聘、运营预警、合同审核、客户画像、项目管理、会议纪要',
  },
  {
    title: '基础设施与跨境网络',
    icon: Network,
    color: 'teal',
    description: '专线割接、华为设备验收、虚拟化集群、自建海外节点',
  },
  {
    title: '安全合规与备案',
    icon: Shield,
    color: 'indigo',
    description: '等保2.0三级、ICP备案、大模型登记、算法备案',
  },
  {
    title: '全栈自研能力',
    icon: Code2,
    color: 'orange',
    description: 'Go/Java/Rust/Python/TypeScript，桌面端与网关自研',
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-950/40',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-950/40',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-950/40',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-800',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-950/40',
    text: 'text-teal-600 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-800',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-800',
  },
  red: {
    bg: 'bg-red-50 dark:bg-red-950/40',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
  },
}

const tags = ['上海', '35-40K', 'AI Agent 负责人 / 企业 AI 平台架构师', '8年经验']

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease,
    },
  }),
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.06,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
}

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          关于我
          <motion.div
            className="h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
          />
        </motion.h2>

        {/* Two-column layout: left=2, right=3 out of 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* LEFT column */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Name & role */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Yoeiritsu
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400 mt-1 font-medium">
                AI Agent 负责人 / 企业 AI 平台架构师
              </p>
            </div>

            {/* Intro paragraphs */}
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                近 3 年专注企业 AI Agent 业务化落地，主导从 0 搭建公司级 AI 平台：员工用飞书账号一次登录即可使用，统一管理各部门可用的大模型、调用额度与费用，系统升级出错可自动恢复。
              </p>
              <p>
                已交付招聘、运营预警、合同审核、客户画像、项目管理、会议纪要、专利知识库等 AI 应用。IT 管理背景是差异化优势：熟悉 ERP / OA / CRM 与跨部门数据打通、等保 2.0 三级与 AI 合规备案，带过 5 人团队 + 多地外包。
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  custom={i}
                  variants={tagVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={cn(
                    'px-3 py-1 text-sm rounded-full',
                    'bg-gray-100 dark:bg-gray-800',
                    'text-gray-700 dark:text-gray-300',
                    'border border-gray-200 dark:border-gray-700'
                  )}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-2 pt-2">
              <a
                href="mailto:yoeiritsu@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>yoeiritsu@gmail.com</span>
              </a>
              <a
                href="https://github.com/eiritsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <GitBranch className="w-4 h-4" />
                <span>github.com/eiritsu</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT column - strength cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {strengths.map((item, i) => {
              const Icon = item.icon
              const colors = colorMap[item.color] ?? colorMap.blue
              return (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className={cn(
                    'p-4 rounded-xl border transition-shadow',
                    'bg-white dark:bg-gray-800/60',
                    'border-gray-200 dark:border-gray-700',
                    'hover:shadow-lg dark:hover:shadow-gray-900/40',
                    colors.border
                  )}
                >
                  <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-3', colors.bg)}>
                    <Icon className={cn('w-5 h-5', colors.text)} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
