"use client";

import { 
  MoreHorizontal, 
  Plus, 
  Check, 
  Smartphone, 
  Layers, 
  Users, 
  ChevronLeft, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Brain,
  FileText,
  Mic,
  Search,
  Bot,
  Database,
  GitBranch,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { FadeIn } from "@/components/ui/Motion";
import Image from "next/image";

export default function WhyHireytics() {
  return (
    <section id="why-hireytics" className="relative section-block bg-[#FAF9F6] py-24 sm:py-32 overflow-hidden">
      <div className="section-container max-w-7xl">
        
        {/* ========================================================
            HEADER: MEET RECALL
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-3">
              MEET RECALL
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Stop searching. Start asking.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Hiring information shouldn’t feel scattered when you need to make a decision. Recall helps you find the context across your hiring process without jumping between records and tools.
            </p>
          </FadeIn>
        </div>

        {/* ========================================================
            MULTI-ROW BENTO GRID WITH RECALL AGENTIC PRODUCT UI
            ======================================================== */}
        <div className="mt-14 sm:mt-16 space-y-6 sm:space-y-8">
          
          {/* ----------------------------------------------------
              ROW 1: 01 — Too many tools
              (Left: Blurred Warm Atmospheric Frame with Connected Data Streams UI)
              (Right: Text Card)
              ---------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Visual Card 1: Warm Blurred Mesh Gradient Frame with Multi-Source Pipeline Streams */}
            <div 
              className="lg:col-span-7 rounded-[32px] p-6 sm:p-10 relative overflow-hidden flex items-center justify-center min-h-[380px] shadow-sm border border-slate-200/60"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 20%, rgba(205, 110, 55, 0.55), transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(115, 175, 140, 0.45), transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(235, 185, 105, 0.35), transparent 65%), linear-gradient(145deg, #a6ada2 0%, #b8beb3 45%, #cbbfae 100%)",
              }}
            >
              <div className="relative w-full max-w-md my-auto">
                {/* Frosted Glass Pipeline Window */}
                <div className="rounded-2xl border border-white/90 bg-white/95 p-5 sm:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.01]">
                  
                  {/* Card Sub-Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        LIVE HIRING STREAMS
                      </span>
                    </div>
                    <span className="rounded-full bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700">
                      5 Sources Unified
                    </span>
                  </div>

                  {/* Multi-Tool Connected Data Feed */}
                  <div className="mt-4 space-y-2.5">
                    
                    {/* Stream 1: Voice Interview */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-3 flex items-center justify-between shadow-2xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-600 border border-pink-100 font-bold">
                          <Mic className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">AI Voice Interview Transcript</p>
                          <p className="text-[10px] text-slate-400 truncate">45m session • System Design & Ruby</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full shrink-0">
                        Synced
                      </span>
                    </div>

                    {/* Stream 2: Assessment Scores */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-3 flex items-center justify-between shadow-2xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600 border border-sky-100 font-bold">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">Technical Assessment & Code</p>
                          <p className="text-[10px] text-slate-400 truncate">Score: 94/100 • Clean Architecture</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full shrink-0">
                        Synced
                      </span>
                    </div>

                    {/* Stream 3: ATS & Rubrics */}
                    <div className="rounded-xl border border-slate-100 bg-slate-50/90 p-3 flex items-center justify-between shadow-2xs">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 border border-amber-100 font-bold">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate">Greenhouse & Panel Rubric</p>
                          <p className="text-[10px] text-slate-400 truncate">3 Interviewer scorecards combined</p>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full shrink-0">
                        Synced
                      </span>
                    </div>

                  </div>
                </div>

                {/* Floating Recall Intelligence Engine Chip */}
                <div className="absolute -right-2 sm:-right-6 -bottom-6 rounded-2xl border border-white/95 bg-white p-3.5 sm:p-4 shadow-[0_16px_36px_rgba(0,0,0,0.16)] flex items-center gap-3 backdrop-blur-md">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-xs p-1.5 shrink-0">
                    <Image src="/recall.png" alt="Recall" width={24} height={24} className="object-contain" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">Recall Context Engine</h5>
                    <p className="text-[10px] text-slate-500">Continuous Cross-Tool Reasoning</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Card 1: 01 — Too many tools */}
            <div className="lg:col-span-5 rounded-[32px] border border-slate-200/80 bg-white p-8 sm:p-12 shadow-sm flex flex-col justify-center">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2 font-mono">
                01 — Too many tools
              </span>
              <h3 className="font-heading text-2xl sm:text-[1.75rem] font-bold text-slate-900 leading-snug">
                Your hiring process lives across too many disconnected places.
              </h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <p>
                  Your hiring process lives across resumes, spreadsheets, interviews, assessments, emails, and feedback.
                </p>
                <p>
                  Important context gets buried in different places, and you end up switching between tools just to understand one candidate.
                </p>
                <p className="font-semibold text-slate-900 pt-1">
                  Recall brings that context together when you need it.
                </p>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              ROW 2: 02 — Too much digging & 03 — A resume isn't enough
              (Left: 02 Card | Middle: 03 Card | Right: Visual Mobile Synthesis Card)
              ---------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Text Card 2: 02 — Too much digging */}
            <div className="lg:col-span-4 rounded-[32px] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-center">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-2 font-mono">
                02 — Too much digging
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Finding one answer shouldn&apos;t take an hour.
              </h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <p>
                  Finding one simple answer can mean opening multiple candidate records and reading through endless notes.
                </p>
                <p>
                  By the time you have everything in front of you, you’ve already spent too much time.
                </p>
                <p className="font-semibold text-slate-900 pt-1">
                  Ask Recall a question and get the relevant context in one place.
                </p>
              </div>
            </div>

            {/* Text Card 3: 03 — A resume isn’t enough */}
            <div className="lg:col-span-4 rounded-[32px] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-center">
              <span className="text-xs font-bold text-violet-600 uppercase tracking-widest mb-2 font-mono">
                03 — A resume isn’t enough
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                Paper claims vs. real demonstrated capability.
              </h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <p>
                  A resume only tells you what a candidate says on paper.
                </p>
                <p>
                  Their assessment, interview, transcript, and interviewer feedback tell you much more.
                </p>
                <p className="font-semibold text-slate-900 pt-1">
                  Recall looks across that information to help you understand the candidate as a whole.
                </p>
              </div>
            </div>

            {/* Visual Card 2: Lavender Gradient Background with High-Fidelity Agentic Synthesis UI */}
            <div 
              className="md:col-span-2 lg:col-span-4 rounded-[32px] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center min-h-[380px] shadow-sm border border-indigo-200/40"
              style={{
                background: "linear-gradient(145deg, #8B8FF8 0%, #A2A6FA 100%)",
              }}
            >
              {/* Floating Mobile Device with Live Synthesis Query */}
              <div className="w-full max-w-[230px] rounded-[28px] border-[4px] border-slate-900 bg-white shadow-2xl p-3 text-slate-900 text-[10px]">
                {/* Phone Status Bar */}
                <div className="flex justify-between items-center px-1 mb-2">
                  <span className="font-bold text-[8.5px] text-slate-800">9:41</span>
                  <div className="h-1.5 w-12 bg-slate-900 rounded-full" />
                  <span className="text-[8px] font-mono">100%</span>
                </div>

                {/* Query Bubble */}
                <div className="rounded-xl bg-slate-100 p-2 text-[9px] text-slate-700 font-medium mb-2 border border-slate-200">
                  <p className="text-slate-400 text-[7.5px] uppercase font-bold">User question</p>
                  &ldquo;What did Maya Evans say about distributed databases?&rdquo;
                </div>

                {/* Synthesis Output */}
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-2.5 space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-600" />
                    <span className="font-bold text-[9px] text-indigo-950">Recall Synthesis</span>
                  </div>
                  
                  <p className="text-[8.5px] text-slate-700 leading-snug">
                    Maya detailed 3 years managing distributed PostgreSQL with CockroachDB sharding during high-throughput peaks.
                  </p>

                  {/* Citations */}
                  <div className="pt-1 flex flex-wrap gap-1">
                    <span className="rounded bg-white px-1.5 py-0.5 text-[7px] font-bold text-slate-600 border border-slate-200">
                      [Voice 18:32]
                    </span>
                    <span className="rounded bg-white px-1.5 py-0.5 text-[7px] font-bold text-slate-600 border border-slate-200">
                      [Tech Panel]
                    </span>
                    <span className="rounded bg-emerald-100 text-emerald-800 px-1.5 py-0.5 text-[7px] font-bold">
                      Verified Match
                    </span>
                  </div>
                </div>

                {/* Bottom Status */}
                <div className="mt-2.5 flex items-center justify-between text-[7.5px] text-slate-400 px-1">
                  <span>Confidence: 98%</span>
                  <span className="text-indigo-600 font-bold">Zero digging required</span>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              ROW 3: 04 — Don’t lose what you learned
              (Left: Blurred Sage/Teal Gradient with Historical Memory Recall UI)
              (Right: Text Card)
              ---------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Visual Card 3: Blurred Sage/Teal Gradient with Historical Memory Recall Mockup */}
            <div 
              className="lg:col-span-7 rounded-[32px] p-6 sm:p-10 relative overflow-hidden flex items-center justify-center min-h-[380px] shadow-sm border border-slate-200/60"
              style={{
                background:
                  "radial-gradient(ellipse at 80% 20%, rgba(70, 155, 125, 0.5), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(190, 150, 90, 0.4), transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(100, 140, 170, 0.35), transparent 65%), linear-gradient(145deg, #96a594 0%, #b2bcb0 50%, #9da69c 100%)",
              }}
            >
              {/* Frosted Memory Search Window */}
              <div className="w-full max-w-md rounded-2xl border border-white/90 bg-white/95 p-5 sm:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.01]">
                
                {/* Search Bar Query */}
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs">
                  <Search className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-slate-800 font-medium truncate">
                    &ldquo;Who did we interview previously with Staff Go experience?&rdquo;
                  </span>
                </div>

                {/* Retrieved Past Candidate Card */}
                <div className="mt-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 p-3.5 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img 
                        className="h-8 w-8 rounded-full object-cover border border-white shadow-2xs" 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80" 
                        alt="Maya" 
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Maya Evans</p>
                        <p className="text-[10px] text-slate-500">Interviewed 4 months ago • Final Round</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5">
                      94% Alignment
                    </span>
                  </div>

                  {/* Context Note */}
                  <p className="text-[11px] text-slate-600 bg-white/80 p-2 rounded-lg border border-slate-100">
                    Strong scorecards across Golang & Kafka. Offer was paused previously due to Q3 headcount freeze. Now ready for immediate re-engagement.
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-400">Past scorecards retained</span>
                    <button className="rounded-lg bg-slate-900 text-white px-2.5 py-1 text-[10.5px] font-bold hover:bg-black transition">
                      Re-engage Profile
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Text Card 4: 04 — Don’t lose what you learned */}
            <div className="lg:col-span-5 rounded-[32px] border border-slate-200/80 bg-white p-8 sm:p-12 shadow-sm flex flex-col justify-center">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2 font-mono">
                04 — Don’t lose what you learned
              </span>
              <h3 className="font-heading text-2xl sm:text-[1.75rem] font-bold text-slate-900 leading-snug">
                Turn past hiring efforts into lasting institutional memory.
              </h3>
              <div className="mt-4 space-y-2 text-sm text-slate-600 leading-relaxed">
                <p>
                  Hiring teams make decisions every day, but useful context can disappear into old records.
                </p>
                <p>
                  A previous interview or candidate may become relevant months later.
                </p>
                <p className="font-semibold text-slate-900 pt-1">
                  Recall helps you bring that past hiring context back when you need it.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

