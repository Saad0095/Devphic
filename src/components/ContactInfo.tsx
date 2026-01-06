"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

const ContactInfo = () => {
    const phoneNumber = "+92 317 0218290";
    const whatsappLink = "https://wa.me/923170218290";

    const contactItems = [
        {
            Icon: Phone,
            label: "Phone",
            value: phoneNumber,
            onClick: () => window.open(`tel:${phoneNumber.replace(/\s/g, '')}`),
        },
        {
            Icon: MessageCircle,
            label: "Whatsapp",
            value: phoneNumber,
            onClick: () => window.open(whatsappLink, "_blank"),
        },
        {
            Icon: Mail,
            label: "Email",
            value: "devphicservices@gmail.com",
            onClick: () => window.location.href = "mailto:devphicservices@gmail.com",
        },
    ];

    return (
        <motion.div
            className="w-full md:w-1/2 flex flex-col gap-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className="p-4 text-gray-300">Got a project in mind, need a Full Stack solution, or want to discuss web development? I’d love to hear from you! Reach out anytime, and I’ll get back to you soon.</p>
            {contactItems.map(({ Icon, label, value, onClick }, index) => (
                <motion.div
                    key={index}
                    onClick={onClick}
                    className="flex items-center gap-5 p-4 rounded-lg hover:bg-white/10 hover:shadow-lg transition-all cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-300/10 backdrop-blur-md shadow-md text-theme-color text-2xl hover:shadow-lg transition-all">
                        <Icon />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold">{label}</h4>
                        <p>{value}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ContactInfo
