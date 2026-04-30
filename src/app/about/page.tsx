"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="pt-28 sm:pt-32 pb-18">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10 sm:mb-14"
          >
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight">
              Our <span className="font-calligraphy text-primary font-normal">Story</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Pranish Store is built for modern Nepal shoppers who want premium products without the guessing game.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-3">
                <div className="relative h-[380px] rounded-[28px] overflow-hidden bg-black/30">
                  <Image
                    src="/images/premium_earbuds_1777456997180.png"
                    alt="About Pranish Store"
                    fill
                    className="object-contain p-10"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
            >
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                Quality feels obvious.
              </h3>
              <p className="text-muted-foreground mt-4 text-base sm:text-lg">
                We curate products that look premium, feel premium, and arrive fast. Pricing is transparent, support is
                human, and COD stays available because that’s how Nepal shops.
              </p>
              <div className="mt-6 grid gap-3">
                {[
                  { title: "Rigorous selection", sub: "We reject products that don’t feel expensive." },
                  { title: "Fast dispatch", sub: "Optimized operations for TikTok traffic spikes." },
                  { title: "Trust-first checkout", sub: "COD + local payments built in." },
                ].map((f) => (
                  <div key={f.title} className="glow-border rounded-2xl bg-white/[0.03] px-4 py-3">
                    <p className="font-semibold">{f.title}</p>
                    <p className="text-sm text-muted-foreground">{f.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
