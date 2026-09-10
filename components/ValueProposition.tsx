"use client";

import { 
  ArrowRight, 
  TrendingDown, 
  Layers, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  XCircle,
  Users,
  BrainCircuit,
  Clock
} from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import Link from "next/link";

const pains = [
  {
    icon: Layers,
    pain: "Scattered tools & spreadsheets",
    loss: "HR teams lose 12+ hours/week switching between ATS, payroll, and manual scorecards.",
    gain: "One unified platform for hire-to-retire — every workflow connected, zero data silos.",
    metric: "12hrs",
    metricLabel: "saved weekly",
  },
  {
    icon: TrendingDown,
    pain: "Slow, biased resume screening",
    loss: "Top talent accepts competitor offers while recruiters manually sift through hundreds of PDFs.",
    gain: "AI conducts adaptive video & voice interviews in minutes — top 5% routed straight to managers.",
    metric: "3.5x",
    metricLabel: "faster hiring",
  },
  {
    icon: EyeOff,
    pain: "Lost silver-medalist candidates",
    loss: "Great candidates who finished #2 are forgotten forever in dead ATS databases.",
    gain: "Hireytics Recall automatically reactivates past runners-up when new matching roles open.",
    metric: "40%",
    metricLabel: "inbound reuse",
  },
];

const comparisons = [
  {
    feature: "Candidate Screening Velocity",
    legacy: "2-3 weeks manual scheduling & screening calls",
    hireytics: "Under 15 minutes with Autonomous AI Agents",
    advantage: true,
  },
  {
    feature: "Past Talent Pool Reactivation",
    legacy: "Forgotten resumes locked in static database",
    hireytics: "Hireytics Recall engine with auto-matching",
    advantage: true,
  },
  {
    feature: "Technical & Behavioral Benchmarking",
    legacy: "Uncalibrated notes & subjective interviewer bias",
    hireytics: "Standardized rubrics + live code sandbox",
    advantage: true,
  },
  {
    feature: "ATS & HRIS Integration",
    legacy: "Costly custom engineering or manual copy-pasting",
    hireytics: "1-Click two-way sync (Greenhouse, Lever, Ashby)",
    advantage: true,
  },
];

export default function ValueProposition() {
  return (
    <section id="why-hireytics" className="section-block bg-slate-50/80 py-24 sm:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Why Hireytics"
          title="Engineered for high-velocity teams who refuse slow, fragmented hiring"
          description="Traditional hiring software was built for compliance and filing. Hireytics is built for autonomous velocity, deep recall intelligence, and precision evaluation."
        />

        {/* 3 Core Pain vs Gain Cards */}
        <StaggerContainer className="grid gap-8 lg:grid-cols-3 mt-14">
          {pains.map((item) => (
            <StaggerItem key={item.pain}>
              <div className="group flex h-full flex-col rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-slate-400/60 hover:shadow-xl hover:shadow-slate-300/20">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-sm">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-extrabold text-black font-mono">{item.metric}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      {item.metricLabel}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-red-50/60 border border-red-100 p-3.5 mb-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                    <XCircle className="h-3.5 w-3.5 shrink-0" />
                    The Legacy Problem
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-slate-900">{item.pain}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">{item.loss}</p>
                </div>

                <div className="my-2 flex items-center justify-center">
                  <div className="h-6 w-px bg-slate-200" />
                </div>

                <div className="rounded-xl bg-emerald-50/70 border border-emerald-100 p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                      The Hireytics Edge
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-800 font-medium">
                      {item.gain}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Why Hireytics vs Traditional ATS Comparison Table */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                  <Sparkles className="h-3.5 w-3.5 text-black" />
                  Side-by-Side Comparison
                </span>
                <h3 className="mt-1 text-2xl font-bold text-slate-900">
                  How Hireytics outpaces conventional recruiting software
                </h3>
              </div>
              <Link
                href="/onboarding"
                className="inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-xs font-bold text-white transition-transform hover:scale-105"
              >
                Experience the difference
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase text-[11px] tracking-wider">
                    <th className="pb-4 pl-2 font-semibold">Capability</th>
                    <th className="pb-4 px-4 font-semibold text-slate-400">Legacy ATS Platforms</th>
                    <th className="pb-4 px-4 font-bold text-black bg-slate-50/90 rounded-t-xl">
                      Hireytics Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisons.map((c, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 pl-2 font-bold text-slate-900 sm:w-1/3">
                        {c.feature}
                      </td>
                      <td className="py-4 px-4 text-slate-500 sm:w-1/3">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-slate-400 shrink-0" />
                          <span>{c.legacy}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-900 bg-slate-50/90 sm:w-1/3">
                        <div className="flex items-center gap-2 text-black">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{c.hireytics}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>

        {/* Metrics Strip */}
        <FadeIn delay={0.3} className="mt-10">
          <div className="rounded-3xl border border-slate-900 bg-black text-white p-8 md:p-10 shadow-xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-800">
              {[
                { value: "250+", label: "High-growth teams onboarded", icon: Users },
                { value: "12 mins", label: "Average screening duration", icon: Clock },
                { value: "99.4%", label: "Interviewer rubric accuracy", icon: BrainCircuit },
                { value: "70%", label: "Reduction in recruiting overhead", icon: Zap },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className={`text-center ${i !== 0 ? "lg:px-6" : "lg:pr-6"}`}>
                    <Icon className="mx-auto h-5 w-5 text-slate-400 mb-2" />
                    <p className="text-3xl font-extrabold text-white font-mono md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-slate-400 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
