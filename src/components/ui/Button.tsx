"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animations/Magnetic";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
  disabled?: boolean;
  download?: string;
}

export function Button({
  children,
  href,
  className,
  variant = "primary",
  size = "md",
  arrow = false,
  onClick,
  external = false,
  type = "button",
  ariaLabel,
  disabled = false,
  download,
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-medium transition-colors duration-300 will-change-transform";
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm md:text-base",
  };
  const variants = {
    primary: "bg-fg text-bg hover:text-bg",
    outline: "border border-strong text-fg hover:border-accent",
    ghost: "text-fg-muted hover:text-fg",
  };

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 translate-y-full rounded-full transition-transform duration-300 ease-out-expo group-hover:translate-y-0",
          variant === "primary" && "bg-accent",
          variant === "outline" && "bg-accent/10"
        )}
      />
    </>
  );

  const cls = cn(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <Magnetic strength={0.25}>
        <a
          href={href}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={download}
          aria-disabled={disabled}
          className={cn(cls, disabled && "pointer-events-none opacity-60")}
          aria-label={ariaLabel}
          data-cursor
        >
          {inner}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.25}>
      <motion.button
        type={type}
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
        disabled={disabled}
        className={cn(cls, disabled && "cursor-not-allowed opacity-60")}
        aria-label={ariaLabel}
        data-cursor
      >
        {inner}
      </motion.button>
    </Magnetic>
  );
}
