export default function MentorDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Student review board</h2>
        <p className="mt-2 text-sm text-slate-600">Review the week’s learning, interventions, and next steps.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm text-slate-500">Assigned students</p>
        <ul className="mt-3 space-y-2">
          <li className="rounded-xl bg-white p-3 text-sm">Amara Okafor — Attendance improvement plan ready</li>
          <li className="rounded-xl bg-white p-3 text-sm">Jude Thompson — Quiz review submitted</li>
        </ul>
      </div>
    </div>
  );
}
