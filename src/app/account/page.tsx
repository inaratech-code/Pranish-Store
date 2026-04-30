import { SiteShell } from "@/components/site-shell";

export default function AccountPage() {
  return (
    <SiteShell>
      <section className="pt-28 sm:pt-32 pb-18">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="glow-border rounded-[34px] bg-white/[0.04] backdrop-blur-2xl p-10">
            <h1 className="font-heading text-3xl font-extrabold tracking-tight">Account</h1>
            <p className="text-muted-foreground mt-2">
              This is ready for Supabase auth integration (magic link / OTP). Next step is wiring auth + order history.
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

