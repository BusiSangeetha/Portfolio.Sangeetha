'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
  github?: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group rounded-xl overflow-hidden glass-effect border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all h-full"
    >
      {/* Image */}
      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">📱</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 dark:bg-primary/20 text-primary rounded-full border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              <ExternalLink size={18} />
              <span>View</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
