"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { portfolio } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Work() {
  return (
    <section
      id="Work"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#f8fafc_0%,_#ffffff_35%,_#fffbeb_100%)] py-24 md:py-32"
      style={{ scrollMarginTop: "4rem" }}
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-96 w-96 rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-700">
            Portfolio
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl md:text-6xl">
            Selected Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A mix of full-stack products and backend-focused builds that reflect
            how I approach practical software problems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolio.projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-end bg-[linear-gradient(135deg,_#0f172a_0%,_#115e59_60%,_#f59e0b_100%)] p-6">
                    <div className="max-w-[14rem]">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">
                        Systems Project
                      </p>
                      <h3 className="mt-3 text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  {project.year ? (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                      {project.year}
                    </span>
                  ) : null}
                </div>

                <p className="mt-3 flex-grow text-sm leading-7 text-slate-600">
                  {project.desc}
                </p>

                {project.highlights?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 border-t border-slate-200 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  {project.link ? (
                    <Link href={project.link} target="_blank" className="flex-1">
                      <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white">
                        <FaExternalLinkAlt />
                        Live
                      </span>
                    </Link>
                  ) : (
                    <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-slate-400">
                      Code-only project
                    </span>
                  )}

                  {project.codeLink ? (
                    <Link href={project.codeLink} target="_blank" className="flex-1">
                      <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700">
                        <FaGithub />
                        Code
                      </span>
                    </Link>
                  ) : (
                    <span className="inline-flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-slate-400">
                      Repo link pending
                    </span>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-transparent transition group-hover:border-teal-400/50" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-slate-600">
            Interested in collaborating or discussing any of these builds?
          </p>
          <Link href="#Contact">
            <span className="inline-flex rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700">
              Let’s Talk
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
