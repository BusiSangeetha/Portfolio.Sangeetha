'use client'

import { motion } from 'framer-motion'
import CertificationCard from '@/components/CertificationCard'

export default function Certifications() {
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

  const certifications = [
    {
      title: 'Python Basics',
      issuer: 'IBM Coursera',
      date: '2024',
      description: 'Completed comprehensive Python basics course covering fundamental programming concepts.',
      icon: '🐍',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      date: '2024',
      description: 'Mastered cloud computing principles and architecture through NPTEL coursework.',
      icon: '☁️',
    },
    {
      title: 'AI Introduction',
      issuer: 'Microsoft & LinkedIn',
      date: '2024',
      description: 'Introduction to artificial intelligence concepts and applications.',
      icon: '🤖',
    },
    {
      title: 'Soft Skills',
      issuer: 'TCS iON',
      date: '2024',
      description: 'Enhanced soft skills including communication, teamwork, and professional development.',
      icon: '💼',
    },
    {
      title: 'Python Web Development',
      issuer: 'Infosys ICT',
      date: '2024',
      description: 'Comprehensive training in Python-based web development and best practices.',
      icon: '🌐',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:to-dark-card">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mb-12"
        >
          {certifications.map((cert, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <CertificationCard
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                description={cert.description}
                icon={cert.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Other Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Other Achievements 🏆
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <span className="text-3xl">👥</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Class Representative</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Represented class in academic and administrative matters
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl">🎯</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Technical & Non-Technical Event Leadership</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Led and organized various technical and non-technical events for the institution
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-3xl">📊</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Academic Excellence</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Maintained CGPA of 8.79 throughout B.Tech in Information Technology
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
