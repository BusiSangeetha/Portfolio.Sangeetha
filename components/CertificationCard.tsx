'use client'

import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  description?: string
  icon?: string
}

export default function CertificationCard({
  title,
  issuer,
  date,
  description,
  icon = '🏆',
}: CertificationCardProps) {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="p-6 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all group"
    >
      <div className="flex gap-4">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 12, scale: 1.1 }}
          className="text-3xl flex-shrink-0"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
              {title}
            </h3>
            <span className="text-sm font-medium text-primary dark:text-primary bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full w-fit">
              {date}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">
            {issuer}
          </p>

          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
