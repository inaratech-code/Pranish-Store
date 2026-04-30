"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { ArrowUpRight, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";

function Stat({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  delta: string;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));

  useEffect(() => {
    const a = animate(mv, value, { duration: 0.9, ease: [0.16, 1, 0.3, 1] });
    return () => a.stop();
  }, [mv, value]);

  return (
    <div className="glow-border rounded-[26px] bg-white/[0.03] p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="size-10 rounded-2xl bg-white/[0.06] grid place-items-center ring-glow">
          <Icon className="size-5 text-primary" />
        </div>
        <div className="text-xs text-emerald-300 flex items-center gap-1">
          <ArrowUpRight className="size-3" />
          {delta}
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">{label}</p>
      <motion.p className="mt-1 font-heading text-2xl font-extrabold tabular-nums">
        {rounded}
      </motion.p>
    </div>
  );
}

export function AdminStats() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Stat icon={ShoppingCart} label="Orders (24h)" value={42} delta="+12%" />
      <Stat icon={TrendingUp} label="Revenue (24h)" value={128000} delta="+8.4%" />
      <Stat icon={Package} label="Pending shipments" value={9} delta="-3%" />
      <Stat icon={Users} label="New customers" value={17} delta="+4%" />
    </div>
  );
}

