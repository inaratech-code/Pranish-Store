"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Menu, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
          
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-foreground" />
            </button>
            <Link href="/" className="font-heading font-bold text-xl tracking-tight">
              PRANISH<span className="text-primary">.</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</Link>
            <Link href="/trending" className="text-sm font-medium hover:text-primary transition-colors">Trending</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-black/5 rounded-full transition-colors hidden sm:block">
              <Search className="w-5 h-5 text-foreground" />
            </button>
            <Button variant="default" className="rounded-full gap-2 bg-primary hover:bg-primary/90 text-white px-5 shadow-lg shadow-primary/20">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart (0)</span>
            </Button>
          </div>
          
        </div>
      </div>
    </motion.header>
  );
}
