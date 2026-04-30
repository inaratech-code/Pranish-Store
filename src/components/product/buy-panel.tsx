"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Minus, Plus, ShieldCheck, Truck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart-store";

function formatNpr(n: number) {
  return new Intl.NumberFormat("en-NP", { maximumFractionDigits: 0 }).format(n);
}

export function BuyPanel({ product }: { product: Product }) {
  const add = useCartStore((s) => s.add);
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState<string | undefined>(product.variants?.[0]?.value);
  const compare = product.compareAt ?? null;
  const savings = useMemo(() => {
    if (!compare) return null;
    const pct = Math.round(((compare - product.price) / compare) * 100);
    return pct > 0 ? pct : null;
  }, [compare, product.price]);

  return (
    <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-7">
      <div className="flex flex-wrap gap-2">
        {product.tags?.slice(0, 3).map((t) => (
          <Badge key={t} className="rounded-full bg-white/[0.06] border-white/10 text-foreground">
            {t}
          </Badge>
        ))}
        {savings ? (
          <Badge className="rounded-full bg-primary/15 text-primary border-white/10">Save {savings}%</Badge>
        ) : null}
      </div>

      <h1 className="mt-4 font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.05]">
        {product.name}
      </h1>
      <p className="text-muted-foreground mt-3">{product.short}</p>

      <div className="mt-5 flex items-end gap-3">
        <div className="text-3xl font-extrabold tabular-nums">NPR {formatNpr(product.price)}</div>
        {compare ? (
          <div className="text-sm text-muted-foreground line-through pb-1 tabular-nums">NPR {formatNpr(compare)}</div>
        ) : null}
      </div>

      {product.variants?.length ? (
        <div className="mt-6">
          <p className="text-sm font-semibold">Choose variant</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.variants.map((v) => {
              const active = v.value === variant;
              return (
                <button
                  key={v.value}
                  onClick={() => setVariant(v.value)}
                  type="button"
                  className={cn(
                    "px-4 py-2 rounded-2xl glow-border bg-white/[0.03] text-sm font-semibold transition-colors",
                    active ? "ring-2 ring-primary text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="glow-border rounded-2xl bg-white/[0.03] p-2 flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-xl hover:bg-white/[0.06]"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </Button>
          <div className="min-w-10 text-center tabular-nums font-semibold">{qty}</div>
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-xl hover:bg-white/[0.06]"
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {product.sold.toLocaleString()} sold • {product.rating.toFixed(1)}★ rating
        </p>
      </div>

      <motion.div whileTap={{ scale: 0.985 }} className="mt-6">
        <Button
          onClick={() =>
            add(
              {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0]!,
                variant,
              },
              qty,
            )
          }
          className="w-full h-12 sm:h-14 rounded-2xl glow-border ring-glow text-base"
        >
          <CheckCircle2 className="mr-2 size-5" />
          Add to cart
        </Button>
      </motion.div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        {[
          { Icon: Truck, t: "Fast delivery" },
          { Icon: Wallet, t: "COD/eSewa/Khalti" },
          { Icon: ShieldCheck, t: "Trusted seller" },
        ].map(({ Icon, t }) => (
          <div key={t} className="glow-border rounded-2xl bg-white/[0.03] p-3">
            <div className="flex items-center gap-2">
              <Icon className="size-4 text-primary" />
              <p className="text-xs font-semibold">{t}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

