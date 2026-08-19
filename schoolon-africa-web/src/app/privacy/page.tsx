import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8FBFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Schoolon Africa</span>
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary flex items-center justify-center">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">Privacy Policy</h1>
            <p className="text-xs text-ink-muted">Last updated: August 2026 • The Adept Professionals</p>
          </div>
        </div>

        <div className="prose prose-slate mt-8 text-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            At <strong>Schoolon Africa</strong> (operated by <strong>The Adept Professionals</strong>), we respect and protect the privacy of students, parents, mentors, and partners. This policy outlines how we collect, handle, and safeguard your personal data.
          </p>

          <h2 className="text-base font-bold text-ink">1. Information We Collect</h2>
          <p>
            When you register for our early waitlist or platform updates, we collect your full name, email address, optional phone/WhatsApp number, educational class level, location (city/state), and stakeholder role (Student, Parent, Mentor, Investor).
          </p>

          <h2 className="text-base font-bold text-ink">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>To grant early beta cohort access and notify you about platform availability.</li>
            <li>To match students with qualified subject mentors and NERDC curriculum materials.</li>
            <li>To send academic progress updates to registered parents and guardians.</li>
            <li>To improve local-language AI dictionary translations and pedagogy.</li>
          </ul>

          <h2 className="text-base font-bold text-ink">3. Child & Student Safety</h2>
          <p>
            We adhere to strict child protection guidelines. We do not sell student data to third parties. All mentors undergo verification before interacting with secondary students.
          </p>

          <h2 className="text-base font-bold text-ink">4. Contact Us</h2>
          <p>
            For any inquiries regarding your privacy, contact our team at{" "}
            <a href="mailto:theadeptprofessionals@gmail.com" className="text-primary font-semibold underline">
              theadeptprofessionals@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
