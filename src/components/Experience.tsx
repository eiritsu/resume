import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const experiences = [
  {
    id: 'chiyun',
    company: '浙江炽云科技有限公司',
    period: '2026.07 – 至今',
    location: '上海 / 南京',
    role: 'AI 架构师',
    reportTo: 'CTO / CEO / COO',
    companySize: '100 人以下',
    responsibilities: [
      '负责公司 AI 平台与业务 AI 应用从 0 建设，10 周完成 6 套系统 Demo 与阶段开发；兼管网络与信息安全基础设施',
      '主导企业级 AI Agent 平台、统一身份与 AI Gateway、AI 招聘、运营 SaaS 等系统建设',
      '负责 ICP 备案 / 大模型登记 / 算法备案规划，银狐病毒应急处置与备机容灾',
      '完成电信固定 IP 专线割接与华为网管设备验收，自建海外节点替代 SD-WAN 专线',
    ],
    achievements: [
      '8 个内部业务系统接入统一身份与统一模型调用入口',
      '跨境链路每月节省 3～7 万元运营成本',
      'ICP 备案、大模型登记、算法备案、等保三级并行推进',
    ],
  },
  {
    id: 'hengfang',
    company: '恒方知识产权咨询',
    period: '2025.08 – 2026.06',
    location: '上海/北京/天津三地',
    role: 'IT Director',
    reportTo: '董事长',
    companySize: '50 人以下',
    responsibilities: [
      '独立统筹上海/北京/天津三地 IT 架构的统一规划与差异化部署，月均工单 200+ 件，S1 响应率 100%',
      '主导 CRM/ERP/OA 跨部门数据打通与 CRM 邮件 AI 化项目，1 个月交付',
      '搭建 Dify + n8n 容器化 AI 平台，完成钉钉/飞书/企微 SSO 全打通',
      '负责三地 200+ 设备的 Snipe-IT + RFID 数字化全生命周期管理，配合公安完成网络安全审查',
    ],
    achievements: [
      '3000+ 封客户邮件分类准确率 95%，高价值客户识别 78%',
      'Marketing 周报效率提升 30-40%，合同审核时间节省 70% 以上',
      '全年零安全事故',
    ],
  },
  {
    id: 'fde',
    company: '独立 AI FDE（Forward Deployed Engineer，自由职业）',
    period: '2024.09 – 2025.08',
    location: '远程 / 客户现场',
    role: 'AI 应用落地工程师',
    reportTo: '客户方',
    companySize: '自由职业',
    responsibilities: [
      '通过公开资料系统自学 AI 应用开发；基于 Dify / LangGraph / LangChain 为企业客户驻场落地 AI 应用',
      '主要场景：发票 OCR 与结构化提取、合同文本生成（某新能源客户）',
    ],
    achievements: [
      '独立承担发票 OCR 与合同文本生成两个场景落地',
    ],
  },
  {
    id: 'yunque',
    company: '云鹊医疗科技',
    period: '2022.07 – 2024.09',
    location: '上海',
    role: 'IT 经理',
    reportTo: 'CTO',
    companySize: '250 人',
    teamSize: '3 人',
    responsibilities: [
      '负责 250 人 Windows 终端标准化，镜像封装、AD 域统一管理与组策略下发',
      '负责 80+ 节点虚拟化集群（VMware + 超融合 + 桌面云）架构规划与日常运维',
      '负责全球节点网络调整与 Zoom UDP 流量调优，保障跨国视频会议稳定性',
      '带领 3 人团队，制定岗位分工与 OKR 考核标准，完成 SOP 文档体系建设',
    ],
    achievements: [
      '终端故障率 1 年内降低 60%，核心业务可用性 99.99%',
      '视频流畅度 98%+，年节省 SD-WAN 通信成本 17 万元',
      'AI 自动处理 60% 常见 IT 咨询，响应从 5 分钟缩短至 10 秒',
    ],
  },
  {
    id: 'dongjia',
    company: '东伽文化传播',
    period: '2018.07 – 2022.06',
    location: '上海',
    role: 'IT 主管 (2020.03 起) / IT 技术支持',
    reportTo: 'IT Manager',
    companySize: '1000+ 人',
    teamSize: '5 人',
    responsibilities: [
      '负责 80+ 节点虚拟化集群（超融合/VMware/深信服）架构规划与日常运维',
      '完成深信服 AC + 行为审计 + VPN 部署，通过等保安全认证',
      '独立完成金蝶 K3 Wise 系统二次开发，涵盖流程优化、报表定制及接口对接',
      '带领 5 人团队 + 1-2 名驻场外包，制定 KPI 考核与 25+ 份 SOP 文档体系',
    ],
    achievements: [
      '虚拟化集群系统故障率降低 80%，金蝶 K3 Wise 数据处理效率提升 6 倍',
      '1400+ 设备数字化管理，盘点准确率 95%',
      '信息安全体系从 0 到 1 建成并通过等保认证',
    ],
  },
]
export function Experience() {
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-apple">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-title-1 md:text-display-3">工作经历</h2>
          <p className="mt-4 text-callout text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            从 IT 技术支持到 AI 架构师，跨越四家企业 + 一段独立交付，累计管理 1000+ 终端、多地 IT 架构与 AI 业务落地
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-transparent to-transparent -translate-x-1/2" aria-hidden="true" />

          {experiences.map((exp, index) => (
            <motion.article
              key={exp.id}
              className={cn(
                'relative mb-16 md:mb-20 last:mb-0',
                index % 2 === 0 ? 'md:pl-1/2 md:pr-8' : 'md:pr-1/2 md:pl-8'
              )}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
                />
              </div>

              <div className="card p-6 md:p-8 relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-title-2 font-display font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-headline text-blue-600 dark:text-blue-400 font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      {exp.companySize}
                    </span>
                    {exp.teamSize && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        IT 团队 {exp.teamSize}
                      </span>
                    )}
                    {exp.reportTo && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        汇报：{exp.reportTo}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-headline font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" aria-hidden="true" />
                      主要职责
                    </h4>
                    <ul className="space-y-3" role="list">
                      {exp.responsibilities.map((resp, i) => (
                        <motion.li
                          key={i}
                          className="text-body text-gray-600 dark:text-gray-300 leading-relaxed relative pl-6"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                        >
                          <span className="absolute left-0 top-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full" aria-hidden="true" />
                          {resp}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-headline font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-600 rounded-full" aria-hidden="true" />
                      核心业绩
                    </h4>
                    <ul className="space-y-3" role="list">
                      {exp.achievements.map((ach, i) => (
                        <motion.li
                          key={i}
                          className="text-body text-gray-600 dark:text-gray-300 leading-relaxed relative pl-6"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.08 }}
                        >
                          <span className="absolute left-0 top-0.5 w-1.5 h-1.5 bg-green-500 rounded-full" aria-hidden="true" />
                          {ach}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}