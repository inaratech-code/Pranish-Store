export default function AdminOrdersPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Orders</h1>
      <p className="text-muted-foreground mt-1">Manage COD + eSewa/Khalti orders (placeholder UI).</p>

      <div className="mt-6 overflow-hidden glow-border rounded-[26px] bg-white/[0.03]">
        <div className="grid grid-cols-5 gap-0 border-b border-white/10 text-xs text-muted-foreground">
          {["Order", "Customer", "City", "Payment", "Status"].map((h) => (
            <div key={h} className="px-4 py-3 font-semibold">
              {h}
            </div>
          ))}
        </div>
        {[
          { id: "#PS-1042", name: "Sanjana K.", city: "Kathmandu", pay: "COD", status: "Confirming" },
          { id: "#PS-1041", name: "Aayush R.", city: "Pokhara", pay: "Khalti", status: "Packed" },
          { id: "#PS-1040", name: "Riya S.", city: "Chitwan", pay: "eSewa", status: "Shipped" },
        ].map((o) => (
          <div key={o.id} className="grid grid-cols-5 border-b border-white/5 last:border-b-0">
            <div className="px-4 py-3 font-semibold">{o.id}</div>
            <div className="px-4 py-3 text-muted-foreground">{o.name}</div>
            <div className="px-4 py-3 text-muted-foreground">{o.city}</div>
            <div className="px-4 py-3 text-muted-foreground">{o.pay}</div>
            <div className="px-4 py-3">
              <span className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold">
                {o.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

