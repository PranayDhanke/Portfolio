"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow, Section } from "@/components/ui/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/Reveal";
import { underTheHood } from "@/data/portfolio";

export function UnderTheHood() {
  const [open, setOpen] = useState<string>("CRDTs");

  return (
    <Section id="under-the-hood" label="Under the hood" className="py-28 md:py-40">
      <div className="container-x">
        <Eyebrow>06 — Under the hood</Eyebrow>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          The concepts behind{" "}
          <span className="text-gradient-accent">the builds.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
          Not a buzzword list — each one of these shipped inside a project I
          built. Select one to see where it actually shows up.
        </p>

        <StaggerContainer className="mt-16 grid gap-3 md:grid-cols-2" stagger={0.04}>
          {underTheHood.map((item) => {
            const isOpen = open === item.term;
            return (
              <StaggerItem key={item.term} y={20}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-500",
                    isOpen ? "border-accent/40 bg-surface" : "border-strong hover:border-fg-faint"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? "" : item.term)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    data-cursor
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-mono text-xs transition-colors duration-300",
                          isOpen ? "text-accent" : "text-fg-faint"
                        )}
                      >
                        {String(underTheHood.indexOf(item) + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display text-lg font-medium tracking-tight transition-colors duration-300 md:text-xl",
                          isOpen ? "text-accent" : "text-fg"
                        )}
                      >
                        {item.term}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                        isOpen ? "border-accent text-accent" : "border-strong text-fg-muted"
                      )}
                    >
                      <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-6 pl-[3.4rem] text-sm leading-relaxed text-fg-muted">
                          {item.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
