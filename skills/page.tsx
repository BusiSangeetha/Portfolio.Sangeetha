'use client'

import { motion } from 'framer-motion'
import SkillCard from '@/components/SkillCard'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const skillCategories = [
    {
      category: 'Programming',
      skills: [
        {
          title: 'Python',
          icon: '🐍',
          level: 80,
        },
      ],
    },
    {
      category: 'Web Development',
      skills: [
        {
          title: 'HTML',
          icon: '📄',
          level: 85,
        },
        {
          title: 'CSS',
          icon: '🎨',
          level: 80,
        },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { title: 'Git & GitHub', icon: '📦', level: 85 },
        { title: 'VS Code', icon: '⚙️', level: 90 },
        { title: 'MySQL', icon: '🗄️', level: 75 },
        { title: 'Linux', icon: '🐧', level: 70 },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { title: 'Problem-solving', icon: '🧩' },
        { title: 'Communication', icon: '💬' },
        { title: 'Leadership', icon: '👥' },
        { title: 'Time Management', icon: '⏱️' },
        { title: 'Teamwork', icon: '🤝' },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:to-dark-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills that enable me to deliver quality solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {skillCategories.map((categoryGroup, idx) => (
            <motion.div key={idx} variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {categoryGroup.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGroup.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    variants={itemVariants}
                  >
                    <SkillCard
                      title={skill.title}
                      icon={skill.icon}
                      level={skill.level}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 glass-effect p-8 md:p-12 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuous Growth 📚
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            I'm a fast learner who is constantly expanding my skill set. My experience with multiple
            technologies has given me a strong foundation to quickly adapt to new frameworks and tools.
            I'm particularly focused on mastering full-stack web development and exploring modern cloud
            technologies. Always open to learning new technologies and best practices in the industry.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
