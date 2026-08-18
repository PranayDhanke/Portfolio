"use client";

import { ArrowUp } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";
import { TransitionLink } from "@/components/providers/TransitionLink";

export function Footer() {
  const { lenis } = useSmoothScroll();
  const year = new Date().getFullYear();

  const scrollTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-strong">
      <div className="container-x py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          <TransitionLink
            href="/"
            className="font-display text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-accent md:text-3xl"
          >
            {profile.name.toUpperCase()}
          </TransitionLink>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-faint">
            Backend · Distributed Systems · Real-Time Systems
          </p>

          <div className="flex gap-5">
            {socials.slice(0, 4).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="font-mono text-xs text-fg-muted transition-colors duration-300 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-strong pt-8 md:flex-row">
          <p className="font-mono text-xs text-fg-faint">
            © {year} {profile.name}. Built as a system.
          </p>

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-full border border-strong px-4 py-2 font-mono text-xs text-fg-muted transition-all duration-300 hover:border-accent hover:text-accent"
            data-cursor
          >
            BACK TO TOP
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}