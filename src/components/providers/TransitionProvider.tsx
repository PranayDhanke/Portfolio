"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useSmoothScroll } from "./SmoothScroll";
import { profile } from "@/data/portfolio";

type Phase = "idle" | "exiting" | "entering";

interface TransitionContextValue {
  navigate: (href: string) => void;
  phase: Phase;
}

const TransitionContext = createContext<TransitionContextValue>({
  navigate: () => {},
  phase: "idle",
});

export const useTransition = () => useContext(TransitionContext);

const EXIT_MS = 700;
const ENTER_MS = 780;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const reduce = useReducedMotion();
  const { lenis, scrollTo } = useSmoothScroll();

  const [phase, setPhase] = useState<Phase>("entering");
  const pendingHref = useRef<string | null>(null);
  const pendingAnchor = useRef<string | null>(null);

  useEffect(() => {
    if (phase === "idle") lenis?.start();
    else lenis?.stop();
  }, [phase, lenis]);

  const navigate = (href: string) => {
    if (phase !== "idle") return;

    if (href.startsWith("#")) {
      if (pathname === "/") {
        scrollTo(href);
      } else {
        pendingAnchor.current = href;
        pendingHref.current = "/";
        setPhase("exiting");
      }
      return;
    }

    if (href.startsWith("/") && href.includes("#")) {
      const [route, anchor] = href.split("#");
      if (route === pathname) {
        scrollTo(`#${anchor}`);
        return;
      }
      pendingAnchor.current = `#${anchor}`;
      pendingHref.current = route || "/";
      setPhase("exiting");
      return;
    }

    if (href === pathname) {
      lenis?.scrollTo(0, { immediate: true });
      return;
    }

    pendingHref.current = href;
    setPhase("exiting");
  };

  useEffect(() => {
    if (phase !== "exiting") return;
    const t = setTimeout(() => {
      const href = pendingHref.current;
      if (href) router.push(href);
    }, EXIT_MS);
    return () => clearTimeout(t);
  }, [phase, router]);

  useEffect(() => {
    if (phase === "exiting") {
      setPhase("entering");
      lenis?.scrollTo(0, { immediate: true });
      const t = setTimeout(() => {
        setPhase("idle");
        pendingHref.current = null;
        const anchor = pendingAnchor.current;
        pendingAnchor.current = null;
        if (anchor) scrollTo(anchor);
      }, ENTER_MS);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const t = setTimeout(() => {
      setPhase((p) => (p === "entering" ? "idle" : p));
    }, ENTER_MS + 200);
    return () => clearTimeout(t);
  }, []);

  if (reduce) {
    return (
      <TransitionContext.Provider value={{ navigate, phase }}>
        {children}
      </TransitionContext.Provider>
    );
  }

  return (
    <TransitionContext.Provider value={{ navigate, phase }}>
      <motion.main
        className="relative z-[5]"
        animate={
          phase === "exiting"
            ? { filter: "blur(10px)", opacity: 0.35, scale: 0.985 }
            : { filter: "blur(0px)", opacity: 1, scale: 1 }
        }
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.main>

      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        initial={{ scaleY: 1 }}
        style={{ transformOrigin: phase === "exiting" ? "50% 100%" : "50% 0%" }}
        animate={phase === "exiting" ? "open" : "closed"}
        variants={{ open: { scaleY: 1 }, closed: { scaleY: 0 } }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          animate={{ opacity: phase === "exiting" ? 1 : 0.6, y: phase === "exiting" ? 0 : 10 }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-display text-2xl font-bold tracking-tight">
            {profile.initials}
          </span>
          <div className="glow-line h-px w-24" />
        </motion.div>
      </motion.div>
    </TransitionContext.Provider>
  );
}
