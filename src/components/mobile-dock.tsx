"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, Flame, User, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { cartTotals, useCartStore } from "@/store/cart-store";

const items = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/shop", label: "Shop", Icon: ShoppingBag },
  { href: "/trending", label: "Viral", Icon: Flame },
  { href: "/account", label: "You", Icon: User },
] as const;

export function MobileDock() {
  const pathname = usePathname();
  const open = useCartStore((s) => s.open);
  const qty = cartTotals(useCartStore((s) => s.items)).qty;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="mx-auto max-w-md px-4 pb-[max(12px,env(safe-area-inset-bottom))] pt-3">
        <div className="glow-border rounded-[26px] bg-white/[0.06] backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-5 items-center px-2 py-2">
            {items.map(({ href, label, Icon }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 py-2 rounded-2xl transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className={cn("size-5", active ? "text-primary" : "")} />
                  <span className="text-[11px] font-medium">{label}</span>
                </Link>
              );
            })}
            <button
              onClick={() => open()}
              className="relative flex flex-col items-center justify-center gap-1 py-2 rounded-2xl text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open cart"
            >
              <div className="relative">
                <ShoppingCart className="size-5" />
                {qty ? (
                  <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-primary text-white text-[11px] font-bold grid place-items-center ring-2 ring-black/40">
                    {qty > 9 ? "9+" : qty}
                  </span>
                ) : null}
              </div>
              <span className="text-[11px] font-medium">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

