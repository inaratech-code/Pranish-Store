"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
};

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  return reduced;
}

export function AmbientBackground({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const reducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.35, tx: 0.5, ty: 0.35 });
  const particles = useMemo<Particle[]>(() => {
    const count = Math.floor(56 * intensity);
    return Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      r: 0.6 + Math.random() * 1.9,
      a: 0.18 + Math.random() * 0.35,
    }));
  }, [intensity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (reducedMotion) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: PointerEvent) => {
      mouseRef.current.tx = e.clientX / window.innerWidth;
      mouseRef.current.ty = e.clientY / window.innerHeight;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const m = mouseRef.current;
      m.x += (m.tx - m.x) * 0.06;
      m.y += (m.ty - m.y) * 0.06;

      const parX = (m.x - 0.5) * 24;
      const parY = (m.y - 0.5) * 18;

      // starfield dust
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!;
        p.x += p.vx * 0.012;
        p.y += p.vy * 0.012;
        if (p.x < -0.05) p.x = 1.05;
        if (p.x > 1.05) p.x = -0.05;
        if (p.y < -0.05) p.y = 1.05;
        if (p.y > 1.05) p.y = -0.05;

        const x = p.x * w + parX * 0.25;
        const y = p.y * h + parY * 0.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(170,200,255,${p.a})`;
        ctx.arc(x, y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // subtle moving beams
      const t = performance.now() / 1000;
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 3; i++) {
        const phase = t * (0.12 + i * 0.03);
        const x0 = (0.1 + i * 0.34) * w + Math.sin(phase) * 80 + parX * 0.7;
        const y0 = (0.2 + i * 0.12) * h + Math.cos(phase * 1.1) * 60 + parY * 0.7;
        const grd = ctx.createRadialGradient(x0, y0, 0, x0, y0, Math.max(w, h) * 0.55);
        grd.addColorStop(0, "rgba(120, 90, 255, 0.10)");
        grd.addColorStop(0.35, "rgba(60, 140, 255, 0.06)");
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalCompositeOperation = "source-over";

      rafRef.current = window.requestAnimationFrame(draw);
    };

    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [particles, reducedMotion]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 -z-50 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-background" />

      {/* Mesh / orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[520px] rounded-full blur-[90px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--secondary),transparent_55%),transparent_70%)] opacity-70" />
        <div className="absolute top-[18%] -right-36 size-[660px] rounded-full blur-[110px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--primary),transparent_55%),transparent_70%)] opacity-70" />
        <div className="absolute bottom-[-18%] left-[22%] size-[720px] rounded-full blur-[130px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--secondary),transparent_60%),transparent_72%)] opacity-60" />
      </div>

      {/* Grid + fade */}
      <div className="absolute inset-0 bg-grid-premium opacity-[0.30] mask-fade-edges" />

      {/* Canvas particles & beams */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-85" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise opacity-[0.40] mix-blend-overlay" />

      {/* Depth vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_25%,transparent_45%,rgba(0,0,0,0.65)_100%)] dark:bg-[radial-gradient(90%_70%_at_50%_25%,transparent_40%,rgba(0,0,0,0.78)_100%)]" />
    </div>
  );
}

