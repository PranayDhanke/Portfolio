"use client";

import Image from "next/image";
import React from "react";
// Assuming these are defined in your project path
import luffy from "@/images/home/luffyt.webp"; 
import imagebg from "@/images/home/imagebg.png"; 
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa"; // Using FaGithub for consistency with other icons
import Link from "next/link";

const RESUME_URL = "/resume.pdf"; // <- replace with your CV path

export default function Home() {
  // Animation variants for better structure
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    // Change background to a subtler gradient for contrast
    <section 
      id="Home" 
      className="relative overflow-hidden bg-white pt-24 pb-24 md:pt-32" 
      // Ensure smooth scroll target padding
      style={{ scrollMarginTop: '4rem' }} 
    >
      {/* Decorative background light source (subtler) */}
      <div className="pointer-events-none absolute -left-1/4 -top-1/4 h-[50rem] w-[50rem] rounded-full bg-indigo-50/50 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[40rem] w-[40rem] rounded-full bg-pink-50/50 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Content (Text and Buttons) - Order 2 on Mobile, Order 1 on Desktop */}
        <motion.div
          className="md:col-span-7 space-y-6 order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome Chip (Improved Contrast) */}
          <motion.div 
            className="inline-flex items-center gap-3 bg-indigo-600/10 text-indigo-700 rounded-full px-4 py-1.5 w-max text-sm font-semibold border border-indigo-200"
            variants={itemVariants}
          >
            👋 <span className="text-gray-900">Welcome — nice to meet you</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl font-extrabold leading-snug text-gray-900"
            variants={itemVariants}
          >
            I build delightful web experiences
            <br />
            <span className="text-indigo-600">with Next.js & Tailwind</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            className="text-gray-700 max-w-xl text-lg leading-relaxed"
            variants={itemVariants}
          >
            Hi — I&rsquo;m **Pranay Dhanke**. I create fast, accessible, and
            maintainable front-end apps. I enjoy shipping features that help people and keep
            performance high.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-2"
            variants={itemVariants}
          >
            <Link 
              href="#Contact" 
              className="group inline-flex items-center rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300"
            >
              <motion.span whileTap={{ scale: 0.95 }}>Get In Touch</motion.span>
            </Link>

            <a 
              href={RESUME_URL} 
              download 
              className="inline-flex items-center rounded-xl border border-gray-300 px-6 py-3 text-base font-semibold text-gray-800 bg-white hover:bg-gray-50 transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-200"
            >
              Download CV
            </a>

            <span className="ml-2 text-sm text-gray-500 hidden md:inline">• Available for freelancing</span>
          </motion.div>
          
          {/* Skill chips */}
          <motion.div 
            className="flex flex-wrap gap-2 pt-4"
            variants={itemVariants}
          >
            {/* Added a title for better context */}
            <span className="text-gray-500 font-medium pt-1">Tech Stack:</span> 
            {[
              "Next.js",
              "React",
              "Tailwind CSS", // Explicitly added CSS for clarity
              "TypeScript",
              "Firebase",
              "Machine Learning",
            ].map((skill) => (
              <div 
                key={skill} 
                className="px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 border border-gray-200"
              >
                {skill}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual (Image, Floating Card, and Mobile Socials) - Order 1 on Mobile, Order 2 on Desktop */}
        <motion.div
          className="md:col-span-5 flex flex-col items-center justify-center relative order-1 md:order-2"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-full max-w-sm">
            {/* Background Image (Using a geometric shape/design is better than a generic bg) */}
            <div className="absolute inset-0 -z-10 transform scale-100">
              <Image 
                src={imagebg} 
                alt="Decorative geometric background" 
                className="w-full h-auto rounded-3xl opacity-80" 
              />
            </div>

            {/* Floating Portrait (Centered over the background) */}
            <motion.div 
                whileHover={{ y: -8, transition: { duration: 0.3 } }} 
                className="relative w-56 h-56 mx-auto -translate-y-4 shadow-2xl rounded-[30px] border-4 border-white transition-shadow"
            >
              <Image
                src={luffy}
                alt="Pranay Dhanke Portrait"
                className="rounded-2xl object-cover w-full h-full"
                priority
              />
            </motion.div>

            {/* Floating Card (Better design and placement) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
              className="absolute -right-8 bottom-12 hidden md:flex items-center gap-3 bg-white rounded-xl p-3 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">P</div>
              <div className="text-sm">
                <div className="font-bold text-gray-900">Pranay Dhanke</div>
                <div className="text-indigo-600 text-xs font-medium">Front-End Developer</div>
              </div>
            </motion.div>
          </div>
          
          {/* Socials - Visible on Mobile, Hidden on Desktop */}
          <div className="mt-8 pt-4 border-t border-gray-100 w-full flex justify-center md:hidden">
              <div className="flex gap-6 text-2xl text-gray-500">
                  <a href="https://www.instagram.com/pranaydhanke33/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 hover:text-pink-600 transition-colors">
                      <FaInstagram />
                  </a>
                  <a href="https://twitter.com/pranaydhanke33" target="_blank" rel="noreferrer" aria-label="Twitter" className="p-2 hover:text-blue-500 transition-colors">
                      <FaXTwitter />
                  </a>
                  <a href="https://in.linkedin.com/in/pranay-dhanke-176a66263" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:text-blue-700 transition-colors">
                      <FaLinkedin />
                  </a>
                  <a href="https://github.com/PranayDhanke" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:text-gray-900 transition-colors">
                      <FaGithub />
                  </a>
              </div>
          </div>
        </motion.div>
        
  
      </div>
    </section>
  );
}