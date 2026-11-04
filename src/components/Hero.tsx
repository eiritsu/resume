import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, GitBranch, Mail, Terminal } from 'lucide-react'

const stats = [
  { label: '甲方 IT 管理', value: '8+', unit: '年' },
  { label: '企业 AI 落地', value: '3', unit: '年' },
  { label: '内部系统自研', value: '8', unit: '套' },
  { label: '团队统筹管理', value: '6', unit: '年' },
]

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 bg-neutral-950 bg-grid-pattern overflow-hidden">
      {/* Top subtle ambient radial illumination */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-radial-fade pointer-events-none" />

      <div className="container-custom relative z-10 my-auto">
        {/* Top metadata strip */}
        <motion.div
          className="flex flex-wrap items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs tracking-wider text-neutral-300">OPEN TO WORK</span>
          </div>
          <span className="font-mono text-xs text-neutral-500 tracking-wider">/ SHANGHAI, CN</span>
          <span className="font-mono text-xs text-neutral-500 tracking-wider hidden sm:inline">/ 35–40K</span>
        </motion.div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-6">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Yoeiritsu
          </motion.h1>

          <motion.div
            className="font-mono text-lg sm:text-2xl text-blue-400/90 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI Agent 负责人 & 企业平台架构师
          </motion.div>

          <motion.p
            className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            连接企业底层 IT 基础设施（机房专线、网管集群、安全等保）与前沿智能体生态（自研 AI Gateway、统一身份、多 Agent 编排）。
            8 年甲方技术管理积淀，近 3 年专注企业级 AI 系统的真实生产落地与合规交付。
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-colors shadow-sm"
          >
            <span>精选项目</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href="https://github.com/eiritsu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 font-mono text-sm transition-all"
          >
            <GitBranch className="w-4 h-4" />
            <span>github.com/eiritsu</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
          </a>

          <a
            href="mailto:yoeiritsu@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-neutral-400 hover:text-neutral-200 text-sm font-mono transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>yoeiritsu@gmail.com</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Architectural Stats Bar */}
      <div className="container-custom relative z-10 pt-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-neutral-800/80 bg-neutral-900/40 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((item, i) => (
            <div key={i} className="px-4 py-2 border-r last:border-r-0 border-neutral-800/60">
              <div className="flex items-baseline gap-1">
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {item.value}
                </span>
                <span className="font-mono text-xs text-neutral-500">{item.unit}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1 font-mono tracking-wide">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
