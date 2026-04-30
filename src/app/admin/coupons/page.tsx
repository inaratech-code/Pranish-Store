export default function AdminCouponsPage() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Coupons</h1>
          <p className="text-muted-foreground mt-1">Coupon manager (UI scaffold).</p>
        </div>
        <button className="glow-border ring-glow rounded-full px-5 h-10 bg-white/[0.05] font-semibold">
          New coupon
        </button>
      </div>

      <div className="mt-6 grid gap-3">
        {[
          { c: "PRANISH10", off: "10%", s: "Active" },
          { c: "TIKTOK50", off: "NPR 50", s: "Paused" },
        ].map((x) => (
          <div key={x.c} className="glow-border rounded-[26px] bg-white/[0.03] p-5 flex items-center justify-between">
            <div>
              <p className="font-semibold">{x.c}</p>
              <p className="text-sm text-muted-foreground mt-1">Discount: {x.off}</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold">
              {x.s}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

