'use client'

import { motion } from 'framer-motion'

export default function Process() {
  const steps = [
    { 
      num: "01", 
      title: "Discovery", 
      desc: "We dive deep into your business goals, target audience, and technical requirements." 
    },
    { 
      num: "02", 
      title: "Design", 
      desc: "Creating wireframes, mockups, and prototypes that align with your brand and user needs." 
    },
    { 
      num: "03", 
      title: "Development", 
      desc: "Building clean, scalable code with modern frameworks and best practices." 
    },
    { 
      num: "04", 
      title: "Launch & Support", 
      desc: "Smooth deployment, testing, and ongoing support to ensure long-term success." 
    }
  ]

  return (
    <section id="process" className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven approach that delivers results every time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/30 to-transparent" />
              )}

              <div className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-500">
                <div className="text-6xl font-bold bg-gradient-to-br from-cyan-500 to-purple-500 bg-clip-text text-transparent opacity-20 mb-4">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}