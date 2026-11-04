import { motion } from 'framer-motion'
import { Server, Bot, Network, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react'

const pillars = [
  {
    index: '01',
    title: '企业 AI 平台与网关',
    desc: '从 0 建设统一身份认证 (OIDC/SSO) 与自研 AI Gateway，支持多模型动态路由、额度层级继承与用量对账。',
    icon: Server,
  },
  {
    index: '02',
    title: 'AI Agent 业务落地',
    desc: '自研与交付招聘初筛 (HireFlow)、运营预警、合同风控、飞书项目 Bot 等核心应用，实现真实业务闭环。',
    icon: Bot,
  },
  {
    index: '03',
    title: '网络与深度基础设施',
    desc: '华为 USG/交换机验收割接、端口级 VLAN 隔离、自建跨境海外节点替代 SD-WAN，保障高可用与降本。',
    icon: Network,
  },
  {
    index: '04',
    title: '安全合规与团队治理',
    desc: '等保 2.0 三级、ICP / 大模型登记 / 算法备案全流程；统筹 5 人技术团队 + 多地外包，沉淀 25+ 份 SOP。',
    icon: ShieldCheck,
  },
]

export function About() {
  return (
    <section id="about" className="py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              01 / PERSPECTIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              关于与架构主张
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500">
            BRIDGING ENTERPRISE IT & AI SYSTEMS
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-6 text-neutral-300 leading-relaxed text-sm sm:text-base">
            <p>
              专注在复杂企业级场景中打通从<strong>底座设施</strong>到<strong>智能体落地</strong>的最后一公里。不仅负责技术方案的设计与选型，更能亲自下场写代码并交付生产系统。
            </p>
            <p className="text-neutral-400">
              前 5 年深耕传统甲方网络、虚拟化与业务系统（用友 BIP、金蝶 K3、致远/泛微 OA），后 3 年主导企业级 AI 平台从 0 到 1 架构：员工一次登录即可按权限调用大模型，用量可控、系统可恢复。
            </p>
            <div className="pt-4 border-t border-neutral-900 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-neutral-500">坐标：</span>
                <span className="text-neutral-200">上海 · 宝山</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-neutral-500">期望定位：</span>
                <span className="text-neutral-200">AI Agent 负责人 / 企业 AI 平台架构师</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-neutral-500">联系：</span>
                <a href="mailto:yoeiritsu@gmail.com" className="text-blue-400 hover:underline">
                  yoeiritsu@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right 4 Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.index}
                  className="hairline-card group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-neutral-500 group-hover:text-blue-400 transition-colors">
                      {item.index}
                    </span>
                    <Icon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                  </div>
                  <h3 className="font-medium text-white text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
