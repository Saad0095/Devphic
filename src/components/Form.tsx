"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormState {
    name: string;
    email: string;
    phone: string;
    serviceType: string;
    message: string;
}

const Form = () => {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const formRef = useRef<HTMLFormElement | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                toast.success("Message sent successfully 🚀");
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    serviceType: "",
                    message: "",
                });
            } else {
                toast.error(data.error || "Failed to send message ❌");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputStyle =
        "w-full bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 rounded-xl py-3 px-4 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition";

    return (
        <>
            <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full md:w-1/2 flex flex-col gap-4 bg-gray-900/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Your Name"
                    className={inputStyle}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="Your Email"
                    className={inputStyle}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    placeholder="Phone (optional)"
                    className={inputStyle}
                    onChange={handleChange}
                />
                <select
                    name="serviceType"
                    value={form.serviceType}
                    onChange={handleChange}
                    required
                    className={inputStyle}
                >
                    <option value="">Select Service</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Bug Fixing">Bug Fixing</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Landing Page Development">Landing Page Development</option>
                    <option value="E-Commerce Website">E-Commerce Website</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="WordPress Development">WordPress Development</option>
                    <option value="Graphic Designing">Graphic Designing</option>
                    <option value="Other">Other</option>
                </select>
                <textarea
                    name="message"
                    value={form.message}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`${inputStyle} resize-none`}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 w-max bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-8 rounded-xl font-semibold hover:scale-105 transition-transform cursor-pointer disabled:opacity-70 disabled:scale-100"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </motion.form>

            <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
        </>
    );
};

export default Form;
