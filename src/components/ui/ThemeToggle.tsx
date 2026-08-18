"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-strong text-fg-muted transition-colors duration-300 hover:border-accent hover:text-accent"
      data-cursor
    >
      {mounted && (
        <span className="relative block h-4 w-4">
          <span
            className={`absolute inset-0 transition-all duration-500 ease-out-expo ${
              isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
            }`}
          >
            <Moon className="h-4 w-4" />
          </span>
          <span
            className={`absolute inset-0 transition-all duration-500 ease-out-expo ${
              isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
          >
            <Sun className="h-4 w-4" />
          </span>
        </span>
      )}
    </button>
  );
}
