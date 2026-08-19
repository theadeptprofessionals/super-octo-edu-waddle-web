"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ["features", "how-it-works", "for-you", "waitlist"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "features", label: "Features", href: "#features" },
    { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
    { id: "for-you", label: "Built For You", href: "#for-you" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5"
          : "bg-gradient-to-b from-white/90 via-white/50 to-transparent py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Explicit Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.01]"
          >
            {/* Logo Image */}
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 flex items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100 p-0.5 overflow-hidden">
              <Image
                src="/images/schoolon_africa_logo.png"
                alt="Schoolon Africa Logo"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>

            {/* Explicit Brand Name & Tagline */}
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-black tracking-tight text-ink flex items-center gap-1 leading-tight">
                Schoolon <span className="text-primary">Africa</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-slate-500 leading-tight">
                Digital Secondary School
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Active Indicator */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "text-primary bg-primary-50 font-bold"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#waitlist"
              onClick={(e) => handleSmoothScroll(e, "waitlist")}
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/25 transition-all duration-200 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join Waitlist</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`text-sm font-semibold py-2 px-3 rounded-xl transition ${
                  activeSection === link.id
                    ? "bg-primary-50 text-primary font-bold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <a
                href="#waitlist"
                onClick={(e) => handleSmoothScroll(e, "waitlist")}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Join the Waitlist</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
