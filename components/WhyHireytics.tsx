"use client";

import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  BrainCircuit, 
  Code2, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Users, 
  Clock, 
  Layers, 
  BarChart3, 
  Smartphone, 
  FileCheck, 
  Lock, 
  Headphones, 
  ChevronRight,
  TrendingUp,
  Award
} from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/Motion";
import Link from "next/link";

export default function WhyHireytics() {
  return (
    <section id="why-hireytics" className="relative section-block bg-[#FAF9F6] py-24 sm:py-32">
      <div className="section-container">
        
        {/* SECTION 1: Built for demanding businesses */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
            Built for demanding businesses
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            An agentic recruiting platform, built for real ROI
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Autonomous execution where it saves time, human control where it matters most.
            Hireytics connects every stage of talent acquisition into a high-precision engine.
          </p>
        </div>

        {/* WORKABLE-STYLE BENTO GRID 1 */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Powerful Reporting & Pipeline Analytics (7 cols) */}
          <div className="md:col-span-7 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-[11px] font-bold text-indigo-700">
                  <BarChart3 className="h-3.5 w-3.5" /> Live Intelligence
                </span>
                <span className="text-xs font-semibold text-slate-400">SOC2 Type II Certified</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Powerful reporting & candidate telemetry
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
                Make data-backed headcount decisions. Track candidate pass-through rates, time-to-hire velocity, rubric calibration accuracy, and interviewer efficiency in real-time.
              </p>
            </div>

            {/* UI Mockup of Analytics Dashboard */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50/80 p-5">
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800">Q3 Recruiting Velocity</span>
                </div>
                <span className="text-[11px] font-mono font-bold text-indigo-600">+38% vs last quarter</span>
              </div>
              
              {/* Bar Chart Visualization */}
              <div className="mt-4 flex items-end gap-3 h-28 pt-2">
                {[
                  { label: "Sourced", h: "40%", val: "480", color: "bg-slate-300" },
                  { label: "AI Screen", h: "85%", val: "340", color: "bg-indigo-400" },
                  { label: "Technical", h: "60%", val: "185", color: "bg-indigo-600" },
                  { label: "Panel", h: "45%", val: "92", color: "bg-violet-600" },
                  { label: "Offer", h: "30%", val: "46", color: "bg-emerald-500" },
                  { label: "Hired", h: "25%", val: "38", color: "bg-emerald-600" },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                    <span className="text-[10px] font-mono text-slate-500">{bar.val}</span>
                    <div style={{ height: bar.h }} className={`w-full rounded-t-lg ${bar.color} transition-all duration-500`} />
                    <span className="text-[10px] font-semibold text-slate-600 truncate w-full text-center">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: 270+ Integrations & ATS Sync (5 cols) */}
          <div className="md:col-span-5 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-[11px] font-bold text-sky-700 mb-4">
                <Layers className="h-3.5 w-3.5" /> Bi-directional Sync
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                270+ Ecosystem Integrations
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Seamlessly connects with Greenhouse, Lever, Ashby, Workday, Slack, Google Workspace, and Microsoft Teams with 1-click authentication.
              </p>
            </div>

            {/* Integration Pills */}
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {[
                { name: "Greenhouse", icon: "🌿", status: "Connected" },
                { name: "Lever", icon: "⚡", status: "Live Sync" },
                { name: "Ashby", icon: "▲", status: "Active" },
                { name: "Workday HR", icon: "💼", status: "Verified" },
              ].map((tool, i) => (
                <div key={i} className="rounded-xl border border-slate-100 bg-slate-50 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{tool.icon}</span>
                    <span className="text-xs font-bold text-slate-800">{tool.name}</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                    {tool.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Mobile-First Candidate Portal (6 cols) */}
          <div className="md:col-span-6 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-[11px] font-bold text-emerald-700 mb-4">
                <Smartphone className="h-3.5 w-3.5" /> Mobile Experience
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Mobile-first candidate & recruiter app
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Candidates complete asynchronous video and voice interviews right from their mobile browser with 0 app downloads required.
              </p>
            </div>

            {/* Mobile App UI Card */}
            <div className="mt-6 rounded-2xl border border-slate-100 bg-gradient-to-r from-slate-50 to-indigo-50/40 p-4 flex items-center gap-4">
              <div className="w-16 h-20 rounded-xl bg-slate-900 text-white p-2 flex flex-col justify-between shrink-0 shadow-sm">
                <div className="h-1.5 w-6 bg-slate-700 rounded-full mx-auto" />
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-indigo-400 rounded-full" />
                  <div className="h-1.5 w-3/4 bg-slate-600 rounded-full" />
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-400 mx-auto" />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-slate-900">Candidate Mobile Portal</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Instant link invite • Asynchronous voice & video • Anti-cheat verified</p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-[10px] font-bold text-indigo-700 bg-white border border-indigo-100 px-2 py-0.5 rounded-full">iOS & Android Ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: G2 Ratings & Trust Metrics (6 cols) */}
          <div className="md:col-span-6 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-100 px-3 py-1 text-[11px] font-bold text-amber-700">
                  <Award className="h-3.5 w-3.5" /> Industry Leadership
                </span>
                <span className="text-xs font-bold text-slate-400">G2 Winter 2026</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Rated #1 in Enterprise Hiring Satisfaction
              </h3>
            </div>

            {/* Score Badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-amber-500/10 border border-amber-200/60 p-3.5">
                <p className="text-2xl font-extrabold text-amber-900 font-mono">9.3</p>
                <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mt-0.5">Ease of Setup</p>
              </div>
              <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-3.5">
                <p className="text-2xl font-extrabold text-indigo-900 font-mono">9.6</p>
                <p className="text-[10px] font-bold text-indigo-800 uppercase tracking-wider mt-0.5">AI Accuracy</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-3.5">
                <p className="text-2xl font-extrabold text-emerald-900 font-mono">9.4</p>
                <p className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider mt-0.5">Support SLA</p>
              </div>
            </div>

            {/* Micro metrics bar */}
            <div className="mt-4 rounded-xl bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Avg. Screening: <strong className="text-emerald-400">24s</strong></span>
              <span className="text-slate-300">Time-to-Hire: <strong className="text-indigo-300">3.5x faster</strong></span>
              <span className="text-slate-300">Uptime: <strong className="text-white">99.99%</strong></span>
            </div>
          </div>
        </div>

        {/* WORKABLE QUOTE BANNER 1 */}
        <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 sm:p-5 text-center">
          <p className="text-xs sm:text-sm font-semibold text-indigo-950">
            &ldquo;An AI agent is only as good as the system behind it. Hireytics is built into a complete, end-to-end recruitment infrastructure — not a tool bolted on beside it.&rdquo;
          </p>
        </div>


        {/* SECTION 2: A full HR platform on the same system that hired them */}
        <div className="mt-28 text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
            For everything after the hire
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A full talent platform on the same system that hired them
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Onboarding, compliance, e-signatures, candidate recall, and workforce analytics — one platform that keeps your context capture intact from interview to offer.
          </p>
        </div>

        {/* 6-Card Multi-Column Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Automated New Hire Onboarding */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <FileCheck className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Automated new hire onboarding</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Create personalized welcome portals with role-specific workflows. Collect compliance paperwork, assign hardware, and trigger team intros automatically.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-indigo-600">
              <span>View workflow details</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Card 2: Self-Service Portal */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 mb-5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Self-service employee portal</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enable employees to manage personal details, time off, benefits selection, and view company handbooks in one secure, intuitive interface.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-sky-600">
              <span>Explore portal features</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Card 3: Performance & Engagement */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 mb-5 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Performance & evaluation rubrics</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Run 360° reviews, goal tracking, and continuous feedback cycles. Align team output with the exact competencies evaluated during hiring.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-violet-600">
              <span>See rubric builder</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Card 4: System of Record */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">System of record for all HR data</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Centralized repository with dynamic org charts, compensation bands, historical audit trails, and role permissions with granular security.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
              <span>View org chart tools</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Card 5: Digital Documents & E-Sign */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-5 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Digital docs & e-signature</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Legally binding e-signatures for offer letters, NDAs, and contractor agreements. Automatic PDF archiving with expiration and renewal alerts.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-amber-600">
              <span>Learn about compliance</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Card 6: Hireytics Recall Engine */}
          <div className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 mb-5 group-hover:bg-rose-600 group-hover:text-white transition-colors">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Hireytics Recall memory engine</h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Autonomous silver-medalist reactivation. Never let great candidate relationships go cold — re-engage top talent the minute relevant roles launch.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-rose-600">
              <Link href="/recall">Explore Recall</Link>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* WORKABLE QUOTE BANNER 2 */}
        <div className="mt-10 rounded-2xl border border-purple-100 bg-purple-50/70 p-4 sm:p-5 text-center">
          <p className="text-xs sm:text-sm font-semibold text-purple-950">
            &ldquo;When hiring context flows seamlessly into onboarding and workforce management, talent ROI compounds. With Hireytics, your team scales effortlessly.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
