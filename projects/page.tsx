'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const projects = [
    {
      title: 'Emotion-Driven Decision Making Systems',
      description:
        'Built a responsive UI that captures facial, voice, and text inputs. Integrated with deep learning APIs for real-time emotion prediction and decision support.',
      technologies: ['Python', 'Deep Learning', 'API Integration', 'UI/UX'],
      icon: '🧠',
    },
    {
      title: 'Tech Up',
      description:
        'Designed and developed a complete web application frontend using HTML and CSS. Successfully integrated frontend with backend APIs for seamless data flow and user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
      icon: '🚀',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white dark:bg-dark-bg">
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
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects and technical implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <div className="h-full">
                <div className="mb-4 text-4xl">{project.icon}</div>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-8 md:p-12 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Project Highlights 🎯
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                2+
              </p>
              <p className="text-gray-600 dark:text-gray-400">Active Projects</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Full Stack
              </p>
              <p className="text-gray-600 dark:text-gray-400">Development</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Quality
              </p>
              <p className="text-gray-600 dark:text-gray-400">Focused</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
            Interested in collaborating or learning more about my work?
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all inline-block"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
