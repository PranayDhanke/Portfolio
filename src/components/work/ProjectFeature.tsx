"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TransitionLink } from "@/components/providers/TransitionLink";
import { Tag } from "@/components/ui/Section";
import { Counter } from "@/components/animations/Counter";
import type { CaseStudy } from "@/data/projects";

interface ProjectFeatureProps {
  project: CaseStudy;
  index: string;
  visual: ReactNode;
  reversed?: boolean;
}

export function ProjectFeature({ project, index, visual, reversed }: ProjectFeatureProps) {
  const metrics = (project.metrics ?? []).slice(0, 3);

  return (
    <div
      className={cn(
        "group grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        reversed && "lg:[&>*:first-child]:order-2"
      )}
    >
      <div>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-fg-faint">PROJECT</span>
          <span className="font-display text-5xl font-bold tracking-tight text-fg-faint/40 md:text-6xl">
            {index}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {project.subtitle}
          </p>
          <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-fg-muted md:text-lg">
            {project.tagline}
          </p>
        </motion.div>

        {metrics.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-strong bg-surface px-4 py-3"
              >
                <p className="font-display text-2xl font-semibold text-gradient-accent">
                  <Counter value={m.value} />
                </p>
                <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-fg-faint">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {project.stack.length > 6 && (
            <Tag>+{project.stack.length - 6}</Tag>
          )}
        </div>

        <div className="mt-10">
          <TransitionLink
            href={`/work/${project.slug}`}
            className="group/link inline-flex items-center gap-3"
            aria-label={`Open case study: ${project.title}`}
            data-cursor-label="OPEN"
            data-cursor
          >
            <span className="rounded-full border border-strong px-6 py-3 font-medium transition-all duration-300 group-hover/link:border-accent group-hover/link:text-accent">
              View case study
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fg text-bg transition-all duration-300 group-hover/link:rotate-45 group-hover/link:bg-accent">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </TransitionLink>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-3xl bg-glow opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="relative">{visual}</div>
      </motion.div>
    </div>
  );
}
