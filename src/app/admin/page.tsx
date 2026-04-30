import { AdminStats } from "@/components/admin/admin-stats";
import { RevenueChart } from "@/components/admin/revenue-chart";

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Premium admin UI — Supabase-ready data hooks next.</p>
        </div>
        <div className="text-xs text-muted-foreground">Last updated: just now</div>
      </div>

      <div className="mt-6">
        <AdminStats />
      </div>

      <div className="mt-6">
        <RevenueChart />
      </div>
    </div>
  );
}

