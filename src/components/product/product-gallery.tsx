"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const list = useMemo(() => images.filter(Boolean), [images]);
  const [active, setActive] = useState(0);

  return (
    <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-3">
      <div className="relative rounded-[28px] overflow-hidden bg-black/30 aspect-square">
        <AnimatePresence mode="wait">
          <motion.div
            key={list[active] ?? "img"}
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={list[active] ?? list[0] ?? "/images/premium_headphones_1777455675754.png"}
              alt={alt}
              fill
              priority
              className="object-contain p-10"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_45%,rgba(140,120,255,0.20),transparent_62%)]" />
      </div>

      <div className="mt-3 grid grid-cols-5 gap-2">
        {list.slice(0, 5).map((src, i) => (
          <button
            key={`${src}-${i}`}
            className={cn(
              "relative aspect-square rounded-2xl overflow-hidden bg-black/25 glow-border",
              i === active ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100",
            )}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            type="button"
          >
            <Image src={src} alt="" fill className="object-contain p-3" />
          </button>
        ))}
      </div>
    </div>
  );
}

