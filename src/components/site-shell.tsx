"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CartDrawer } from "@/components/cart-drawer";
import { MobileDock } from "@/components/mobile-dock";

export function SiteShell({
  children,
  footer = true,
  dock = true,
}: {
  children: React.ReactNode;
  footer?: boolean;
  dock?: boolean;
}) {
  return (
    <div className="min-h-dvh relative">
      <Navbar />
      <CartDrawer />
      <main className="relative z-10 pb-[calc(110px+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>
      {footer ? <Footer /> : null}
      {dock ? <MobileDock /> : null}
    </div>
  );
}

