"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"; // Updated icons for better alignment

// Define quick links for navigation
const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Work", label: "Work" },
  { href: "#Contact", label: "Contact" },
];

// Define social media links with a dedicated style
const socialLinks = [
  { href: "https://www.instagram.com/pranaydhanke33/", icon: FaInstagram, color: "hover:text-pink-500", ariaLabel: "Instagram" },
  { href: "https://twitter.com/pranaydhanke33?t=hrHjKL9cuivSUcV424V8ew&s=08", icon: FaTwitter, color: "hover:text-sky-500", ariaLabel: "Twitter" },
  { href: "https://in.linkedin.com/in/pranay-dhanke-176a66263", icon: FaLinkedinIn, color: "hover:text-blue-600", ariaLabel: "LinkedIn" },
  { href: "https://github.com/PranayDhanke", icon: FaGithub, color: "hover:text-gray-400", ariaLabel: "GitHub" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-gray-700 pb-8">
          
          {/* Brand/Thank You */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-indigo-400">PRANAY</h3>
            <p className="mt-2 text-gray-400 max-w-xs">
              Thank you for stopping by! Lets connect and build something amazing together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-indigo-400">Quick Links</h4>
            <ul className="flex flex-wrap justify-center md:flex-col gap-x-4 gap-y-1 text-gray-400">
              {navLinks.map((link) => (
                <li key={link.href} className="hover:text-white transition duration-200">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { type: "spring", duration: 0.5, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold mb-3 text-indigo-400">Connect With Me</h4>
            <div className="flex gap-5 text-2xl">
              {socialLinks.map((social) => (
                <Link
                  key={social.ariaLabel}
                  target="_blank"
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:-translate-y-1`}
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center text-sm text-gray-500">
          &copy; {currentYear} Pranay Dhanke. All rights reserved. 
          <span className="block mt-1 md:inline md:ml-4">
            Built with <Link href="https://nextjs.org/" target="_blank" className="hover:text-indigo-400">Next.js</Link> & <Link href="https://tailwindcss.com/" target="_blank" className="hover:text-indigo-400">Tailwind CSS</Link>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;