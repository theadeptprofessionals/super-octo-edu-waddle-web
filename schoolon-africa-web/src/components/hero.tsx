"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Volume2,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const [activeLang, setActiveLang] = useState<"yoruba" | "hausa" | "igbo">(
    "yoruba",
  );

  const translations = {
    yoruba: {
      lang: "Yorùbá",
      term: "Photosynthesis",
      meaning: "Ilana ti awọn eweko n lo lati fi imọlẹ oorun se ounjẹ.",
    },
    hausa: {
      lang: "Hausa",
      term: "Photosynthesis",
      meaning:
        "Hanyar da tsirrai ke amfani da hasken rana wajen samar da abinci.",
    },
    igbo: {
      lang: "Igbo",
      term: "Photosynthesis",
      meaning: "Usoro osisi na-eji ìhè anyanwụ emepụta nri ha.",
    },
  };

  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#FAF5FF]/40 to-[#F8FBFF]">
      {/* Glow Blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary-100/50 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-secondary-100/40 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Primary CTA */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-primary-200 shadow-sm text-xs font-semibold text-primary mb-5">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>NERDC-Aligned • JSS1 – SS3 Digital Secondary School</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.15]">
              A Digital Secondary School Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-sky-600 to-secondary">
                African Students
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We help <strong className="text-ink font-semibold">JSS1–SS3 students</strong> continue their education online no matter the circumstance with options to <strong className="text-ink font-semibold">local languages</strong>, <strong className="text-ink font-semibold">real mentors</strong>, and <strong className="text-ink font-semibold">physical assessments around you</strong>.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={scrollToWaitlist}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-primary hover:bg-primary-600 text-white font-bold text-base shadow-lg shadow-primary/30 transition-all duration-200 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-ink">
                  NERDC
                </div>
                <div className="text-xs text-ink-muted font-medium">
                  JSS1 – SS3
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-primary">
                  🌍
                </div>
                <div className="text-xs text-ink-muted font-medium">
                  Physical Assessment
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-secondary-500">
                  1-on-1
                </div>
                <div className="text-xs text-ink-muted font-medium">
                  Human Mentors
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Learning Photo & AI Interactive Overlay */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src="/images/student_learning.jpg"
                    alt="African secondary school students learning with Schoolon digital platform"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Floating Status Badge on Photo */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 text-[11px] font-bold text-ink shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-success animate-ping" />
                    <span>JSS1 – SS3 Curriculum</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs text-slate-300 font-medium">
                      Interactive Digital School
                    </p>
                    <p className="text-sm font-bold">
                      Concept clarity with native voice translation
                    </p>
                  </div>
                </div>

                {/* AI Local Language Dictionary Interactive Card underneath */}
                <div className="p-4 bg-white">
                  <div className="rounded-2xl bg-secondary-50 border border-secondary-200/70 p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-secondary-500" />
                        <span className="text-xs font-bold text-slate-900">
                          AI Dictionary in 50+ Languages
                        </span>
                      </div>
                      <span className="hidden sm:inline-block text-[10px] font-medium text-slate-600 bg-white px-2 py-0.5 rounded-full border border-secondary-200">
                        Voice Audio
                      </span>
                    </div>

                    <div className="flex gap-1.5 my-1.5">
                      {(["yoruba", "hausa", "igbo"] as const).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setActiveLang(lang)}
                          className={`flex-1 py-1 rounded-lg text-xs font-bold transition-all ${
                            activeLang === lang
                              ? "bg-secondary-500 text-white shadow-sm"
                              : "bg-white text-slate-600 hover:bg-secondary-100"
                          }`}
                        >
                          {translations[lang].lang}
                        </button>
                      ))}
                    </div>

                    <div className="bg-white rounded-xl p-2.5 border border-secondary-200/80 mt-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-ink">
                          {translations[activeLang].term}
                        </span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-secondary-600">
                          <Volume2 className="w-3 h-3" /> Audio TTS
                        </span>
                      </div>
                      <p className="text-xs text-ink-muted mt-1 italic leading-snug">
                        &ldquo;{translations[activeLang].meaning}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-2.5 shadow-xl border border-slate-200 flex items-center gap-2 hidden sm:flex">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span className="text-xs font-bold text-ink">
                  NERDC Approved Scheme
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
