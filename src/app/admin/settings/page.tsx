export default function AdminSettingsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Settings</h1>
      <p className="text-muted-foreground mt-1">Store settings + TikTok links (placeholder).</p>

      <div className="mt-6 grid gap-4">
        {[
          { t: "WhatsApp number", v: "+977 9800000000" },
          { t: "Support email", v: "support@pranishstore.com" },
          { t: "TikTok pixel", v: "Not configured" },
        ].map((x) => (
          <div key={x.t} className="glow-border rounded-[26px] bg-white/[0.03] p-5">
            <p className="text-xs text-muted-foreground">{x.t}</p>
            <p className="mt-2 font-semibold">{x.v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

