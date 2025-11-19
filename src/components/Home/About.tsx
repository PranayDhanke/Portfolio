"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import luffy from "@/images/home/51rayl0HnRL._AC_UF1000,1000_QL80_.jpg";

// Animation Variants for sequential entry
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      delay: 0.1, 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.15 
    } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function About() {
  const skills = [
    { name: "Next.js", value: 85 },
    { name: "React", value: 90 },
    { name: "Tailwind CSS", value: 88 },
    { name: "Firebase", value: 70 },
    // Add more relevant skills
    { name: "TypeScript", value: 75 },
    { name: "Git / GitHub", value: 95 },
  ];

  return (
    // Removed backdrop-blur-sm as it can conflict with complex backgrounds, using clean white
    <section id="About" className="relative bg-gray-50 py-20 md:py-28"> 
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            &lt;<span className="text-indigo-600">About Me</span> /&gt;
          </h2>
          <p className="text-base text-gray-500 mt-2">A quick introduction & my background</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Portrait */}
          <motion.div
            className="w-full flex justify-center md:justify-start"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="w-64 md:w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white transition-transform hover:scale-[1.02] duration-300">
              <Image 
                src={luffy} 
                alt="Pranay Dhanke Portrait" 
                className="w-full h-full object-cover" 
                // Set fixed aspect ratio for better layout predictability
                width={500}
                height={600}
              />
            </div>
          </motion.div>

          {/* Content Block */}
          <motion.div
            className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="flex items-center gap-3" variants={itemVariants}>
              <span className="px-4 py-1.5 text-sm rounded-full bg-indigo-600/10 text-indigo-700 font-bold border border-indigo-200">
                Who Am I
              </span>
            </motion.div>

            <motion.p
              className="mt-6 text-gray-800 text-lg leading-relaxed border-b pb-6"
              variants={itemVariants}
            >
              Hello — I&rsquo;m **Pranay**, a **Computer Science student** specializing in modern front-end development. I thrive on building responsive, accessible, and high-performance applications using **Next.js** and **Tailwind CSS**. Im passionate about turning complex ideas into polished, user-friendly products and am constantly expanding my knowledge in the tech landscape.
            </motion.p>

            {/* Education & Experience Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-b pb-6">
              <motion.div variants={itemVariants}>
                <h3 className="text-base font-bold text-gray-900 mb-2">🎓 Education</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-500">•</span>
                    <span>Diploma — **Government Polytechnic, Arvi** (Computer Engineering)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-500">•</span>
                    <span>Currently pursuing B.E. — **Sipna College of Engineering, Amravati**</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-base font-bold text-gray-900 mb-2">💼 Experience</h3>
                <p className="text-sm text-gray-700 leading-snug">
                  Hands-on experience through internships & college projects, including developing web apps like a **blogger platform**, an **e-panchayat system**, and **SmartAgriWaste**. I am actively seeking opportunities to contribute to real-world, innovative products.
                </p>
              </motion.div>
            </div>

            {/* Skills / Progress Bars */}
            <div className="mt-6">
              <motion.h4 className="text-base font-bold text-gray-900 mb-4" variants={itemVariants}>
                🛠️ Core Skills Proficiency
              </motion.h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-indigo-600 font-bold">{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 mt-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        // Use a key to ensure animation runs on component load
                        whileInView={{ width: `${skill.value}%` }} 
                        transition={{ duration: 0.8, delay: 0.1 + index * 0.05 }} 
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-sky-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100" variants={itemVariants}>
              <a 
                href="#Contact" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
              >
                Get in touch
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-xl bg-white hover:bg-gray-50 transition duration-300"
              >
                Download CV
              </a>
              <span className="text-sm text-gray-500 ml-2">Available for internships & freelance</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}