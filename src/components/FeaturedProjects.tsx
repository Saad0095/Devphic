'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FeaturedProjects() {
    const projects = [
        {
            title: "SaaS Dashboard Platform",
            desc: "CRM-style SaaS dashboard with role-based access, lead management, and analytics for business operations",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            image: "/projects/saas-dashboard.jpg",
            gradient: "from-cyan-500 to-blue-500",
            category: "MERN Stack Development",
        },
        {
            title: "E-Commerce Storefront",
            desc: "High-converting WordPress e-commerce storefront with custom theme, product management, and checkout flow",
            tech: ["WordPress", "WooCommerce", "Custom Theme"],
            image: "/projects/ecommerce-store.jpg",
            gradient: "from-blue-500 to-purple-500",
            category: "WordPress Development",
        },
        {
            title: "Brand Identity & Banner Designs",
            desc: "Collection of branded banners and marketing creatives including social media posts, ads, and promotional visuals",
            tech: ["Figma", "Photoshop", "Canva"],
            image: "/projects/branding-suite.png",
            gradient: "from-purple-500 to-pink-500",
            category: "Graphic Design & Branding",
        },
    ]


    return (
        <section id="work" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Recent work we&apos;re proud of
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-cyan-500/30 transition-all duration-500 cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-64 w-full bg-gray-700/50">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                    fill
                                    className="object-contain transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm mb-3">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Default Content */}
                            <div className="p-6 group-hover:opacity-0 transition-opacity duration-500">
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {project.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
