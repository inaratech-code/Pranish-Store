"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const names = ["Aayush", "Sanjana", "Pratik", "Riya", "Sujan", "Nisha", "Bibek", "Aditi"] as const;
const places = ["Kathmandu", "Lalitpur", "Bhaktapur", "Pokhara", "Chitwan", "Butwal"] as const;
const products = ["Aura Pro ANC", "Titanium Watch S9", "SonicPods Wireless", "Aura Pro White"] as const;

function pick<T>(arr: readonly T[]) {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export function LivePopups() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(() => ({
    name: pick(names),
    place: pick(places),
    product: pick(products),
    img: `https://i.pravatar.cc/80?img=${10 + Math.floor(Math.random() * 30)}`,
  }));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const loop = () => {
      setMsg({
        name: pick(names),
        place: pick(places),
        product: pick(products),
        img: `https://i.pravatar.cc/80?img=${10 + Math.floor(Math.random() * 30)}`,
      });
      setOpen(true);
      const t1 = window.setTimeout(() => setOpen(false), 4200);
      const t2 = window.setTimeout(loop, 9500 + Math.random() * 7000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    };
    const stop = loop();
    return () => stop?.();
  }, []);

  return (
    <div className="fixed left-4 bottom-[92px] z-40 hidden lg:block pointer-events-none">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="glow-border rounded-2xl bg-white/[0.06] backdrop-blur-2xl shadow-float px-4 py-3 w-[320px]"
          >
            <div className="flex items-center gap-3">
              <div className="relative size-10 rounded-2xl overflow-hidden bg-black/30">
                <Image src={msg.img} alt="Customer avatar" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight">
                  {msg.name} purchased <span className="text-primary">{msg.product}</span>
                </p>
                <p className="text-xs text-muted-foreground">Just now • {msg.place}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

