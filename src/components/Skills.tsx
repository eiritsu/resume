import { motion } from 'framer-motion'
import { Terminal, Layers, Cpu, Shield, Database, Wrench } from 'lucide-react'

const matrix = [
  {
    index: '01',
    category: 'AI Agent 框架',
    icon: Layers,
    items: [
      'LangGraph / LangChain',
      'Dify / n8n 自动化编排',
      'Hermes Agent / OpenClaw',
      'DeepSeek Harness 运行时',
      '多 Agent 协作与 Sub-Agent 隔离',
      'Prompt 流水线与上下文记忆压缩',
    ],
  },
  {
    index: '02',
    category: '大模型与私有知识库',
    icon: Cpu,
    items: [
      'DeepSeek / ChatGPT / Claude / Gemini',
      '多模型任务路由与主备熔断',
      '树形 Wiki 知识库 (检索准确率 95%+)',
      'RAG 方案评估与 SQLite 本地检索',
      'ASR 语音转写与 OCR 扫描文档抽取',
    ],
  },
  {
    index: '03',
    category: 'AI 平台与网关工程',
    icon: Terminal,
    items: [
      '统一身份 (飞书 SSO / LDAP / OIDC)',
      '自研 AI Gateway (SSE / WebSocket)',
      'API Key 生命周期与额度层级继承',
      'Prometheus + Loki 全链路可观测',
      'Playwright 端到端浏览器自动化验收',
    ],
  },
  {
    index: '04',
    category: '全栈开发与跨端交付',
    icon: Wrench,
    items: [
      'Go / Java Spring Boot (微服务与网关)',
      'Rust + Tauri v2 (跨平台原生桌面端)',
      'Python (FastAPI / 算法流水线)',
      'React / Vue 3 / TypeScript / Vite',
      'Docker Compose 容器编排 / Linux',
    ],
  },
  {
    index: '05',
    category: '企业业务系统与数据',
    icon: Database,
    items: [
      '用友 BIP ERP 全周期迁移',
      '金蝶 K3 Wise 二次开发与接口对接',
      '致远 / 泛微 OA 流程与集成',
      'CRM / ERP / OA 跨部门数据打通',
      '飞书开放平台 Bot 与卡片交互闭环',
    ],
  },
  {
    index: '06',
    category: '网络基础设施与安全合规',
    icon: Shield,
    items: [
      '华为 USG6000E / S5735 / Cisco ASA',
      '固定 IP 专线割接与端口级 VLAN 隔离',
      '自建新加坡节点 WireGuard / SmartDNS',
      '等保 2.0 三级建设与公安审查',
      'ICP / 大模型登记 / 算法备案全流程',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-neutral-900 bg-neutral-950">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-neutral-800/80">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              02 / CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              核心技术矩阵
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-500">
            TECHNICAL CAPABILITIES & STACK MATRIX
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matrix.map((col) => {
            const Icon = col.icon
            return (
              <div
                key={col.index}
                className="hairline-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-800/60">
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      {col.category}
                    </span>
                    <span className="font-mono text-[11px] text-neutral-600">
                      {col.index}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {col.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-sans">
                        <span className="h-1.5 w-1.5 rounded-full bg-neutral-600 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
