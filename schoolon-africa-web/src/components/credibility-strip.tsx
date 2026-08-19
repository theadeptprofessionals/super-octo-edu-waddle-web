"use client";

import React, { useEffect, useState } from "react";
import { getWaitlistCount } from "@/lib/supabase";

export default function CredibilityStrip() {
  const [waitlistCount, setWaitlistCount] = useState<number>(1482);
  const [displayCount, setDisplayCount] = useState<number>(1200);

  useEffect(() => {
    let isMounted = true;

    async function fetchCount() {
      const count = await getWaitlistCount();
      if (isMounted) {
        setWaitlistCount(count);
      }
    }

    fetchCount();

    const handleSignup = () => {
      setWaitlistCount((prev) => prev + 1);
    };
    window.addEventListener("waitlist-submitted", handleSignup);

    return () => {
      isMounted = false;
      window.removeEventListener("waitlist-submitted", handleSignup);
    };
  }, []);

  useEffect(() => {
    if (displayCount < waitlistCount) {
      const step = Math.max(1, Math.floor((waitlistCount - displayCount) / 10));
      const timer = setTimeout(() => {
        setDisplayCount((prev) => Math.min(prev + step, waitlistCount));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayCount, waitlistCount]);

  return (
    <section className="py-10 bg-white border-y border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NOTE: Tony Elumelu Foundation (TEF) badge is temporarily commented out as requested.
        {/*
        <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white font-extrabold text-base shadow-sm shrink-0">
            TEF
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-success" />
              <span>Seed Recognition</span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-ink mt-0.5">
              Backed by Tony Elumelu Foundation
            </h3>
            <p className="text-xs text-ink-muted">
              Recognized for educational innovation across Africa.
            </p>
          </div>
        </div>
        */}

        {/* Live Waitlist Counter Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-primary-50 via-white to-secondary-50 border border-primary-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-slate-700 uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span>Live Early Access Waitlist</span>
            </div>
            <div className="mt-1 flex items-baseline justify-center sm:justify-start gap-2">
              <span className="text-3xl sm:text-4xl font-black text-ink font-mono">
                {displayCount.toLocaleString()}
              </span>
              <span className="text-sm font-semibold text-primary">Pre-Registered Members</span>
            </div>
            <p className="text-xs text-ink-muted mt-0.5">
              Students, parents, mentors, and partners awaiting private beta release.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              <div className="h-9 w-9 rounded-full ring-2 ring-white bg-primary text-white flex items-center justify-center text-xs font-bold shadow-sm">
                AO
              </div>
              <div className="h-9 w-9 rounded-full ring-2 ring-white bg-secondary text-white flex items-center justify-center text-xs font-bold shadow-sm">
                CN
              </div>
              <div className="h-9 w-9 rounded-full ring-2 ring-white bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                MK
              </div>
              <div className="h-9 w-9 rounded-full ring-2 ring-white bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                +
              </div>
            </div>
            <a
              href="#waitlist"
              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-600 transition shadow-sm"
            >
              Join Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
