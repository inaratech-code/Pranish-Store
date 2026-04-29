"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

export function ProductCard({ name, price, originalPrice, image, badge }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="glass-card rounded-3xl p-3 group relative overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4">
        {badge && (
          <Badge className="absolute top-3 left-3 z-10 bg-primary text-white border-none shadow-md">
            {badge}
          </Badge>
        )}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
        
        {/* Quick Add Button overlay on hover (Desktop) */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4">
          <Button className="w-full rounded-full bg-white text-black hover:bg-gray-100 shadow-xl gap-2 font-medium">
            <ShoppingCart className="w-4 h-4" /> Quick Add
          </Button>
        </div>
      </div>

      <div className="px-2 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">{name}</h3>
          <div className="flex items-center gap-2 mt-1 mb-3">
            <span className="font-bold text-lg">NPR {price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                NPR {originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
        
        {/* Mobile persistent button */}
        <Button className="w-full rounded-full md:hidden bg-primary/10 text-primary hover:bg-primary/20 gap-2 mb-1">
          <Zap className="w-4 h-4" /> Buy Now
        </Button>
      </div>
    </motion.div>
  );
}
