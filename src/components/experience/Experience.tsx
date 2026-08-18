"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";
import { Eyebrow, Section } from "@/components/ui/Section";
import { about } from "@/data/portfolio";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 70%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const exp = about.experience[0];

  return (
    <Section id="experience" label="Experience" className="py-28 md:py-40">
      <div className="container-x">
        <Eyebrow>04 — Experience</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Where I&apos;ve applied{" "}
          <span className="text-gradient-accent">the systems thinking.</span>
        </h2>

        <div ref={ref} className="relative mt-20">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-strong md:left-1/2" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-1/2"
            style={{ scaleY: lineScale }}
          />

          <div className="space-y-16">
            <div className="relative md:grid md:grid-cols-2 md:gap-x-20">
              <span
                className="absolute left-4 top-1.5 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-accent bg-surface md:left-1/2"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-accent-3" />
              </span>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="pl-14 md:pl-0 md:pr-10 md:text-right"
              >
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {exp.period}
                </p>
                <div className="mt-3 flex items-center gap-2 md:justify-end">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-strong">
                    <Briefcase className="h-4 w-4 text-accent" aria-hidden="true" />
                  </span>
                  <p className="font-mono text-xs text-fg-faint">{exp.type}</p>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {exp.role}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{exp.company}</p>
              </motion.div>
              <div className="hidden md:block" aria-hidden="true" />
            </div>

            <div className="relative md:grid md:grid-cols-2 md:gap-x-20">
              <div className="hidden md:block" aria-hidden="true" />
              <div className="pl-14 md:pl-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-strong p-6 md:p-8"
                >
                  <div className="mb-6 flex items-center justify-between border-b border-strong pb-4">
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-faint">
                      Impact
                    </p>
                    <span className="font-mono text-xs text-fg-faint">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {exp.achievements.map((point, i) => (
                      <motion.li
                        key={point}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3" />
                        <p className="text-sm leading-relaxed text-fg-muted md:text-base">
                          {point}
                        </p>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            {about.education.map((edu) => (
              <div key={edu.school} className="relative md:grid md:grid-cols-2 md:gap-x-20">
                <span
                  className="absolute left-4 top-1.5 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-strong bg-surface md:left-1/2"
                  aria-hidden="true"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-fg-faint" />
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="pl-14 md:pl-0 md:pr-10 md:text-right"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-muted">
                    {edu.period}
                  </p>
                  <div className="mt-3 flex items-center gap-2 md:justify-end">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-strong">
                      <GraduationCap className="h-4 w-4 text-fg-muted" aria-hidden="true" />
                    </span>
                    <p className="font-mono text-xs text-fg-faint">Education</p>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">{edu.degree}</p>
                  <p className="mt-2 inline-block rounded-full border border-strong px-3 py-1 font-mono text-xs text-fg-muted">
                    {edu.note}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}