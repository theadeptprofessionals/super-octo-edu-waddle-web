import React from "react";
import { AlertCircle, BookX, DollarSign, UsersRound, HeartHandshake, ShieldAlert } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: UsersRound,
      stat: "1 : 65+",
      title: "Overcrowded Classrooms",
      desc: "Severe teacher shortages leave secondary students without personalized guidance.",
    },
    {
      icon: BookX,
      stat: "60%",
      title: "Language Barriers",
      desc: "English-only textbooks create concept confusion in fundamental STEM subjects.",
    },
    {
      icon: DollarSign,
      stat: "$50+/mo",
      title: "Costly Home Lessons",
      desc: "Quality private tutoring is out of reach for most hardworking African families.",
    },
    {
      icon: ShieldAlert,
      stat: "<40%",
      title: "Exam Pass Rates",
      desc: "Without labs and mentor support, millions fail WAEC, NECO, and BECE yearly.",
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-danger-light text-danger text-xs font-bold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>The Education Reality in Africa</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Bridging the Gap
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink-muted leading-relaxed">
            Over 70 million secondary school students face systemic hurdles that interrupt their learning.
          </p>
        </div>

        {/* 4 Concise Cards */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50/90 border border-slate-200/80 p-5 transition-all duration-200 hover:bg-white hover:border-primary-300 hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-danger">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="mt-4">
                  <span className="text-xl font-black text-ink">{prob.stat}</span>
                  <h3 className="text-sm font-bold text-ink mt-0.5">{prob.title}</h3>
                  <p className="text-xs text-ink-muted mt-1.5 leading-relaxed">{prob.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Unique Standout: No Student Left Behind Card */}
        <div className="mt-12 relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 text-white p-6 sm:p-10 shadow-2xl border border-slate-800">
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-500/20 text-secondary-300 border border-secondary-500/40 text-xs font-bold uppercase tracking-wider">
                  <HeartHandshake className="w-3.5 h-3.5" />
                  <span>No Student Left Behind</span>
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  • Equity & Continuity of Learning Initiative
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                When Life Happens, Learning{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 via-amber-300 to-primary-300">
                  Doesn&apos;t Have to Stop
                </span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether a student becomes a teenage parent, suffers the loss of a breadwinning guardian, or cannot afford physical transport to a distant school, Schoolon Africa provides a safe, dignified, and stigma-free digital secondary school where they can study from home and graduate with <strong className="text-white font-semibold">official accredited certificates</strong>.
              </p>

              {/* Core Impact Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-2.5 text-center">
                  <span className="text-base">🤰</span>
                  <p className="text-[11px] font-bold text-slate-200 mt-1">Teen Mothers</p>
                  <p className="text-[10px] text-slate-400">Zero Stigma</p>
                </div>
                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-2.5 text-center">
                  <span className="text-base">💔</span>
                  <p className="text-[11px] font-bold text-slate-200 mt-1">Bereaved Youth</p>
                  <p className="text-[10px] text-slate-400">Flexible Pace</p>
                </div>
                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-2.5 text-center">
                  <span className="text-base">🌍</span>
                  <p className="text-[11px] font-bold text-slate-200 mt-1">Remote Areas</p>
                  <p className="text-[10px] text-slate-400">100% Offline</p>
                </div>
                <div className="bg-slate-800/70 border border-slate-700/80 rounded-xl p-2.5 text-center">
                  <span className="text-base">🎓</span>
                  <p className="text-[11px] font-bold text-slate-200 mt-1">Accredited</p>
                  <p className="text-[10px] text-slate-400">NERDC Exams</p>
                </div>
              </div>
            </div>

            {/* Right Action */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 text-center space-y-3 backdrop-blur-md">
                <div className="text-xs font-semibold text-secondary-300">
                  Every child deserves a pathway to a diploma.
                </div>
                <a
                  href="#waitlist"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-sky-600 hover:from-primary-600 hover:to-sky-700 text-white font-bold text-xs shadow-lg shadow-primary/30 transition-all hover:scale-[1.02] active:scale-100"
                >
                  <span>Support Our Mission</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
