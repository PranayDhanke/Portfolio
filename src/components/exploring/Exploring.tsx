"use client";

import { motion } from "framer-motion";
import { Eyebrow, Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { exploring } from "@/data/portfolio";

const modeColors: Record<string, string> = {
  Building: "text-accent-3 border-accent-3/40 bg-accent-3/10",
  Exploring: "text-accent border-accent/40 bg-accent/10",
  Learning: "text-accent-2 border-accent-2/40 bg-accent-2/10",
};

export function Exploring() {
  return (
    <Section id="exploring" label="Currently exploring" className="py-28 md:py-40">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>08 — Currently</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Where I&apos;m headed{" "}
              <span className="text-gradient-accent">next.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-fg-faint">
            Honest labels — building is what I ship today, exploring is what I
            dig into next.
          </p>
        </div>

        <StaggerContainer className="mt-20" stagger={0.05}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {exploring.map((item) => (
              <StaggerItem key={item.topic} y={20}>
                <div className="group flex items-center justify-between rounded-2xl border border-strong px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface">
                  <span className="font-display text-lg font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-xl">
                    {item.topic}
                  </span>
                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${modeColors[item.mode]}`}
                  >
                    {item.mode}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </Section>
  );
}