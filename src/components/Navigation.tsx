'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/70 backdrop-blur-xl border-b border-gray-800/50' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            <Link href="/">Devphic</Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-gray-300 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href="#process" className="text-gray-300 hover:text-white transition-colors duration-300">
              Process
            </Link>
            <Link href="#work" className="text-gray-300 hover:text-white transition-colors duration-300">
              Work
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            <Link 
              href="#services" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#process" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link 
              href="#work" 
              className="text-gray-300 hover:text-white transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium cursor-pointer"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}