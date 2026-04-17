'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

interface ResumeButtonsProps {
  layout?: 'row' | 'column'
  variant?: 'primary' | 'secondary' | 'both'
  className?: string
  showLabels?: boolean
}

export default function ResumeButtons({
  layout = 'row',
  variant = 'both',
  className = '',
  showLabels = true,
}: ResumeButtonsProps) {
  const containerClass = layout === 'row' ? 'flex flex-wrap gap-4' : 'flex flex-col gap-4'

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={`${containerClass} ${className}`}
    >
      {/* View Resume Button */}
      {(variant === 'primary' || variant === 'both') && (
        <motion.a
          variants={buttonVariants}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border-2 border-primary text-primary dark:text-primary rounded-lg font-semibold hover:bg-primary hover:text-white hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 group justify-center"
        >
          <FileText size={20} className="group-hover:rotate-12 transition-transform" />
          {showLabels && 'View Resume'}
        </motion.a>
      )}

      {/* Download Resume Button */}
      {(variant === 'secondary' || variant === 'both') && (
        <motion.a
          variants={buttonVariants}
          href="/resume.pdf"
          download="Busi_Sangeetha_Resume.pdf"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 justify-center"
        >
          <Download size={20} />
          {showLabels && 'Download'}
        </motion.a>
      )}
    </motion.div>
  )
}
