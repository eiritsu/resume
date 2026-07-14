import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { cn } from '../lib/utils'

const navItems = [
  { id: 'about', label: '关于我' },
  { id: 'skills', label: '核心技能' },
  { id: 'projects', label: '项目经历' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 20)
      const maxScroll = 400
      setScrollProgress(Math.min(y / maxScroll, 1))
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
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      })
    }
    setIsMobileMenuOpen(false)
  }, [])

  // 浅色毛玻璃效果：滚动时透明度渐增，始终保持浅色
  const bgOpacity = 0.15 + scrollProgress * 0.25  // 0.15 → 0.4
  const blurValue = scrollProgress * 24 // 0 → 24px

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        backgroundColor: isScrolled
          ? `rgba(255, 255, 255, ${bgOpacity})`
          : 'transparent',
        backdropFilter: isScrolled ? `blur(${blurValue}px)` : 'blur(0px)',
        WebkitBackdropFilter: isScrolled ? `blur(${blurValue}px)` : 'blur(0px)',
        borderBottom: isScrolled
          ? '1px solid rgba(229, 231, 235, 0.5)'
          : '1px solid transparent',
        transition:
          'background-color 0.3s, border-color 0.3s, backdrop-filter 0.3s, -webkit-backdrop-filter 0.3s',
      }}
    >
      {/* Gradient accent line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: 'left' }}
        aria-hidden="true"
      />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="主导航">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Name + Nav */}
          <div className="flex items-center gap-8">
            <motion.a
              href="#about"
              className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Yoeiritsu
            </motion.a>

            {/* Desktop nav items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors rounded-lg',
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  )}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.label}
                  <AnimatePresence mode="wait">
                    {activeSection === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-600 rounded-full"
                        layoutId="activeNavDot"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button (only on mobile) */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu with AnimatePresence slide-down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-4 pb-4 pt-1">
              <div className="flex flex-col gap-1 rounded-xl bg-white/70 backdrop-blur-xl border border-gray-200/40 p-2 shadow-lg">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className={cn(
                      'px-4 py-3 text-left text-sm font-medium rounded-lg transition-colors',
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-100'
                    )}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    whileHover={{ x: 4 }}
                  >
                    <span className="flex items-center gap-3">
                      {activeSection === item.id && (
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-blue-600"
                          layoutId="mobileActiveDot"
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        />
                      )}
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
