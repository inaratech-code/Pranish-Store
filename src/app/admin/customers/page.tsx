export default function AdminCustomersPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Customers</h1>
      <p className="text-muted-foreground mt-1">Customer database (placeholder).</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {[
          { n: "Aayush", city: "Kathmandu", orders: 3 },
          { n: "Riya", city: "Pokhara", orders: 1 },
          { n: "Sujan", city: "Chitwan", orders: 2 },
          { n: "Sanjana", city: "Lalitpur", orders: 4 },
        ].map((c) => (
          <div key={c.n} className="glow-border rounded-[26px] bg-white/[0.03] p-5">
            <p className="font-semibold">{c.n}</p>
            <p className="text-sm text-muted-foreground mt-1">{c.city}</p>
            <p className="text-xs text-muted-foreground mt-3">{c.orders} orders</p>
          </div>
        ))}
      </div>
    </div>
  );
}

