"use client";


import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Truck, ShieldCheck, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Framer Motion Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  return (
    <ReactLenis root>
      <main className="min-h-screen relative overflow-hidden bg-background selection:bg-primary selection:text-white shadow-[inset_0_0_150px_rgba(0,102,255,0.15)]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-4">
          {/* Premium Grid Background */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
             {/* Radial gradient to fade out the grid at the edges */}
             <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          </div>
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" 
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-secondary/5 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen" 
            />

          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Hero Text */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl relative z-10"
              >
                <motion.div variants={fadeUp}>
                  <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full border-primary/20 bg-primary/5 text-primary backdrop-blur-sm">
                    🔥 #1 Viral Store in Nepal
                  </Badge>
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="font-heading text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                  Kathmandu&apos;s <br />
                  <span className="font-calligraphy text-6xl lg:text-8xl text-primary font-normal leading-[0.8] block mt-2 mb-2">Trusted</span>
                  <span className="text-gradient">Trending Store.</span>
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Order viral products directly from Pranish Store. Premium quality, fast delivery, and Cash on Delivery available all over Nepal.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full text-base h-14 px-8 shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white transition-transform hover:scale-105 active:scale-95 duration-300">
                    Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8 bg-white/50 dark:bg-black/50 backdrop-blur-md border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] transition-transform hover:scale-105 active:scale-95 duration-300">
                    <MessageCircle className="mr-2 w-5 h-5" /> Order on WhatsApp
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div variants={fadeUp} className="mt-12 flex items-center gap-6 text-sm font-medium text-muted-foreground">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-200 overflow-hidden relative">
                        <Image src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Customer" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-yellow-400 mb-1">
                      {'★★★★★'}
                    </div>
                    <p>Trusted by 10,000+ Nepalese</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image/Animation */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center perspective-1000"
              >
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full max-w-md aspect-square"
                >
                   <Image 
                    src="/images/premium_headphones_1777455675754.png" 
                    alt="Premium Headphones" 
                    fill 
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
                
                {/* Floating elements */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute top-10 right-10 glass px-4 py-3 rounded-2xl flex items-center gap-3 backdrop-blur-xl"
                >
                  <div className="bg-green-100 text-green-600 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Just bought</p>
                    <p className="font-bold text-sm">Smart Watch X</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-10 border-y border-border/50 bg-white/30 dark:bg-black/30 backdrop-blur-lg relative z-20"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { icon: Truck, title: "Fast Delivery", subtitle: "Inside Kathmandu Valley" },
                { title: "COD Available", subtitle: "Pay on Delivery", isCod: true },
                { icon: ShieldCheck, title: "Trusted Seller", subtitle: "100% Authentic" },
                { icon: Clock, title: "Nepal Wide", subtitle: "Shipping anywhere" }
              ].map((badge, idx) => (
                <motion.div key={idx} variants={fadeUp} className="flex items-center gap-3 group">
                  <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {badge.isCod ? <span className="font-bold text-lg px-1">₨</span> : badge.icon && <badge.icon className="w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className="font-bold">{badge.title}</h4>
                    <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Trending Products */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-bold mb-2">TikTok Viral Picks <span className="font-calligraphy text-primary">Trending</span></h2>
                <p className="text-muted-foreground text-lg">The most requested tech this week.</p>
              </div>
              <Button variant="ghost" className="hidden md:flex hover:bg-primary/5 rounded-full transition-all">View All <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {[
                { name: "Aura Pro Wireless ANC", price: 4999, originalPrice: 7500, image: "/images/premium_headphones_1777455675754.png", badge: "Save 33%" },
                { name: "Titanium Smart Watch Series 9", price: 3500, originalPrice: 4999, image: "/images/premium_smartwatch_1777455689572.png", badge: "Trending" },
                { name: "SonicPods True Wireless", price: 2500, image: "/images/premium_earbuds_1777456997180.png" },
                { name: "Aura Pro White Edition", price: 4999, image: "/images/premium_headphones_1777455675754.png", badge: "Low Stock" }
              ].map((prod, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <ProductCard {...prod} />
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-10 text-center md:hidden">
              <Button variant="outline" className="rounded-full w-full h-12">View All Trending <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </div>
          </div>
        </section>

        {/* Social Proof / Call to Action */}
        <section className="py-32 relative overflow-hidden text-white">
          <div className="absolute inset-0 -z-10 bg-black">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="container mx-auto px-4 text-center max-w-4xl relative z-10"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Ready to upgrade your <br/>
              <span className="font-calligraphy text-6xl md:text-8xl text-primary font-normal leading-[0.8] inline-block mt-4">lifestyle?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers in Nepal. Get premium products delivered right to your doorstep.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="rounded-full text-lg h-16 px-12 shadow-2xl shadow-primary/40 bg-primary hover:bg-primary/90 text-white transition-all">
                Explore All Categories
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <Footer />
      </main>
    </ReactLenis>
  );
}
