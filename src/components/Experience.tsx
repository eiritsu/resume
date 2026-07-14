import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const experiences = [
  {
    id: 'hengfang',
    company: '恒方知识产权咨询',
    period: '2025.08 – 2026.06',
    location: '上海/北京/天津三地',
    role: 'IT Director',
    reportTo: '董事长',
    companySize: '50 人以下',
    responsibilities: [
      '独立统筹上海/北京/天津三地 IT 架构的统一规划与差异化部署，月均处理工单 200+ 件，S1 级紧急工单 30 分钟响应率达 100%',
      '负责公司 100 人 AD 域账号体系及 Exchange Online 邮箱的日常运维管理，完成账号开通、权限调整、离职清理的全流程标准化',
      '配合 Marketing 部门主导 CRM 邮件 AI 化项目，完成往来邮件的自动分类与意向线索提取，上线 6 个月累计处理 3000+ 封客户邮件',
      '搭建 AI 周报自动生成组件，完成 Marketing 汇报从传统 PPT 撰写到自动化生成的转型',
      '部署 LLM 合同审核模块，完成风险条款的自动识别与修改建议生成',
      '主导 CRM/ERP/OA 跨部门数据打通项目，完成数据流串通与业务规则引擎搭建，项目周期 1 个月',
      '负责公司境外 SaaS 平台（Google/Ins/WhatsApp 等）的账号管理与海外线路部署，应对账号封禁与跨境合规风险',
      '负责公司 CRM、财务（用友）、OA（致远/泛微）、费控等业务系统的日常运维管理',
      '搭建基于 Fedora/Ubuntu 的 Dify + n8n 容器化 AI 平台，完成钉钉/飞书/企微 SSO 全打通',
      '使用老旧服务器搭建开源防火墙防护和行为审计方案，配合公安机关完成网络安全审查',
      '负责三地 200+ 设备的 Snipe-IT + RFID 数字化全生命周期管理',
    ],
    achievements: [
      '完成客户邮件的自动分类与客户画像侧写，分类准确率达 95%，高价值客户识别准确率达 78%，累计处理 3000+ 封',
      '完成 Marketing 周报自动生成，汇报效率提升 30-40%，从 1-2 天缩短至 3 小时内',
      '完成 AI 合同审核模块上线，同事反馈节省 70% 以上的审核时间',
      '完成跨部门数据打通项目，业务数据准确率显著提升，项目周期仅 1 个月',
      '实现三地 IT 架构的统一管理，S1 工单 30 分钟响应率达 100%，全年零安全事故',
    ],
  },
  {
    id: 'yunque',
    company: '云鹊医疗科技',
    period: '2023.05 – 2024.09',
    location: '上海',
    role: 'IT 经理',
    reportTo: 'CTO',
    companySize: '250 人',
    teamSize: '3 人',
    responsibilities: [
      '负责 250 人规模 Windows 终端标准化项目，完成 Windows 镜像封装、AD 域统一管理及组策略统一下发',
      '负责 250 人 AD 域账号体系、网易邮箱、LDAP SSO 的日常运维，完成账号开通、权限调整、离职清理的全流程标准化',
      '负责 80+ 节点虚拟化集群（VMware + 超融合 + 桌面云）的架构规划与日常运维管理',
      '参与等保 2.0 合规体系建设，协助完成安全流程与审计标准的制定',
      '负责全球节点网络调整及 Zoom UDP 流量调优，保障跨国视频会议稳定性',
      '负责带领 3 人 IT 团队，制定岗位分工与 OKR 考核标准，完成 SOP 文档体系建设',
      '负责 Dify/LangChain 平台的部署与 BOT 开发，推动 AI 在 IT 业务咨询中的应用',
    ],
    achievements: [
      '完成 250 人终端标准化，终端故障率在 1 年内降低 60%',
      '核心业务系统可用性达 99.99%（年均中断 ≤ 6 小时），服务器利用率从 30% 提升至 70%',
      '通过等保 2.0 三级认证，信息安全体系达到合规要求',
      '视频流畅度达 98% 以上，年节省 SD-WAN 通信成本 17 万元',
      'AI 自动处理 60% 的常见 IT 业务咨询，响应时间从 5 分钟缩短至 10 秒',
    ],
  },
  {
    id: 'guoyao',
    company: '国药口腔医疗器械',
    period: '2022.07 – 2023.02',
    location: '上海',
    role: 'IT 主管',
    reportTo: '人力总监/董事长',
    companySize: '150 人',
    teamSize: '2 人',
    responsibilities: [
      '主导公司用友 BIP ERP 系统的全生命周期迁移，涵盖需求分析、流程设计、数据迁移、模块开发及上线培训',
      '管理 5 名供应商 ERP 开发人员，完成二次开发与模块定制工作',
      '负责北森 HR 系统的审批流程优化，设计 12 个标准化审批节点',
      '搭建 400+ 设备数字化管理平台，完成采购、使用、报废的全流程管理',
    ],
    achievements: [
      '3 个月内完成用友 BIP 6 大模块的上线，实现业务财务数据一体化管理',
      '完成 400+ 设备的数字化管理，盘点准确率达 99%',
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
      '负责 80+ 节点虚拟化集群（超融合/VMware/深信服）的架构规划与日常运维管理',
      '完成深信服 AC + 行为审计 + VPN 的部署，通过等保安全认证',
      '独立完成金蝶 K3 Wise 系统的二次开发，涵盖流程优化、报表定制及接口对接',
      '完成 Snipe-IT + RFID 标签的 1400+ 设备数字化管理搭建',
      '负责带领 5 人 IT 团队，制定岗位分工与 KPI 考核标准，完成 SOP 文档体系建设',
      '管理 1-2 名驻场外包人员（覆盖桌面支持、资产管理、基础弱电），优化供应商体系',
    ],
    achievements: [
      '完成 80+ 节点虚拟化集群的运维管理，系统故障率降低 80%',
      '完成金蝶 K3 Wise 系统的改造与二次开发，数据处理效率提升 6 倍',
      '完成 1400+ 设备的数字化管理，盘点准确率达 95%',
      '通过资产管理体系优化，年均节省采购成本 5 万元',
      '完成信息安全体系从 0 到 1 的搭建，通过等保安全认证',
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
            从技术支持到 IT Director，跨越四家企业，累计管理 1000+ 终端、多地 IT 架构与 AI 业务落地
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