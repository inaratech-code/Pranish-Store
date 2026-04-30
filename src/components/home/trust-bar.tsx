"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Truck, Headset } from "lucide-react";

const items = [
  { Icon: Truck, title: "Fast Delivery", sub: "1–2 days in KTM" },
  { Icon: ShieldCheck, title: "Trusted Seller", sub: "10k+ happy buyers" },
  { Icon: Clock, title: "COD Available", sub: "Pay on delivery" },
  { Icon: Headset, title: "24/7 Support", sub: "We reply fast" },
] as const;

export function TrustBar() {
  return (
    <section className="relative py-8">
      <div className="container mx-auto px-4">
        <div className="glow-border rounded-[28px] bg-white/[0.04] backdrop-blur-2xl p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {items.map(({ Icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="glow-border rounded-2xl bg-white/[0.03] px-4 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-white/[0.06] grid place-items-center ring-glow">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading font-semibold leading-tight">{title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

