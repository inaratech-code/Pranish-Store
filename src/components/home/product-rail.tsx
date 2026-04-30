"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";

export function ProductRail({
  title,
  accent,
  subtitle,
  products,
  href,
}: {
  title: string;
  accent?: string;
  subtitle?: string;
  products: Product[];
  href: string;
}) {
  return (
    <section className="relative py-14 sm:py-18">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-6">
          <div>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight">
              {title} {accent ? <span className="font-calligraphy text-primary font-normal">{accent}</span> : null}
            </h2>
            {subtitle ? <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p> : null}
          </div>
          <Link href={href} className="hidden md:block">
            <Button variant="ghost" className="rounded-full hover:bg-white/[0.06]">
              View all <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
        <div className="h-px w-full divider-glow opacity-70 mb-8" />

        {/* Mobile swipe rail + Desktop grid */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-4 pb-2">
            {products.map((p) => (
              <div key={p.id} className="snap-start min-w-[74%] sm:min-w-[52%]">
                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <ProductCard
                    id={p.id}
                    slug={p.slug}
                    name={p.name}
                    price={p.price}
                    originalPrice={p.compareAt}
                    image={p.images[0]!}
                    badge={p.tags?.[0]}
                    rating={p.rating}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard
                id={p.id}
                slug={p.slug}
                name={p.name}
                price={p.price}
                originalPrice={p.compareAt}
                image={p.images[0]!}
                badge={p.tags?.[0]}
                rating={p.rating}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link href={href}>
            <Button className="w-full h-12 rounded-2xl glow-border bg-white/[0.05]">
              View all <ArrowRight className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

