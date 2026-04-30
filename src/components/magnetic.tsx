"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mq = window.matchMedia("(pointer:fine)");
    if (!mq.matches) return;

    let raf: number | null = null;
    const state = { x: 0, y: 0, tx: 0, ty: 0 };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      state.tx = Math.max(-1, Math.min(1, px)) * strength;
      state.ty = Math.max(-1, Math.min(1, py)) * strength;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      state.tx = 0;
      state.ty = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      state.x += (state.tx - state.x) * 0.18;
      state.y += (state.ty - state.y) * 0.18;
      el.style.transform = `translate3d(${state.x * 18}px, ${state.y * 18}px, 0)`;
      if (Math.abs(state.tx - state.x) < 0.001 && Math.abs(state.ty - state.y) < 0.001) {
        raf = null;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

