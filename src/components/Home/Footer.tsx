"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowUp, FaEnvelope } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

const navLinks = [
  { href: "#Home", label: "Home" },
  { href: "#About", label: "About" },
  { href: "#Work", label: "Projects" },
  { href: "#Contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#f8fafc_100%)]">
      <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-black text-slate-900">{portfolio.firstName}</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Full-stack developer building practical products with modern web
              technologies and growing backend experience in Go.
            </p>

            <a
              href={`mailto:${portfolio.email}`}
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-2 text-teal-700 transition hover:bg-teal-100"
            >
              <FaEnvelope />
              <span className="text-sm font-medium">Get in touch</span>
            </a>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition hover:text-teal-700"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-slate-900">Connect</h4>
            <div className="flex gap-3">
              {portfolio.socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition hover:border-teal-500 hover:text-teal-700"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-500 md:flex-row">
          <p>
            © {currentYear}{" "}
            <span className="font-semibold text-slate-800">{portfolio.name}</span>. All
            rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span>{portfolio.availability}</span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="rounded-xl border border-slate-200 bg-white p-2 text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
