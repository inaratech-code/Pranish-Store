"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, MapPin, Phone, User2, Wallet } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { cartTotals, useCartStore } from "@/store/cart-store";

function formatNpr(n: number) {
  return new Intl.NumberFormat("en-NP", { maximumFractionDigits: 0 }).format(n);
}

const payments = [
  { value: "cod", label: "Cash on Delivery (COD)" },
  { value: "esewa", label: "eSewa" },
  { value: "khalti", label: "Khalti" },
] as const;

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const totals = cartTotals(items);

  const [payment, setPayment] = useState<(typeof payments)[number]["value"]>("cod");
  const [submitted, setSubmitted] = useState(false);

  const disabled = useMemo(() => !items.length, [items.length]);

  if (submitted) {
    return (
      <SiteShell>
        <section className="pt-28 sm:pt-32 pb-18">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-10 text-center">
              <div className="mx-auto size-14 rounded-[22px] bg-white/[0.06] grid place-items-center ring-glow">
                <CheckCircle2 className="size-7 text-primary" />
              </div>
              <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight">Order placed</h1>
              <p className="text-muted-foreground mt-2">
                We’ll call to confirm and dispatch fast. Thanks for shopping premium.
              </p>
              <Button className="mt-7 rounded-full glow-border ring-glow" onClick={() => (location.href = "/")}>
                Back to home
              </Button>
            </div>
          </div>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <section className="pt-28 sm:pt-32 pb-18">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8">
                <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">Checkout</h1>
                <p className="text-muted-foreground mt-2">High-conversion flow for Nepal payments.</p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User2 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input className="h-12 pl-10 rounded-2xl bg-white/[0.03] border-white/10" placeholder="Full name" />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input className="h-12 pl-10 rounded-2xl bg-white/[0.03] border-white/10" placeholder="Phone number" />
                  </div>
                  <div className="relative sm:col-span-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input className="h-12 pl-10 rounded-2xl bg-white/[0.03] border-white/10" placeholder="Address" />
                  </div>
                  <Input className="h-12 rounded-2xl bg-white/[0.03] border-white/10" placeholder="City (e.g., Kathmandu)" />
                  <Input className="h-12 rounded-2xl bg-white/[0.03] border-white/10" placeholder="Area / Landmark (optional)" />
                </div>

                <div className="mt-7">
                  <div className="flex items-center gap-2">
                    <Wallet className="size-4 text-primary" />
                    <p className="text-sm font-semibold">Payment</p>
                  </div>
                  <div className="mt-3 grid gap-2">
                    {payments.map((p) => {
                      const active = payment === p.value;
                      return (
                        <button
                          key={p.value}
                          type="button"
                          onClick={() => setPayment(p.value)}
                          className={cn(
                            "glow-border rounded-2xl px-4 py-3 text-left bg-white/[0.03] transition-colors",
                            active ? "ring-2 ring-primary" : "hover:bg-white/[0.06]",
                          )}
                        >
                          <p className="font-semibold">{p.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {p.value === "cod"
                              ? "Pay when you receive the package."
                              : "We’ll share a payment link after confirmation."}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Button
                  disabled={disabled}
                  className="mt-7 w-full h-12 sm:h-14 rounded-2xl glow-border ring-glow text-base"
                  onClick={() => {
                    setSubmitted(true);
                    clear();
                  }}
                >
                  Place order • NPR {formatNpr(totals.subtotal)}
                </Button>
                {disabled ? <p className="text-xs text-muted-foreground mt-2">Add items to cart to checkout.</p> : null}
              </div>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-7">
                <h2 className="font-heading text-xl font-extrabold tracking-tight">Order summary</h2>
                <div className="mt-4 space-y-3">
                  {items.map((it) => (
                    <div key={`${it.id}::${it.variant ?? ""}`} className="glow-border rounded-2xl bg-white/[0.03] p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-semibold leading-tight">{it.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {it.variant ? `${it.variant} • ` : ""}Qty {it.qty}
                          </p>
                        </div>
                        <p className="font-semibold tabular-nums">NPR {formatNpr(it.price * it.qty)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 glow-border rounded-2xl bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="tabular-nums">NPR {formatNpr(totals.subtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                    <span>Delivery</span>
                    <span>Calculated</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="font-semibold">Total</span>
                    <span className="font-extrabold tabular-nums">NPR {formatNpr(totals.subtotal)}</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  By placing an order, you agree to our shipping & return policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

