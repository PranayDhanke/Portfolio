"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import { portfolio } from "@/data/portfolio";
import "react-toastify/dist/ReactToastify.css";

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

const inputClass =
  "mt-2 block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-100 transition";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    hp: "",
  });
  const [sending, setSending] = useState(false);

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

    try {
      setSending(true);

      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully. I will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "", hp: "" });
    } catch {
      toast.error("Message could not be sent right now. Please try email instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="Contact"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#fffbeb_0%,_#ffffff_45%,_#f8fafc_100%)] py-24 md:py-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-teal-200/25 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Let’s Build Something Useful
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Have an internship, role, collaboration, or product idea in mind?
            Reach out and we can talk through it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/10">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
                Reach me directly
              </p>
              <h3 className="mt-4 text-3xl font-bold">{portfolio.name}</h3>
              <p className="mt-3 text-slate-300">{portfolio.role}</p>
              <p className="mt-6 max-w-md text-slate-300">
                If the form is unavailable, you can also contact me directly
                through email or social links.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {portfolio.contactItems.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    variants={itemVariants}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-teal-50 p-3 text-teal-700">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="mt-1 block text-slate-600 transition hover:text-teal-700"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="mt-1 text-slate-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex gap-3 pt-2">
              {portfolio.socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-teal-500 hover:text-teal-700"
                    aria-label={item.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>

            <input type="hidden" name="hp" value={formData.hp} />

            <div>
              <label className="text-sm font-medium text-slate-700">Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass}
                autoComplete="name"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Email *</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                autoComplete="email"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Subject *</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Message *</label>
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
              className={`w-full rounded-2xl py-3 font-semibold text-white transition ${
                sending ? "bg-teal-400" : "bg-teal-600 hover:bg-teal-700"
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            <p className="text-center text-xs text-slate-500">
              Your information is only used to respond to your message.
            </p>
          </motion.form>
        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={4000} />
    </section>
  );
}
