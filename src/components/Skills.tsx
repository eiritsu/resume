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
    id: 'ai-agent',
    title: 'AI Agent 框架',
    color: 'blue',
    skills: [
      'LangGraph / LangChain / Dify / n8n',
      'Hermes Agent / OpenClaw / DeepSeek Harness',
      '多 Agent 编排与 Sub Agent 容器化',
      'Skill · Workflow 与 Prompt 流水线',
    ],
  },
  {
    id: 'llm-knowledge',
    title: '大模型与知识库',
    color: 'purple',
    skills: [
      'DeepSeek / ChatGPT / Claude / Gemini / MiniMax',
      '多模型接入与按任务难度路由',
      'RAG 与树形 Wiki 企业知识库',
      'ASR、OCR 与文档解析',
    ],
  },
  {
    id: 'ai-platform',
    title: 'AI 平台工程',
    color: 'green',
    skills: [
      '统一身份（飞书 SSO / LDAP / OIDC / OAuth2）',
      'AI Gateway（模型路由、SSE / WebSocket、API Key）',
      '额度分级继承与用量审计',
      'Prometheus + Loki 可观测性',
      'SQLite / Docker / Playwright 自动化测试',
    ],
  },
  {
    id: 'dev-stack',
    title: '开发语言与框架',
    color: 'orange',
    skills: [
      'Go / Java Spring Boot / Python（FastAPI）',
      'Rust（Tauri v2）/ React / TypeScript / Vue',
      'Electron / Swift / Shell / Linux',
      'Node · PostgreSQL · Redis · RabbitMQ',
    ],
  },
  {
    id: 'business-systems',
    title: '企业系统与协同',
    color: 'teal',
    skills: [
      '用友 BIP ERP / 金蝶 K3·PLM 实施与迁移',
      '致远 / 泛微 OA 审批流程与集成',
      'CRM / ERP / OA 跨部门数据打通',
      '北森 HR / 钉钉·飞书·企微开放平台',
    ],
  },
  {
    id: 'infra-security',
    title: '网络安全与基础设施',
    color: 'indigo',
    skills: [
      '华为 USG·S5735 / Cisco ASA / 飞塔 / 深信服',
      'WireGuard VPN / SmartDNS 分流 / VLAN 隔离',
      'VMware + 超融合虚拟化集群',
      'AD 域 / 等保 2.0 三级 / Snipe-IT+RFID',
    ],
  },
  {
    id: 'team-management',
    title: '团队与项目管理',
    color: 'red',
    skills: [
      '5 人 IT 团队 + 多地外包管理',
      'OKR + KPI 绩效体系与 25+ 份 SOP',
      'AI Agent 工程师技术面试与人才评估',
      '跨部门推动与合规上线',
    ],
  },
]
/* ── stat definitions ── */
const stats = [
  { target: 8, suffix: '+', label: '年IT管理', color: 'blue' },
  { target: 6, suffix: '年', label: '团队管理', color: 'purple' },
  { target: 3, suffix: '年', label: 'AI落地', color: 'green' },
  { target: 8, suffix: '个', label: '内部系统交付', color: 'orange' },
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
            涵盖 AI Agent 基座、企业 AI 落地、统一身份治理、业务系统、网络安全与全栈工程开发
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
