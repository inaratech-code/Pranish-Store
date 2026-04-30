import { ProductCard } from "@/components/product-card";
import { SiteShell } from "@/components/site-shell";
import { COLLECTIONS, getProductsByIds } from "@/lib/products";

export default function TrendingPage() {
  const trending = getProductsByIds(COLLECTIONS.trending);
  return (
    <SiteShell>
      <section className="pt-28 sm:pt-32 pb-18">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-14">
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold tracking-tight">
              TikTok Viral <span className="font-calligraphy text-primary font-normal">Picks</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              The highest-converting products across Nepal right now. Stock turns fast.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trending.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                slug={p.slug}
                name={p.name}
                price={p.price}
                originalPrice={p.compareAt}
                image={p.images[0]!}
                badge={p.tags?.[0]}
                rating={p.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
