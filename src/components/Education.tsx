import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const education = [
  {
    id: 'swju',
    school: '西南交通大学',
    degree: '本科',
    major: '计算机科学与技术',
    period: '2018 - 2021',
    description: '专升本，系统学习计算机基础理论、数据结构、算法、操作系统、计算机网络、数据库原理等核心课程',
  },
]

const certificates = [
  { name: 'CCNA 思科认证网络工程师', year: '2020', icon: '🏆' },
  { name: 'CET-4 大学英语四级', year: '2019', icon: '📜' },
]

const languages = [
  { name: '中文', level: '母语', proficiency: 'native' },
  { name: '英语', level: '简单沟通、读写英文邮件、看懂英文技术文档', proficiency: 'basic' },
  { name: '日语', level: '读写日语邮件和简单沟通', proficiency: 'intermediate' },
]

export function Education() {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-apple">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-title-1 md:text-display-3">教育背景与证书</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-title-3 font-display font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl" aria-hidden="true">🎓</span>
              教育经历
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.article
                  key={edu.id}
                  className="card relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full" aria-hidden="true" />
                  <div className="relative p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h4 className="text-title-3 font-display font-bold text-gray-900 dark:text-white">{edu.school}</h4>
                      <span className="tag-blue text-sm">{edu.period}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="tag">{edu.degree}</span>
                      <span className="tag">{edu.major}</span>
                    </div>
                    <p className="text-body text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-title-3 font-display font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 dark:text-green-400 text-xl" aria-hidden="true">🏆</span>
                证书资质
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    className="card p-6 text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <span className="text-4xl mb-3 block" aria-hidden="true">{cert.icon}</span>
                    <h4 className="text-headline font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h4>
                    <span className="text-caption-1 text-gray-500 dark:text-gray-400">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-title-3 font-display font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 dark:text-purple-400 text-xl" aria-hidden="true">🌐</span>
                工作语言
              </h3>

              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    className="card p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl" aria-hidden="true">
                        {lang.proficiency === 'native' ? '🇨🇳' : lang.proficiency === 'intermediate' ? '🇯🇵' : '🇺🇸'}
                      </span>
                      <div>
                        <h4 className="text-headline font-semibold text-gray-900 dark:text-white">{lang.name}</h4>
                        <p className="text-caption-1 text-gray-500 dark:text-gray-400">{lang.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        'tag text-xs font-medium',
                        lang.proficiency === 'native' && 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
                        lang.proficiency === 'intermediate' && 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
                        lang.proficiency === 'basic' && 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                      )}>
                        {lang.proficiency === 'native' && '母语级'}
                        {lang.proficiency === 'intermediate' && '中级'}
                        {lang.proficiency === 'basic' && '基础'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}