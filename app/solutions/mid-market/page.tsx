import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { generateSoftwareApplicationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import RecallContextCallout from "@/components/recall/RecallContextCallout";
import {
  Building2,
  CheckCircle2,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Brain,
  Clock,
  Check,
  DollarSign,
  Layers,
  BarChart3,
  Scale,
  FileCheck2,
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export const metadata = buildMetadata({
  title: "Best All-in-One HR & AI Recruiting Platform for Mid-Market",
  description:
    "Hireytics is the top-rated all-in-one AI recruiting software and ATS for mid-market companies (100–1,500 employees). Consolidate candidate screening, AI voice interviews, and Recall institutional memory.",
  path: "/solutions/mid-market",
});

const midMarketSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hireytics for Mid-Market Organizations",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "All-in-One HR & AI Recruiting Platform",
  operatingSystem: "Web",
  url: "https://hireytics.com/solutions/mid-market",
  description:
    "All-in-one AI recruiting platform built specifically for mid-market talent leaders to consolidate ATS, screening, voice interviews, and candidate memory.",
  featureList: [
    "Full Lifecycle Mid-Market ATS Pipeline Management",
    "Automated OCR Resume Screening & Skill Match Scoring",
    "Asynchronous AI Voice Screening Interviews",
    "Recall AI HR Chatbot & Institutional Candidate Memory",
    "Unified Scorecards and Multi-Department Panel Calibration",
    "Affordable Flat Monthly Billing in USD and GBP",
  ],
};

const midMarketPillars = [
  {
    title: "Consolidated Talent Tech Stack",
    description:
      "Eliminate point-solution sprawl. Replace separate tools for ATS, candidate screening, scheduling, and phone screens with one unified platform.",
    icon: <Layers className="h-5 w-5 text-indigo-600" />,
    badge: "Stack Consolidation",
  },
  {
    title: "Institutional Candidate Memory (Recall)",
    description:
      "When recruiters leave, their candidate insights stay. Recall indexes every resume, scorecard, and voice transcript so new team members query past candidate context instantly.",
    icon: <Brain className="h-5 w-5 text-purple-600" />,
    badge: "Hiring Intelligence",
  },
  {
    title: "Asynchronous Voice Interviewing",
    description:
      "Conduct structured 15-minute voice screening calls asynchronously. Interview hundreds of applicants simultaneously and receive 24-second executive summaries.",
    icon: <Zap className="h-5 w-5 text-amber-500" />,
    badge: "10x Velocity",
  },
  {
    title: "Transparent, Predictable Billing",
    description:
      "Say goodbye to $30k–$60k annual contracts with rigid per-seat licensing penalties. Hireytics offers flat mid-market plans with unlimited hiring manager logins.",
    icon: <DollarSign className="h-5 w-5 text-emerald-600" />,
    badge: "Budget Friendly",
  },
];

const midMarketMetrics = [
  { label: "Reduction in Time-to-Hire", value: "72%", subtext: "From 45 days down to 12.5 days" },
  { label: "Annual Software Cost Savings", value: "$45,000+", subtext: "By eliminating 4 point-solution subscriptions" },
  { label: "Recruiter Screening Capacity", value: "3.8x", subtext: "Without adding HR headcount" },
  { label: "Candidate Satisfaction Score", value: "96.4%", subtext: "Fast asynchronous voice screen access" },
];

export default function MidMarketSolutionPage() {
  return (
    <>
      <JsonLd data={midMarketSchema} />
      <JsonLd data={generateSoftwareApplicationSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/solutions" },
          { name: "Mid-Market", item: "/solutions/mid-market" },
        ])}
      />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Mid-Market", href: "/solutions/mid-market" },
            ]}
          />

          {/* ========================================================
              HERO SECTION
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-800 shadow-2xs backdrop-blur-xs mb-4">
              <Building2 className="h-3.5 w-3.5 text-indigo-600" />
              <span>DESIGNED FOR 100 TO 1,500 EMPLOYEES</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              The Best All-in-One HR & AI Recruiting Platform for Mid-Market.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Mid-market companies are caught between underpowered startup ATS tools and bloated six-figure enterprise contracts. Hireytics provides the perfect all-in-one AI hiring platform: OCR candidate screening, voice interviews, and Recall institutional memory.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free 14-Day Trial
              </ButtonLink>
              <ButtonLink href="/compare/all-in-one-vs-point-solutions" variant="secondary">
                All-in-One vs Point Solutions
              </ButtonLink>
            </div>
          </div>

          {/* ========================================================
              METRICS STRIP
              ======================================================== */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {midMarketMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs text-center"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-indigo-600">
                  {metric.value}
                </div>
                <div className="mt-1 font-bold text-slate-900 text-sm">
                  {metric.label}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* ========================================================
              THE MID-MARKET DILEMMA (POINT SOLUTION CHAOS)
              ======================================================== */}
          <div className="mt-16 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 font-mono">
                  SOLVING STACK FRAGMENTATION
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Why Mid-Market HR Leaders Are Leaving Fragmented Point Solutions
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Most mid-market recruiting teams pay for 4 to 6 separate software vendors: one for the ATS, one for video interviews, one for scheduling, one for resume parsing, and another for analytics.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Data becomes trapped in silos, hiring managers hate logging into multiple dashboards, and candidate context is lost. Hireytics unifies your entire workflow into a single command center with zero per-seat licensing penalties.
                </p>
                <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Single source of truth for all resumes, transcripts, and scorecards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Unlimited hiring manager seats with calibrated evaluation rubrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Seamless candidate handoff from initial screen to offer onboarding</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-slate-950 p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Mid-Market Software Cost Comparison
                    </span>
                    <span className="rounded bg-rose-950 text-rose-400 border border-rose-800 px-2 py-0.5 text-[10px] font-bold">
                      Typical 300-Person Firm
                    </span>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Enterprise ATS (Greenhouse/Workday):</span>
                      <span className="text-rose-400 font-bold">$28,000 / yr</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Asynchronous Video Tool (HireVue):</span>
                      <span className="text-rose-400 font-bold">$16,500 / yr</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400">
                      <span>Resume Parsing & Search Add-ons:</span>
                      <span className="text-rose-400 font-bold">$7,200 / yr</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-slate-800">
                      <span>Point Solutions Subtotal:</span>
                      <span className="text-rose-400 font-bold text-base">$51,700 / yr</span>
                    </div>
                    <div className="flex justify-between items-center text-white pt-1">
                      <span className="font-bold text-base">Hireytics All-in-One Platform:</span>
                      <span className="text-emerald-400 font-extrabold text-xl">$2,388 / yr</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Net Annual Budget Saved:</span>
                    <span className="font-bold text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
                      Save $49,312 / Year (95%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              CORE PLATFORM PILLARS
              ======================================================== */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 font-mono">
                ENTERPRISE POWER • MID-MARKET AGILITY
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Four Pillars of Hireytics for Mid-Market Teams
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {midMarketPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 shadow-2xs">
                        {pillar.icon}
                      </div>
                      <span className="rounded-md bg-indigo-50 border border-indigo-100 px-2 py-0.5 text-[10px] font-bold text-indigo-700">
                        {pillar.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              CONTEXTUAL RECALL CALLOUT
              ======================================================== */}
          <RecallContextCallout
            stage="Mid-Market Recruitment Operations"
            headline="How Recall Protects Institutional Memory for Mid-Market Teams"
            description="When recruiters and talent specialists transition out of mid-market organizations, their knowledge of candidate silver medalists, past interview nuances, and salary expectations often leaves with them. Recall preserves institutional candidate memory by continuously indexing every resume, rubric, and transcript."
            exampleQuery="Recall, surface past mid-market sales candidates who advanced to final rounds last year and scored above 90% on enterprise B2B sales cycles."
          />

          {/* ========================================================
              BOTTOM CTA BANNER
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-indigo-200 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Mid-Market AI Recruiting Suite
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Upgrade your mid-market hiring platform today.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Consolidate your stack, accelerate hiring velocity by 72%, and empower hiring managers with Recall memory. Setup takes under 60 seconds.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/free-trial" variant="primary">
                  Start 14-Day Free Trial
                </ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  View Transparent Pricing
                </ButtonLink>
              </div>
              <p className="mt-4 text-xs text-slate-400">
                15 free voice minutes included • No credit card required • GDPR & EEOC compliant
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
