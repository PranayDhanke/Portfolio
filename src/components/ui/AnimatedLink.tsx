"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  arrow?: boolean;
}

export function AnimatedLink({
  href,
  children,
  external = false,
  className,
  arrow = true,
}: AnimatedLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors duration-300 hover:text-accent",
        className
      )}
    >
      <span className="relative overflow-hidden">
        {children}
        <motion.span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full bg-accent"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          style={{ transformOrigin: "left" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        />
      </span>
      {arrow && (
        <ArrowUpRight
          className="h-3.5 w-3.5 text-fg-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
