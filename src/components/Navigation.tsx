import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { cn } from '../lib/utils'

const navItems = [
  { id: 'about', label: '关于' },
  { id: 'skills', label: '技能矩阵' },
  { id: 'projects', label: '精选项目' },
  { id: 'education', label: '背景' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = 72
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      })
    }
    setIsMobileMenuOpen(false)
  }, [])

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/60 py-3'
          : 'bg-transparent py-5'
      )}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto max-w-6xl px-6 sm:px-8" aria-label="主导航">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#about"
              className="group flex items-center gap-2.5 font-mono text-sm tracking-widest text-neutral-200 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">Yoeiritsu</span>
              <span className="text-neutral-500 font-normal hidden sm:inline text-xs">/ ARCHITECT</span>
            </motion.a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 bg-neutral-900/60 p-1 rounded-full border border-neutral-800/80 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors rounded-full',
                    isActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-200'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-neutral-800 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Contact / Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:yoeiritsu@gmail.com"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 hover:border-neutral-700 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              <span>联系我</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden px-6 pt-3 pb-5 bg-neutral-950/95 border-b border-neutral-800/80 backdrop-blur-xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'text-left px-3 py-2 text-sm font-mono rounded-lg transition-colors',
                    activeSection === item.id ? 'bg-neutral-900 text-white font-medium' : 'text-neutral-400 hover:text-neutral-200'
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:yoeiritsu@gmail.com"
                className="mt-2 text-center text-xs font-mono py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200"
              >
                yoeiritsu@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
