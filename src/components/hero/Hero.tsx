"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/animations/Marquee";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { profile } from "@/data/portfolio";

const nameLines = ["PRANAY", "DHANKE"];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollTo } = useSmoothScroll();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridX = useSpring(mouseX, { stiffness: 60, damping: 25 });
  const gridY = useSpring(mouseY, { stiffness: 60, damping: 25 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentBlur = useTransform(scrollYProgress, [0, 0.8], [0, reduce ? 0 : 10]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.92]);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(px);
    mouseY.set(py);
  };

  const gridTranslateX = useTransform(gridX, [-0.5, 0.5], [20, -20]);
  const gridTranslateY = useTransform(gridY, [-0.5, 0.5], [14, -14]);
  const gridScale = useTransform(gridX, [-0.5, 0.5], [1.08, 0.94]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col overflow-hidden"
      onMouseMove={onMouseMove}
    >
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-[-5%] bg-grid"
        style={{ x: gridTranslateX, y: gridTranslateY, scale: gridScale, opacity: 0.5 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[38%] h-[36rem] w-[52rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow blur-[160px]"
      />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-start justify-center px-5 sm:px-8 lg:px-10"
        style={{
          y: contentY,
          opacity: contentOpacity,
          filter: contentBlur as unknown as string,
          scale: contentScale,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-3 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-3" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-fg-muted">
            {profile.role} · {profile.location}
          </span>
        </motion.div>

        <h1
          className="font-display text-[clamp(3.5rem,11vw,10rem)] font-bold leading-[0.9] tracking-tight"
          aria-label={profile.name}
        >
          {nameLines.map((line, li) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className="block will-change-transform"
                initial={reduce ? { opacity: 1 } : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.25 + li * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className={li === 1 ? "text-gradient block" : "block"}>
                  {line}
                </span>
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 grid w-full max-w-3xl gap-10 lg:grid-cols-[1fr_auto]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="max-w-xl text-balance font-mono text-sm leading-relaxed text-fg-muted md:text-base">
              <span className="text-accent">{"//"}</span> {profile.positioning}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button onClick={() => scrollTo("#work")} arrow>
                View my work
              </Button>
              <Button variant="outline" href={profile.resumeHref} download={profile.resumeDownloadName}>
                Resume
              </Button>
            </div>
          </div>

          <div className="hidden flex-col items-end justify-end gap-4 lg:flex">
            <p className="font-mono text-xs text-fg-faint">{profile.email}</p>
            <div className="h-px w-32 glow-line" />
            <p className="font-mono text-xs text-fg-faint">systems &gt; screens</p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 border-t border-strong/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
      >
        <Marquee
          speed={26}
          items={profile.heroStack.map((tech) => (
            <span
              key={tech}
              className="font-display text-sm font-medium uppercase tracking-[0.2em] text-fg-muted"
            >
              {tech}
            </span>
          ))}
        />
      </motion.div>

      <motion.button
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to about"
        className="absolute bottom-24 right-5 z-10 hidden flex-col items-center gap-2 text-fg-faint transition-colors hover:text-accent md:flex lg:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          scroll
        </span>
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
      </motion.button>
    </section>
  );
}
