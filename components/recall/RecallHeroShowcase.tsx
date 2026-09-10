"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Mail,
  Calendar,
  FileText,
  MoreHorizontal,
  MapPin,
  Plus,
  MessageSquare,
  CheckCircle2,
  Sparkles,
  Send,
  Layers,
  Bot,
} from "lucide-react";

export default function RecallHeroShowcase() {
  const [activeTab, setActiveTab] = useState<"profile" | "timeline" | "evaluation">("timeline");

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Outer lush ambient gradient background frame inspired directly by Workable */}
      <div
        className="relative overflow-hidden rounded-[36px] p-4 sm:p-7 transition-all duration-700 shadow-[0_30px_70px_-20px_rgba(30,50,40,0.22)]"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(130, 180, 120, 0.45), transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(160, 80, 180, 0.35), transparent 55%), radial-gradient(ellipse at 50% 90%, rgba(240, 180, 90, 0.35), transparent 60%), linear-gradient(145deg, #cbd5c5 0%, #d8dcd3 40%, #e2ded7 100%)",
        }}
      >
        {/* Floating 3D Brand Badge Overlapping the Top */}
        <div className="relative -mt-10 sm:-mt-12 mx-auto mb-4 flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-[24px] border border-white/90 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-3 shadow-[0_16px_36px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-300 hover:scale-105">
          <Image
            src="/recall.png"
            alt="Recall Brain Logo"
            width={48}
            height={48}
            className="h-full w-full object-contain"
          />
          <div className="absolute -bottom-1 right-2 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-xs" />
        </div>

        {/* Top Profile Frosted Glassmorphism Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-md">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center gap-3.5">
              {/* Candidate Avatar */}
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Maya Evans"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading text-lg font-bold text-slate-900">Maya Evans</h3>
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700 border border-emerald-200">
                    94% Fit
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-600">Financial Analyst at Amber & Co</p>
                <p className="text-[11px] text-slate-400">
                  Amber & Co (2019 - now) • University of Manchester (Alliance Business)
                </p>
              </div>
            </div>

            {/* Top Right Actions */}
            <div className="flex items-center gap-1 rounded-lg border border-slate-200/80 bg-white/80 p-1 text-slate-500 shadow-2xs">
              <button className="p-1.5 hover:text-slate-900 transition">
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 hover:text-slate-900 transition">
                <Mail className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 hover:text-slate-900 transition">
                <FileText className="h-3.5 w-3.5" />
              </button>
              <button className="p-1.5 hover:text-slate-900 transition">
                <Calendar className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-3.5 flex flex-wrap items-center gap-2 text-xs">
            <span className="flex items-center gap-1 rounded-md bg-slate-100/90 px-2.5 py-1 text-slate-600 font-medium">
              <MapPin className="h-3 w-3 text-slate-400" /> Manchester, United Kingdom
            </span>
            <button className="flex items-center gap-1 rounded-md border border-dashed border-slate-300 px-2 py-1 text-[11px] font-semibold text-slate-500 hover:border-slate-400 hover:text-slate-800 transition">
              <Plus className="h-3 w-3" /> add tag
            </button>
          </div>
        </div>

        {/* Lower Timeline & Activity Feed Glass Card */}
        <div className="mt-3.5 overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] backdrop-blur-md">
          {/* Segmented Tab Navigation */}
          <div className="flex items-center gap-1.5 border-b border-slate-200/70 pb-3 text-xs font-semibold">
            <button
              onClick={() => setActiveTab("profile")}
              className={`rounded-lg px-3 py-1.5 transition ${
                activeTab === "profile"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100/70"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("timeline")}
              className={`rounded-lg px-3 py-1.5 transition ${
                activeTab === "timeline"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100/70"
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setActiveTab("evaluation")}
              className={`rounded-lg px-3 py-1.5 transition ${
                activeTab === "evaluation"
                  ? "bg-slate-900 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100/70"
              }`}
            >
              Evaluation
            </button>

            <span className="ml-auto rounded bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-sky-800">
              Recall Live Sync
            </span>
          </div>

          {/* Activity Timeline Feed */}
          <div className="mt-4 space-y-3.5 text-xs">
            {/* Event 1: AI Agent comment */}
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-2xs text-[11px] font-bold">
                <Bot className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <strong className="font-bold text-slate-900">AI Agent</strong> added a comment • Visible to Hiring Managers
                  <span className="text-slate-400">• 48m ago</span>
                </div>
                <div className="mt-1 rounded-xl bg-slate-50/80 p-2.5 text-slate-700 border border-slate-100">
                  <span className="font-semibold text-sky-700">@Saad</span> this candidate&apos;s evaluation is completed with 94% alignment. Ready for immediate offer review.
                </div>
              </div>
            </div>

            {/* Event 2: Stage transition */}
            <div className="flex items-start gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 text-xs">
                <Layers className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <span>Moved to <strong className="text-slate-800">Assessment & Offer</strong> by AI Agent</span>
                  <span className="text-slate-400">• 48m ago</span>
                </div>
              </div>
            </div>

            {/* Event 3: Candidate message */}
            <div className="flex items-start gap-3">
              <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full border border-white shadow-2xs">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                  alt="Maya Evans"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                  <strong className="font-bold text-slate-900">Maya Evans</strong> replied via voice interview
                  <span className="text-slate-400">• 47m ago</span>
                </div>
                <p className="mt-1 text-slate-600 leading-relaxed italic bg-slate-50/50 p-2 rounded-lg border border-slate-100">
                  &ldquo;I&apos;m familiar with financial planning tools like Adaptive Insights, which I used for multi-currency budgeting and quarterly board reporting.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Quick Recall Query Bottom Bar */}
          <div className="mt-4 rounded-xl border border-slate-200/90 bg-white/95 p-2 shadow-2xs">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-pink-50 p-1 border border-pink-200">
                <Image src="/recall.png" alt="Recall" width={14} height={14} />
              </div>
              <span className="flex-1 text-[11.5px] text-slate-400">
                Ask Recall about Maya&apos;s background...
              </span>
              <button className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white hover:bg-black">
                <Send className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
