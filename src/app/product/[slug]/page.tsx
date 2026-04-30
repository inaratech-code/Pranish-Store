import { notFound } from "next/navigation";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { getProductBySlug, getProductsByIds, COLLECTIONS } from "@/lib/products";
import { ProductGallery } from "@/components/product/product-gallery";
import { BuyPanel } from "@/components/product/buy-panel";
import { ProductRail } from "@/components/home/product-rail";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const related = getProductsByIds(COLLECTIONS.trending).filter((p) => p.id !== product.id);

  return (
    <SiteShell>
      <section className="pt-28 sm:pt-32 pb-18">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-sm text-muted-foreground">
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>{" "}
            <span className="mx-2 opacity-50">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ProductGallery images={product.images} alt={product.name} />
            </div>
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <BuyPanel product={product} />
            </div>
          </div>

          <div className="mt-12">
            <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">What you’ll love</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {[
                  { t: "Premium feel", s: "Materials and finishing tuned for that luxury unboxing moment." },
                  { t: "Fast & safe delivery", s: "Packed carefully. Delivered quickly across Nepal." },
                  { t: "Trust-first checkout", s: "COD + eSewa + Khalti. Clear status updates." },
                  { t: "Support that replies", s: "If anything feels off, we help immediately." },
                ].map((x) => (
                  <div key={x.t} className="glow-border rounded-2xl bg-white/[0.03] p-4">
                    <p className="font-semibold">{x.t}</p>
                    <p className="text-sm text-muted-foreground mt-1">{x.s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <ProductRail
        title="Related"
        accent="Picks"
        subtitle="If you like this vibe, these will hit too."
        products={related}
        href="/trending"
      />
    </SiteShell>
  );
}

