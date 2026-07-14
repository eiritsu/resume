import { motion } from 'framer-motion'
import { Mail, MapPin, GitBranch } from 'lucide-react'
import { cn } from '../lib/utils'

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:yoeiritsu@gmail.com',
    label: 'Email',
    external: false,
  },
  {
    icon: GitBranch,
    href: 'https://github.com/eiritsu',
    label: 'GitHub',
    external: true,
  },
]

const badges = [
  { text: 'IT Director' },
  { text: '8年经验' },
  { text: '上海', icon: MapPin },
]

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const easeInOut: [number, number, number, number] = [0.42, 0, 0.58, 1]

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Floating blurred circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: easeInOut }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        {/* Badge row */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge, i) => (
            <motion.span
              key={badge.text}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 0.1 + i * 0.1,
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-gray-700 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-300"
            >
              {badge.icon && <badge.icon className="h-3.5 w-3.5" />}
              {badge.text}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
          className="mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        >
          8年+IT运维技术和管理经验，负责企业信息化、团队管理。近3年负责构建企业AI落地项目。
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0, ease: easeOut }}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="mailto:yoeiritsu@gmail.com"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            联系我
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)' }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            查看项目
          </motion.a>
        </motion.div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-gray-400 dark:border-gray-600">
          <motion.div
            className="mt-2 h-2 w-1.5 rounded-full bg-gray-400 dark:bg-gray-600"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: easeInOut }}
          />
        </div>
      </motion.div>
    </section>
  )
}
