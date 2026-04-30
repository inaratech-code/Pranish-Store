"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Boxes, CreditCard, Megaphone, Package, Settings, Ticket, Users } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/admin", label: "Dashboard", Icon: BarChart3 },
  { href: "/admin/orders", label: "Orders", Icon: Package },
  { href: "/admin/products", label: "Products", Icon: Boxes },
  { href: "/admin/customers", label: "Customers", Icon: Users },
  { href: "/admin/banners", label: "Banners", Icon: Megaphone },
  { href: "/admin/coupons", label: "Coupons", Icon: Ticket },
  { href: "/admin/payments", label: "Payments", Icon: CreditCard },
  { href: "/admin/settings", label: "Settings", Icon: Settings },
] as const;

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-dvh relative z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          <aside className="lg:col-span-3 lg:sticky lg:top-6">
            <div className="glow-border rounded-[30px] bg-white/[0.04] backdrop-blur-2xl p-4">
              <Link href="/" className="block px-3 py-3 rounded-2xl hover:bg-white/[0.05] transition-colors">
                <p className="font-heading font-extrabold tracking-tight">
                  PRANISH <span className="text-gradient">ADMIN</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">Premium dashboard</p>
              </Link>

              <nav className="mt-3 grid gap-1">
                {nav.map(({ href, label, Icon }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-colors",
                        active ? "bg-white/[0.07] glow-border ring-glow" : "hover:bg-white/[0.05] text-muted-foreground",
                      )}
                    >
                      <Icon className={cn("size-4", active ? "text-primary" : "")} />
                      <span className={cn("text-sm font-semibold", active ? "text-foreground" : "")}>{label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 glow-border rounded-2xl bg-white/[0.03] p-4">
                <p className="text-sm font-semibold">Today’s pulse</p>
                <p className="text-xs text-muted-foreground mt-1">Orders + conversion snapshot.</p>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { k: "Orders", v: "42" },
                    { k: "Revenue", v: "NPR 1.2L" },
                    { k: "Conv.", v: "6.8%" },
                  ].map((x) => (
                    <div key={x.k} className="rounded-2xl bg-white/[0.04] border border-white/10 p-2">
                      <p className="text-[11px] text-muted-foreground">{x.k}</p>
                      <p className="text-sm font-extrabold tabular-nums">{x.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8"
            >
              {children}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

