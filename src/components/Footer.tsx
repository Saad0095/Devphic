'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
              Devphic
            </div>
            <p className="text-gray-400">
              Premium digital solutions for modern businesses. We build web applications, websites, and brands that perform.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors duration-300">
                  MERN Stack Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors duration-300">
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-cyan-400 transition-colors duration-300">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <button 
              onClick={() => window.open('https://wa.me/923170218290', '_blank')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-500 cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 Devphic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}