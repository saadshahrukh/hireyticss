"use client";

import Image from "next/image";
import { Database, Network, Sparkles, FileText, CheckCircle2, ShieldCheck, ArrowRight, Layers, Bot } from "lucide-react";

export default function RecallEngineArchitecture() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:p-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-pink-100 bg-pink-50 p-1">
            <Image src="/recall.png" alt="Recall" width={20} height={20} className="h-full w-full object-contain" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Recall Intelligence Architecture</h4>
            <p className="text-[11px] text-slate-500">Live Context Reasoning Engine</p>
          </div>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10.5px] font-semibold text-emerald-700">
          <ShieldCheck className="h-3 w-3" /> Grounded in Records
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {/* Step 1: Input Ingestion */}
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 transition hover:border-slate-300">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-2xs">
              01 • INGEST
            </span>
            <Database className="h-4 w-4 text-slate-400" />
          </div>
          <h5 className="mt-3 text-xs font-bold text-slate-900">Structured & Unstructured Data</h5>
          <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600">
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>Resume parsed tokens (PDF/DOCX)</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span>AI voice interview transcripts</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Interviewer scorecard ratings</span>
            </li>
          </ul>
        </div>

        {/* Step 2: Semantic Graph */}
        <div className="relative rounded-xl border border-sky-200 bg-sky-50/40 p-4 shadow-2xs transition hover:border-sky-300">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-700">
              02 • RECALL
            </span>
            <Network className="h-4 w-4 text-sky-600" />
          </div>
          <h5 className="mt-3 text-xs font-bold text-sky-950">Semantic Context Graph</h5>
          <p className="mt-1 text-[11px] leading-relaxed text-sky-800">
            Links skills, salary expectations, role requirements, and interview quotes into a unified hiring vector index.
          </p>
          <div className="mt-2 rounded-lg border border-sky-200/70 bg-white/90 p-2 text-[10px] font-medium text-sky-900">
            Node: Marcus Vance ↔ PostgreSQL ↔ Senior Match (92%)
          </div>
        </div>

        {/* Step 3: Verified Inference */}
        <div className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-4 transition hover:border-slate-300">
          <div className="flex items-center justify-between">
            <span className="rounded-md bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500 shadow-2xs">
              03 • REASON
            </span>
            <Bot className="h-4 w-4 text-emerald-600" />
          </div>
          <h5 className="mt-3 text-xs font-bold text-slate-900">Cited Rationale Output</h5>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
            Generates natural responses with clickable proof citations directly linked to the candidate&apos;s interview transcript.
          </p>
          <div className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-emerald-700">
            <CheckCircle2 className="h-3 w-3 shrink-0" /> Zero hallucination; zero guesswork
          </div>
        </div>
      </div>
    </div>
  );
}
