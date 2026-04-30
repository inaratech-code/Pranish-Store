"use client";

import { motion } from "framer-motion";

const points = [12, 18, 16, 26, 22, 34, 30, 44, 38, 52, 46, 62] as const;

function pathFrom(values: readonly number[], w: number, h: number) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const dx = w / (values.length - 1);
  const scale = (v: number) => {
    const t = (v - min) / (max - min || 1);
    return h - t * h;
  };
  return values
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * dx} ${scale(v)}`)
    .join(" ");
}

export function RevenueChart() {
  const w = 720;
  const h = 220;
  const d = pathFrom(points, w, h);

  return (
    <div className="glow-border rounded-[30px] bg-white/[0.03] p-5 sm:p-6 overflow-hidden">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-heading font-extrabold text-lg tracking-tight">Revenue analytics</p>
          <p className="text-xs text-muted-foreground mt-1">Last 12 days (placeholder series)</p>
        </div>
        <div className="text-xs text-muted-foreground">Sync: Supabase (next)</div>
      </div>

      <div className="mt-5 relative">
        <div className="absolute -inset-20 blur-[120px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--primary),transparent_60%),transparent_70%)] opacity-60" />
        <svg viewBox={`0 0 ${w} ${h}`} className="relative w-full h-[240px]">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgb(90,140,255)" stopOpacity="0.9" />
              <stop offset="0.5" stopColor="rgb(160,110,255)" stopOpacity="0.9" />
              <stop offset="1" stopColor="rgb(190,120,255)" stopOpacity="0.9" />
            </linearGradient>
            <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="rgb(120,90,255)" stopOpacity="0.30" />
              <stop offset="1" stopColor="rgb(0,0,0)" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path d={d} fill="none" stroke="url(#g)" strokeWidth="4" strokeLinecap="round" />
          <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill="url(#fill)" />

          {points.map((v, i) => {
            const x = (w / (points.length - 1)) * i;
            const max = Math.max(...points);
            const min = Math.min(...points);
            const y = h - ((v - min) / (max - min || 1)) * h;
            return <circle key={i} cx={x} cy={y} r="4.5" fill="rgba(255,255,255,0.65)" />;
          })}
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 grid grid-cols-3 gap-3"
        >
          {[
            { k: "AOV", v: "NPR 3,050" },
            { k: "Refund rate", v: "0.8%" },
            { k: "Repeat buyers", v: "21%" },
          ].map((x) => (
            <div key={x.k} className="glow-border rounded-2xl bg-white/[0.02] p-3">
              <p className="text-[11px] text-muted-foreground">{x.k}</p>
              <p className="font-semibold">{x.v}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

