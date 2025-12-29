"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import blogimage from "@/images/work/bloggerapp.png";
import egram from "@/images/work/egram.png";
import weatherw from "@/images/work/weatherweb.png";
import agriwaste from "@/images/work/agriwaste.png";
import sbp from "@/images/work/plat.png";

interface Project {
  id: string;
  title: string;
  desc: string;
  image: any;
  link: string;
  codeLink: string;
  tech: string[];
  highlights?: string[];
  year?: string;
}

const projects: Project[] = [
  {
    id: "agriwaste",
    title: "Smart Agri Waste Management Platform",
    desc: "A full-stack agri-tech platform enabling farmers and buyers to manage agricultural waste, negotiate prices, place orders, and track workflows in real time.",
    image: agriwaste,
    link: "https://smart-agriwaste.vercel.app",
    codeLink: "https://github.com/PranayDhanke/Smart-Agriwaste.git",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Razorpay",
      "ImageKit",
    ],
    highlights: [
      "Role-based access",
      "Real-time negotiation",
      "Payment integration",
    ],
    year: "2025",
  },
  {
    id: "sbp",
    title: "Farmer Product Selling Platform",
    desc: "An e-commerce platform where farmers list products and buyers can purchase or negotiate prices directly, promoting fair pricing and transparency.",
    image: sbp,
    link: "https://agrocart-ten.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/farmer-buyer-platfom.git",
    tech: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    year: "2025",
  },
  {
    id: "egram",
    title: "E-Gram Panchayat Portal",
    desc: "A digital governance platform for village-level schemes with online applications, verification workflows, and real-time status updates.",
    image: egram,
    link: "https://e-gram.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/e-panchayat.git",
    tech: ["Next.js", "Firebase Auth", "Firestore", "Firebase Storage"],
    year: "2024",
  },
  {
    id: "blogger",
    title: "Blogger Platform",
    desc: "A full-stack blogging platform with authentication, CRUD operations, and a clean interface for reading and publishing content.",
    image: blogimage,
    link: "https://blogger-blue-ten.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/blogger.git",
    tech: ["Next.js", "Firebase Firestore", "Firebase Auth"],
    year: "2023",
  },
  {
    id: "weather",
    title: "Weather Application",
    desc: "A responsive weather application providing real-time weather data and forecasts using the OpenWeather API.",
    image: weatherw,
    link: "https://whetherapp-three.vercel.app/",
    codeLink: "https://github.com/PranayDhanke/simpleweather.git",
    tech: ["React", "OpenWeather API", "Tailwind CSS"],
    year: "2024",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Work() {
  return (
    <section
      id="Work"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white
                 dark:from-gray-950 dark:to-gray-900 py-24 md:py-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Decorative backgrounds */}
      <div className="pointer-events-none absolute -right-1/4 -top-1/4 h-[45rem] w-[45rem] rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-1/4 bottom-0 h-[40rem] w-[40rem] rounded-full bg-purple-100/30 dark:bg-purple-900/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-400">
            A collection of my Best real-world projects built with modern full-stack
            technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white
                           dark:bg-gray-900 border border-slate-200
                           dark:border-gray-800 shadow-md hover:shadow-xl
                           transition-all flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300
                               group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-gray-400 leading-relaxed flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech */}
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-gray-800">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1 rounded-full
                                     bg-indigo-50 dark:bg-indigo-950/40
                                     text-indigo-700 dark:text-indigo-300
                                     border border-indigo-200 dark:border-indigo-800/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={project.link}
                      target="_blank"
                      className="flex-1"
                    >
                      <button
                        className="w-full inline-flex justify-center
                                         items-center gap-2 px-4 py-2.5
                                         rounded-lg bg-indigo-600 hover:bg-indigo-700
                                         text-white font-semibold"
                      >
                        <FaExternalLinkAlt />
                        Live
                      </button>
                    </Link>

                    <Link
                      href={project.codeLink}
                      target="_blank"
                      className="flex-1"
                    >
                      <button
                        className="w-full inline-flex justify-center
                                         items-center gap-2 px-4 py-2.5
                                         rounded-lg border border-slate-300
                                         dark:border-gray-700 text-slate-800
                                         dark:text-white bg-white dark:bg-gray-900
                                         hover:border-indigo-600 dark:hover:border-indigo-500"
                      >
                        <FaGithub />
                        Code
                      </button>
                    </Link>
                  </div>

                  {project.year && (
                    <p className="mt-4 text-xs text-center text-slate-500">
                      {project.year}
                    </p>
                  )}
                </div>

                {/* Hover Border */}
                <div
                  className="absolute inset-0 rounded-2xl border-2
                                border-transparent group-hover:border-indigo-500
                                transition-colors pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-600 dark:text-gray-400 mb-6">
            Interested in collaborating or discussing projects?
          </p>
          <Link href="#Contact">
            <button
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700
                               text-white font-semibold"
            >
              Let’s Talk →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
