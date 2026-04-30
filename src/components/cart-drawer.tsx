"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Ticket, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { cartTotals, useCartStore } from "@/store/cart-store";

function formatNpr(n: number) {
  return new Intl.NumberFormat("en-NP", { maximumFractionDigits: 0 }).format(n);
}

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const close = useCartStore((s) => s.close);
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const setQty = useCartStore((s) => s.setQty);
  const { subtotal, qty } = cartTotals(items);

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : close())}>
      <SheetContent
        side="right"
        className={cn(
          "p-0 w-[92vw] sm:w-[460px] border-white/10 bg-[color-mix(in_oklch,var(--surface),black_12%)]",
          "backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.55)]",
        )}
      >
        <SheetHeader className="px-5 pt-5 pb-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <SheetTitle className="text-lg tracking-tight">Your Cart</SheetTitle>
              <p className="text-sm text-muted-foreground">
                {qty ? `${qty} item${qty === 1 ? "" : "s"} • NPR ${formatNpr(subtotal)}` : "Add something viral."}
              </p>
            </div>
            <Link href="/checkout" onClick={() => close()} className="hidden sm:block">
              <Button className="rounded-full glow-border ring-glow">Checkout</Button>
            </Link>
          </div>
        </SheetHeader>

        <div className="px-5 pb-4">
          <div className="glow-border rounded-2xl p-3 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Ticket className="size-4 text-primary" />
              <span className="flex-1">Have a coupon?</span>
            </div>
            <div className="mt-2 flex gap-2">
              <Input
                placeholder="PRANISH10"
                className="h-10 rounded-xl bg-transparent border-white/10 focus-visible:ring-primary"
              />
              <Button variant="secondary" className="h-10 rounded-xl">
                Apply
              </Button>
            </div>
          </div>
        </div>

        <ScrollArea className="h-[calc(100dvh-310px)] px-5">
          <div className="space-y-3 pb-10">
            <AnimatePresence initial={false}>
              {items.map((it) => (
                <motion.div
                  key={`${it.id}::${it.variant ?? ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="glow-border rounded-2xl p-3 bg-white/[0.02]"
                >
                  <div className="flex gap-3">
                    <div className="relative size-16 shrink-0 rounded-xl overflow-hidden bg-black/30">
                      <Image src={it.image} alt={it.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="font-heading font-semibold leading-tight truncate">{it.name}</p>
                          {it.variant ? (
                            <p className="text-xs text-muted-foreground mt-0.5">Variant: {it.variant}</p>
                          ) : null}
                        </div>
                        <button
                          className="p-2 rounded-xl hover:bg-white/[0.05] transition-colors"
                          onClick={() => remove(it.id, it.variant)}
                          aria-label="Remove from cart"
                        >
                          <Trash2 className="size-4 text-muted-foreground" />
                        </button>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="font-semibold">NPR {formatNpr(it.price)}</p>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            className="rounded-xl hover:bg-white/[0.06]"
                            onClick={() => setQty(it.id, it.qty - 1, it.variant)}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-4" />
                          </Button>
                          <div className="min-w-8 text-center text-sm tabular-nums">{it.qty}</div>
                          <Button
                            variant="ghost"
                            size="icon-sm"
                            className="rounded-xl hover:bg-white/[0.06]"
                            onClick={() => setQty(it.id, it.qty + 1, it.variant)}
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!items.length ? (
              <div className="glow-border rounded-3xl p-6 bg-white/[0.02] text-center">
                <p className="font-heading text-xl font-semibold">Cart is empty</p>
                <p className="text-muted-foreground mt-1">Open TikTok, spot a vibe, then grab it here.</p>
                <Link href="/shop" onClick={() => close()}>
                  <Button className="mt-5 rounded-full glow-border ring-glow">Browse products</Button>
                </Link>
              </div>
            ) : null}
          </div>
        </ScrollArea>

        <div className="absolute bottom-0 inset-x-0 p-5 bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0))]">
          <div className="glow-border rounded-2xl p-4 bg-white/[0.03]">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span className="tabular-nums">NPR {formatNpr(subtotal)}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
              <span>Delivery</span>
              <span className="tabular-nums">Calculated at checkout</span>
            </div>
            <Link href="/checkout" onClick={() => close()} className="block mt-4">
              <Button className="w-full h-12 rounded-2xl glow-border ring-glow">
                Checkout • NPR {formatNpr(subtotal)}
              </Button>
            </Link>
            <p className="mt-2 text-xs text-muted-foreground text-center">
              COD available • eSewa & Khalti supported
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

