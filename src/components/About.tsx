import { motion } from 'framer-motion'
import {
  Briefcase,
  Cpu,
  Server,
  Code2,
  Bot,
  Network,
  Users,
  Shield,
  Globe,
  Mail,
  GitBranch,
} from 'lucide-react'
import { cn } from '../lib/utils'

const strengths = [
  {
    title: '8年甲方IT管理经验',
    icon: Briefcase,
    color: 'blue',
    description: '5年基础设施运维+团队管理，3年AI业务化落地',
  },
  {
    title: '精通AI工具业务落地',
    icon: Cpu,
    color: 'purple',
    description: 'CRM邮件智能分析、客户画像侧写、AI合同审核等',
  },
  {
    title: '熟悉企业业务系统实施运维',
    icon: Server,
    color: 'green',
    description: '用友BIP ERP、金蝶K3、致远/泛微OA等',
  },
  {
    title: 'Python+LLM自研AI组件能力',
    icon: Code2,
    color: 'orange',
    description: '独立完成CRM邮件分析、合同审核等',
  },
  {
    title: '掌握主流AI Agent框架',
    icon: Bot,
    color: 'teal',
    description: 'LangGraph、Dify、n8n、Hermes、OpenClaw等',
  },
  {
    title: '跨部门数据架构设计能力',
    icon: Network,
    color: 'indigo',
    description: '主导CRM/ERP/OA跨部门数据打通',
  },
  {
    title: '项目团队领导能力',
    icon: Users,
    color: 'red',
    description: '5人IT团队+多地外包协作',
  },
  {
    title: '多厂商网络安全设备实战',
    icon: Shield,
    color: 'blue',
    description: 'Cisco ASA、华为USG、深信服AC等',
  },
  {
    title: '境外SaaS与跨境网络经验',
    icon: Globe,
    color: 'purple',
    description: '境外账号管理',
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

const tags = ['上海', '20-30K', 'IT Director / IT Manager', '8年经验']

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
                IT Director / IT Manager
              </p>
            </div>

            {/* Intro paragraphs */}
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                拥有8年甲方IT管理经验，前5年专注于基础设施运维与团队管理，后3年深耕AI业务化落地，成功推动多个AI项目在企业中实际应用。
              </p>
              <p>
                熟悉企业级业务系统（ERP、OA、CRM）的选型、实施与运维，具备Python+LLM自研AI组件能力，能独立完成从需求分析到部署落地的全流程。
              </p>
              <p>
                擅长跨部门沟通与数据架构设计，具备项目团队领导能力，能有效协调内部团队与外包资源，确保项目高质量交付。
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
