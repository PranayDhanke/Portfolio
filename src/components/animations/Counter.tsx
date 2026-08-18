"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function Counter({ value, className, duration = 1600 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(value);

  const numeric = value.replace(/[^0-9.]/g, "");
  const suffix = value.replace(/[0-9.,]/g, "");

  useEffect(() => {
    if (!inView || numeric === "") return;
    const target = parseFloat(numeric);
    const isDecimal = numeric.includes(".");
    const start = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = target * eased;
      setDisplay(
        isDecimal
          ? current.toFixed(numeric.split(".")[1].length)
          : Math.round(current).toLocaleString("en-US")
      );
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
      {suffix}
    </span>
  );
}
