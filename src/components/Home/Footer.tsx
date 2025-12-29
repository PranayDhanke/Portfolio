"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

/* Navigation */
const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Work", label: "Work" },
  { href: "#Contact", label: "Contact" },
];

/* Social Links */
const socialLinks = [
  {
    href: "https://github.com/PranayDhanke",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://in.linkedin.com/in/pranay-dhanke-176a66263",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/pranaydhanke33",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/pranaydhanke33/",
    icon: FaInstagram,
    label: "Instagram",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden
                 bg-gradient-to-b from-slate-50 to-white
                 dark:from-gray-950 dark:to-gray-900
                 border-t border-slate-200 dark:border-gray-800"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[35rem] w-[35rem] bg-indigo-100/30 dark:bg-indigo-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-1/4 bottom-0 h-[35rem] w-[35rem] bg-purple-100/30 dark:bg-purple-900/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold text-slate-800 dark:text-white">
              PRANAY
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-gray-400 max-w-sm">
              Full-stack developer focused on building clean, scalable, and
              production-ready web applications.
            </p>

            <a
              href="mailto:pranaydhanke33@gmail.com"
              className="inline-flex items-center gap-2 mt-5
                         px-4 py-2 rounded-lg
                         bg-indigo-50 text-indigo-600
                         dark:bg-indigo-950/40 dark:text-indigo-400
                         border border-indigo-200 dark:border-indigo-800/40
                         hover:bg-indigo-100 dark:hover:bg-indigo-950/60
                         transition"
            >
              <FaEnvelope />
              <span className="text-sm font-medium">Get in touch</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-gray-400
                               hover:text-indigo-600 dark:hover:text-indigo-400
                               transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-lg
                               bg-white dark:bg-gray-900
                               border border-slate-200 dark:border-gray-800
                               text-slate-600 dark:text-gray-400
                               hover:text-indigo-600 dark:hover:text-indigo-400
                               transition"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-gray-700 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 dark:text-gray-400">
          <p>
            © {currentYear}{" "}
            <span className="font-semibold text-slate-700 dark:text-gray-200">
              Pranay Dhanke
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>Open to internships & full-time roles</span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg
                         bg-indigo-50 dark:bg-indigo-950/40
                         border border-indigo-200 dark:border-indigo-800/40
                         text-indigo-600 dark:text-indigo-400
                         hover:bg-indigo-100 dark:hover:bg-indigo-950/60
                         transition"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
