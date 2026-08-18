"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useTransition } from "@/components/providers/TransitionProvider";

interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export function TransitionLink({
  href,
  children,
  onClick,
  download,
  ...rest
}: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    const modified =
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
    if (modified) return;
    if (download) return;

    if (href.startsWith("#") || href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={href} onClick={handleClick} download={download} {...rest}>
      {children}
    </a>
  );
}
