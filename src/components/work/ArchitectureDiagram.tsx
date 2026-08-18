"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { ArchitectureNode } from "@/data/projects";

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  edges: { from: string; to: string; label?: string }[];
}

const kindStyles: Record<ArchitectureNode["kind"], { color: string; bg: string; label: string }> = {
  client: { color: "#5b8cff", bg: "rgba(91,140,255,0.12)", label: "client" },
  gateway: { color: "#8a7bff", bg: "rgba(138,123,255,0.12)", label: "gateway" },
  runtime: { color: "#2fd0b8", bg: "rgba(47,208,184,0.12)", label: "runtime" },
  queue: { color: "#f6ad55", bg: "rgba(246,173,85,0.12)", label: "queue" },
  store: { color: "#ff6b8b", bg: "rgba(255,107,139,0.12)", label: "store" },
  worker: { color: "#ffa25b", bg: "rgba(255,162,91,0.12)", label: "worker" },
  infra: { color: "#7dd3fc", bg: "rgba(125,211,252,0.12)", label: "infra" },
};

interface Edge {
  from: string;
  to: string;
  label?: string;
  path: string;
  fromPoint: { x: number; y: number };
  toPoint: { x: number; y: number };
}

export function ArchitectureDiagram({ nodes, edges }: ArchitectureDiagramProps) {
  const [active, setActive] = useState<string | null>(nodes[0]?.id ?? null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLElement>>(new Map());
  const [edgePaths, setEdgePaths] = useState<Edge[]>([]);
  const [box, setBox] = useState({ w: 0, h: 0 });

  const computeLevels = useCallback(() => {
    const incoming = new Map<string, number>();
    nodes.forEach((n) => incoming.set(n.id, 0));
    edges.forEach((e) => incoming.set(e.to, (incoming.get(e.to) ?? 0) + 1));

    const level = new Map<string, number>();
    const queue: string[] = nodes.filter((n) => (incoming.get(n.id) ?? 0) === 0).map((n) => n.id);
    if (queue.length === 0 && nodes.length > 0) queue.push(nodes[0].id);
    queue.forEach((id) => level.set(id, 0));

    while (queue.length) {
      const id = queue.shift()!;
      const lvl = level.get(id) ?? 0;
      edges
        .filter((e) => e.from === id)
        .forEach((e) => {
          const next = level.get(e.to);
          if (next === undefined || next <= lvl) {
            level.set(e.to, lvl + 1);
            queue.push(e.to);
          }
        });
    }

    const byLevel = new Map<number, ArchitectureNode[]>();
    nodes.forEach((n) => {
      const l = level.get(n.id) ?? 0;
      if (!byLevel.has(l)) byLevel.set(l, []);
      byLevel.get(l)!.push(n);
    });
    return byLevel;
  }, [nodes, edges]);

  useLayoutEffect(() => {
    const byLevel = computeLevels();
    const render = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const cRect = container.getBoundingClientRect();
      const list: Edge[] = [];

      edges.forEach((e) => {
        const fromEl = nodeRefs.current.get(e.from);
        const toEl = nodeRefs.current.get(e.to);
        if (!fromEl || !toEl) return;

        const f = fromEl.getBoundingClientRect();
        const t = toEl.getBoundingClientRect();
        const fromLevel = [...byLevel.entries()].find(([, arr]) => arr.some((n) => n.id === e.from))?.[0] ?? 0;
        const toLevel = [...byLevel.entries()].find(([, arr]) => arr.some((n) => n.id === e.to))?.[0] ?? 0;

        const fCenter = { x: f.left - cRect.left + f.width / 2, y: f.top - cRect.top + f.height / 2 };
        const tCenter = { x: t.left - cRect.left + t.width / 2, y: t.top - cRect.top + t.height / 2 };

        let fromPoint = fCenter;
        let toPoint = tCenter;
        let path: string;

        if ((fromLevel ?? 0) < (toLevel ?? 0)) {
          fromPoint = { x: f.left - cRect.left + f.width, y: fCenter.y };
          toPoint = { x: t.left - cRect.left, y: tCenter.y };
          const dx = Math.max(30, (toPoint.x - fromPoint.x) * 0.5);
          path = `M ${fromPoint.x} ${fromPoint.y} C ${fromPoint.x + dx} ${fromPoint.y}, ${toPoint.x - dx} ${toPoint.y}, ${toPoint.x} ${toPoint.y}`;
        } else if ((fromLevel ?? 0) > (toLevel ?? 0)) {
          fromPoint = { x: f.left - cRect.left, y: fCenter.y };
          toPoint = { x: t.left - cRect.left + t.width, y: tCenter.y };
          const dx = Math.max(30, (fromPoint.x - toPoint.x) * 0.5);
          path = `M ${fromPoint.x} ${fromPoint.y} C ${fromPoint.x - dx} ${fromPoint.y}, ${toPoint.x + dx} ${toPoint.y}, ${toPoint.x} ${toPoint.y}`;
        } else {
          const below = fCenter.y < tCenter.y;
          fromPoint = { x: fCenter.x, y: below ? f.top - cRect.top : f.bottom - cRect.top };
          toPoint = { x: tCenter.x, y: below ? t.bottom - cRect.top : t.top - cRect.top };
          const dy = 28;
          path = `M ${fromPoint.x} ${fromPoint.y} C ${fromPoint.x} ${fromPoint.y - dy}, ${toPoint.x} ${toPoint.y + dy}, ${toPoint.x} ${toPoint.y}`;
        }

        list.push({ from: e.from, to: e.to, label: e.label, path, fromPoint, toPoint });
      });

      setEdgePaths(list);
      setBox({ w: container.scrollWidth, h: container.scrollHeight });
    };

    render();
    const ro = new ResizeObserver(render);
    if (containerRef.current) ro.observe(containerRef.current);
    nodeRefs.current.forEach((el) => ro.observe(el));
    window.addEventListener("resize", render);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", render);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges]);

  const byLevel = computeLevels();
  const activeNode = nodes.find((n) => n.id === active);

  return (
    <div className="space-y-8">
      <div className="overflow-x-auto pb-2" data-lenis-prevent>
        <div className="relative min-w-[720px]">
          <div ref={containerRef} className="relative">
            <div className="grid auto-cols-fr grid-flow-col items-center gap-4 md:gap-6">
              {[...byLevel.entries()].map(([level, levelNodes]) => (
                <div key={level} className="flex flex-col gap-4 md:gap-5">
                  {levelNodes.map((node) => {
                    const s = kindStyles[node.kind];
                    const isActive = active === node.id;
                    return (
                      <button
                        key={node.id}
                        ref={(el) => {
                          if (el) nodeRefs.current.set(node.id, el);
                          else nodeRefs.current.delete(node.id);
                        }}
                        onClick={() => setActive(node.id)}
                        onMouseEnter={() => setActive(node.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "group w-full rounded-xl border p-3.5 text-left transition-all duration-300 md:p-4",
                          isActive
                            ? "scale-[1.03] border-transparent shadow-[0_0_0_1px] "
                            : "border-strong bg-surface hover:scale-[1.02]"
                        )}
                        style={
                          isActive
                            ? { borderColor: s.color, boxShadow: `0 0 24px ${s.color}33`, backgroundColor: s.bg }
                            : { backgroundColor: s.bg }
                        }
                        data-cursor
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: s.color }}>
                            {s.label}
                          </span>
                          <span
                            className={cn("h-1.5 w-1.5 rounded-full transition-opacity", isActive ? "opacity-100" : "opacity-30")}
                            style={{ backgroundColor: s.color }}
                          />
                        </div>
                        <p className="mt-1.5 font-display text-sm font-semibold text-fg md:text-base">
                          {node.label}
                        </p>
                        <p className="mt-0.5 truncate font-mono text-[10px] text-fg-faint">
                          {node.caption}
                        </p>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>

            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              style={{ width: box.w, height: box.h }}
            >
              {edgePaths.map((e, i) => {
                const isHot = active === e.from || active === e.to;
                return (
                  <g key={i}>
                    <path
                      d={e.path}
                      fill="none"
                      className="transition-all duration-500"
                      stroke={isHot ? "var(--accent)" : "rgba(148,153,171,0.35)"}
                      strokeWidth={isHot ? 2 : 1.25}
                      strokeDasharray={isHot ? "none" : "4 4"}
                    />
                    {isHot && (
                      <circle r="2.5" fill="var(--accent)">
                        <animateMotion dur="1.6s" repeatCount="indefinite" path={e.path} />
                      </circle>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      <div
        aria-live="polite"
        className="min-h-[9rem] rounded-2xl border border-strong bg-surface p-6 md:p-8"
      >
        {activeNode ? (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: kindStyles[activeNode.kind].color, backgroundColor: kindStyles[activeNode.kind].bg }}
              >
                {activeNode.label}
              </span>
              <h4 className="font-display text-xl font-semibold md:text-2xl">{activeNode.label}</h4>
            </div>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              <p className="text-sm text-fg-muted">
                <span className="font-mono text-xs text-fg-faint">why · </span>
                {activeNode.why}
              </p>
              <p className="text-sm text-fg-muted">
                <span className="font-mono text-xs text-fg-faint">detail · </span>
                {activeNode.detail}
              </p>
            </div>
          </motion.div>
        ) : (
          <p className="font-mono text-sm text-fg-faint">Hover a component to inspect it.</p>
        )}
      </div>
    </div>
  );
}
