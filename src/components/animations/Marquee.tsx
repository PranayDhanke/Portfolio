"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: ReactNode[];
  className?: string;
  reverse?: boolean;
  speed?: number;
  itemClassName?: string;
  separator?: ReactNode;
}

export function Marquee({
  items,
  className,
  reverse = false,
  speed = 30,
  itemClassName,
  separator = <span className="text-accent">●</span>,
}: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item, i) => (
        <div key={i} className={cn("flex items-center gap-8", itemClassName)}>
          {item}
          {separator}
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={cn("mask-fade-x flex w-full overflow-hidden", className)}
      style={
        {
          "--marquee-speed": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        )}
        style={{ animationDuration: `var(--marquee-speed)` }}
      >
        {row}
        {row}
      </div>
    </div>
  );
}
