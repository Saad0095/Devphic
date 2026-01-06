"use client";

import { motion } from "framer-motion";
import Form from "./Form";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Work Together
        </span>
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-12 mx-auto max-w-6xl">
        <Form />
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
