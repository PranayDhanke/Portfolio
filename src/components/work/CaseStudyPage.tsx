"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TransitionLink } from "@/components/providers/TransitionLink";
import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/animations/Counter";
import { Button } from "@/components/ui/Button";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import type { CaseStudy } from "@/data/projects";

export function CaseStudyPage({
  project,
  next,
}: {
  project: CaseStudy;
  next?: CaseStudy;
}) {
  return (
    <main className="pt-28 md:pt-40">
      <div className="container-x">
        <TransitionLink
          href="/#work"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-fg-muted transition-colors duration-300 hover:text-accent"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          All work
        </TransitionLink>

        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              Case study — {project.category}
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="mt-4 font-display text-xl font-medium text-fg-muted sm:text-2xl">
              {project.subtitle}
            </p>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <Reveal delay={0.1}>
              <p className="max-w-2xl text-balance font-mono text-base leading-relaxed text-fg-muted md:text-lg">
                <span className="text-accent">{"//"}</span> {project.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {project.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-strong px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent"
                      data-cursor
                    >
                      {l.label}
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-fg-faint">
                  {project.year} · {project.status}
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-14">
            <div className="flex flex-wrap gap-2 border-y border-strong py-5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-strong px-3 py-1 font-mono text-xs text-fg-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <section className="mt-24 grid gap-16 md:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">01</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                The problem.
              </h2>
            </Reveal>
          </div>
          <div className="space-y-8">
            {project.challenge.map((c, i) => (
              <Reveal key={c} delay={i * 0.06}>
                <div className="flex items-start gap-4 border-b border-strong pb-6">
                  <span className="mt-1 font-mono text-sm text-fg-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-fg-muted md:text-lg">{c}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">02</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              How I solved it.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {project.solutions.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border border-strong p-7 transition-colors duration-500 hover:border-accent/40 md:p-8">
                  <p className="font-mono text-xs text-fg-faint">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-fg-muted md:text-base">
                    {s.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">03</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              The architecture.
            </h2>
            <p className="mt-4 max-w-xl text-base text-fg-muted">
              Select a component to see what it does and why it exists.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <ArchitectureDiagram nodes={project.architecture.nodes} edges={project.architecture.edges} />
          </Reveal>
        </section>

        {project.metrics && (
          <section className="mt-24 md:mt-32">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">04</p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
                Measured under load.
              </h2>
              <p className="mt-4 max-w-xl text-base text-fg-muted">
                Engineering measurements, not marketing numbers.
              </p>
            </Reveal>

            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-strong bg-strong md:grid-cols-3">
              {project.metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05} className="h-full">
                  <div className="flex h-full flex-col justify-between gap-8 bg-surface p-6 md:p-8">
                    <p
                      className={`font-display text-4xl font-bold tracking-tight md:text-6xl ${
                        m.primary ? "text-gradient-accent" : "text-fg"
                      }`}
                    >
                      <Counter value={m.value} />
                    </p>
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-fg-muted">
                        {m.label}
                      </p>
                      {m.context && (
                        <p className="mt-1.5 font-mono text-[11px] text-fg-faint">{m.context}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {project.metricNote && (
              <Reveal delay={0.1}>
                <div className="mt-8 flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                  <span className="mt-1 font-mono text-lg text-accent">λ</span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                      Engineering insight
                    </p>
                    <p className="mt-2 max-w-3xl font-display text-lg font-medium leading-relaxed text-fg md:text-xl">
                      {project.metricNote}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </section>
        )}

        <section className="mt-24 md:mt-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">05</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
              What the data taught me.
            </h2>
          </Reveal>

          <div className="mt-14 space-y-6">
            {project.insights.map((insight, i) => (
              <Reveal key={insight} delay={i * 0.06}>
                <div className="group flex items-start gap-5 rounded-2xl border border-strong p-6 transition-colors duration-500 hover:border-accent/40 md:p-8">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-base leading-relaxed text-fg-muted md:text-lg">
                    {insight}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="mt-24 flex flex-col gap-8 border-t border-strong py-12 md:mt-32 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-faint">
              Next case study
            </p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {next ? next.title : "Thanks for reading."}
            </p>
            {next && <p className="mt-2 font-mono text-sm text-fg-muted">{next.subtitle}</p>}
          </div>
          {next && (
            <TransitionLink
              href={`/work/${next.slug}`}
              aria-label={`Open case study: ${next.title}`}
              data-cursor-label="NEXT"
              data-cursor
            >
              <Button variant="outline" size="lg" arrow>
                {next.title}
              </Button>
            </TransitionLink>
          )}
        </div>
      </div>
    </main>
  );
}
