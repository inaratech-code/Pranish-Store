"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ShoppingCart, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id?: string;
  slug?: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
}

export function ProductCard({ id, slug, name, price, originalPrice, image, badge, rating }: ProductCardProps) {
  const add = useCartStore((s) => s.add);
  const href = slug
    ? `/product/${encodeURIComponent(slug)}`
    : `/product/${encodeURIComponent(name.toLowerCase().replace(/\s+/g, "-"))}`;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] p-3 tilt-card",
        "bg-white/[0.03] backdrop-blur-2xl border border-white/10",
        "shadow-[0_30px_90px_rgba(0,0,0,0.45)]",
      )}
      onPointerMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rotY = (px - 0.5) * 10;
        const rotX = -(py - 0.5) * 8;
        el.style.setProperty("--tx", `${px * 100}%`);
        el.style.setProperty("--ty", `${py * 100}%`);
        el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
      }}
      onPointerLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
      }}
    >
      <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 blur-[90px] bg-[radial-gradient(circle_at_40%_40%,color-mix(in_oklch,var(--primary),transparent_65%),transparent_70%)]" />
      </div>

      <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden bg-black/25 mb-4">
        <div className="absolute inset-0 glow-border opacity-60" />

        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          {badge ? (
            <Badge className="bg-white/10 text-foreground border-white/15 backdrop-blur-xl shadow-float">
              {badge}
            </Badge>
          ) : null}
          {originalPrice ? (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-white/10">
              <Sparkles className="size-3 mr-1" />
              Deal
            </Badge>
          ) : null}
        </div>

        <button
          className="absolute top-3 right-3 z-10 p-2 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] transition-colors backdrop-blur-xl border border-white/10"
          aria-label="Add to wishlist"
          type="button"
        >
          <Heart className="size-4 text-foreground/80" />
        </button>

        <Link href={href}>
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-6 group-hover:scale-[1.06] transition-transform duration-500"
          />
        </Link>

        {/* Quick add (desktop hover) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 px-4">
          <Button
            onClick={() => add({ id: id ?? slug ?? name, name, price, image }, 1)}
            className="w-full rounded-2xl glow-border ring-glow h-11 gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Quick add
          </Button>
        </div>
      </div>

      <div className="px-2 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-semibold text-[15px] sm:text-base leading-tight line-clamp-2 group-hover:text-foreground transition-colors">
            {name}
          </h3>
          <div className="mt-1 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Star className="size-3.5 text-primary" />
              <span className="text-xs font-medium tabular-nums">{(rating ?? 4.8).toFixed(1)}</span>
              <span className="text-xs opacity-70">•</span>
              <span className="text-xs opacity-70">Hot</span>
            </div>
            <span className="text-xs text-muted-foreground">KTM fast</span>
          </div>
          <div className="flex items-center gap-2 mt-1 mb-3">
            <span className="font-bold text-lg tabular-nums">NPR {price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                NPR {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        
        {/* Mobile persistent button */}
        <Button
          onClick={() => add({ id: id ?? slug ?? name, name, price, image }, 1)}
          className="w-full rounded-2xl md:hidden bg-white/[0.06] hover:bg-white/[0.10] text-foreground gap-2 mb-1 glow-border"
          variant="secondary"
        >
          <ShoppingCart className="w-4 h-4" /> Add to cart
        </Button>
      </div>
    </motion.div>
  );
}
