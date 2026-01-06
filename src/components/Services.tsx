'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Globe } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Code2 size={32} />,
      title: "MERN Stack Development",
      description: "Build powerful, scalable web applications with MongoDB, Express, React, and Node.js.",
      problem: "Transform your complex business logic into intuitive, high-performance applications.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Globe size={32} />,
      title: "WordPress Development",
      description: "Custom WordPress sites optimized for speed, SEO, and conversions.",
      problem: "Get a professional business website that's easy to manage and grows with you.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Palette size={32} />,
      title: "Graphic Design & Branding",
      description: "Stand out with memorable branding, logos, and visual identities.",
      problem: "Build a brand that resonates with your audience and drives recognition.",
      gradient: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-cyan-500/5 to-gray-900/0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-700`} />
              
              <div className="relative z-10 transform group-hover:-translate-y-1 transition-transform duration-500">
                <div className={`inline-block p-3 bg-gradient-to-br ${service.gradient} rounded-xl mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-cyan-400 text-sm font-medium">{service.problem}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}