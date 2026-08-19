export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Operations overview</h2>
        <p className="mt-2 text-sm text-slate-600">Monitor cohorts, announcements, and operational health.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {[
          ["Active cohorts", "12"],
          ["Pending reviews", "8"],
          ["Live announcements", "3"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
