"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProblemSection from "@/components/problem-section";
import FeaturesGrid from "@/components/features-grid";
import HowItWorks from "@/components/how-it-works";
import BuiltForYou from "@/components/built-for-you";
import CredibilityStrip from "@/components/credibility-strip";
import WaitlistForm from "@/components/waitlist-form";
import DownloadSection from "@/components/download-section";
import Footer from "@/components/footer";
import ScrollReveal from "@/components/scroll-reveal";
import LegalModal from "@/components/legal-modal";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleOpenLegalModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ type: "privacy" | "terms" }>;
      if (customEvent.detail && customEvent.detail.type) {
        setLegalModalType(customEvent.detail.type);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("open-legal-modal", handleOpenLegalModal);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-legal-modal", handleOpenLegalModal);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FBFF] text-ink selection:bg-primary-100 selection:text-primary-700 relative">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem Section */}
        <ScrollReveal direction="up" delay={50}>
          <ProblemSection />
        </ScrollReveal>

        {/* 4. Features Grid (4 Cards) */}
        <ScrollReveal direction="up" delay={50}>
          <FeaturesGrid />
        </ScrollReveal>

        {/* 5. How It Works (3 Steps) */}
        <ScrollReveal direction="up" delay={50}>
          <HowItWorks />
        </ScrollReveal>

        {/* 6. Built For You (4 Stakeholder Roles) */}
        <ScrollReveal direction="up" delay={50}>
          <BuiltForYou />
        </ScrollReveal>

        {/* 7. Credibility Strip (Live Supabase Waitlist Counter) */}
        <ScrollReveal direction="up" delay={50}>
          <CredibilityStrip />
        </ScrollReveal>

        {/* 8. Waitlist Form Section */}
        <ScrollReveal direction="up" delay={50}>
          <WaitlistForm />
        </ScrollReveal>

        {/* 9. Download Section */}
        <ScrollReveal direction="up" delay={50}>
          <DownloadSection />
        </ScrollReveal>
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-slate-700 hover:text-primary hover:border-primary/40 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 cursor-pointer animate-in fade-in zoom-in"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Interactive Privacy Policy & Terms of Service Modal */}
      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType || "privacy"}
        onClose={() => setLegalModalType(null)}
        onSwitchType={(type) => setLegalModalType(type)}
      />
    </div>
  );
}
