import React from "react";
import Image from "next/image";
import { Video, Languages, UserCheck, FlaskConical, Sparkles } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: Video,
      badge: "NERDC Syllabi",
      badgeColor: "bg-primary-100 text-primary-700 border-primary-200",
      title: "NERDC-Aligned Video Lessons",
      description:
        "Bite-sized, animated video lessons covering JSS1–SS3 subjects for WAEC, NECO, and BECE success.",
      iconBg: "bg-primary text-white",
      image: null,
    },
    {
      icon: Languages,
      badge: "50+ Languages",
      badgeColor: "bg-secondary-100 text-secondary-700 border-secondary-200",
      title: "AI Dictionary & Voice in 50+ Languages",
      description:
        "Instant STEM concept breakdowns and audio pronunciation in Yorùbá, Hausa, Igbo, and over 50 local African dialects.",
      iconBg: "bg-secondary-500 text-white",
      image: null,
    },
    {
      icon: UserCheck,
      badge: "1-on-1 Mentorship",
      badgeColor: "bg-sky-100 text-sky-700 border-sky-200",
      title: "Real Accountability Mentors",
      description:
        "Dedicated human graduate mentors who conduct weekly reviews and keep students disciplined.",
      iconBg: "bg-sky-600 text-white",
      image: "/images/mentor_tutoring.jpg",
      imageAlt: "African graduate mentor coaching a student",
    },
    {
      icon: FlaskConical,
      badge: "Hybrid Centers",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      title: "Phygital Exams & Labs",
      description:
        "Hands-on science practicals and CBT mock exams hosted at accredited partner school hubs.",
      iconBg: "bg-emerald-600 text-white",
      image: "/images/science_lab.jpg",
      imageAlt: "African secondary students conducting chemistry practicals in science laboratory",
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-100 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built for African Students</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
            A Complete Learning Ecosystem
          </h2>
          <p className="mt-2 text-sm sm:text-base text-ink-muted">
            Engineered for high academic performance with cultural relevance and low-data access.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary-300 group flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-bold border ${feat.badgeColor}`}>
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-ink group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {feat.image && (
                  <div className="relative h-44 w-full border-t border-slate-100">
                    <Image
                      src={feat.image}
                      alt={feat.imageAlt || feat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
