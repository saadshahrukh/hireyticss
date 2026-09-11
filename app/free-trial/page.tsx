"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mail,
  Building2,
  Globe,
  User,
  ChevronDown,
  Check,
  Lock,
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

const roleOptions = [
  "CEO / Founder",
  "VP of Talent / People",
  "Head of HR / Recruitment",
  "Hiring Manager",
  "Technical Recruiter",
  "Talent Operations Lead",
  "Other",
];

const teamSizeOptions = ["1-10 employees", "11-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees"];

export default function FreeTrialPage() {
  const [fullName, setFullName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("CEO / Founder");
  const [teamSize, setTeamSize] = useState("11-50 employees");
  const [submitted, setSubmitted] = useState(false);

  // Auto-suggest email domain when company URL is entered
  const handleUrlChange = (val: string) => {
    setCompanyUrl(val);
    const cleanDomain = val.replace(/^https?:\/\//i, "").replace(/^www\./i, "").split("/")[0];
    if (cleanDomain && cleanDomain.includes(".") && !workEmail.includes("@")) {
      const prefix = fullName ? fullName.toLowerCase().split(" ")[0] : "name";
      setWorkEmail(`${prefix}@${cleanDomain}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && companyUrl && workEmail && companyName) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/40">
            <div className="grid lg:grid-cols-[1.1fr_1.2fr]">
              {/* Left Column: Brand, Value Proposition & Social Proof */}
              <div className="relative flex flex-col justify-between overflow-hidden bg-slate-900 p-8 text-white sm:p-12 lg:p-14">
                {/* Ambient glow */}
                <div
                  className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, rgba(217, 70, 239, 0.3) 60%, transparent 80%)",
                  }}
                />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 p-1 backdrop-blur-xs">
                      <Image src="/logo-icon.png" alt="Hireytics" width={28} height={28} className="object-contain" />
                    </div>
                    <span className="font-heading text-lg font-bold tracking-tight text-white">
                      Hire<span className="gradient-text">ytics</span>
                    </span>
                  </div>

                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                      <Sparkles className="h-3.5 w-3.5" /> 14-Day Full Platform Access
                    </span>
                    <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Start hiring 12x faster with AI & Recall.
                    </h1>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      Get full instant access to automated resume screening, AI voice interviewers, and cross-candidate reasoning with Recall.
                    </p>
                  </div>

                  {/* Included Perks */}
                  <div className="space-y-3 pt-2">
                    {[
                      "15 AI Voice Interview minutes included",
                      "Recall AI intelligence & comparison engine",
                      "Automated OCR resume screening & scoring",
                      "No credit card required to start",
                    ].map((perk) => (
                      <div key={perk} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Left Bottom Quote */}
                <div className="relative z-10 mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs leading-relaxed text-slate-300 italic">
                    &ldquo;Hireytics cut our engineering time-to-hire by 40%. The candidate voice screeners are night and day compared to manual initial calls.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 text-[10px] font-bold text-black">
                      PS
                    </div>
                    <div className="text-xs">
                      <strong className="text-white">Priya Sharma</strong> • Head of People, TechNova
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Free Trial Form OR Success State */}
              <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900">
                        Create your free trial account
                      </h2>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500">
                        Setup takes under 60 seconds. We&apos;ll send your login activation link directly to your email.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 pt-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative mt-1.5">
                          <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Saad Shahrukh"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Company Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative mt-1.5">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Acme Talent Labs"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Company Website URL <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative mt-1.5">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="acme.com"
                            value={companyUrl}
                            onChange={(e) => handleUrlChange(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Work Email <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative mt-1.5">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={workEmail}
                            onChange={(e) => setWorkEmail(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Your Role
                        </label>
                        <div className="relative mt-1.5">
                          <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
                          >
                            {roleOptions.map((r) => (
                              <option key={r} value={r}>
                                {r}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700">
                          Company Team Size
                        </label>
                        <div className="relative mt-1.5">
                          <select
                            value={teamSize}
                            onChange={(e) => setTeamSize(e.target.value)}
                            className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 outline-none transition focus:border-sky-500 focus:bg-white"
                          >
                            {teamSizeOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:brightness-110"
                      >
                        <span>Start 14-Day Free Trial</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-slate-400">
                      By submitting, you agree to our{" "}
                      <a href="/terms" className="underline hover:text-slate-700">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="/privacy" className="underline hover:text-slate-700">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                ) : (
                  /* Accepted Request Confirmation View */
                  <div className="space-y-6 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-md">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>

                    <div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
                        Free Trial Request Accepted
                      </span>
                      <h2 className="mt-3 font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                        Welcome to Hireytics, {fullName}!
                      </h2>
                      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                        We have sent your instant workspace access link to{" "}
                        <strong className="text-slate-900">{workEmail}</strong>.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left text-xs space-y-2">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <Mail className="h-4 w-4 text-sky-600" />
                        <span>Next Step: Check your inbox</span>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Click the login button in the confirmation email from Hireytics to activate your 14-day trial and invite your team.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a
                        href={process.env.PORTAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-md hover:bg-black"
                      >
                        <span>Open Workspace Login</span>
                        <MdArrowOutward className="text-sm" />
                      </a>
                      <a
                        href="/"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                      >
                        Return to Home
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
