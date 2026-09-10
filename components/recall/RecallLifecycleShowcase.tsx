"use client";

import Image from "next/image";
import { CheckCircle2, ArrowRight, UserCheck, MessageSquare, Award, Sparkles, FileSpreadsheet, UserPlus } from "lucide-react";

export default function RecallLifecycleShowcase() {
  const steps = [
    {
      stage: "1. Requisition Setup",
      sub: "UI/UX Designer • Full-time",
      recallNote: "Recall analyzed JD requirements & generated customized screening rubric.",
      icon: FileSpreadsheet,
      active: true,
      tag: "Configured",
    },
    {
      stage: "2. Resume Ingestion",
      sub: "128 applicants parsed",
      recallNote: "Recall auto-matched top 15 profiles with >85% semantic relevancy.",
      icon: UserCheck,
      active: true,
      tag: "Top 15 Ranked",
    },
    {
      stage: "3. AI Voice Interview",
      sub: "45-min technical session",
      recallNote: "Recall extracted 6 verified skill quotes regarding Figma & user testing.",
      icon: MessageSquare,
      active: true,
      tag: "Score 8.8/10",
    },
    {
      stage: "4. Offer & Onboarding",
      sub: "Package: $84,000 agreed",
      recallNote: "Recall transferred interview strengths directly into 90-day onboarding goals.",
      icon: UserPlus,
      active: true,
      tag: "Hired",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:p-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-pink-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-pink-700">
              Connected Lifecycle
            </span>
            <span className="text-xs text-slate-400">• Continuous Candidate Memory</span>
          </div>
          <h4 className="mt-1 text-sm font-bold text-slate-900">Context Flows Forward Through Every Stage</h4>
        </div>
        <div className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 sm:flex">
          <Sparkles className="h-3.5 w-3.5 text-pink-500" />
          <span>Zero Context Loss</span>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.stage}
              className="relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/50 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-2xs">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                    {s.tag}
                  </span>
                </div>
                <h5 className="mt-3 text-xs font-bold text-slate-900">{s.stage}</h5>
                <p className="text-[11px] font-medium text-slate-500">{s.sub}</p>

                <div className="mt-3 rounded-lg border border-slate-200 bg-white p-2.5 shadow-2xs">
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-800">
                    <Image src="/recall.png" alt="Recall" width={12} height={12} />
                    <span>Recall Memory:</span>
                  </div>
                  <p className="mt-1 text-[10.5px] leading-relaxed text-slate-600">{s.recallNote}</p>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="mt-3 hidden justify-end lg:flex">
                  <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
