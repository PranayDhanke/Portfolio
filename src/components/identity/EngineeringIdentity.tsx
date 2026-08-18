"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { Eyebrow, Section } from "@/components/ui/Section";
import { engineeringIdentity } from "@/data/portfolio";

export function EngineeringIdentity() {
  return (
    <Section id="identity" label="Engineering identity" className="relative py-28 md:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 glow-line opacity-40"
      />

      <div className="container-x">
        <Eyebrow>02 — Engineering identity</Eyebrow>

        <div className="mt-12">
          <h2 className="max-w-5xl font-display text-4xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            I LIKE BUILDING{" "}
            <span className="text-gradient-accent">SYSTEMS</span>
            <br />
            THAT DON&apos;T{" "}
            <span className="text-fg-faint line-through decoration-accent/50">
              FALL APART.
            </span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            I care about the boring, important things — consistency, concurrency,
            latency, and what happens when a service dies. The stuff that keeps a
            system standing long after the demo ends.
          </p>
        </div>

        <StaggerContainer className="mt-24 border-t border-strong" stagger={0.09}>
          {engineeringIdentity.map((item) => (
            <StaggerItem key={item.index}>
              <div className="group flex items-center gap-6 border-b border-strong py-7 transition-all duration-500 hover:bg-surface md:gap-12 md:py-9">
                <span className="w-10 shrink-0 font-mono text-xs text-fg-faint">
                  {item.index}
                </span>
                <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-10">
                  <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-500 group-hover:text-accent md:text-4xl lg:text-5xl">
                    {item.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
                    {item.line}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="hidden h-5 w-5 shrink-0 -translate-x-2 text-fg-faint opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100 md:block"
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
