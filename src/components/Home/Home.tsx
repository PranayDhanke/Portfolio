"use client";

import Image from "next/image";
import React from "react";
import luffy from "@/images/home/IMG20250917134730.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface Skill {
  category: string;
  items: string[];
}

export default function Home() {
  const skills: Skill[] = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Firebase"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Docker", "Postman"],
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/PranayDhanke",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: FaLinkedin,
      href: "https://in.linkedin.com/in/pranay-dhanke-176a66263",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/pranaydhanke33",
      label: "Twitter/X",
      color: "hover:text-black dark:hover:text-white",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/pranaydhanke33/",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ];

  return (
    <section
      id="Home"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 pt-24 pb-28 md:pt-32 md:pb-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background blur */}
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[45rem] w-[45rem] rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[40rem] w-[40rem] rounded-full bg-purple-100/30 dark:bg-purple-900/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="md:col-span-7 space-y-8 order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800/40">
              👋 Welcome — nice to meet you
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-slate-800 dark:text-white">
              I build{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                scalable web applications
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Hi, I’m{" "}
              <span className="font-semibold text-slate-800 dark:text-white">
                Pranay Dhanke
              </span>
              . I design and develop fast, accessible, and production-ready
              full-stack applications using{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                Next.js and the MERN stack
              </span>
              .
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="#Contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-3.5 font-semibold text-white shadow-md hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-300"
                >
                  Get In Touch →
                </motion.button>
              </Link>

              <a
                href="/resume.pdf"
                download="Pranay_Dhanke_Resume.pdf"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                >
                  📥 Download Resume
                </motion.button>
              </a>

              <span className="hidden md:inline text-sm text-slate-500 dark:text-gray-400">
                • Open to internships & full-time roles
              </span>
            </div>

            {/* Skills */}
            <div className="pt-6 border-t border-slate-200 dark:border-gray-800 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                Tech Stack
              </p>

              {skills.map((group) => (
                <div key={group.category}>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase mb-2">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{
                          y: -2,
                          boxShadow: "0 8px 16px -6px rgba(79, 70, 229, 0.15)",
                        }}
                        className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 border border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800/40"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="md:col-span-5 flex justify-center order-1 md:order-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bottom-28 w-80 h-96">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
              >
                <Image
                  src={luffy}
                  alt="My Image"
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Sidebar */}
        <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-5 z-30">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`p-3 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-600 dark:text-gray-400 transition hover:scale-110 ${s.color}`}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
