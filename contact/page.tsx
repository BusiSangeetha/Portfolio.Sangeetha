'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'
import ResumeButtons from '@/components/ResumeButtons'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMessage: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [formState, setFormState] = useState<FormState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  })

  const validateForm = (data: FormData): boolean => {
    if (!data.name.trim()) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Name is required',
      })
      return false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Please enter a valid email',
      })
      return false
    }

    if (!data.message.trim()) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage: 'Message is required',
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm(formData)) {
      return
    }

    setFormState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      errorMessage: '',
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setFormState({
        isLoading: false,
        isSuccess: true,
        isError: false,
        errorMessage: '',
      })

      setFormData({
        name: '',
        email: '',
        message: '',
      })

      // Reset success message after 3 seconds
      setTimeout(() => {
        setFormState({
          isLoading: false,
          isSuccess: false,
          isError: false,
          errorMessage: '',
        })
      }, 3000)
    } catch (error) {
      setFormState({
        isLoading: false,
        isSuccess: false,
        isError: true,
        errorMessage:
          error instanceof Error ? error.message : 'An error occurred',
      })
    }
  }

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
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'd love to hear from you! Send me a message and I'll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info */}
          {[
            {
              icon: Mail,
              label: 'Email',
              value: 'bsangeetha685@gmail.com',
              href: 'mailto:bsangeetha685@gmail.com',
            },
            {
              icon: Phone,
              label: 'Phone',
              value: '+91 8341809236',
              href: 'tel:+918341809236',
            },
            {
              icon: MapPin,
              label: 'Location',
              value: 'Telangana, India',
              href: '#',
            },
          ].map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={idx}
                variants={itemVariants}
                href={contact.href}
                className="glass-effect p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all group text-center"
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass-effect p-8 md:p-12 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                disabled={formState.isLoading}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                disabled={formState.isLoading}
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Your message here..."
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                disabled={formState.isLoading}
              />
            </div>

            {/* Status Messages */}
            {formState.isError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800"
              >
                ❌ {formState.errorMessage}
              </motion.div>
            )}

            {formState.isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg border border-green-200 dark:border-green-800"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formState.isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {formState.isLoading ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Resume Section - CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Want to see my work first?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Check out my resume to see my experience, skills, and projects in detail.
          </p>
          <ResumeButtons layout="row" variant="both" showLabels={true} />
        </motion.div>
      </div>
    </section>
  )
}
