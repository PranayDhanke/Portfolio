"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Eyebrow, Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { engineeringWorkflow } from "@/data/portfolio";

export function HowIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="how-i-build" label="How I build" className="py-28 md:py-40">
      <div className="container-x">
        <Eyebrow>07 — How I build</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          An engineering pipeline,{" "}
          <span className="text-gradient-accent">not a philosophy.</span>
        </h2>

        <div ref={ref} className="relative mt-20">
          <div className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-strong md:left-[1.6rem]" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-6 left-[1.4rem] top-6 w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3 md:left-[1.6rem]"
            style={{ scaleY: lineScale }}
          />

          <StaggerContainer className="space-y-10" stagger={0.08}>
            {engineeringWorkflow.map((step, i) => (
              <StaggerItem key={step.index} y={24}>
                <div className="group relative flex items-start gap-8 pl-0 md:gap-14">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14">
                    <span className="absolute inset-0 rounded-2xl border border-strong bg-surface transition-colors duration-500 group-hover:border-accent/50" />
                    <span className="font-mono text-sm text-fg-muted transition-colors duration-300 group-hover:text-accent">
                      {step.index}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1">
                    <h3 className="font-display text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-accent md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-fg-muted">{step.detail}</p>
                    {i < engineeringWorkflow.length - 1 && (
                      <p className="mt-4 font-mono text-xs text-fg-faint">
                        ↓
                      </p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </Section>
  );
}
