'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function WhyDevphic() {
  const benefits = [
    { 
      title: "Custom Development", 
      desc: "No templates, no shortcuts. Every line of code is written for your specific needs." 
    },
    { 
      title: "Clean, Scalable Code", 
      desc: "Built for growth with maintainable architecture and best practices." 
    },
    { 
      title: "Performance First", 
      desc: "Lightning-fast load times and optimized for SEO and conversions." 
    },
    { 
      title: "Design + Dev Unity", 
      desc: "Seamless collaboration under one roof means faster delivery and better outcomes." 
    }
  ]

  return (
    <section className="py-24 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Devphic</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              We&apos;re not your typical agency. We&apos;re a team of developers and designers who obsess over quality, performance, and results.
            </p>

            <div className="space-y-6">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl" />
              <div className="relative space-y-4">
                {/* Abstract code visualization */}
                <div className="font-mono text-sm text-gray-500">
                  <div className="text-cyan-400">{'<Devphic>'}</div>
                  <div className="pl-4 text-blue-400">{'  quality="premium"'}</div>
                  <div className="pl-4 text-purple-400">{'  performance="optimized"'}</div>
                  <div className="pl-4 text-green-400">{'  scalable={true}'}</div>
                  <div className="pl-4 text-pink-400">{'  customized={true}'}</div>
                  <div className="text-cyan-400">{'</Devphic>'}</div>
                </div>
              </div>
            </div>
            
            {/* Floating orbs - static glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}