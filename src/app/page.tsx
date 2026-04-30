import { SiteShell } from "@/components/site-shell";
import { HomeHero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { ProductRail } from "@/components/home/product-rail";
import { LivePopups } from "@/components/home/live-popups";
import { COLLECTIONS, getProductsByIds } from "@/lib/products";

export default function Home() {
  const trending = getProductsByIds(COLLECTIONS.trending);
  const arrivals = getProductsByIds(COLLECTIONS.new);
  const viral = getProductsByIds(COLLECTIONS.viral);
  const deals = getProductsByIds(COLLECTIONS.deals);

  return (
    <SiteShell>
      <LivePopups />
      <HomeHero />
      <TrustBar />
      <ProductRail
        title="Trending Right Now"
        subtitle="The most requested products this week — tuned for Nepal taste and TikTok velocity."
        products={trending}
        href="/trending"
      />
      <ProductRail
        title="New Arrivals"
        accent="Fresh"
        subtitle="New drops with premium build and clean pricing."
        products={arrivals}
        href="/shop"
      />
      <ProductRail
        title="Viral TikTok Picks"
        accent="Viral"
        subtitle="These are converting hard right now. Stock moves fast."
        products={viral}
        href="/trending"
      />
      <ProductRail
        title="Limited Deals"
        accent="Now"
        subtitle="Quick deals for fast decision shoppers."
        products={deals}
        href="/shop"
      />
      <section className="relative py-18 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-10 sm:p-14 text-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-70">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[580px] rounded-full blur-[120px] bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklch,var(--primary),transparent_55%),transparent_70%)]" />
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-tight">
              Built for Nepal. Designed to feel <span className="text-gradient">expensive</span>.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base sm:text-lg">
              Premium UI, trustworthy checkout, and “I want that” product presentation — engineered for fast mobile
              conversion.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="/shop" className="glow-border ring-glow rounded-full px-9 h-12 sm:h-14 inline-flex items-center font-semibold">
                Explore categories
              </a>
              <a href="/checkout" className="glow-border rounded-full px-9 h-12 sm:h-14 inline-flex items-center font-semibold bg-white/[0.05] hover:bg-white/[0.08] transition-colors">
                Go to checkout
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
