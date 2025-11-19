"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoCodeWorkingOutline } from "react-icons/io5";

// -----------------------------
// Replace this with your real resume URL or pass as a prop
const RESUME_URL = "/resume.pdf"; // <-- change this to your actual CV path
// -----------------------------

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const links = [
    { href: "#Home", label: "Home", icon: <FaHome /> },
    { href: "#About", label: "About", icon: <CgProfile /> },
    { href: "#Work", label: "Works", icon: <IoCodeWorkingOutline /> },
    { href: "#Contact", label: "Contact", icon: <IoIosHelpCircleOutline /> },
  ];

  useEffect(() => {
    // lock scroll when menu is open
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    // close on Escape
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close when clicking outside mobile menu (for a11y)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!isOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [isOpen]);

  return (
    <header className="sticky overflow-hidden top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      {/* thin progress bar driven by scroll */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="origin-left h-1 bg-gradient-to-r from-sky-500 to-indigo-600"
      />

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 w-10 h-10 flex items-center justify-center text-white font-bold">P</div>
            <div>
              <Link href="#Home" className="text-xl font-extrabold tracking-tight text-gray-800">
                PRANAY
              </Link>
              <p className="text-xs text-gray-500 -mt-0.5">Frontend • Next.js • ML</p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <ul className="flex gap-6 items-center">
              {links.map((l) => (
                <li key={l.href} className="relative group">
                  <Link
                    href={l.href}
                    className="inline-flex items-center gap-2 text-gray-700 font-medium py-2 px-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                  >
                    {l.icon}
                    <span className="whitespace-nowrap">{l.label}</span>
                    {/* animated underline */}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={RESUME_URL}
              download
              className="ml-4 inline-flex items-center rounded-lg border border-indigo-100 px-3 py-1.5 text-sm font-medium shadow-sm bg-white hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu + backdrop */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
        className="fixed inset-0 z-40"
        aria-hidden={!isOpen}
      >
        {/* backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0.45 : 0 }}
          transition={{ duration: 0.18 }}
          className="absolute inset-0 bg-black"
        />

        {/* sliding panel */}
        <motion.aside
          ref={menuRef}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute right-0 top-0 w-full max-w-xs h-full bg-white shadow-2xl p-6 overflow-auto"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold">Menu</h3>
              <p className="text-sm text-gray-500">Quick links & actions</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
              <FaTimes />
            </button>
          </div>

          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
              >
                <span className="text-lg text-indigo-600">{l.icon}</span>
                <span className="font-medium text-gray-700">{l.label}</span>
              </Link>
            ))}

            <a
              href={RESUME_URL}
              download
              onClick={() => setIsOpen(false)}
              className="mt-4 inline-flex items-center justify-center w-full rounded-md border border-indigo-100 px-3 py-2 text-sm font-medium bg-white"
            >
              Download CV
            </a>
          </nav>

          <div className="mt-6 text-xs text-gray-400">Tip: press Escape to close the menu.</div>
        </motion.aside>
      </motion.div>
    </header>
  );
}
