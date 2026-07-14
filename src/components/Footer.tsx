import { motion } from 'framer-motion'
import { Mail, GitBranch, ArrowUp, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number]

export function Footer() {
  const { toggleTheme, resolvedTheme } = useTheme()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Column 1: Name + Bio + Social */}
          <div>
            <h3 className="text-2xl font-bold text-white">Yoeiritsu</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              热爱技术，专注于构建高质量的软件产品。持续学习，追求卓越。
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:yoeiritsu@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/eiritsu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <GitBranch className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Nav */}
          <div>
            <h4 className="text-lg font-semibold text-white">快速导航</h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-400 transition-colors hover:text-white">
                  关于我
                </a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-gray-400 transition-colors hover:text-white">
                  核心技能
                </a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-gray-400 transition-colors hover:text-white">
                  项目经历
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">联系方式</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <a href="mailto:yoeiritsu@gmail.com" className="text-sm text-gray-400 transition-colors hover:text-white">
                  yoeiritsu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-gray-500" />
                <a
                  href="https://github.com/eiritsu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  github.com/eiritsu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 sm:flex-row">
          <p className="flex items-center gap-1 text-sm text-gray-500">
            © 2026 Yoeiritsu. Made with <Heart className="h-4 w-4 text-red-500" />
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
