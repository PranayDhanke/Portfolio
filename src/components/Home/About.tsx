"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section
      id="About"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#fffaf0_0%,_#ffffff_45%,_#f8fafc_100%)] py-24 md:py-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-amber-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-teal-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
            Profile
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            {portfolio.about.introTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            {portfolio.about.intro}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={item}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                {portfolio.name}
              </p>
              <h3 className="mt-3 text-3xl font-bold text-slate-900">
                Building software with product thinking
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {portfolio.about.detail}
              </p>
            </motion.div>

            <motion.div variants={item} className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  Full-stack web apps and backend systems
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Expanding
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">AI-ML for the web apps </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Status
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900">
                  {portfolio.availability}
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
              Highlights
            </p>
            <div className="mt-6 space-y-4">
              {portfolio.about.highlights.map((text) => (
                <div
                  key={text}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-base leading-7 text-slate-200">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
              <Link href="#Contact">
                <span className="inline-flex rounded-xl bg-teal-500 px-6 py-3 font-semibold text-slate-950">
                  Get in touch
                </span>
              </Link>
              <a
                href={portfolio.resumeHref}
                download={portfolio.resumeDownloadName}
                className="inline-flex rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-teal-300 hover:text-teal-200"
              >
                Download resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
                Toolkit
              </p>
              <h3 className="mt-3 text-3xl font-bold text-slate-900">
                Skills and tools I use
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h4 className="font-semibold text-teal-700">{group.title}</h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
              Experience
            </p>
            <div className="mt-6 space-y-6">
              {portfolio.experience.map((item) => (
                <div key={`${item.role}-${item.company}`} className="rounded-2xl bg-slate-50 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{item.role}</h4>
                      <p className="text-sm font-medium text-slate-600">{item.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-teal-700">{item.period}</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {item.points.map((point) => (
                      <p key={point} className="text-sm leading-7 text-slate-600">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-900/10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-300">
              Education
            </p>
            <div className="mt-6 space-y-4">
              {portfolio.education.map((item) => (
                <div
                  key={`${item.school}-${item.period}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.school}</h4>
                      <p className="mt-1 text-sm text-slate-300">{item.degree}</p>
                    </div>
                    <span className="text-sm font-semibold text-teal-300">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
