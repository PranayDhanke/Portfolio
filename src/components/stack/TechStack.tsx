"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Eyebrow, Section } from "@/components/ui/Section";
import {
  skillGroups,
  skillSpotlight,
  skillSpotlightMap,
  type SpotlightSkill,
} from "@/data/portfolio";

const KEYS = Object.keys(skillSpotlight) as SpotlightSkill[];

export function TechStack() {
  const [active, setActive] = useState<SpotlightSkill>("Redis");
  const detail = skillSpotlight[active];

  return (
    <Section id="stack" label="Technology stack" className="py-28 md:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>03 — Technology stack</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              The stack I engineer{" "}
              <span className="text-gradient-accent">with.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-fg-faint">
            Hover a technology to see how it shows up in my actual systems.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-12">
            {skillGroups.map((group, gi) => (
              <div key={group.category}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="font-mono text-xs text-fg-faint">
                    0{gi + 1}
                  </span>
                  <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">
                    {group.category}
                  </h3>
                  <div className="h-px flex-1 bg-strong" />
                </div>
                <div className="flex flex-wrap gap-2.5 pl-8">
                  {group.skills.map((skill) => {
                    const key = skillSpotlightMap[skill];
                    const hasDetail = Boolean(key && KEYS.includes(key));
                    const isActive = key === active;
                    return (
                      <motion.button
                        key={skill}
                        onClick={() => hasDetail && setActive(key)}
                        onMouseEnter={() => hasDetail && setActive(key)}
                        whileTap={{ scale: 0.96 }}
                        className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-sm transition-all duration-300 ${
                          isActive
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-strong text-fg-muted hover:border-fg-faint hover:text-fg"
                        }`}
                        data-cursor
                      >
                        {skill}
                        {hasDetail && (
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              isActive ? "bg-accent-3" : "bg-fg-faint group-hover:bg-accent-3"
                            }`}
                          />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-3xl border border-strong p-8 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-glow blur-3xl"
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-faint">
                    Under inspection
                  </p>
                  <ArrowUpRight className="h-4 w-4 text-accent" aria-hidden="true" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8"
                  >
                    <h4 className="font-display text-3xl font-semibold tracking-tight text-gradient-accent">
                      {active}
                    </h4>

                    <div className="mt-8 space-y-7">
                      <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-fg-faint">
                          Used for
                        </p>
                        <ul className="space-y-2.5">
                          {detail.usedFor.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm text-fg-muted"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-3" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-fg-faint">
                          In production systems
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {detail.projects.map((p) => (
                            <span
                              key={p}
                              className="rounded-full border border-strong px-3 py-1 font-mono text-xs text-fg-muted"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="border-l-2 border-accent/40 pl-4 text-sm italic leading-relaxed text-fg-muted">
                        {detail.note}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
