"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor], summary";

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "hover" | "label">("default");
  const [label, setLabel] = useState("");

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const springX = useSpring(mx, { stiffness: 400, damping: 35, mass: 0.6 });
  const springY = useSpring(my, { stiffness: 400, damping: 35, mass: 0.6 });
  const ringX = useSpring(mx, { stiffness: 160, damping: 20, mass: 0.5 });
  const ringY = useSpring(my, { stiffness: 160, damping: 20, mass: 0.5 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const noTouch = !navigator.maxTouchPoints || navigator.maxTouchPoints <= 0;
    if (!fine || !noTouch || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest?.(INTERACTIVE_SELECTOR);
      if (interactive) {
        const custom = (interactive as HTMLElement).dataset.cursorLabel;
        if (custom) {
          setLabel(custom);
          setVariant("label");
        } else {
          setVariant("hover");
        }
      } else {
        setVariant("default");
      }
    };

    const onLeave = () => {
      mx.set(-100);
      my.set(-100);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [mx, my, reduce]);

  if (!enabled) return null;

  const labelActive = variant === "label";

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] hidden items-center justify-center md:flex"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-full border"
          animate={{
            scale: labelActive ? 1 : variant === "hover" ? 1.6 : 0.6,
            opacity: variant === "default" ? 0.35 : 1,
            backgroundColor: labelActive ? "var(--accent)" : "rgba(255,255,255,0)",
            borderColor: "var(--accent)",
            color: "#fff",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ display: labelActive ? "block" : "none" }}
          >
            {label}
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-accent"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: variant === "hover" || labelActive ? 0 : 1, opacity: 0.9 }}
      />
    </>
  );
}
