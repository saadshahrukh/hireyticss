import React from "react";
import Link from "next/link";
import { Brain, Sparkles, ArrowRight, MessageSquareQuote, CheckCircle2 } from "lucide-react";

interface RecallContextCalloutProps {
  stage: string;
  headline?: string;
  description: string;
  exampleQuery?: string;
  badge?: string;
  className?: string;
}

export default function RecallContextCallout({
  stage,
  headline,
  description,
  exampleQuery = "Recall, compare this candidate's live voice screening responses to our benchmark Senior Engineer rubrics from Q3.",
  badge = "Institutional Candidate Memory & AI HR Chatbot",
  className = "",
}: RecallContextCalloutProps) {
  return (
    <div
      className={`my-12 overflow-hidden rounded-2xl border border-indigo-200/90 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/50 p-6 sm:p-8 shadow-[0_10px_35px_-10px_rgba(79,70,229,0.1)] transition-all hover:border-indigo-300 ${className}`}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-indigo-700 shadow-2xs">
            <Brain className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
            <span>{badge}</span>
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {headline || `How Recall Powers ${stage}`}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            {description}
          </p>

          {exampleQuery && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-indigo-100 bg-white/80 p-3.5 text-xs text-slate-700 shadow-2xs">
              <MessageSquareQuote className="h-4 w-4 shrink-0 text-indigo-600 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-900">Live Recruiter Prompt: </span>
                <span className="italic text-slate-600">"{exampleQuery}"</span>
              </div>
            </div>
          )}
        </div>

        <div className="shrink-0 flex flex-col items-start lg:items-end gap-2.5">
          <Link
            href="/recall"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:brightness-110 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            <span>Explore Recall AI HR Chatbot & Candidate Memory Engine</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] font-medium text-slate-600 flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            Zero hallucinations • Grounded in tenant data
          </span>
        </div>
      </div>
    </div>
  );
}
