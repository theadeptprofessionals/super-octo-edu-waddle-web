"use client";

import React, { useEffect } from "react";
import { X, Shield, FileText, Mail } from "lucide-react";

export type LegalModalType = "privacy" | "terms" | null;

interface LegalModalProps {
  isOpen: boolean;
  type: "privacy" | "terms";
  onClose: () => void;
  onSwitchType?: (type: "privacy" | "terms") => void;
}

export default function LegalModal({
  isOpen,
  type,
  onClose,
  onSwitchType,
}: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          {/* Tab Switcher */}
          <div className="flex items-center p-1 bg-slate-200/80 rounded-2xl">
            <button
              type="button"
              onClick={() => onSwitchType?.("privacy")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                type === "privacy"
                  ? "bg-white text-primary shadow-sm"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </button>
            <button
              type="button"
              onClick={() => onSwitchType?.("terms")}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                type === "terms"
                  ? "bg-white text-primary shadow-sm"
                  : "text-slate-600 hover:text-ink"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Terms of Service</span>
            </button>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-ink-muted leading-relaxed">
          {type === "privacy" ? (
            /* Privacy Policy Content */
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink">
                    Privacy Policy
                  </h2>
                  <p className="text-xs text-ink-muted">
                    Last updated: August 2026 • The Adept Professionals
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-primary-50/60 border border-primary-100 text-xs text-primary-900 font-medium">
                At <strong>Schoolon Africa</strong> (operated by <strong>The Adept Professionals</strong>), we respect and protect the privacy of students, parents, mentors, and partners.
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    1. Information We Collect
                  </h3>
                  <p className="text-xs sm:text-sm">
                    When you register for our waitlist or digital secondary school platform, we collect your full name, email address, optional phone/WhatsApp number, educational class level, location (city/state), and stakeholder role (Student, Parent, Mentor, Investor).
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    2. How We Use Your Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                    <li>To grant early cohort access and notify you about platform availability.</li>
                    <li>To match students with qualified subject mentors and curriculum materials.</li>
                    <li>To send academic progress reports and assessment schedules.</li>
                    <li>To improve local-language AI dictionary translations and pedagogy.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    3. Student Protection & Data Safety
                  </h3>
                  <p className="text-xs sm:text-sm">
                    We adhere to strict child protection guidelines. We do not sell or monetize personal student data to third parties. All mentors undergo screening prior to student interaction.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    4. Contact & Inquiries
                  </h3>
                  <p className="text-xs sm:text-sm">
                    For any privacy requests, please contact our team at:
                  </p>
                  <a
                    href="mailto:theadeptprofessionals@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline bg-primary-50 px-3 py-1.5 rounded-xl border border-primary-100"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>theadeptprofessionals@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* Terms of Service Content */
            <div className="space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-ink">
                    Terms of Service
                  </h2>
                  <p className="text-xs text-ink-muted">
                    Last updated: August 2026 • The Adept Professionals
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-secondary-50/60 border border-secondary-100 text-xs text-secondary-900 font-medium">
                Welcome to <strong>Schoolon Africa</strong>, operated by <strong>The Adept Professionals</strong>. By accessing our platform or joining our waitlist, you agree to these terms.
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    1. Educational Purpose & Services
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Schoolon Africa provides NERDC-aligned curriculum video lessons, local-language AI dictionary tools, exam prep resources, and verified mentor matching for secondary school students across Africa.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    2. Community Safety & Code of Conduct
                  </h3>
                  <p className="text-xs sm:text-sm">
                    We require respectful, safe interactions between students, parents, mentors, and partners across all digital learning and physical assessment environments.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    3. Intellectual Property
                  </h3>
                  <p className="text-xs sm:text-sm">
                    All curriculum lessons, voice translation models, software assets, and brand trademarks are the intellectual property of The Adept Professionals.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-ink text-sm mb-1.5">
                    4. Contact
                  </h3>
                  <p className="text-xs sm:text-sm">
                    For questions regarding these terms, reach us at:
                  </p>
                  <a
                    href="mailto:theadeptprofessionals@gmail.com"
                    className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline bg-primary-50 px-3 py-1.5 rounded-xl border border-primary-100"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>theadeptprofessionals@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} The Adept Professionals.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold hover:bg-primary-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
