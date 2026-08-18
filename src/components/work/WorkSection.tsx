"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Eyebrow, Section } from "@/components/ui/Section";
import { ProjectFeature } from "./ProjectFeature";
import { EditorMock } from "./visuals/EditorMock";
import { EventFlow } from "./visuals/EventFlow";
import { caseStudies, secondaryBuilds, agriwasteImage } from "@/data/projects";

function AgriWasteVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-strong bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
      <div className="flex items-center justify-between border-b border-strong px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[10px] text-fg-faint">
          <span className="rounded-full border border-strong px-2 py-0.5">EN</span>
          <span className="rounded-full border border-strong px-2 py-0.5">हिं</span>
          <span className="rounded-full border border-strong px-2 py-0.5">मरा</span>
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={agriwasteImage}
          alt="Smart-AgriWaste platform interface"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a10] via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[10px] text-white/70">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          PWA · offline ready
        </div>
      </div>
    </div>
  );
}

export function WorkSection() {
  const featured = caseStudies.filter((c) => c.slug === "e-editor" || c.slug === "agriwaste" || c.slug === "order-management");

  return (
    <Section id="work" label="Selected work" className="py-28 md:py-40">
      <div className="container-x">
        <Eyebrow>05 — Selected work</Eyebrow>
        <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Systems I&apos;ve built,{" "}
          <span className="text-gradient-accent">measured,</span> and{" "}
          <span className="text-gradient-accent">hardened.</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
          Three deep-dive case studies. Each one was load-tested, its failures
          examined, and its architecture iterated — not just shipped.
        </p>

        <div className="mt-24 space-y-28 md:space-y-40">
          <ProjectFeature
            project={featured[0]}
            index="01"
            visual={<EditorMock />}
          />
          <ProjectFeature
            project={featured[1]}
            index="02"
            visual={<AgriWasteVisual />}
            reversed
          />
          <ProjectFeature
            project={featured[2]}
            index="03"
            visual={<EventFlow />}
          />
        </div>

        <div className="mt-28 border-t border-strong pt-14 md:mt-40">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted">
                Other builds
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Smaller systems, same rigor.
              </h3>
            </div>
          </div>

          <div className="divide-y divide-strong border-b border-strong">
            {secondaryBuilds.map((b, i) => (
              <div
                key={b.id}
                className="group grid items-center gap-4 py-6 transition-colors duration-300 hover:bg-surface md:grid-cols-[3rem_1fr_auto] md:gap-8 md:px-4"
              >
                <span className="hidden font-mono text-xs text-fg-faint md:block">
                  0{i + 1}
                </span>
                <div className="flex items-center gap-4">
                  {b.image && (
                    <div className="relative hidden h-14 w-20 shrink-0 overflow-hidden rounded-md border border-strong sm:block">
                      <Image
                        src={b.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-display text-lg font-medium transition-colors duration-300 group-hover:text-accent md:text-xl">
                        {b.title}
                      </h4>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
                        {b.year} · {b.type}
                      </span>
                    </div>
                    <p className="mt-1 max-w-2xl text-sm text-fg-muted">{b.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:justify-end">
                  {b.link && (
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live site: ${b.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-strong text-fg-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                      data-cursor
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {b.codeLink && (
                    <a
                      href={b.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open source: ${b.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-strong text-fg-muted transition-colors duration-300 hover:border-accent hover:text-accent"
                      data-cursor
                    >
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
