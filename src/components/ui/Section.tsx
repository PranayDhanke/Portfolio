"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/Reveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  label?: string;
}

export function Section({ id, className, children, label }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("relative", className)}
      style={{ scrollMarginTop: "5rem" }}
    >
      {children}
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-5 md:mb-20",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal delay={0.05}>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          <span className="text-fg-faint">/</span> {eyebrow}
        </p>
      </Reveal>
      <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-xs uppercase tracking-[0.3em] text-accent", className)}>
      <span className="text-fg-faint">/</span> {children}
    </p>
  );
}

interface TagProps {
  children: ReactNode;
  active?: boolean;
  className?: string;
}

export function Tag({ children, active, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs transition-colors duration-300",
        active
          ? "border-accent bg-accent/10 text-accent"
          : "border-strong text-fg-muted",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Divider({ className }: { className?: string }) {
  return <motion.div aria-hidden="true" className={cn("h-px w-full bg-strong", className)} />;
}
