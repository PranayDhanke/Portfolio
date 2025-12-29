"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

/* Animations */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const inputClass = `
  mt-2 block w-full px-4 py-3 rounded-xl
  border border-slate-200 dark:border-gray-700
  bg-white dark:bg-gray-900
  text-slate-800 dark:text-white
  placeholder:text-slate-500 dark:placeholder:text-gray-400
  focus:outline-none focus:ring-4 focus:ring-indigo-100
  dark:focus:ring-indigo-900/30 focus:border-indigo-500
  transition
`;

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp: "",
  });
  const [sending, setSending] = useState(false);

  const contactInfo: ContactInfo[] = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "pranaydhanke33@gmail.com",
      link: "mailto:pranaydhanke33@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 83291 23649",
      link: "tel:+918329123649",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Maharashtra, India (GMT +5:30)",
    },
    {
      icon: <FaPaperPlane />,
      title: "Availability",
      content: "Open to internships & full-time roles",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/PranayDhanke" },
    { icon: FaLinkedin, href: "https://in.linkedin.com/in/pranay-dhanke-176a66263" },
    { icon: FaTwitter, href: "https://twitter.com/pranaydhanke33" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.hp) return;

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.warn("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));

    toast.success("Message sent successfully. I’ll get back to you soon!");
    setFormData({ name: "", email: "", subject: "", message: "", hp: "" });
    setSending(false);
  };

  return (
    <section
      id="Contact"
      className="relative overflow-hidden bg-gradient-to-b
                 from-slate-50 to-white
                 dark:from-gray-900 dark:to-gray-950
                 py-24 md:py-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background glow */}
      <div className="absolute -left-1/4 top-1/4 h-[40rem] w-[40rem] bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
      <div className="absolute -right-1/4 bottom-0 h-[35rem] w-[35rem] bg-purple-100/30 dark:bg-purple-900/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have an opportunity or idea to discuss? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  className="rounded-xl bg-white dark:bg-gray-900
                             border border-slate-200 dark:border-gray-800
                             p-5 flex items-start gap-4"
                >
                  <div className="text-indigo-600 dark:text-indigo-400 text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {info.title}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-600 dark:text-gray-400 hover:text-indigo-600"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-slate-600 dark:text-gray-400">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-3 pt-4">
              {socialLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="p-3 rounded-lg bg-white dark:bg-gray-900
                               border border-slate-200 dark:border-gray-800
                               text-slate-600 dark:text-gray-400
                               hover:text-indigo-600 hover:border-indigo-500 transition"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-900
                       border border-slate-200 dark:border-gray-800
                       rounded-2xl p-8 space-y-6 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Send a Message
            </h3>

            <input type="hidden" name="hp" value={formData.hp} />

            <div>
              <label className="text-sm font-medium">Name *</label>
              <input name="name" value={formData.name} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="text-sm font-medium">Email *</label>
              <input name="email" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="text-sm font-medium">Subject *</label>
              <input name="subject" value={formData.subject} onChange={handleChange} className={inputClass} />
            </div>

            <div>
              <label className="text-sm font-medium">Message *</label>
              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-3 rounded-xl font-semibold text-white transition ${
                sending
                  ? "bg-indigo-400"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            <p className="text-xs text-center text-slate-500">
              Your information is only used to respond to your message.
            </p>
          </motion.form>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={4000} />
    </section>
  );
}
