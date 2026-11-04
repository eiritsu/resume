import { GitBranch, Mail, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-16 text-neutral-400">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-neutral-900">
          <div>
            <div className="flex items-center gap-2 font-mono text-sm text-white font-bold tracking-wider">
              <span>Yoeiritsu</span>
            </div>
            <p className="font-mono text-xs text-neutral-500 mt-1">
              AI Agent 负责人 · 企业平台架构师 · 上海
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href="mailto:yoeiritsu@gmail.com"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>yoeiritsu@gmail.com</span>
            </a>
            <a
              href="https://github.com/eiritsu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>github.com/eiritsu</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors ml-auto sm:ml-0"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px]">TOP</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-600">
          <span>© 2026 Yoeiritsu. Precision Architecture & Production Delivery.</span>
          <span>BUILD WITH VITE + REACT + TAILWIND</span>
        </div>
      </div>
    </footer>
  )
}
