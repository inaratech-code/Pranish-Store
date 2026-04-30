"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

const easePremium = [0.16, 1, 0.3, 1] as const;

const fade: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: easePremium } },
};

export function HomeHero() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-18">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <motion.div initial="hidden" animate="show" variants={fade}>
              <Badge className="rounded-full px-4 py-1.5 bg-white/[0.06] border-white/10 text-foreground backdrop-blur-xl">
                <span className="mr-2">#1 Viral Store in Nepal</span>
                <span className="text-primary font-semibold">2026 Picks</span>
              </Badge>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 }}
              variants={fade}
              className="mt-6"
            >
              <h1 className="font-heading text-[40px] sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.045em] leading-[0.96]">
                Kathmandu’s{" "}
                <span className="block mt-2">
                  <span className="font-calligraphy text-primary font-normal text-[56px] sm:text-8xl lg:text-9xl leading-[0.72] inline-block">
                    Trusted
                  </span>{" "}
                  <span className="text-gradient">Trending Store</span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="show"
              transition={{ delay: 0.14 }}
              variants={fade}
              className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl"
            >
              Viral picks that feel premium in hand — priced clean, delivered fast, and backed by a checkout that builds
              trust in 5 seconds (the TikTok window).
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              transition={{ delay: 0.20 }}
              variants={fade}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Magnetic>
                <Link href="/shop">
                  <Button className="h-12 sm:h-14 px-7 sm:px-9 rounded-full glow-border ring-glow text-base">
                    Shop Now <ArrowRight className="ml-2 size-5" />
                  </Button>
                </Link>
              </Magnetic>
              <Magnetic strength={0.28}>
                <a
                  href="#"
                  className={cn(
                    "inline-flex items-center justify-center h-12 sm:h-14 px-7 sm:px-9 rounded-full",
                    "glow-border bg-white/[0.05] hover:bg-white/[0.08] transition-colors",
                  )}
                >
                  <MessageCircle className="mr-2 size-5 text-[#25D366]" />
                  <span className="font-semibold">Order on WhatsApp</span>
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              transition={{ delay: 0.26 }}
              variants={fade}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl"
            >
              {[
                { Icon: Truck, title: "Fast Delivery", sub: "1–2 days (KTM)" },
                { Icon: ShieldCheck, title: "Premium Quality", sub: "Curated, checked" },
                { Icon: Wallet, title: "COD Available", sub: "All over Nepal" },
              ].map(({ Icon, title, sub }) => (
                <div key={title} className="glow-border rounded-2xl bg-white/[0.03] p-3">
                  <div className="flex items-center gap-2">
                    <div className="size-9 rounded-2xl bg-white/[0.06] grid place-items-center">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight truncate">{title}</p>
                      <p className="text-xs text-muted-foreground">{sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D-ish product scene */}
          <div className="relative lg:justify-self-end w-full max-w-[560px] mx-auto">
            <div className="relative aspect-square">
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 grid place-items-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              >
                <div className="size-[92%] rounded-full ring-glow glow-border bg-white/[0.02]" />
              </motion.div>

              <motion.div
                className="absolute inset-0 grid place-items-center"
                initial={{ opacity: 0, scale: 0.92, rotateX: 10, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 1.1, ease: easePremium }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  animate={{ y: [0, -16, 0], rotateZ: [0, 1.5, 0] }}
                  transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative size-[78%]"
                  style={{ transform: "translateZ(24px)" }}
                >
                  <Image
                    src="/images/premium_headphones_1777455675754.png"
                    alt="Featured product"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_60px_120px_rgba(0,0,0,0.65)]"
                  />
                </motion.div>
              </motion.div>

              {/* Floating badges */}
              {[
                { x: "8%", y: "18%", title: "Premium Quality", sub: "100% genuine picks" },
                { x: "68%", y: "30%", title: "Fast Delivery", sub: "Across Nepal" },
                { x: "56%", y: "76%", title: "COD Available", sub: "Pay on delivery" },
              ].map((b, i) => (
                <motion.div
                  key={b.title}
                  className="absolute"
                  style={{ left: b.x, top: b.y }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
                >
                  <div className="glow-border rounded-2xl bg-white/[0.06] backdrop-blur-2xl px-4 py-3 shadow-float">
                    <p className="text-sm font-semibold">{b.title}</p>
                    <p className="text-xs text-muted-foreground">{b.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

