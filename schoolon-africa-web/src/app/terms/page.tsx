import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
          <div className="w-10 h-10 rounded-xl bg-secondary-100 text-secondary-600 flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">Terms of Service</h1>
            <p className="text-xs text-ink-muted">Last updated: August 2026 • The Adept Professionals</p>
          </div>
        </div>

        <div className="prose prose-slate mt-8 text-sm text-ink-muted space-y-6 leading-relaxed">
          <p>
            Welcome to <strong>Schoolon Africa</strong>, operated by <strong>The Adept Professionals</strong>. By joining our waitlist or using our services, you agree to these terms.
          </p>

          <h2 className="text-base font-bold text-ink">1. Educational Purpose</h2>
          <p>
            Schoolon Africa provides NERDC-aligned curriculum video lessons, local-language AI dictionary tools, exam prep resources, and mentor matching for secondary school students.
          </p>

          <h2 className="text-base font-bold text-ink">2. Safety & Conduct</h2>
          <p>
            We require respectful, safe interactions between students, parents, mentors, and partners across all community and digital learning spaces.
          </p>

          <h2 className="text-base font-bold text-ink">3. Intellectual Property</h2>
          <p>
            All video lessons, software, AI tools, and logos are the property of The Adept Professionals.
          </p>

          <h2 className="text-base font-bold text-ink">4. Contact</h2>
          <p>
            For questions, please reach out to{" "}
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
