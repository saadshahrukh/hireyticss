"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Brain,
  GitBranch,
  Rocket,
  LayoutDashboard,
  ChevronRight,
} from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";

const steps = [
  {
    id: 1,
    icon: FileText,
    title: "Post & Invite",
    short: "Create a role, share one link",
    description:
      "Publish your job in seconds. Hireytics generates a unique interview link — candidates apply and record responses without scheduling headaches.",
    outcome: "No more back-and-forth emails to set up first-round screens.",
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Evaluates",
    short: "Every candidate scored objectively",
    description:
      "Our AI analyzes interview transcripts for technical depth, communication clarity, and problem-solving — producing a score out of 10 with a clear recommendation.",
    outcome: "Your team reviews insights, not hours of raw video footage.",
  },
  {
    id: 3,
    icon: GitBranch,
    title: "Auto-Route",
    short: "Qualified talent moves forward instantly",
    description:
      "Candidates scoring above your threshold are automatically queued for the HR round with a meeting link generated — no manual spreadsheet tracking.",
    outcome: "Top talent never slips through while waiting for someone to follow up.",
  },
  {
    id: 4,
    icon: Rocket,
    title: "Onboard in Clicks",
    short: "From offer to day-one, automated",
    description:
      "Start onboarding with one button. Documents are requested, employee records created, and welcome credentials sent — all through a guided wizard.",
    outcome: "New hires are productive faster; HR stops chasing paperwork.",
  },
  {
    id: 5,
    icon: LayoutDashboard,
    title: "Manage & Insight",
    short: "One portal for the full lifecycle",
    description:
      "Employees access payroll, leave, and performance KPIs. Leaders see hiring velocity, cost-per-hire, and workforce health on live dashboards.",
    outcome: "Decisions backed by data — from first interview to quarterly review.",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const safeActive = active < 0 ? 0 : active;
  const current = steps[safeActive];

  return (
    <section id="how-it-works" className="section-block overflow-hidden">
      <div className="section-container">
        <SectionHeader
          eyebrow="How It Works"
          title="From job post to productive employee — five connected steps"
          description="No gaps, no manual handoffs. Every stage flows into the next so your team focuses on people, not process."
        />

        <FadeIn>
          {/* Desktop stepper */}
          <div className="hidden lg:block">
            <div className="relative flex items-start justify-between gap-2">
              <div className="absolute left-0 right-0 top-7 h-0.5 bg-slate-100" />
              <motion.div
                className="absolute top-7 h-0.5 brand-gradient origin-left"
                initial={false}
                animate={{
                  width: `${(safeActive / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              />

              {steps.map((step, i) => {
                const isActive = i === active && active >= 0;
                const isPast = i < safeActive;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className="relative z-10 flex flex-1 flex-col items-center px-2"
                  >
                    <motion.div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 transition-colors duration-300 ${
                        isActive
                          ? "border-transparent brand-gradient text-white shadow-lg shadow-blue-500/25"
                          : isPast
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-white text-slate-400"
                      }`}
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <step.icon className="h-5 w-5" />
                    </motion.div>
                    <p
                      className={`mt-4 text-center text-sm font-semibold transition-colors ${
                        isActive ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="mt-1 hidden text-center text-xs text-slate-400 xl:block">
                      {step.short}
                    </p>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={safeActive}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="mt-14 rounded-2xl border border-slate-200/80 bg-white p-10 shadow-sm"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl brand-gradient text-white">
                    <current.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                      Step {current.id} of {steps.length}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-slate-900">
                      {current.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                      {current.description}
                    </p>
                    <div className="mt-6 rounded-xl brand-gradient-subtle px-5 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        <span className="font-bold text-blue-700">Result: </span>
                        {current.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile accordion */}
          <div className="space-y-3 lg:hidden">
            {steps.map((step, i) => {
              const isOpen = i === active && active >= 0;
              return (
                <div
                  key={step.id}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 bg-white shadow-md shadow-blue-500/5"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? -1 : i)}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        isOpen
                          ? "brand-gradient text-white"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-blue-600">
                        Step {step.id}
                      </p>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-slate-100 px-5 pb-5 pt-2">
                          <p className="text-sm leading-relaxed text-slate-600">
                            {step.description}
                          </p>
                          <p className="mt-4 rounded-lg brand-gradient-subtle px-4 py-3 text-sm text-slate-700">
                            <span className="font-bold text-blue-700">Result: </span>
                            {step.outcome}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
