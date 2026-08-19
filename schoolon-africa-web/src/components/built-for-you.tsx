"use client";

import React, { useState } from "react";
import { GraduationCap, HeartHandshake, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

interface BuiltForYouProps {
  onSelectRole?: (role: "student" | "parent" | "mentor" | "investor") => void;
}

export default function BuiltForYou({ onSelectRole }: BuiltForYouProps) {
  const [activeTab, setActiveTab] = useState<"student" | "parent" | "mentor" | "investor">("student");

  const roles = [
    {
      id: "student" as const,
      label: "Students",
      icon: GraduationCap,
      badge: "JSS1 – SS3",
      title: "Pass Your Exams with Confidence",
      description:
        "Master tough math and science topics with animated lessons and an AI dictionary in your local language, paired with a personal mentor.",
      perks: [
        "100% NERDC curriculum for WAEC, NECO & BECE",
        "AI dictionary in 50+ African languages",
        "Weekly 1-on-1 human mentor accountability",
      ],
      ctaText: "Join as a Student",
    },
    {
      id: "parent" as const,
      label: "Parents",
      icon: HeartHandshake,
      badge: "Guardians",
      title: "Clarity on Your Child's Progress",
      description:
        "Get weekly WhatsApp progress updates and direct mentor contact at a fraction of private lesson costs.",
      perks: [
        "Weekly progress digests via WhatsApp / SMS",
        "Direct connection to your child's graduate mentor",
        "80% more affordable than private home tutors",
      ],
      ctaText: "Join as a Parent",
    },
    {
      id: "mentor" as const,
      label: "Mentors",
      icon: Award,
      badge: "Educators",
      title: "Earn and Inspire Secondary Students",
      description:
        "Guide ambitious African youths remotely with flexible 1–5 hours weekly and earn stipends.",
      perks: [
        "Flexible weekly hours (1–5+ hrs)",
        "Earn competitive stipends online",
        "Verified mentor certification & community",
      ],
      ctaText: "Apply as a Mentor",
    },
    {
      id: "investor" as const,
      label: "Investors & Supporters",
      icon: TrendingUp,
      badge: "Partners",
      title: "Back Scalable Education for Africa",
      description:
        "Partner with us to provide quality digital secondary education across 70M+ students in Sub-Saharan Africa.",
      perks: [
        "70M+ addressable secondary student market",
        "Proprietary local-language AI & offline learning model",
        "Opportunities for grants, equity, & school hubs",
      ],
      ctaText: "Connect as an Investor",
    },
  ];

  const currentRole = roles.find((r) => r.id === activeTab) || roles[0];

  const handleRoleAction = (roleId: "student" | "parent" | "mentor" | "investor") => {
    if (onSelectRole) {
      onSelectRole(roleId);
    }
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("preselect-role", { detail: { role: roleId } }));
      const formEl = document.getElementById("waitlist");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="for-you" className="py-20 bg-[#F8FBFF]">
      <div id="investors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary-200">
            <span>Tailored Value</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Built For You & Your Goals
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-muted">
            Dedicated features designed for students, parents, mentors, and partners.
          </p>
        </div>

        {/* Segmented Tab Navigation */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-full overflow-x-auto">
            {roles.map((role) => {
              const Icon = role.icon;
              const isSelected = activeTab === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setActiveTab(role.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-600 hover:text-ink hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className="mt-8 max-w-4xl mx-auto rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-lg">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold mb-2">
                {currentRole.badge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink leading-tight">
                {currentRole.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                {currentRole.description}
              </p>

              <div className="mt-4 space-y-2">
                {currentRole.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-success shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => handleRoleAction(currentRole.id)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <span>{currentRole.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-200/60 p-6 text-center">
                <span className="text-[11px] uppercase font-bold tracking-wider text-primary">
                  Early Cohort Access
                </span>
                <div className="text-3xl sm:text-4xl font-black text-ink my-2">
                  Priority
                </div>
                <p className="text-xs text-ink-muted">
                  Reserve your slot in the private beta release.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
