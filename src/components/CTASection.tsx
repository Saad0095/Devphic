'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GradientOrbs from './GradientOrbs'

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
      <GradientOrbs />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="p-12 bg-gray-900/50 backdrop-blur-sm rounded-3xl border border-gray-800"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let&apos;s Build Something
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Powerful Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let&apos;s discuss your project and create something exceptional.
          </p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl text-white font-bold text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow duration-500 inline-flex items-center gap-2 cursor-pointer"
          >
            Start Your Project
            <ArrowRight size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}