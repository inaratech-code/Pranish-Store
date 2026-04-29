import Link from "next/link";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-border pt-16 pb-8 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div>
            <Link href="/" className="font-heading font-bold text-2xl tracking-tight block mb-4">
              PRANISH<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Kathmandu&apos;s most trusted trending store. Order viral products with fast delivery and COD available all over Nepal.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/shop" className="hover:text-primary transition-colors">Shop All Products</Link></li>
              <li><Link href="/trending" className="hover:text-primary transition-colors">TikTok Viral Picks</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link href="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Customer Policies</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/return-policy" className="hover:text-primary transition-colors">Return Policy</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
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

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 Pranish Store & Inara Tech . All rights reserved.
          </p>
          <div className="flex gap-2">
            {/* Payment Icons placehoder */}
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded font-bold text-xs text-green-600">eSewa</div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded font-bold text-xs text-purple-600">Khalti</div>
            <div className="px-3 py-1 bg-gray-100 dark:bg-gray-900 rounded font-bold text-xs">COD</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
