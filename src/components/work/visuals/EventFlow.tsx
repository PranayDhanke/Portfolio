"use client";

import { motion } from "framer-motion";

const pulses = [
  { delay: 0, duration: 3, from: "order" },
  { delay: 0.6, duration: 3, from: "order" },
  { delay: 1.2, duration: 3, from: "order" },
];

const consumers = [
  { name: "inventory", color: "#2fd0b8", label: "row-lock stock" },
  { name: "payment", color: "#5b8cff", label: "idempotent" },
  { name: "notification", color: "#8a7bff", label: "saga confirm" },
];

export function EventFlow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-strong bg-[#0a0a10] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
          rabbitmq · topic exchange
        </p>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#28c840]" />
          healthy
        </span>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="w-full rounded-lg border border-[#5b8cff]/30 bg-[#5b8cff]/10 px-4 py-2.5 text-center font-mono text-xs text-[#5b8cff]">
          order.created
        </div>

        <div className="relative flex w-full items-center justify-center">
          <div className="h-px w-3/4 bg-gradient-to-r from-[#5b8cff]/60 to-[#8a7bff]/60" />
          {pulses.map((p, i) => (
            <motion.span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-[#5b8cff]"
              initial={{ left: "12%", opacity: 0 }}
              animate={{ left: "88%", opacity: [0, 1, 1, 0] }}
              transition={{ delay: p.delay, duration: p.duration, repeat: Infinity, ease: "linear" }}
            />
          ))}
          <span className="absolute z-10 rounded-md border border-[#8a7bff]/40 bg-[#0a0a10] px-3 py-1 font-mono text-[10px] text-[#8a7bff]">
            RabbitMQ
          </span>
        </div>

        <div className="grid w-full grid-cols-3 gap-2.5">
          {consumers.map((c, i) => (
            <motion.div
              key={c.name}
              className="rounded-lg border px-2 py-2.5 text-center"
              style={{ borderColor: `${c.color}40`, backgroundColor: `${c.color}14` }}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 3, delay: 0.8 + i * 0.5, repeat: Infinity }}
            >
              <p className="font-mono text-xs" style={{ color: c.color }}>
                {c.name}
              </p>
              <p className="mt-1 font-mono text-[9px] text-white/40">{c.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="font-mono text-[10px] text-white/30">
          saga · outbox · idempotent · dlq
        </p>
      </div>
    </div>
  );
}
