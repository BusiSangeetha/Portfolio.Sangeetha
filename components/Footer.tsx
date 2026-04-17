'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/BusiSangeetha',
      color: 'hover:text-gray-800 dark:hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sangeetha-busi-09701b2a3/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:bsangeetha685@gmail.com',
      color: 'hover:text-red-600 dark:hover:text-red-400',
    },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-dark-card border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Busi Sangeetha
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Software Developer & Tech Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span>→</span> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-gray-600 dark:text-gray-400 ${social.color} transition-colors`}
                    title={social.name}
                  >
                    <Icon size={24} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left"
          >
           
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
