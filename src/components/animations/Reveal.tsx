"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  once?: boolean;
  duration?: number;
  as?: "div" | "span" | "p" | "h2" | "h3" | "li";
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
  x = 0,
  blur = true,
  once = true,
  duration = 0.9,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const Comp = motion[as] as typeof motion.div;

  return (
    <Comp
      ref={ref}
      className={className}
      initial={
        reduce
          ? { opacity: 1 }
          : {
              opacity: 0,
              y,
              x,
              filter: blur ? "blur(10px)" : "blur(0px)",
            }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, y: 0, x: 0, filter: "blur(0px)" }
      }
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Comp>
  );
}

interface WordsProps {
  text: string;
  className?: string;
  as?: "div" | "span" | "p" | "h1" | "h2" | "h3";
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function WordsReveal({
  text,
  className,
  as = "span",
  delay = 0,
  stagger = 0.035,
  once = true,
}: WordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  const Comp = motion[as] as typeof motion.span;

  return (
    <Comp
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-top"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: reduce
                ? { opacity: 1 }
                : { y: "110%", opacity: 0.2 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = true,
  amount = 0.15,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function StaggerItem({ children, className, y = 28 }: StaggerItemProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce
          ? { opacity: 1 }
          : { opacity: 0, y, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
