"use client";

import React from "react";
import {
  Smartphone,
  WifiOff,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function DownloadSection() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="download"
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      <div
        className="absolute top-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-300 text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile-First Learning</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Study Anywhere, Anytime, Even Offline
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Designed for low-bandwidth networks across Africa. Download full
              video lessons and practice without internet data.
            </p>

            <div className="mt-5 grid sm:grid-cols-2 gap-2.5 text-left text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <WifiOff className="w-4 h-4 text-primary shrink-0" />
                <span>Offline video lesson downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary-400 shrink-0" />
                <span>AI voice dictionary in 50+ languages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>WAEC, NECO & BECE CBT practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                <span>Direct mentor push notifications</span>
              </div>
            </div>

            {/* App Coming Soon Badges & Notify to Waitlist */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Android App — Coming Soon</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary-400 animate-pulse" />
                <span>iOS App — Coming Soon</span>
              </div>
            </div>

            {/* Notify Button Scrolls to Waitlist */}
            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToWaitlist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-primary hover:bg-primary-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Notify Me When Launched</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Smartphone Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Ambient Background Glow behind Phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary-500/20 rounded-full blur-2xl transform scale-90 pointer-events-none" />

            {/* Floating Badge Left */}
            <div className="hidden sm:flex absolute -left-6 top-1/4 z-20 bg-slate-800/90 backdrop-blur-md border border-slate-700/80 p-2.5 rounded-2xl shadow-xl items-center gap-2.5 text-xs animate-bounce duration-1000">
              <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary flex items-center justify-center font-bold">
                📥
              </div>
              <div>
                <p className="font-bold text-white text-[11px]">
                  Offline Lessons
                </p>
                <p className="text-[9px] text-emerald-400 font-mono">
                  0MB Data to Replay
                </p>
              </div>
            </div>

            {/* Floating Badge Right */}
            <div className="hidden sm:flex absolute -right-6 bottom-1/4 z-20 bg-slate-800/90 backdrop-blur-md border border-slate-700/80 p-2.5 rounded-2xl shadow-xl items-center gap-2.5 text-xs">
              <div className="w-8 h-8 rounded-xl bg-secondary-500/20 text-secondary-400 flex items-center justify-center font-bold">
                🌍
              </div>
              <div>
                <p className="font-bold text-white text-[11px]">
                  50+ Native Dialects
                </p>
                <p className="text-[9px] text-slate-400 font-mono">
                  AI Voice Translation
                </p>
              </div>
            </div>

            {/* Realistic Smartphone Chassis */}
            <div className="relative w-64 sm:w-72 rounded-[40px] bg-slate-950 p-3 ring-1 ring-slate-700 shadow-2xl border-4 border-slate-800 select-none">
              {/* Dynamic Island / Speaker */}
              <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-800 mr-2" />
                <div className="w-8 h-1 bg-slate-800 rounded-full" />
              </div>

              {/* Screen Area */}
              <div className="rounded-[30px] bg-slate-900 overflow-hidden border border-slate-800 text-white space-y-3 p-3.5 shadow-inner">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 px-1">
                  <span className="font-semibold text-slate-200">9:41</span>
                  <div className="flex items-center gap-1.5 text-[9px]">
                    <span className="text-emerald-400 font-bold">
                      4G • Offline
                    </span>
                    <span>🔋 98%</span>
                  </div>
                </div>

                {/* In-App Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">
                      Welcome back
                    </p>
                    <p className="text-xs font-extrabold text-white flex items-center gap-1">
                      Aisha Bello{" "}
                      <span className="text-[10px] px-1.5 py-0.2 bg-primary/20 text-primary-300 rounded font-semibold">
                        SS2 Science
                      </span>
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-secondary-500 text-[10px] flex items-center justify-center font-bold text-white">
                    AB
                  </div>
                </div>

                {/* Active Video Lesson Card */}
                <div className="rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 p-2.5 border border-slate-700/80 shadow-md space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] uppercase font-bold text-primary-300 bg-primary/20 px-2 py-0.5 rounded-full">
                      NERDC Biology • SS2
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono">
                      ● Saved
                    </span>
                  </div>

                  <p className="text-xs font-bold text-white leading-tight">
                    Cellular Respiration & Photosynthesis
                  </p>

                  {/* Video scrubber demo */}
                  <div className="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary-500 h-full w-3/4" />
                  </div>
                  <div className="flex justify-between text-[8px] text-slate-400">
                    <span>14:20</span>
                    <span>18:45</span>
                  </div>
                </div>

                {/* AI Dialect Voice Widget */}
                <div className="rounded-xl bg-secondary-950/60 border border-secondary-500/30 p-2 text-[10px] space-y-1">
                  <div className="flex items-center justify-between text-[9px]">
                    <span className="text-secondary-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Yoruba Voice Note
                    </span>
                    <span className="text-slate-400 text-[8px]">
                      Auto-Synced
                    </span>
                  </div>
                  <p className="text-[9px] text-slate-300 italic leading-tight">
                    &ldquo;Hanyar da tsirrai ke amfani da hasken rana...&rdquo;
                  </p>
                </div>

                {/* Next CBT Practice Test */}
                <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-between text-[10px]">
                  <div>
                    <p className="text-[8px] text-slate-400 uppercase font-bold">
                      Practice Exam
                    </p>
                    <p className="text-[10px] font-bold text-slate-200">
                      WAEC 2024 Past Questions
                    </p>
                  </div>
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-[9px]">
                    92% Score
                  </span>
                </div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-20 h-1 bg-slate-700 rounded-full mx-auto mt-2.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
