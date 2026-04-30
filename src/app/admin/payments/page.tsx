export default function AdminPaymentsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Payments</h1>
      <p className="text-muted-foreground mt-1">eSewa / Khalti reconciliation + COD status (placeholder).</p>

      <div className="mt-6 grid sm:grid-cols-3 gap-4">
        {[
          { t: "COD", v: "Enabled" },
          { t: "eSewa", v: "Connected" },
          { t: "Khalti", v: "Connected" },
        ].map((x) => (
          <div key={x.t} className="glow-border rounded-[26px] bg-white/[0.03] p-5">
            <p className="text-sm text-muted-foreground">{x.t}</p>
            <p className="mt-2 font-heading text-2xl font-extrabold">{x.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

