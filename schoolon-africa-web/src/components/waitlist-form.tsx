"use client";

import React, { useState, useEffect } from "react";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  User,
  Mail,
  Phone,
  GraduationCap,
  HeartHandshake,
  Award,
  TrendingUp,
} from "lucide-react";
import { submitWaitlistSignup, type WaitlistEntry } from "@/lib/supabase";

type RoleType = "student" | "parent" | "mentor" | "investor";

interface FormErrors {
  fullName?: string;
  email?: string;
  cityState?: string;
  childrenCount?: string;
  childrenClasses?: string;
  profession?: string;
  consent?: string;
}

export default function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<RoleType>("student");

  // Role-specific fields
  // Student
  const [classLevel, setClassLevel] = useState("SS1");
  const [cityState, setCityState] = useState("");

  // Parent
  const [childrenCount, setChildrenCount] = useState("1");
  const [childrenClasses, setChildrenClasses] = useState<string[]>(["JSS1"]);

  // Mentor
  const [profession, setProfession] = useState("");
  const [weeklyAvailability, setWeeklyAvailability] = useState("3-5 hrs");

  // Investor / Supporter
  const [entityType, setEntityType] = useState<"Individual" | "Organization">("Individual");
  const [helpCategory, setHelpCategory] = useState("Funding");

  // Consent
  const [consent, setConsent] = useState(false);

  // States
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionDestination, setSubmissionDestination] = useState<"supabase" | "local">("supabase");
  const [serverError, setServerError] = useState<string | null>(null);

  // Listen for role preselection from "Built for You" section
  useEffect(() => {
    const handlePreselect = (e: Event) => {
      const customEvent = e as CustomEvent<{ role: RoleType }>;
      if (customEvent.detail && customEvent.detail.role) {
        setRole(customEvent.detail.role);
      }
    };
    window.addEventListener("preselect-role", handlePreselect);
    return () => window.removeEventListener("preselect-role", handlePreselect);
  }, []);

  const classOptions = ["JSS1", "JSS2", "JSS3", "SS1", "SS2", "SS3"];
  const availabilityOptions = ["1-2 hrs", "3-5 hrs", "5+ hrs"];
  const helpOptions = ["Funding", "Grant", "Partnership", "Media/Press", "Other"];

  const handleChildrenClassToggle = (cls: string) => {
    setChildrenClasses((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };

  // Validation logic
  const validate = (): FormErrors => {
    const errors: FormErrors = {};

    if (!fullName.trim()) {
      errors.fullName = "Please enter your full name.";
    } else if (fullName.trim().length < 2) {
      errors.fullName = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (role === "student") {
      if (!cityState.trim()) {
        errors.cityState = "Please enter your state or city.";
      }
    } else if (role === "parent") {
      if (!childrenCount || Number(childrenCount) < 1) {
        errors.childrenCount = "Please enter number of children.";
      }
      if (childrenClasses.length === 0) {
        errors.childrenClasses = "Please select at least one class.";
      }
      if (!cityState.trim()) {
        errors.cityState = "Please enter your state or city.";
      }
    } else if (role === "mentor") {
      if (!profession.trim()) {
        errors.profession = "Please enter your profession / field.";
      }
    }

    if (!consent) {
      errors.consent = "Please agree to the privacy policy to continue.";
    }

    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    setTouched({
      fullName: true,
      email: true,
      cityState: true,
      childrenCount: true,
      childrenClasses: true,
      profession: true,
      consent: true,
    });

    if (!isValid) return;

    setIsSubmitting(true);

    const payload: WaitlistEntry = {
      full_name: fullName,
      email,
      phone: phone || undefined,
      role,
      consent,
      ...(role === "student" && {
        class_level: classLevel,
        city_state: cityState,
      }),
      ...(role === "parent" && {
        children_count: Number(childrenCount),
        children_classes: childrenClasses.join(", "),
        city_state: cityState,
      }),
      ...(role === "mentor" && {
        profession,
        weekly_availability: weeklyAvailability,
      }),
      ...(role === "investor" && {
        entity_type: entityType,
        help_category: helpCategory,
      }),
    };

    const res = await submitWaitlistSignup(payload);
    setIsSubmitting(false);

    if (res.success) {
      setSubmissionDestination(res.storage || "supabase");
      setIsSubmitted(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("waitlist-submitted"));
      }
    } else {
      setServerError(res.error || "Failed to submit. Please try again.");
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCityState("");
    setProfession("");
    setConsent(false);
    setTouched({});
  };

  const roleConfigs = [
    { id: "student" as const, label: "Student", icon: GraduationCap },
    { id: "parent" as const, label: "Parent", icon: HeartHandshake },
    { id: "mentor" as const, label: "Mentor", icon: Award },
    { id: "investor" as const, label: "Investor / Supporter", icon: TrendingUp },
  ];

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-slate-50 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary text-xs font-bold uppercase tracking-wider mb-3 border border-primary-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Early Access</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Join the Waitlist
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Be the first to access lessons, AI tools, and mentorship at launch.
          </p>
        </div>

        {/* Card */}
        <div className="mt-10 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 relative">
          
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-10 px-4 animate-in fade-in zoom-in duration-200">
              <div className="w-16 h-16 rounded-full bg-success-light text-success flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-ink">
                You&apos;re on the list, {fullName.split(" ")[0]}!
              </h3>
              <p className="mt-2 text-sm text-ink-muted max-w-sm mx-auto">
                We&apos;ve reserved your early access spot. Look out for updates in your inbox.
              </p>

              {/* Verified Status Tag */}
              <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-ink text-xs font-medium border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-success inline-block" />
                <span>
                  Status: {submissionDestination === "supabase" ? "Stored in Cloud Database" : "Saved Locally"}
                </span>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition"
                >
                  Register another member
                </button>
              </div>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {serverError && (
                <div className="p-3.5 rounded-xl bg-danger-light border border-danger/30 text-danger text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Full Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      placeholder="Amara Okafor"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-ink outline-none transition ${
                        touched.fullName && errors.fullName
                          ? "border-danger"
                          : "border-slate-300 focus:border-primary"
                      }`}
                    />
                  </div>
                  {touched.fullName && errors.fullName && (
                    <p className="mt-1 text-xs text-danger">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="amara@example.com"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-ink outline-none transition ${
                        touched.email && errors.email
                          ? "border-danger"
                          : "border-slate-300 focus:border-primary"
                      }`}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="mt-1 text-xs text-danger">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone / WhatsApp <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234 801 234 5678"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-ink outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* "I'm joining as" */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  I&apos;m joining as <span className="text-danger">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {roleConfigs.map((r) => {
                    const Icon = r.icon;
                    const isSelected = role === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRole(r.id)}
                        className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-center transition-all ${
                          isSelected
                            ? "border-primary bg-primary-50 text-primary font-bold shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 text-xs"
                        }`}
                      >
                        <Icon className={`w-4 h-4 mb-1 ${isSelected ? "text-primary" : "text-slate-500"}`} />
                        <span className="text-xs">{r.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Conditional Fields */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                {role === "student" && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="studentClass" className="block text-xs font-bold text-slate-700 mb-1">
                        Class Level
                      </label>
                      <select
                        id="studentClass"
                        value={classLevel}
                        onChange={(e) => setClassLevel(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-ink outline-none focus:border-primary"
                      >
                        {classOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="studentCity" className="block text-xs font-bold text-slate-700 mb-1">
                        State / City <span className="text-danger">*</span>
                      </label>
                      <input
                        id="studentCity"
                        type="text"
                        required
                        value={cityState}
                        onChange={(e) => setCityState(e.target.value)}
                        onBlur={() => handleBlur("cityState")}
                        placeholder="e.g. Lagos"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-ink outline-none focus:border-primary"
                      />
                      {touched.cityState && errors.cityState && (
                        <p className="mt-1 text-xs text-danger">{errors.cityState}</p>
                      )}
                    </div>
                  </div>
                )}

                {role === "parent" && (
                  <div className="space-y-3">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="parentChildren" className="block text-xs font-bold text-slate-700 mb-1">
                          Number of Children
                        </label>
                        <input
                          id="parentChildren"
                          type="number"
                          min="1"
                          max="15"
                          value={childrenCount}
                          onChange={(e) => setChildrenCount(e.target.value)}
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-ink outline-none focus:border-primary"
                        />
                      </div>

                      <div>
                        <label htmlFor="parentCity" className="block text-xs font-bold text-slate-700 mb-1">
                          State / City <span className="text-danger">*</span>
                        </label>
                        <input
                          id="parentCity"
                          type="text"
                          required
                          value={cityState}
                          onChange={(e) => setCityState(e.target.value)}
                          onBlur={() => handleBlur("cityState")}
                          placeholder="e.g. Abuja"
                          className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-ink outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Children&apos;s Class Levels
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {classOptions.map((cls) => {
                          const isChecked = childrenClasses.includes(cls);
                          return (
                            <button
                              key={cls}
                              type="button"
                              onClick={() => handleChildrenClassToggle(cls)}
                              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                                isChecked
                                  ? "bg-primary text-white"
                                  : "bg-white border border-slate-300 text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              {cls}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {role === "mentor" && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="mentorProfession" className="block text-xs font-bold text-slate-700 mb-1">
                        Profession / Field <span className="text-danger">*</span>
                      </label>
                      <input
                        id="mentorProfession"
                        type="text"
                        required
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        onBlur={() => handleBlur("profession")}
                        placeholder="e.g. Math Teacher / Engineer"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-ink outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="mentorAvailability" className="block text-xs font-bold text-slate-700 mb-1">
                        Weekly Availability
                      </label>
                      <select
                        id="mentorAvailability"
                        value={weeklyAvailability}
                        onChange={(e) => setWeeklyAvailability(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-ink outline-none focus:border-primary"
                      >
                        {availabilityOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt} / week
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {role === "investor" && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Entity Type
                      </label>
                      <div className="flex gap-4 mt-1.5">
                        {(["Individual", "Organization"] as const).map((type) => (
                          <label key={type} className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="entityType"
                              value={type}
                              checked={entityType === type}
                              onChange={() => setEntityType(type)}
                              className="text-primary"
                            />
                            <span>{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="helpCategory" className="block text-xs font-bold text-slate-700 mb-1">
                        How you&apos;d like to help
                      </label>
                      <select
                        id="helpCategory"
                        value={helpCategory}
                        onChange={(e) => setHelpCategory(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-ink outline-none focus:border-primary"
                      >
                        {helpOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Consent */}
              <div>
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                  />
                  <span className="text-xs text-slate-600 leading-tight">
                    I agree to the{" "}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (typeof window !== "undefined") {
                          window.dispatchEvent(
                            new CustomEvent("open-legal-modal", { detail: { type: "privacy" } })
                          );
                        }
                      }}
                      className="text-primary font-semibold underline hover:text-primary-600 inline cursor-pointer"
                    >
                      Privacy Policy
                    </button>{" "}
                    and consent to be contacted about cohort updates.
                  </span>
                </label>
                {touched.consent && errors.consent && (
                  <p className="mt-1 text-xs text-danger">{errors.consent}</p>
                )}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`w-full py-3.5 px-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isValid && !isSubmitting
                      ? "bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/25 cursor-pointer"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Join Schoolon Africa Waitlist</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero spam guarantee. Your details are safe with us.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
