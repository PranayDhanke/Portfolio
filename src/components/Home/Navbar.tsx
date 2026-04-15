"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Work", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setIsScrolled(v > 0.04));
    return () => unsub();
  }, [scrollYProgress]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleDownloadResume = async () => {
    setIsDownloading(true);
    await new Promise((resolve) => setTimeout(resolve, 250));

    const link = document.createElement("a");
    link.href = portfolio.resumeHref;
    link.download = portfolio.resumeDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        isScrolled
          ? "border-slate-200 bg-white/85 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-[2px] origin-left bg-gradient-to-r from-teal-500 via-cyan-500 to-amber-500"
      />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleNavClick("#Home")}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 font-bold text-white shadow-lg shadow-slate-900/10">
              {portfolio.initial}
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-slate-900">{portfolio.name}</h1>
              <p className="text-xs text-slate-500">{portfolio.shortRole}</p>
            </div>
          </button>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-slate-950 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <button
              onClick={handleDownloadResume}
              className="ml-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700"
            >
              {isDownloading ? "Downloading..." : "Resume"}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-950/60"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.aside
              className="fixed right-0 top-0 h-screen w-72 border-l border-slate-200 bg-white shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              <div className="flex items-center justify-between border-b border-slate-200 p-6">
                <div>
                  <p className="font-bold text-slate-900">{portfolio.name}</p>
                  <p className="text-sm text-slate-500">{portfolio.role}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-500 hover:text-slate-900"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="space-y-4 p-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full rounded-xl px-4 py-3 text-left text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
                  >
                    {link.label}
                  </button>
                ))}

                <button
                  onClick={handleDownloadResume}
                  className="mt-4 w-full rounded-xl bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700"
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
