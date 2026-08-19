export default function OtpVerifyPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Secure access</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">Verify your code</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter the one-time password you received to finish signing in.
        </p>
      </div>

      <input className="w-full rounded-xl border border-slate-300 px-3 py-3 text-center text-lg font-semibold tracking-[0.5em] outline-none focus:border-primary" placeholder="000000" />

      <button className="w-full rounded-xl bg-secondary px-4 py-3 font-semibold text-slate-900 transition hover:bg-secondary/90">
        Verify OTP
      </button>
    </div>
  );
}
