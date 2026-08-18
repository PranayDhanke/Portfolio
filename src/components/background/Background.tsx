"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GridBackdropProps {
  className?: string;
  intensity?: number;
}

export function GridBackdrop({ className, intensity = 1 }: GridBackdropProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [intensity, 0]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{ y, opacity }}
    >
      <div className="bg-grid bg-grid-fade absolute inset-0" />
    </motion.div>
  );
}

interface SpotlightProps {
  className?: string;
  size?: number;
}

export function Spotlight({ className, size = 600 }: SpotlightProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  if (reduce) return null;

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.background = `radial-gradient(${size}px circle at ${x}px ${y}px, var(--glow), transparent 65%)`;
  };

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100",
        className
      )}
      onMouseMove={onMouseMove}
    />
  );
}

export function FixedGlows() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-glow opacity-60 blur-[140px]" />
      <div className="absolute bottom-0 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-glow opacity-30 blur-[120px]" />
      <div className="absolute left-[-12rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-[var(--glow)] opacity-20 blur-[130px]" />
    </div>
  );
}
