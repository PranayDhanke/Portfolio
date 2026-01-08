"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface SkillGroup {
  title: string;
  skills: string[];
}

export default function About() {
  const skillGroups: SkillGroup[] = [
    {
      title: "Frontend",
      skills: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "Firebase Firestore"],
    },
    {
      title: "Authentication",
      skills: ["Clerk Authentication", "Firebase Auth"],
    },
    {
      title: "Payments",
      skills: ["Razorpay"],
    },
    {
      title: "File & Media Handling",
      skills: ["ImageKit", "Firebase Storage"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Postman", "Vercel"],
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Java", "Python"],
    },
  ];

  return (
    <section
      id="About"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white
                 dark:from-gray-900 dark:to-gray-950 py-24 md:py-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-1/4 bottom-0 h-[35rem] w-[35rem] rounded-full bg-purple-100/30 dark:bg-purple-900/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 dark:text-white">
            About Me
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-gray-400 text-lg">
            Computer Science student focused on building clean, scalable, and
            real-world web applications.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div>
          {/* Content */}
          <motion.div
            className=" space-y-8"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Intro */}
            <motion.div
              variants={item}
              className="bg-white dark:bg-gray-900 border border-slate-200
                         dark:border-gray-800 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Hello, I’m Pranay
              </h3>
              <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                I’m a Computer Science student and Full-Stack Web Developer with
                hands-on experience building production-ready applications using{" "}
                <strong>Next.js</strong>, modern backend APIs, real-time
                features, authentication, and payments. I enjoy solving
                practical problems and turning ideas into reliable software.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={item} className="space-y-3">
              {[
                "Built multiple real-world full-stack projects",
                "Experience with role-based access & backend workflows",
                "Open to internships and full-time opportunities",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-4 rounded-lg
                             bg-slate-100 dark:bg-gray-800/60"
                >
                  <span className="text-indigo-600">✓</span>
                  <p className="text-slate-700 dark:text-gray-300">{text}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 pt-6 border-t
                         border-slate-200 dark:border-gray-800"
            >
              <Link href="#Contact">
                <button
                  className="px-6 py-3 rounded-xl bg-indigo-600
                                   hover:bg-indigo-700 text-white font-semibold"
                >
                  Get in Touch
                </button>
              </Link>

              <a href="/resume.pdf" download>
                <button
                  className="px-6 py-3 rounded-xl border border-slate-300
                                   dark:border-gray-700 bg-white dark:bg-gray-900
                                   text-slate-800 dark:text-white"
                >
                  Download Resume
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-slate-800 dark:text-white mb-10">
            Skills & Tools
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white dark:bg-gray-900 border
                           border-slate-200 dark:border-gray-800 rounded-xl p-6"
              >
                <h4 className="font-semibold text-indigo-600 mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm
                                 bg-indigo-50 dark:bg-indigo-950/40
                                 text-indigo-700 dark:text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
