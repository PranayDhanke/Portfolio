"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { n: "1", text: "package order", muted: true },
  { n: "2", text: "", empty: true },
  { n: "3", text: "func Saga(ctx context.Context) error {", keyword: true },
  { n: "4", text: "  // inventory.Reserve(ctx)", comment: true },
  { n: "5", text: "  // payment.Charge(ctx)", comment: true },
  { n: "6", text: "  // notify(ctx)", comment: true },
  { n: "7", text: "}", keyword: true },
  { n: "8", text: "", empty: true },
];

const peers = [
  { name: "anna", color: "#5b8cff" },
  { name: "devi", color: "#2fd0b8" },
  { name: "ken", color: "#8a7bff" },
];

export function EditorMock() {
  const [line, setLine] = useState(0);
  const [peer, setPeer] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLine((l) => (l >= codeLines.length ? 0 : l + 1));
    }, 900);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setPeer((p) => (p + 1) % peers.length), 2000);
    return () => clearInterval(t);
  }, []);

  const active = peers[peer];

  return (
    <div className="overflow-hidden rounded-2xl border border-strong bg-[#0a0a10] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="font-mono text-[10px] text-white/40">
          e-editor · room: saga-pattern · {peers.length} peers
        </p>
      </div>

      <div className="relative px-4 py-4 font-mono text-xs leading-relaxed">
        {codeLines.map((l, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-4 shrink-0 text-right text-white/20">{l.n}</span>
            <motion.span
              className={
                l.empty
                  ? "w-full"
                  : l.keyword
                    ? "text-[#8a7bff]"
                    : l.comment
                      ? "text-white/30"
                      : l.muted
                        ? "text-white/50"
                        : "text-[#e9ebf2]"
              }
              animate={{
                opacity: i <= line ? 1 : 0.15,
                filter: i <= line ? "blur(0px)" : "blur(2px)",
              }}
              transition={{ duration: 0.4 }}
            >
              {l.text}
            </motion.span>
          </div>
        ))}

        <motion.div
          className="mt-2 flex items-center gap-2"
          animate={{ opacity: line >= codeLines.length ? 1 : 0 }}
        >
          <span className="h-4 w-0.5 animate-blink bg-[#5b8cff]" />
          <span className="text-white/50">synchronized · zero conflicts</span>
        </motion.div>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
        <div className="flex -space-x-1.5">
          {peers.map((p) => (
            <span
              key={p.name}
              className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0a0a10] font-mono text-[8px] font-bold text-black"
              style={{ backgroundColor: p.color }}
            >
              {p.name[0]}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] text-white/40">
          <motion.span
            key={active.name}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: active.color }} />
            {active.name} is typing
          </motion.span>
          <span>latency 42ms</span>
        </div>
      </div>
    </div>
  );
}
