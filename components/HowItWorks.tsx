"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Brain,
  GitBranch,
  Rocket,
  LayoutDashboard,
  CreditCard,
  Clock3,
  ShieldCheck,
  Sparkles,
  PieChart,
} from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";

const steps = [
  {
    id: 1,
    icon: CreditCard,
    title: "Post & Invite",
    short: "Create a role, share one link",
    description:
      "Publish your job in seconds. Hireytics generates a unique interview link — candidates apply and record responses without scheduling headaches.",
    outcome: "No more back-and-forth emails to set up first-round screens.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Evaluates",
    short: "Every candidate scored objectively",
    description:
      "Our AI analyzes interview transcripts for technical depth, communication clarity, and problem-solving — producing a score out of 10 with a clear recommendation.",
    outcome: "Your team reviews insights, not hours of raw video footage.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    icon: Clock3,
    title: "Auto-Route",
    short: "Qualified talent moves forward instantly",
    description:
      "Candidates scoring above your threshold are automatically queued for the HR round with a meeting link generated — no manual spreadsheet tracking.",
    outcome: "Top talent never slips through while waiting for someone to follow up.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Onboard in Clicks",
    short: "From offer to day-one, automated",
    description:
      "Start onboarding with one button. Documents are requested, employee records created, and welcome credentials sent — all through a guided wizard.",
    outcome: "New hires are productive faster; HR stops chasing paperwork.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    icon: PieChart,
    title: "Manage & Insight",
    short: "One portal for the full lifecycle",
    description:
      "Employees access payroll, leave, and performance KPIs. Leaders see hiring velocity, cost-per-hire, and workforce health on live dashboards.",
    outcome: "Decisions backed by data — from first interview to quarterly review.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const safeActive = active < 0 ? 0 : active;
  const current = steps[safeActive];

  return (
    <section id="how-it-works" className="section-block overflow-hidden bg-white/60 backdrop-blur-lg">
      <div className="section-container py-12">
        <SectionHeader
          eyebrow="How It Works"
          title="From job post to productive employee — five connected steps"
          description="No gaps, no manual handoffs. Every stage flows into the next so your team focuses on people, not process."
        />

        <FadeIn>
          <div className="grid  lg:grid-cols-[300px_1fr]">
            <div className="border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Software flow
              </p>
              <div className="mt-6 space-y-3">
                {steps.map((step, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={step.id}
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-start gap-4 rounded-xl border px-4 py-4 text-left transition duration-300 ${
                        isActive
                          ? "border-slate-400 bg-white shadow-md"
                          : "border-slate-200 bg-slate-50 hover:border-slate-400 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition text-sm font-semibold ${
                          isActive
                            ? "border-slate-900 bg-black text-white shadow-lg shadow-slate-300/20"
                            : "border-slate-200 bg-white text-slate-600 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white"
                        }`}
                      >
                        <step.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className={`text-sm font-semibold ${isActive ? "text-slate-900" : "text-slate-700"}`}>
                          {step.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">{step.short}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 px-8 py-7">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-700">Live demo preview</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    {current.title}
                  </h3>
                </div>
                <div className="grid gap-8 lg:grid-cols-[1fr_360px] px-8 py-8">
                  <div className="space-y-6">
                    <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                      <p className="text-base leading-relaxed text-slate-600">
                        {current.description}
                      </p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-100 p-6">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-800">
                        Outcome
                      </p>
                      <p className="mt-3 text-slate-700">{current.outcome}</p>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-100">
                    <img
                      src={current.image}
                      alt={`${current.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
