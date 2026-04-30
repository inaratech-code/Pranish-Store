"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Menu, Search, User2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { cartTotals, useCartStore } from "@/store/cart-store";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const openCart = useCartStore((s) => s.open);
  const qty = cartTotals(useCartStore((s) => s.items)).qty;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "glow-border rounded-3xl px-4 sm:px-6 flex items-center justify-between transition-all duration-300",
            "bg-white/[0.06] backdrop-blur-2xl border-white/10",
            scrolled ? "py-2.5 shadow-[0_25px_90px_rgba(0,0,0,0.45)]" : "py-3.5",
          )}
        >
          <div className="flex items-center gap-3">
            <Sheet>
              <SheetTrigger className="md:hidden p-2 rounded-2xl hover:bg-white/[0.06] transition-colors">
                <Menu className="w-6 h-6 text-foreground" />
              </SheetTrigger>
              <SheetContent side="left" className="p-0 bg-[color-mix(in_oklch,var(--surface),black_10%)] border-white/10">
                <SheetHeader className="px-5 pt-6 pb-4">
                  <SheetTitle className="text-lg tracking-tight">Pranish Store</SheetTitle>
                  <p className="text-sm text-muted-foreground">Premium viral picks for Nepal.</p>
                </SheetHeader>
                <div className="px-5 pb-6 space-y-2">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/shop", label: "Shop" },
                    { href: "/trending", label: "Viral TikTok Picks" },
                    { href: "/about", label: "About Us" },
                    { href: "/admin", label: "Admin" },
                  ].map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block glow-border rounded-2xl px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                    >
                      <span className="font-heading font-semibold">{l.label}</span>
                    </Link>
                  ))}
                  <button
                    onClick={() => openCart()}
                    className="w-full glow-border rounded-2xl px-4 py-3 bg-white/[0.03] hover:bg-white/[0.06] transition-colors text-left"
                  >
                    <span className="font-heading font-semibold">Cart</span>
                    {qty ? <span className="ml-2 text-primary font-bold">({qty})</span> : null}
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="font-heading font-extrabold tracking-tight text-lg sm:text-xl">
              PRANISH<span className="text-gradient"> STORE</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/", label: "Home" },
              { href: "/shop", label: "Shop" },
              { href: "/trending", label: "Trending" },
              { href: "/about", label: "About" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 glow-border rounded-full px-3 h-10 bg-white/[0.03]">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products…"
                className="h-10 w-[260px] border-none bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <Link href="/account" className="hidden sm:block">
              <Button
                variant="ghost"
                className="rounded-full h-10 px-3 hover:bg-white/[0.06]"
                aria-label="Account"
              >
                <User2 className="w-5 h-5" />
              </Button>
            </Link>
            <Button
              onClick={() => openCart()}
              className="rounded-full gap-2 h-10 px-4 glow-border ring-glow"
            >
              <span className="relative">
                <ShoppingCart className="w-4 h-4" />
                {qty ? (
                  <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-primary text-white text-[11px] font-bold grid place-items-center animate-pulse">
                    {qty > 9 ? "9+" : qty}
                  </span>
                ) : null}
              </span>
              <span className="hidden sm:inline">Cart</span>
            </Button>
          </div>
          
        </div>
      </div>
    </motion.header>
  );
}
