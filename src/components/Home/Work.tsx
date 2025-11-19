"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa"; // Added icons for CTAs
import blogimage from "@/images/work/bloggerapp.png";
import egram from "@/images/work/egram.png";
import weatherw from "@/images/work/weatherweb.png";

const projects = [
  {
    title: "Blogger Website",
    desc: "A full-stack blogging platform where users can write, publish, and browse blogs with a clean UI. Features secure authentication and database integration.",
    image: blogimage,
    link: "https://blogger-blue-ten.vercel.app/",
    codeLink: "#", // Add your GitHub link here
    tech: ["Next.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
  },
  {
    title: "E-Gram Website",
    desc: "Digital portal for Gram Panchayat allowing officers to manage schemes and villagers to submit applications online. Improves accessibility and transparency.",
    image: egram,
    link: "https://e-gram.vercel.app/",
    codeLink: "#", // Add your GitHub link here
    tech: ["Next.js", "Firebase", "Realtime DB", "ShadCN UI"],
  },
  {
    title: "Weather App",
    desc: "A responsive weather application providing real-time temperature, conditions, and forecasts for any global city using the OpenWeatherMap API.",
    image: weatherw,
    link: "https://whetherapp-three.vercel.app/",
    codeLink: "#", // Add your GitHub link here
    tech: ["React", "Weather API", "Tailwind CSS"],
  },
];

export default function Work() {
  return (
    <section id="Work" className="py-24 bg-white"> 
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        >
          &lt;<span className="text-indigo-600">My Works</span> /&gt;
        </motion.h2>
        <p className="text-center text-lg text-gray-500 mb-16">
          Explore a selection of my recent front-end development projects.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }} // Adjusted delay for smoother stagger
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-gray-50 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-indigo-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              
              {/* Image */}
              <div className="w-full h-52 overflow-hidden relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  // Added placeholder for better loading UX
                  placeholder="blur" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Overlay for professionalism */}
                <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900">{p.title}</h3>
                <p className="mt-3 text-gray-600 flex-grow text-base">{p.desc}</p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {/* Visit Project Button */}
                  <Link
                    href={p.link}
                    target="_blank"
                    className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300 shadow-md shadow-indigo-200"
                  >
                    <FaExternalLinkAlt className="text-sm"/>
                    Live Demo
                  </Link>

                  {/* View Code Button (Conditional) */}
                  {p.codeLink && p.codeLink !== '#' && (
                    <Link
                      href={p.codeLink}
                      target="_blank"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 text-gray-800 font-semibold bg-white hover:bg-gray-100 transition duration-300"
                    >
                      <FaCode className="text-sm"/>
                      View Code
                    </Link>
                  )}
                  {/* Fallback link if no code link is available */}
                  {p.codeLink === '#' && (
                    <button
                        disabled
                        className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-400 bg-white cursor-not-allowed"
                    >
                        <FaCode className="text-sm"/>
                        Code Private
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}