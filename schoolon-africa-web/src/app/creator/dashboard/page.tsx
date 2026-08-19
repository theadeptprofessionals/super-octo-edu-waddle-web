export default function CreatorDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Creator workspace</h2>
        <p className="mt-2 text-sm text-slate-600">Upload lessons, monitor performance, and review earnings.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Uploads this month</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">18</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Estimated payout</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">₦142,000</p>
        </div>
      </div>
    </div>
  );
}
