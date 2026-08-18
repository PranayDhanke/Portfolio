"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal, WordsReveal } from "@/components/animations/Reveal";
import { Eyebrow, Section } from "@/components/ui/Section";
import { about, profile } from "@/data/portfolio";

function InterestCycler() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % about.interests.length);
        setVisible(true);
      }, 260);
    }, 2200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="inline-flex items-center gap-3 align-baseline">
      <motion.span
        key={index}
        className="text-gradient-accent inline-block font-display font-semibold"
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 12, filter: visible ? "blur(0px)" : "blur(6px)" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {about.interests[index]}
      </motion.span>
    </span>
  );
}

export function About() {
  return (
    <Section id="about" label="About" className="py-28 md:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Eyebrow>01 — A little about me</Eyebrow>
          <Reveal delay={0.1} className="hidden md:block">
            <p className="font-mono text-xs text-fg-faint">
              {profile.initials} · {profile.location} · {profile.timezone}
            </p>
          </Reveal>
        </div>

        <h2 className="mt-12 max-w-5xl font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <WordsReveal text="I'm a Computer Science Engineer who thinks in" />
          <br />
          <span className="text-fg-faint">
            <WordsReveal text="systems, not just" delay={0.4} />
          </span>{" "}
          <span className="text-gradient-accent">
            <WordsReveal text="screens." delay={0.55} />
          </span>
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-16">
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded border border-accent/30 bg-accent/10 font-mono text-[10px] text-accent">
                  01
                </span>
                <Reveal delay={0.1}>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">
                    Who I am
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.15}>
                <p className="max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
                  {about.whoAmI}
                </p>
              </Reveal>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded border border-accent/30 bg-accent/10 font-mono text-[10px] text-accent">
                  02
                </span>
                <Reveal delay={0.1}>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">
                    What I build
                  </p>
                </Reveal>
              </div>
              <Reveal delay={0.15}>
                <p className="max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
                  {about.whatIBuild}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <p className="font-mono text-sm text-fg-muted">
                Currently interested in{" "}
                <InterestCycler />
              </p>
            </Reveal>
          </div>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">
                Education
              </p>
            </Reveal>
            {about.education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-strong p-6 transition-colors duration-500 hover:border-accent/40 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {edu.period}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-semibold md:text-2xl">
                      {edu.school}
                    </h3>
                    <p className="mt-1 text-sm text-fg-muted">{edu.degree}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-strong px-3 py-1 font-mono text-xs text-fg-muted">
                    {edu.note}
                  </span>
                </div>
              </motion.div>
            ))}

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-dashed border-strong p-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-fg-faint">
                  Availability
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-fg-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-3" />
                  {profile.availability}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
