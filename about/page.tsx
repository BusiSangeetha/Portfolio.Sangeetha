'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Metadata } from 'next'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Get to know more about my journey and passion
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg border-2 border-primary/20"
              >
                <Image
                  src="/profile.jpg"
                  alt="Busi Sangeetha"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </motion.div>

              {/* Text Content */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Who Am I?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  I'm <strong>Busi Sangeetha</strong>, an enthusiastic and fast-learning Software Developer
                  currently pursuing my B.Tech in Information Technology at Malla Reddy University
                  (2022-2026) with a CGPA of 8.79. I'm passionate about creating innovative solutions
                  and continuously expanding my knowledge in Python and web development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Journey
            </h2>
            <div className="glass-effect p-8 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey in software development has been marked by a commitment to quality work,
                continuous learning, and strong teamwork. I have hands-on experience with:
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Backend development with Python',
                  'Frontend development with HTML and CSS',
                  'Version control using Git and GitHub',
                  'Database management with MySQL',
                  'Problem-solving and technical implementation',
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-primary font-bold text-lg">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Key Strengths */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Key Strengths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Technical Skills',
                  items: ['Python', 'Web Development', 'Database Design', 'Linux'],
                },
                {
                  title: 'Soft Skills',
                  items: ['Problem-solving', 'Communication', 'Leadership', 'Teamwork'],
                },
              ].map((category, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="glass-effect p-6 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="glass-effect p-8 rounded-xl border border-gray-200 dark:border-gray-700 space-y-4">
              <div>
                <p className="text-sm font-semibold text-primary mb-1">Email</p>
                <a
                  href="mailto:bsangeetha685@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg"
                >
                  bsangeetha685@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-1">Phone</p>
                <a
                  href="tel:+918341809236"
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors text-lg"
                >
                  +91 8341809236
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-1">Location</p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  Telangana, India
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
