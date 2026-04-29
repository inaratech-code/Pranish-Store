"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const ALL_PRODUCTS = [
  { name: "Aura Pro Wireless ANC", price: 4999, originalPrice: 7500, image: "/images/premium_headphones_1777455675754.png", badge: "New Arrival" },
  { name: "Titanium Smart Watch Series 9", price: 3500, originalPrice: 4999, image: "/images/premium_smartwatch_1777455689572.png", badge: "Trending" },
  { name: "SonicPods True Wireless", price: 2500, image: "/images/premium_earbuds_1777456997180.png" },
  { name: "Aura Pro White Edition", price: 4999, image: "/images/premium_headphones_1777455675754.png", badge: "Low Stock" },
  { name: "Titanium Smart Watch Series 8", price: 2999, originalPrice: 3999, image: "/images/premium_smartwatch_1777455689572.png" },
  { name: "SonicPods Lite Edition", price: 1500, image: "/images/premium_earbuds_1777456997180.png" },
];

export default function ShopPage() {
  return (
    <ReactLenis root>
      <main className="min-h-screen relative overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] selection:bg-primary selection:text-white shadow-[inset_0_0_150px_rgba(0,102,255,0.15)]">
        <Navbar />

        <section className="pt-40 pb-20 px-4 relative min-h-screen">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
             <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          </div>

          <div className="container mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <h1 className="font-heading text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[0.95]">
                All <span className="font-calligraphy text-primary font-normal">Products</span>
              </h1>
              <p className="text-xl text-muted-foreground">Everything you need to upgrade your lifestyle.</p>
            </motion.div>

            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {ALL_PRODUCTS.map((prod, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <ProductCard {...prod} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
