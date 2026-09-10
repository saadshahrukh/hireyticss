"use client";

import Image from "next/image";
import { ChevronDown, Plus, Send, Search, Bell, Moon, Crown, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function RecallChatExperienceShowcase() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900/[0.02] shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
      {/* Background soft gradient halo */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0,130,155,0.4) 0%, rgba(217,70,239,0.3) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Top Application Header Bar matching Hireytics */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Image src="/logo-icon.png" alt="Hireytics Logo" width={22} height={22} className="h-5 w-5 object-contain" />
            <span className="font-heading text-sm font-bold tracking-tight text-slate-900">Hireytics</span>
          </div>

          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-400 sm:flex">
            <Search className="h-3 w-3 text-slate-400" />
            <span>Search candidates, jobs, questions...</span>
            <kbd className="rounded border border-slate-200 bg-white px-1 text-[10px] font-semibold text-slate-500">⌘K</kbd>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-1 rounded-md bg-purple-50 px-2.5 py-1 text-[11px] font-semibold text-purple-700 sm:flex">
            <Crown className="h-3 w-3" /> Custom Plan
          </button>
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs">
            <Moon className="h-3.5 w-3.5" />
          </div>
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-2xs">
            <Bell className="h-3.5 w-3.5" />
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
          </div>
          <div className="flex items-center gap-2 pl-1">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-white">
              S
            </div>
            <div className="hidden text-left leading-tight sm:block">
              <div className="text-xs font-semibold text-slate-800">Saad Shahrukh</div>
              <div className="text-[10px] text-slate-400">Ceo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="grid grid-cols-1 bg-white lg:grid-cols-[1fr_240px]">
        {/* Chat Area */}
        <div className="flex flex-col justify-between p-4 sm:p-6">
          <div className="space-y-5">
            {/* Recall Title Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-heading text-sm font-bold text-slate-900">Recall</span>
                <span className="rounded-md bg-sky-100 px-2 py-0.5 text-[10px] font-bold text-sky-700">
                  BRAIN
                </span>
              </div>
              <div className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600">
                <span>Claude 3.5 Sonnet</span>
                <ChevronDown className="h-3 w-3 text-slate-400" />
              </div>
            </div>

            {/* Candidate Prompt Bubble */}
            <div className="flex justify-end">
              <div className="max-w-[90%] rounded-2xl rounded-tr-xs bg-[#00829B] px-4 py-2.5 text-white shadow-xs">
                <p className="text-xs font-medium leading-relaxed sm:text-[13px]">
                  Compare between Saad & David for this Role should i move forward with and why ?
                </p>
              </div>
            </div>

            {/* Assistant Reasoning Response */}
            <div className="flex items-start gap-3">
              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-pink-100 bg-pink-50 p-1 shadow-2xs">
                <Image src="/recall.png" alt="Recall" width={18} height={18} className="h-full w-full object-contain" />
              </div>

              <div className="min-w-0 flex-1 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-900 sm:text-sm">Recall Assistant</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                    Thought for a few seconds
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-700 sm:text-[13px]">
                  <strong className="font-semibold text-slate-900">David Miller</strong> is the stronger choice for the Full Stack Developer position due to his higher JD match score of 88%, which indicates a better alignment with the job requirements. Both candidates received the same interview evaluation score of 7.2/10, but David&apos;s deeper backend capabilities in PostgreSQL & distributed microservices provide higher confidence.
                </p>

                {/* Structured Comparison Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 bg-slate-50/50">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/70 text-[11px] font-semibold text-slate-600">
                        <th className="px-3 py-2">EVALUATION DIMENSION</th>
                        <th className="px-3 py-2 text-sky-800">DAVID MILLER</th>
                        <th className="px-3 py-2 text-slate-600">SAAD</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/70 text-[12px]">
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">JD Match Score</td>
                        <td className="px-3 py-2 font-bold text-sky-700">88% (High Alignment)</td>
                        <td className="px-3 py-2 text-slate-600">63% (Partial Alignment)</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">Core Strengths</td>
                        <td className="px-3 py-2 text-slate-700">Python, Django, React, PostgreSQL, Docker</td>
                        <td className="px-3 py-2 text-slate-600">JavaScript, React, Node.js, CSS, Agile</td>
                      </tr>
                      <tr>
                        <td className="px-3 py-2 font-medium text-slate-700">Voice Interview</td>
                        <td className="px-3 py-2 text-slate-700">7.2/10 (High Technical Depth)</td>
                        <td className="px-3 py-2 text-slate-600">7.2/10 (Strong Presentation)</td>
                      </tr>
                      <tr className="bg-sky-50/40">
                        <td className="px-3 py-2 font-semibold text-slate-900">Recommendation</td>
                        <td className="px-3 py-2 font-semibold text-emerald-600">✓ Advance to Technical Round</td>
                        <td className="px-3 py-2 text-slate-500">Retain in Talent Pool for UI roles</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Chat Bar */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-2">
            <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-2xs">
              <Plus className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                readOnly
                placeholder="Ask Recall anything about hiring..."
                className="flex-1 bg-transparent text-xs text-slate-700 outline-hidden placeholder:text-slate-400"
              />
              <button className="flex h-6 w-6 items-center justify-center rounded-md bg-[#00829B] text-white">
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Drawer: Recent Sessions (Desktop) */}
        <div className="hidden border-l border-slate-200 bg-slate-50/50 p-4 lg:flex lg:flex-col lg:justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>RECENT SESSIONS</span>
            </div>

            <div className="mt-3 space-y-1.5 text-xs">
              <div className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100">
                <div className="font-medium text-slate-800">New Hiring Session</div>
                <div className="text-[10px] text-slate-400">01:06 AM</div>
              </div>
              <div className="rounded-lg border border-sky-200 bg-sky-50/70 p-2 text-sky-900">
                <div className="font-semibold">Compare between Saad ...</div>
                <div className="text-[10px] text-sky-600">01:07 AM • Active</div>
              </div>
              <div className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100">
                <div className="font-medium text-slate-800">Full Stack Shortlist</div>
                <div className="text-[10px] text-slate-400">Yesterday</div>
              </div>
            </div>
          </div>

          <button className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50">
            <Plus className="h-3.5 w-3.5" /> New Session
          </button>
        </div>
      </div>
    </div>
  );
}
