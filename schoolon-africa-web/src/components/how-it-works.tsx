import React from "react";
import { UserPlus, Sparkles, LineChart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Join & Get Matched",
      description:
        "Select your secondary grade (JSS1–SS3), set exam goals, and get paired with a dedicated subject mentor.",
      accentColor: "from-primary to-sky-600",
    },
    {
      number: "02",
      icon: Sparkles,
      title: "Learn with Mentor Support",
      description:
        "Watch video lessons, ask the AI dictionary in your native language, and resolve study doubts weekly.",
      accentColor: "from-secondary-500 to-purple-600",
    },
    {
      number: "03",
      icon: LineChart,
      title: "Track Progress with Parents",
      description:
        "Parents and mentors receive automated weekly progress digests on quiz scores and exam readiness.",
      accentColor: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-xs font-bold uppercase tracking-wider mb-3 border border-secondary-200">
            <span>Simple 3-Step Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
            How Schoolon Africa Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-muted">
            Guided structure, personalized mentorship, and continuous feedback.
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50/80 border border-slate-200/80 p-6 flex flex-col justify-between transition-all duration-200 hover:bg-white hover:border-primary-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.accentColor} text-white flex items-center justify-center shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-ink">{step.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
