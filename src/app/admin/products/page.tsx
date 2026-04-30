import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Products</h1>
          <p className="text-muted-foreground mt-1">CRUD + inventory tracking (UI scaffold).</p>
        </div>
        <button className="glow-border ring-glow rounded-full px-5 h-10 bg-white/[0.05] font-semibold">
          New product
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="glow-border rounded-[26px] bg-white/[0.03] p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  NPR {p.price.toLocaleString()} • {p.sold.toLocaleString()} sold • {p.rating.toFixed(1)}★
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags?.slice(0, 3).map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/product/${p.slug}`}
                  className="px-4 h-10 inline-flex items-center rounded-full bg-white/[0.06] hover:bg-white/[0.09] transition-colors font-semibold"
                >
                  View
                </Link>
                <button className="px-4 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.09] transition-colors font-semibold">
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

