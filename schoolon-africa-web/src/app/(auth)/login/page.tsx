export default function LoginPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Welcome back</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Sign in to your portal</h1>
        <p className="mt-2 text-sm text-slate-600">
          Use your email and OTP to continue into the Schoolon Africa dashboard.
        </p>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-primary" placeholder="name@example.com" />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Password / OTP
          <input className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-0 focus:border-primary" placeholder="Enter one-time code" />
        </label>
      </div>

      <button className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white transition hover:bg-primary/90">
        Continue
      </button>
    </div>
  );
}
