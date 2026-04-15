"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <section
      id="Home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(13,148,136,0.16),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(217,119,6,0.18),_transparent_24%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_45%,_#fffaf0_100%)] pt-24 pb-28 md:pt-32 md:pb-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 md:grid-cols-12 lg:px-8">
        <motion.div
          className="order-2 space-y-8 md:order-1 md:col-span-7"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center rounded-full border border-teal-200 bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm backdrop-blur">
            {portfolio.hero.badge}
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              {portfolio.role}
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-tight text-slate-900 sm:text-6xl lg:text-7xl">
              {portfolio.hero.headingLead}{" "}
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-amber-500 bg-clip-text text-transparent">
                {portfolio.hero.headingAccent}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {portfolio.hero.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="#Contact">
              <motion.span
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex rounded-xl bg-slate-950 px-8 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10"
              >
                {portfolio.hero.ctaPrimary}
              </motion.span>
            </Link>

            <a
              href={portfolio.resumeHref}
              download={portfolio.resumeDownloadName}
              className="inline-flex rounded-xl border border-slate-300 bg-white px-8 py-3 font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700"
            >
              {portfolio.hero.ctaSecondary}
            </a>

            <span className="text-sm text-slate-500">
              {portfolio.availability}
            </span>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Core Stack
            </p>

            {portfolio.featuredSkills.map((group) => (
              <div key={group.category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 flex justify-center md:order-2 md:col-span-5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-200 via-cyan-100 to-amber-100 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-2xl shadow-slate-900/10">
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,_rgba(15,23,42,0.02),_rgba(15,23,42,0.08))] p-3">
                <Image
                  src={portfolio.portrait}
                  alt={`${portfolio.name} portrait`}
                  className="h-auto w-full rounded-[1.25rem] object-cover"
                  priority
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="font-semibold text-slate-900">{portfolio.name}</p>
                  <p className="text-sm text-slate-500">{portfolio.shortRole}</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(34,197,94,0.15)]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-4 xl:flex">
        {portfolio.socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="rounded-full border border-slate-200 bg-white p-3 text-slate-600 shadow-sm transition hover:-translate-y-1 hover:border-teal-400 hover:text-teal-700"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </section>
  );
}
