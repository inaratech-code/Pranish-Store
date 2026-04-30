import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-18 pb-10">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_oklch,var(--primary),transparent_55%),color-mix(in_oklch,var(--secondary),transparent_55%),transparent)] opacity-80" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 size-[520px] rounded-full blur-[120px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--primary),transparent_60%),transparent_70%)] opacity-60" />
        <div className="absolute -bottom-40 -right-20 size-[620px] rounded-full blur-[130px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--secondary),transparent_60%),transparent_70%)] opacity-55" />
        <div className="absolute inset-0 noise opacity-[0.25] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div>
            <Link href="/" className="font-heading font-extrabold text-2xl tracking-tight block mb-4">
              PRANISH <span className="text-gradient">STORE</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Kathmandu&apos;s most trusted trending store. Order viral products with fast delivery and COD available all over Nepal.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glow-border bg-white/[0.04] flex items-center justify-center hover:bg-[#25D366]/15 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/shop" className="hover:text-foreground transition-colors">Shop All Products</Link></li>
              <li><Link href="/trending" className="hover:text-foreground transition-colors">TikTok Viral Picks</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact Support</Link></li>
              <li><Link href="/track-order" className="hover:text-foreground transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Customer Policies</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="/return-policy" className="hover:text-foreground transition-colors">Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-foreground transition-colors">Shipping Policy</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>New Baneshwor, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+977 9800000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>support@pranishstore.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Pranish Store & Inara Tech . All rights reserved.
          </p>
          <div className="flex gap-2">
            <div className="px-3 py-1 glow-border bg-white/[0.03] rounded-full font-bold text-xs text-green-400">
              eSewa
            </div>
            <div className="px-3 py-1 glow-border bg-white/[0.03] rounded-full font-bold text-xs text-purple-300">
              Khalti
            </div>
            <div className="px-3 py-1 glow-border bg-white/[0.03] rounded-full font-bold text-xs">
              COD
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
