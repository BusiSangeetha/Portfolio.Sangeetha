'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SkillCardProps {
  title: string
  icon?: ReactNode
  level?: number
  items?: string[]
}

export default function SkillCard({ title, icon, level, items }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)' }}
      className="p-6 bg-white dark:bg-dark-card rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all group"
    >
      {/* Icon and Title */}
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="text-3xl"
          >
            {icon}
          </motion.div>
        )}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      {/* Progress Bar */}
      {level !== undefined && (
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-primary to-secondary"
            ></motion.div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{level}% Proficiency</p>
        </div>
      )}

      {/* Items List */}
      {items && items.length > 0 && (
        <div className="space-y-2">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              {item}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
