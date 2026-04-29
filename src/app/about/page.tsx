"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <ReactLenis root>
      <main className="min-h-screen relative overflow-hidden bg-background selection:bg-primary selection:text-white shadow-[inset_0_0_150px_rgba(0,102,255,0.15)]">
        <Navbar />

        <section className="pt-40 pb-20 px-4 relative min-h-screen">
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
             <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          </div>

          <div className="container mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
                Our <span className="font-calligraphy text-primary font-normal text-6xl md:text-8xl">Story</span>
              </h1>
              <p className="text-xl text-muted-foreground">Kathmandu's premier destination for trending tech.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
               >
                 <div className="relative h-[400px] rounded-[32px] overflow-hidden">
                    <Image 
                      src="/images/premium_earbuds_1777456997180.png"
                      alt="About Pranish Store"
                      fill
                      className="object-cover"
                    />
                 </div>
               </motion.div>

               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.4, duration: 0.8 }}
               >
                 <h3 className="text-3xl font-heading font-bold mb-4">Quality & Trust.</h3>
                 <p className="text-lg text-muted-foreground mb-6">
                   At Pranish Store, we believe that accessing premium technology shouldn't be difficult. Based in the heart of Kathmandu, we've built a reputation for delivering viral, trending products with unmatched reliability.
                 </p>
                 <p className="text-lg text-muted-foreground mb-6">
                   Every product we sell goes through rigorous quality checks. Whether it's the latest wireless earbuds or a smart watch, we ensure that you get exactly what you ordered.
                 </p>
               </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
