import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useCallback, useEffect, useState } from 'react'
import { cn } from '../lib/utils'

/* ── colour map: complete Tailwind class strings only ── */
const colorMap: Record<string, {
  border: string
  dot: string
  text: string
  bg: string
  glow: string
  statBorder: string
  statText: string
}> = {
  blue: {
    border: 'border-l-4 border-blue-500',
    dot: 'bg-blue-500',
    text: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    glow: 'shadow-blue-500/10',
    statBorder: 'border-t-4 border-blue-500',
    statText: 'text-blue-600 dark:text-blue-400',
  },
  purple: {
    border: 'border-l-4 border-purple-500',
    dot: 'bg-purple-500',
    text: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
    glow: 'shadow-purple-500/10',
    statBorder: 'border-t-4 border-purple-500',
    statText: 'text-purple-600 dark:text-purple-400',
  },
  green: {
    border: 'border-l-4 border-green-500',
    dot: 'bg-green-500',
    text: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-950/30',
    glow: 'shadow-green-500/10',
    statBorder: 'border-t-4 border-green-500',
    statText: 'text-green-600 dark:text-green-400',
  },
  orange: {
    border: 'border-l-4 border-orange-500',
    dot: 'bg-orange-500',
    text: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
    glow: 'shadow-orange-500/10',
    statBorder: 'border-t-4 border-orange-500',
    statText: 'text-orange-600 dark:text-orange-400',
  },
  red: {
    border: 'border-l-4 border-red-500',
    dot: 'bg-red-500',
    text: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-50 dark:bg-red-950/30',
    glow: 'shadow-red-500/10',
    statBorder: 'border-t-4 border-red-500',
    statText: 'text-red-600 dark:text-red-400',
  },
  teal: {
    border: 'border-l-4 border-teal-500',
    dot: 'bg-teal-500',
    text: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-950/30',
    glow: 'shadow-teal-500/10',
    statBorder: 'border-t-4 border-teal-500',
    statText: 'text-teal-600 dark:text-teal-400',
  },
  indigo: {
    border: 'border-l-4 border-indigo-500',
    dot: 'bg-indigo-500',
    text: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    glow: 'shadow-indigo-500/10',
    statBorder: 'border-t-4 border-indigo-500',
    statText: 'text-indigo-600 dark:text-indigo-400',
  },
}

/* ── skill categories ── */
const skillCategories = [
  {
    id: 'it-service',
    title: 'IT服务与团队管理',
    color: 'blue',
    skills: [
      'ITSC流程建设',
      'SOP 25+份',
      '5人团队+多地外包管理',
      'OKR+KPI',
      '跨部门沟通',
    ],
  },
  {
    id: 'business-systems',
    title: '业务系统实施与运维',
    color: 'purple',
    skills: [
      '用友BIP ERP',
      '金蝶K3',
      '致远/泛微OA',
      'CRM实施',
      '业财一体化',
      'ERP迁移',
      '模块二次开发',
    ],
  },
  {
    id: 'ai-business',
    title: 'AI业务化落地',
    color: 'green',
    skills: [
      'CRM邮件分析',
      '客户画像侧写',
      'AI合同审核',
      'AI周报自动生成',
      '自研轻量ERP/BI',
      'LangGraph/Dify/OpenClaw',
    ],
  },
  {
    id: 'cross-border',
    title: '跨境与合规',
    color: 'orange',
    skills: [
      '境外SaaS管理',
      'SD-WAN跨境组网',
      '等保2.0三级',
      '公安网安审查',
      '数据出境合规',
    ],
  },
  {
    id: 'network-security',
    title: '网络与安全',
    color: 'red',
    skills: [
      'Cisco ASA/华为USG',
      '深信服AC/飞塔Fortinet',
      'VPN/VRRP',
      '行为审计',
      '等保2.0三级合规改造',
      '网络架构规划',
      '信息安全体系建设',
    ],
  },
  {
    id: 'endpoint',
    title: '终端与桌面',
    color: 'teal',
    skills: [
      'Windows/macOS管理',
      'Windows镜像封装',
      'AD域控',
      'Exchange',
      'Snipe-IT+RFID资产管理',
    ],
  },
  {
    id: 'automation',
    title: '自动化与开发',
    color: 'indigo',
    skills: [
      'Python/PowerShell/Shell',
      'n8n工作流自动化',
      'Linux(Fedora/Ubuntu)',
      'Docker容器化部署',
      'Dify+n8n AI平台搭建',
      '钉钉/飞书/企微SSO打通',
    ],
  },
]

/* ── stat definitions ── */
const stats = [
  { target: 8, suffix: '+', label: '年IT管理', color: 'blue' },
  { target: 5, suffix: '+', label: '年团队管理', color: 'purple' },
  { target: 3, suffix: '+', label: '年AI落地', color: 'green' },
  { target: 1800, suffix: '+', label: '设备管理', color: 'orange' },
]

/* ── count-up hook ── */
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true
    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, target, duration])

  return { ref, count }
}

/* ── 3D tilt card wrapper ── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 })
  const scale = useMotionValue(1)
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const x = e.clientX - centerX
      const y = e.clientY - centerY
      rotateX.set(-y / 15)
      rotateY.set(x / 15)
      scale.set(1.02)
    },
    [rotateX, rotateY, scale],
  )

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
    scale.set(1)
  }, [rotateX, rotateY, scale])

  return (
    <motion.div
      ref={cardRef}
      className={cn('cursor-default', className)}
      style={{
        perspective: 1000,
        rotateX: springX,
        rotateY: springY,
        scale: springScale,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

/* ── animated underline ── */
function AnimatedUnderline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="flex justify-center mt-4">
      <motion.div
        className="h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500"
        initial={{ width: 0 }}
        animate={isInView ? { width: 96 } : { width: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  )
}

/* ── stat card with counting animation ── */
function StatCard({
  target,
  suffix,
  label,
  color,
}: {
  target: number
  suffix: string
  label: string
  color: string
}) {
  const { ref, count } = useCountUp(target, 2000)
  const c = colorMap[color]

  return (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl bg-white dark:bg-gray-900 p-6 text-center shadow-lg',
        'border border-gray-100 dark:border-gray-800',
        'hover:shadow-xl transition-shadow duration-300',
        c.statBorder,
      )}
    >
      <div className={cn('text-3xl md:text-4xl font-bold font-display tracking-tight', c.statText)}>
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">
        {label}
      </div>
    </div>
  )
}

/* ── main component ── */
export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── title ── */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display tracking-tight text-gray-900 dark:text-white">
            核心技能
          </h2>
          <AnimatedUnderline />
          <p className="mt-4 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            涵盖IT基础设施、业务系统、AI应用、网络安全、跨境合规与自动化开发的全栈技能体系
          </p>
        </motion.div>

        {/* ── skill grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const c = colorMap[category.color]
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <TiltCard
                  className={cn(
                    'rounded-2xl bg-white dark:bg-gray-900 shadow-lg',
                    'border border-gray-100 dark:border-gray-800',
                    'hover:shadow-xl transition-shadow duration-300',
                    'overflow-hidden group',
                    c.border,
                  )}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className="text-lg font-bold font-display text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>

                    <ul className="space-y-2.5" role="list">
                      {category.skills.map((skill, i) => (
                        <motion.li
                          key={skill}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2.5 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.05 }}
                        >
                          <span
                            className={cn('w-1.5 h-1.5 rounded-full flex-shrink-0', c.dot)}
                            aria-hidden="true"
                          />
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>

        {/* ── stats row ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
