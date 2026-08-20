"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const openLegalModal = (type: "privacy" | "terms") => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-legal-modal", { detail: { type } })
      );
    }
  };

  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/schoolonafrica",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/schoolonafrica",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64A1.64 1.64 0 0 0 6.46 5.48a1.64 1.64 0 0 0-1.64 1.64c0 .91.73 1.64 1.64 1.64m1.39 9.74v-8.37H5.07v8.37z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/schoolonafrica",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://tiktok.com/@schoolonafrica",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/schoolonafrica",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@schoolonafrica",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 text-ink pt-10 sm:pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-slate-100">
          
          {/* Brand */}
          <div className="sm:col-span-2 space-y-3.5 text-center sm:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group justify-center sm:justify-start"
            >
              <div className="relative h-10 w-10 shrink-0 flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 p-0.5 overflow-hidden">
                <Image
                  src="/images/schoolon_africa_logo.png"
                  alt="Schoolon Africa Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-lg font-black tracking-tight text-ink leading-tight">
                  Schoolon <span className="text-primary">Africa</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider text-slate-500">
                  Digital Secondary School
                </span>
              </div>
            </Link>
            
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-md mx-auto sm:mx-0">
              The digital secondary school built for African students. Delivering NERDC curriculum, local language AI learning tools, and 1-on-1 graduate mentorship.
            </p>

            <div className="pt-1 flex flex-col items-center sm:items-start space-y-2 text-xs text-ink-muted">
              <a
                href="mailto:theadeptprofessionals@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors font-medium text-slate-700 hover:underline"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>theadeptprofessionals@gmail.com</span>
              </a>
              <div className="inline-flex items-center gap-2 text-slate-500">
                <MapPin className="w-4 h-4 text-secondary-500 shrink-0" />
                <span>Lagos, Nigeria • Operating Pan-Africa</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Platform</h4>
            <ul className="space-y-2 text-xs text-ink-muted">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  NERDC Curriculum
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  AI Dictionary (50+ Languages)
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary transition-colors">
                  Mobile App (Coming Soon)
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-primary font-bold hover:underline block py-0.5">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">Connect</h4>
            <div className="flex items-center gap-2 flex-wrap mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Schoolon Africa on ${social.name}`}
                  className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-primary hover:text-white text-slate-600 flex items-center justify-center transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            {/* <p className="text-[11px] text-slate-400 leading-tight">
              Schoolon Africa Portals (Admin, Parent, Mentor, Creator) opening with beta launch.
            </p> */}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-ink-muted text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1 flex-wrap">
            <span>© {currentYear}</span>
            <strong className="text-slate-900 font-semibold">The Adept Professionals</strong>.
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs pt-1 sm:pt-0">
            <button
              type="button"
              onClick={() => openLegalModal("privacy")}
              className="px-2 py-1 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={() => openLegalModal("terms")}
              className="px-2 py-1 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-50 transition-colors cursor-pointer font-medium"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
