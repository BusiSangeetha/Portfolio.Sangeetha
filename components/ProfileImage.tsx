'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ProfileImageProps {
  size?: 'small' | 'medium' | 'large'
  showBorder?: boolean
  showAnimation?: boolean
  className?: string
  containerClassName?: string
  overlay?: ReactNode
}

export default function ProfileImage({
  size = 'medium',
  showBorder = true,
  showAnimation = true,
  className = '',
  containerClassName = '',
  overlay,
}: ProfileImageProps) {
  const sizeClasses = {
    small: 'h-32 w-32',
    medium: 'h-64 w-64',
    large: 'h-80 w-80 md:h-96 md:w-96',
  }

  const imageContent = (
    <div className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden shadow-lg ${showBorder ? 'border-4 border-white dark:border-gray-700' : ''} ${className}`}>
      <Image
        src="/profile.jpg"
        alt="Busi Sangeetha - Software Developer"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-30"></div>
      {overlay}
    </div>
  )

  if (showAnimation && size !== 'small') {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        className={containerClassName}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          {imageContent}
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      className={containerClassName}
    >
      {imageContent}
    </motion.div>
  )
}
