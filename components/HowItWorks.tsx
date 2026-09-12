"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Brain,
  Rocket,
  UserCheck,
  Mic,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  Send,
  Plus,
  SlidersHorizontal,
  Mail,
  Calendar,
  MoreHorizontal,
  MapPin,
  Bot,
  Layers,
  Sparkles,
  Share2,
  Copy,
} from "lucide-react";
import Image from "next/image";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";

interface StepFlow {
  id: number;
  icon: React.ElementType;
  title: string;
  tag: string;
  shortSummary: string;
  outcomeBadge: string;
  renderMockup: () => React.ReactNode;
}

export default function HowItWorks() {
  const [active, setActive] = useState(0);

  const steps: StepFlow[] = [
    {
      id: 1,
      icon: FileText,
      title: "Requisition & JD Setup",
      tag: "01 • REQUISITION",
      shortSummary:
        "AI drafts structured job descriptions, customized screening rubrics, and generates branded candidate voice interview links in seconds.",
      outcomeBadge: "Zero manual JD drafting",
      renderMockup: () => <MockupRequisition />,
    },
    {
      id: 2,
      icon: UserCheck,
      title: "Smart CV Screening",
      tag: "02 • OCR SCREENING",
      shortSummary:
        "Bulk parse resumes from inboxes and job boards with AI OCR. Candidates are instantly ranked by verified skill alignment.",
      outcomeBadge: "Filter 200+ resumes in <60s",
      renderMockup: () => <MockupScreening />,
    },
    {
      id: 3,
      icon: Mic,
      title: "AI Voice Interviews",
      tag: "03 • VOICE AGENT",
      shortSummary:
        "Candidates complete structured conversational voice interviews on demand. AI evaluates technical depth and communication in real time.",
      outcomeBadge: "100% interview coverage",
      renderMockup: () => <MockupVoiceInterview />,
    },
    {
      id: 4,
      icon: Brain,
      title: "Recall Intelligence",
      tag: "04 • RECALL",
      shortSummary:
        "Ask plain-language questions across candidate transcripts, resumes, and interview feedback with side-by-side comparison tables.",
      outcomeBadge: "Zero guesswork or hallucination",
      renderMockup: () => <MockupRecallDecision />,
    },
    {
      id: 5,
      icon: Rocket,
      title: "Offer & Onboarding",
      tag: "05 • ONBOARDING",
      shortSummary:
        "Execute digital offers and automatically create employee records. Recall carries forward interview strengths into 90-day goals.",
      outcomeBadge: "Instant day-one handoff",
      renderMockup: () => <MockupOnboardingHandoff />,
    },
  ];

  const current = steps[active] || steps[0];

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-50/60 py-20 lg:py-28">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 130, 155, 0.16) 0%, rgba(217, 70, 239, 0.12) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container max-w-7xl">
        <SectionHeader
          eyebrow="Connected Workflow"
          title="From job requisition to productive hire five connected steps"
          description="Every hiring stage feeds context forward into the next. Recall maintains institutional candidate memory so your team makes faster, data-backed decisions."
        />

        <FadeIn className="mt-12">
          {/* Layout matching user sketch: Left step selector pills, Right card with top text & bottom Workable UI */}
          <div className="grid gap-6 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr]">
            {/* Left Vertical Step Selector */}
            <div className="flex flex-col gap-2 rounded border border-slate-200/90 bg-white p-3 shadow-xs">
              <div className="px-3 pt-2 pb-1">
                <span className="font-utility text-[10.5px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Talent Lifecycle Stages
                </span>
              </div>

              {steps.map((step, i) => {
                const isActive = i === active;
                const Icon = step.icon;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-3.5 rounded-xl p-3 text-left transition-all duration-300 ${
                      isActive
                        ? "border border-slate-900 bg-slate-900 text-white shadow-md shadow-slate-900/15"
                        : "border border-transparent bg-slate-50/60 text-slate-700 hover:border-slate-200 hover:bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "border-white/20 bg-white/15 text-white"
                          : "border-slate-200 bg-white text-slate-600 group-hover:border-slate-300 group-hover:text-slate-900 shadow-2xs"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-utility text-[9.5px] font-bold uppercase tracking-wider ${
                            isActive ? "text-sky-300" : "text-slate-400"
                          }`}
                        >
                          {step.tag}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
                        )}
                      </div>
                      <p
                        className={`text-xs font-bold leading-snug sm:text-[13px] ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Container: Summarized Text on Top + Authentic Workable-Styled UI on Bottom */}
            <div className="flex flex-col justify-between rounded border border-slate-200/90 bg-white pr-0 pl-6 pt-6  shadow-sm sm:px-7 sm:pt-7 sm:pr-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-5"
                >
                  {/* Top Text Summary Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                    <div className="max-w-xl">
                      <div className="flex items-center gap-2">
                        <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-800">
                          {current.tag}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">• Software Execution</span>
                      </div>
                      <h3 className="mt-1.5 font-heading text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                        {current.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-600">
                        {current.shortSummary}
                      </p>
                    </div>

                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                      ✓ {current.outcomeBadge}
                    </div>
                  </div>

                  {/* Bottom Workable-Styled Software UI Card with Gradient Aura */}
                  <div>
                    {current.renderMockup()}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* =========================================================================
   AUTHENTIC WORKABLE-STYLED SOFTWARE MOCKUPS WITH GRADIENT AURAS & AVATARS
   ========================================================================= */

/* 1. Requisition Setup Mockup */
function MockupRequisition() {
  return (
    <div
      className="relative overflow-hidden  border-t-1 border-l-1  rounded-t-[28px] rounded-r-[0px] rounded-t-[28px] p-4 sm:p-6"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgba(14, 165, 233, 0.25), transparent 50%), radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.2), transparent 50%), linear-gradient(135deg, #e0f2fe 0%, #f0fdf4 50%, #fdf4ff 100%)",
      }}
    >
      <div className="rounded-2xl border border-white/80 bg-white/85 p-4 sm:p-5 shadow-sm backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-xs shadow-xs">
              JD
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Senior Full Stack Engineer</div>
              <div className="text-[10.5px] text-slate-500">Requisition #REQ-409 • Remote / Hybrid</div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-700 border border-emerald-200">
            ● Active Requisition
          </span>
        </div>

        <div className="mt-3.5 grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-2xs">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">
              AI-Generated Screening Rubric
            </span>
            <div className="mt-2 space-y-1.5 text-[11px] text-slate-700">
              <div className="flex items-center justify-between rounded-md bg-slate-50 p-1.5">
                <span>React 19 & TypeScript Architecture</span>
                <span className="font-bold text-sky-700">Weight 35%</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-slate-50 p-1.5">
                <span>PostgreSQL Scaling & Distributed APIs</span>
                <span className="font-bold text-sky-700">Weight 35%</span>
              </div>
              <div className="flex items-center justify-between rounded-md bg-slate-50 p-1.5">
                <span>System Design & Cloud Deployment</span>
                <span className="font-bold text-sky-700">Weight 30%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl border border-sky-200/80 bg-sky-50/60 p-3">
            <div>
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-sky-800">
                Candidate Audio Application Link
              </span>
              <div className="mt-1.5 flex items-center justify-between rounded-lg border border-sky-200 bg-white px-2.5 py-1.5 text-[11px] text-slate-700 shadow-2xs">
                <span className="truncate font-mono text-[10.5px]">app.hireytics.com/apply/req-409</span>
                <button className="flex items-center gap-1 text-sky-700 hover:text-sky-900 font-semibold text-[10.5px]">
                  <Copy className="h-3 w-3" /> Copy
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between pt-1">
              <span className="text-[10px] text-slate-500">AI Agent: Ready for applicants</span>
              <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-black">
                Publish Requisition →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 2. Smart CV Screening Mockup */
function MockupScreening() {
  const applicants = [
    {
      name: "Marcus Vance",
      role: "Senior Full Stack Dev",
      exp: "5 yrs • React, Node, PostgreSQL",
      match: 92,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      status: "Auto-Invited to Voice Screen",
      passed: true,
    },
    {
      name: "David Miller",
      role: "Backend Architect",
      exp: "6 yrs • Python, Django, Docker",
      match: 88,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      status: "Auto-Invited to Voice Screen",
      passed: true,
    },
    {
      name: "Elena Vasquez",
      role: "UI Engineer",
      exp: "3 yrs • React, Tailwind",
      match: 65,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
      status: "Retained in Talent Pool",
      passed: false,
    },
  ];

  return (
    <div
      className="relative overflow-hidden border-t-1 border-l-1  rounded-t-[28px] rounded-r-[0px] rounded-t-[28px] p-4 sm:p-6"
      style={{
        background:
          "radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.22), transparent 50%), radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.25), transparent 50%), linear-gradient(135deg, #fae8ff 0%, #f0fdfa 50%, #eff6ff 100%)",
      }}
    >
      <div className="rounded-2xl border border-white/80 bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">AI Ingested Resumes (128 Candidates)</span>
            <span className="rounded bg-sky-100 px-1.5 py-0.5 text-[9.5px] font-bold text-sky-800">
              Bulk OCR Active
            </span>
          </div>
          <span className="text-[11px] text-slate-500">Auto-ranked by rubric</span>
        </div>

        <div className="mt-3 space-y-2">
          {applicants.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-2.5 shadow-2xs transition hover:border-slate-300"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 overflow-hidden rounded-full border border-slate-200">
                  <img src={c.avatar} alt={c.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-slate-900">{c.name}</span>
                    <span
                      className={`rounded px-1.5 py-0.2 text-[9.5px] font-bold ${
                        c.passed ? "bg-sky-100 text-sky-800" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {c.match}% Match
                    </span>
                  </div>
                  <p className="text-[10.5px] text-slate-500">{c.exp}</p>
                </div>
              </div>

              <div className="text-right">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                    c.passed
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {c.passed && <CheckCircle2 className="h-3 w-3" />}
                  {c.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* 3. AI Voice Interview Mockup (Workable Layout with Profile Card + Timeline Feed) */
function MockupVoiceInterview() {
  return (
    <div
      className="relative overflow-hidden border-t-1 border-l-1  rounded-t-[28px] rounded-r-[0px] rounded-t-[28px] p-4 sm:p-6"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(130, 180, 120, 0.4), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(160, 80, 180, 0.3), transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(240, 180, 90, 0.3), transparent 60%), linear-gradient(145deg, #d2d9cc 0%, #dedfda 50%, #e8e3dd 100%)",
      }}
    >
      <div className="grid gap-3">
        {/* Candidate Profile Header Card */}
        <div className="rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-2xs">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  alt="Maya Evans"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-slate-900">Maya Evans</h4>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.2 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                    94% Fit Score
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">Financial & Data Analyst • Manchester, UK</p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-400">
              <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                Live Voice Session
              </span>
            </div>
          </div>
        </div>

        {/* Activity & Voice Telemetry Card */}
        <div className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 text-[11px] font-semibold">
            <span className="rounded bg-slate-900 px-2 py-1 text-white">Timeline</span>
            <span className="px-2 py-1 text-slate-500">Evaluation (9.4/10)</span>
            <span className="ml-auto rounded bg-sky-100 px-2 py-0.5 text-[9.5px] font-bold text-sky-800">
              Voice Telemetry
            </span>
          </div>

          <div className="mt-3 space-y-2 text-xs">
            <div className="flex items-start gap-2.5">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white text-[10px] font-bold">
                AI
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] text-slate-500">
                  <strong className="text-slate-800">AI Voice Interviewer</strong> asked:
                </div>
                <p className="mt-0.5 rounded-lg bg-slate-50 p-2 text-slate-700 text-[11px]">
                  &ldquo;Describe how you built financial forecasting models across multi-currency operations.&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full border border-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                  alt="Maya"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10.5px] text-slate-500">
                  <strong className="text-slate-800">Maya Evans</strong> voice response (verified transcript):
                </div>
                <p className="mt-0.5 rounded-lg bg-slate-50/70 p-2 text-slate-600 italic text-[10.5px]">
                  &ldquo;I designed automated data pipelines in Adaptive Insights and Python, reducing variance from 8% to 1.5%.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 4. Recall Decision Matrix Mockup */
function MockupRecallDecision() {
  return (
    <div
      className="relative overflow-hidden border-t-1 border-l-1  rounded-t-[28px] rounded-r-[0px] rounded-t-[28px] p-4 sm:p-6"
      style={{
        background:
          "radial-gradient(circle at 10% 80%, rgba(2, 132, 199, 0.25), transparent 50%), radial-gradient(circle at 90% 20%, rgba(217, 70, 239, 0.25), transparent 50%), linear-gradient(135deg, #e0f2fe 0%, #fdf2f8 50%, #f0fdf4 100%)",
      }}
    >
      <div className="rounded-2xl border border-white/80 bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-pink-50 p-1 border border-pink-200">
              <Image src="/recall.png" alt="Recall" width={16} height={16} />
            </div>
            <span className="text-xs font-bold text-slate-900">Recall Intelligence Reasoning</span>
          </div>
          <span className="text-[10px] text-slate-500">Claude 3.5 Sonnet</span>
        </div>

        {/* User Prompt */}
        <div className="mt-3 flex justify-end">
          <div className="rounded-xl bg-[#00829B] px-3 py-1.5 text-white text-xs font-medium">
            Compare Marcus Vance vs Saad for Senior Full Stack role
          </div>
        </div>

        {/* Recall Comparative Matrix */}
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-[11px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-bold uppercase text-slate-500">
                <th className="px-3 py-1.5">Evaluation Dimension</th>
                <th className="px-3 py-1.5 text-sky-800">Marcus Vance (92%)</th>
                <th className="px-3 py-1.5 text-slate-600">Saad (65%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="px-3 py-1.5 font-medium">PostgreSQL Architecture</td>
                <td className="px-3 py-1.5 font-bold text-sky-700">Production Scaling (40k QPS)</td>
                <td className="px-3 py-1.5 text-slate-500">Basic CRUD Experience</td>
              </tr>
              <tr>
                <td className="px-3 py-1.5 font-medium">Voice Interview Depth</td>
                <td className="px-3 py-1.5 font-bold text-emerald-700">9.2 / 10 (High Confidence)</td>
                <td className="px-3 py-1.5 text-slate-500">7.2 / 10</td>
              </tr>
              <tr className="bg-sky-50/50 font-semibold">
                <td className="px-3 py-1.5 text-slate-900">Recommendation</td>
                <td className="px-3 py-1.5 text-emerald-700">✓ Advance to Final Offer</td>
                <td className="px-3 py-1.5 text-slate-500">Keep in Talent Pool</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* 5. Onboarding Handoff Mockup */
function MockupOnboardingHandoff() {
  return (
    <div
      className="relative overflow-hidden border-t-1 border-l-1  rounded-t-[28px] rounded-r-[0px] rounded-t-[28px] p-4 sm:p-6"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.22), transparent 50%), radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.2), transparent 50%), linear-gradient(135deg, #ecfdf5 0%, #eff6ff 50%, #f0fdf4 100%)",
      }}
    >
      <div className="rounded-2xl border border-white/80 bg-white/90 p-4 sm:p-5 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt="Marcus"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-slate-900">Marcus Vance • Hired</div>
              <div className="text-[10px] text-slate-500">Senior Full Stack Engineer • $92,000 / yr</div>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10.5px] font-bold text-emerald-800">
            Offer Signed ✓
          </span>
        </div>

        <div className="mt-3.5 grid gap-2.5 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">Step 1</span>
            <p className="mt-1 font-bold text-slate-900">E-Signature</p>
            <p className="text-[10.5px] text-slate-500">Contract executed digitally</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400">Step 2</span>
            <p className="mt-1 font-bold text-slate-900">Employee Profile</p>
            <p className="text-[10.5px] text-slate-500">ID #EMP-804 auto-created</p>
          </div>
          <div className="rounded-xl border border-sky-200 bg-sky-50/80 p-3">
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-sky-800">Step 3 • Recall</span>
            <p className="mt-1 font-bold text-slate-900">90-Day Goals</p>
            <p className="text-[10.5px] text-sky-900">Interview skills mapped to KPIs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
