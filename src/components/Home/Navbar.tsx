"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { href: "#Home", label: "Home", icon: <FaHome /> },
  { href: "#About", label: "About", icon: <CgProfile /> },
  { href: "#Work", label: "Works", icon: <IoCodeWorkingOutline /> },
  { href: "#Contact", label: "Contact", icon: <IoIosHelpCircleOutline /> },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isDownloading, setIsDownloading] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setIsScrolled(v > 0.05));
    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) => e.isIntersecting && setActiveSection(e.target.id)
        );
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  }, []);

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    await new Promise((r) => setTimeout(r, 300));
    const link = document.createElement("a");
    link.href = "/PranayDhankeResume.pdf";
    link.download = "Pranay_Dhanke_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all ${
        isScrolled ? "bg-gray-950" : "bg-gray-950"
      } border-b border-gray-800`}
    >
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 origin-left"
      />

      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <button
            onClick={() => handleNavClick("#Home")}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold shadow">
              P
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold">PRANAY</h1>
              <p className="text-xs text-gray-400">
                Full-Stack Developer • Next.js
              </p>
            </div>
          </button>

          {/* Desktop Nav (UNCHANGED) */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    active
                      ? "bg-gray-800 text-white"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <button
              onClick={handleDownloadResume}
              className="ml-2 px-4 py-2 text-sm rounded-lg border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
            >
              {isDownloading ? "Downloading…" : "Resume"}
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU FIX ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.aside
              ref={menuRef}
              className="fixed right-0 top-0 h-screen w-72 bg-black border-l border-gray-800 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <span className="text-white font-bold">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Links */}
              <div className="p-6 space-y-4">
                {navLinks.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => handleNavClick(l.href)}
                    className="block w-full text-left text-gray-300 hover:text-white"
                  >
                    {l.label}
                  </button>
                ))}

                <button
                  onClick={handleDownloadResume}
                  className="w-full mt-6 rounded-lg border border-indigo-500 py-2 text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
                >
                  Download Resume
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
