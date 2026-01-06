'use client'

import { motion } from 'framer-motion'
import { Zap, Shield, TrendingUp, Clock } from 'lucide-react'

export default function TrustStrip() {
  const features = [
    { icon: <Zap size={24} />, text: "Modern Tech Stack" },
    { icon: <Shield size={24} />, text: "Scalable & Secure" },
    { icon: <TrendingUp size={24} />, text: "Conversion-Focused" },
    { icon: <Clock size={24} />, text: "Fast Delivery" },
  ]

  return (
    <section className="py-16 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="text-cyan-400">{feature.icon}</div>
              <p className="text-gray-300 font-medium">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}