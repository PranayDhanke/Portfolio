"use client";

import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";
import { SmoothScrollProvider } from "./SmoothScroll";
import { TransitionProvider } from "./TransitionProvider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SmoothScrollProvider>
        <TransitionProvider>{children}</TransitionProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
