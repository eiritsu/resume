import { motion } from 'framer-motion'
import { GraduationCap, Languages } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              04 / BACKGROUND
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              教育与工作语言
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500">
            ACADEMIC DEGREE & WORKING LANGUAGES
          </p>
        </div>

        {/* 2-Column layout: Education + Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Box */}
          <div className="hairline-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-800/60">
                <div className="flex items-center gap-2 text-white font-medium">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  <span>高等教育学历</span>
                </div>
                <span className="font-mono text-xs text-neutral-500">2018 – 2021</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  西南交通大学
                </h3>
                <div className="flex items-center gap-2">
                  <span className="mono-tag text-[10px]">本科</span>
                  <span className="text-sm text-neutral-300 font-sans">计算机科学与技术</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed pt-3 font-sans">
                  系统研习计算机系统结构、数据结构与算法、计算机网络原理、操作系统及数据库系统设计。
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500">
              <span>专业方向：计算机应用工程</span>
              <span className="text-emerald-400/80">毕业证书验证完备</span>
            </div>
          </div>

          {/* Languages Box */}
          <div className="hairline-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-800/60">
                <div className="flex items-center gap-2 text-white font-medium">
                  <Languages className="w-4 h-4 text-blue-400" />
                  <span>工作语言能力</span>
                </div>
                <span className="font-mono text-xs text-neutral-500">MULTI-LANGUAGE</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-white">中文 (Mandarin)</span>
                    <p className="text-xs text-neutral-400">母语，精通各类架构方案撰写与向上商务沟通</p>
                  </div>
                  <span className="mono-tag text-[10px] text-emerald-400 border-emerald-900/40 bg-emerald-950/20">
                    NATIVE
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-white">英语 (English)</span>
                    <p className="text-xs text-neutral-400">日常简单交流、顺畅查阅国际前沿开源架构文档与邮件</p>
                  </div>
                  <span className="mono-tag text-[10px] text-blue-400 border-blue-900/40 bg-blue-950/20">
                    WORKING
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                  <div className="space-y-0.5">
                    <span className="text-sm font-semibold text-white">日语 (Japanese)</span>
                    <p className="text-xs text-neutral-400">读写日常工作邮件与基础业务交流</p>
                  </div>
                  <span className="mono-tag text-[10px] text-purple-400 border-purple-900/40 bg-purple-950/20">
                    BASIC
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 text-xs font-mono text-neutral-500">
              * 具备海外远程与多语言技术外包跨国协作交付经验
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
