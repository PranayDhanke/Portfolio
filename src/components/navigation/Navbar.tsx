"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { useTransition } from "@/components/providers/TransitionProvider";
import { TransitionLink } from "@/components/providers/TransitionLink";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();
  const { scrollTo } = useSmoothScroll();
  const { navigate } = useTransition();
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    const onScroll = () => {
      if (pathname !== "/") return;
      const sections = links
        .map((l) => document.querySelector(l.href))
        .filter(Boolean) as HTMLElement[];
      let current = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= 140) current = `#${el.id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const goTo = (href: string) => {
    setOpen(false);
    if (pathname === "/") {
      scrollTo(href);
    } else {
      navigate(`/${href}`);
    }
  };

  const isHome = pathname === "/";

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
        style={{ scaleX: scrollYProgress }}
      />

      <header className="fixed inset-x-0 top-0 z-[60]">
        <nav
          aria-label="Primary"
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-out-expo",
            scrolled ? "mt-3 max-w-xl rounded-full border bg-surface/80 px-4 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:mt-4" : "mt-0 max-w-none border-b border-transparent bg-transparent px-5 py-4 md:px-8 lg:px-10"
          )}
        >
          <TransitionLink
            href="/"
            className="flex items-center gap-3"
            aria-label={`${profile.name} — home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 font-display text-sm font-bold text-accent">
              {profile.initials[0]}
            </span>
            {!scrolled && (
              <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
                PRANAY&nbsp;DHANKE
              </span>
            )}
          </TransitionLink>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = isHome && active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => goTo(link.href)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full border border-strong bg-surface"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <TransitionLink
              href={profile.resumeHref}
              download={profile.resumeDownloadName}
              className="hidden rounded-full border border-strong px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:text-accent md:block"
              data-cursor
            >
              Resume
            </TransitionLink>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-strong text-fg md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[70] bg-bg/70 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[80] flex h-dvh w-72 flex-col border-l border-strong bg-surface p-6 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold">
                  {profile.name.toUpperCase()}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-strong"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-10 flex flex-1 flex-col gap-2">
                {links.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => goTo(link.href)}
                    className="group flex items-center gap-4 rounded-xl px-4 py-3 text-left"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <span className="font-mono text-xs text-fg-faint">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl font-medium transition-colors group-hover:text-accent">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                <TransitionLink
                  href={profile.resumeHref}
                  download={profile.resumeDownloadName}
                  className="rounded-full bg-fg px-6 py-3 text-center text-sm font-medium text-bg"
                >
                  Download Resume
                </TransitionLink>
                <p className="text-center font-mono text-xs text-fg-faint">
                  {profile.location} · {profile.timezone}
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
