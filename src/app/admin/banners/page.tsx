export default function AdminBannersPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Banners</h1>
      <p className="text-muted-foreground mt-1">Hero banner control + promo slots (UI scaffold).</p>

      <div className="mt-6 grid gap-4">
        {[
          { t: "Homepage Hero", s: "Active", d: "Kathmandu’s Trusted Trending Store" },
          { t: "Limited Deals", s: "Scheduled", d: "Weekend flash deal pack" },
        ].map((b) => (
          <div key={b.t} className="glow-border rounded-[26px] bg-white/[0.03] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{b.t}</p>
                <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold">
                {b.s}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

