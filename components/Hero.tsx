'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import ResumeButtons from './ResumeButtons'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:to-dark-card flex items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.p
                variants={itemVariants}
                className="text-primary font-semibold text-lg"
              >
                👋 Welcome to my portfolio
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                Hi, I'm  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Busi Sangeetha</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 dark:text-gray-400"
              >
                A passionate Software Developer crafting digital experiences with clean code and modern technologies.
              </motion.p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
            >
              Enthusiastic fast-learning developer seeking to utilize knowledge of Python and web development. Focused on quality work, continuous learning, and teamwork.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <Link
                href="/projects"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 group justify-center md:justify-start"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <ResumeButtons layout="row" variant="both" showLabels={true} />
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              <a
                href="https://github.com/BusiSangeetha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium group"
              >
                <Github size={24} className="group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/busi-sangeetha-09701b2a3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:bsangeetha685@gmail.com"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium group"
              >
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="relative w-full aspect-square"
            >
              {/* Profile Image */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl border-4 border-white dark:border-gray-700">
                <Image
                  src="/profile.jpg"
                  alt="Busi Sangeetha"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-30"></div>
              </div>

              {/* Animated border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-primary border-r-primary"
                style={{ boxShadow: '0 0 30px rgba(99, 102, 241, 0.2)' }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <div className="text-gray-400 dark:text-gray-600 flex flex-col items-center gap-2">
            <p className="text-sm font-medium">Scroll to explore</p>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
