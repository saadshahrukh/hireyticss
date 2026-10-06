import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { 
  Sparkles, 
  Brain, 
  Layers, 
  Mic, 
  FileSearch, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Bot,
  Activity,
  BarChart3,
  Search,
  Check,
  X,
  TrendingUp,
  Clock,
  Database,
  Lock,
  MessageSquare
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Platform Features & AI Capabilities | Hireytics",
  description:
    "Explore the complete Hireytics platform: Recall AI intelligence, autonomous recruiting, ATS pipeline management, AI voice interviews, and OCR resume parsing.",
  path: "/features",
});

const featuresHubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Hireytics Platform Features & AI Recruiting Capabilities",
  "description": "Comprehensive suite of AI recruiting, ATS, voice interview screening, and Recall workforce intelligence.",
  "url": "https://hireytics.com/features"
};

const mainFeatureSuites = [
  {
    id: "recall",
    title: "Recall AI Intelligence",
    eyebrow: "FOUNDATIONAL MEMORY LAYER",
    badge: "Core AI Engine",
    description:
      "A conversational intelligence engine that unifies your resumes, interview transcripts, assessments, and scorecard notes into an indexed knowledge base. Ask questions in natural language and receive immediate, context-rich hiring answers.",
    href: "/recall",
    ctaText: "Explore Recall Engine",
    bullets: [
      "Natural language queries across thousands of candidate profiles",
      "Instant synthesis of past interview transcripts and scorecards",
      "Proactive candidate resurfacing for newly opened roles",
      "Full citation audit trail with timestamped proof",
    ],
    stats: "0 Manual Searching",
  },
  {
    id: "ai-recruiting",
    title: "Autonomous AI Recruiting Suite",
    eyebrow: "SOURCING & OUTREACH",
    badge: "Most Popular",
    description:
      "Put candidate sourcing and qualification checks on autopilot. Hireytics identifies top-tier talent, delivers hyper-personalized multi-touch outreach, and automatically moves qualified candidates through your pipeline.",
    href: "/features/ai-recruiting",
    ctaText: "Discover AI Recruiting",
    bullets: [
      "Multi-channel candidate discovery across GitHub, LinkedIn, and portfolios",
      "Automated personalized outreach sequences with dynamic variables",
      "Real-time applicant qualification and rubric scoring",
      "Self-optimizing outreach campaigns based on response rates",
    ],
    stats: "3.5x Faster Time-to-Hire",
  },
  {
    id: "voice-interviews",
    title: "AI Voice & Video Screening",
    eyebrow: "ASYNCHRONOUS SCREENING",
    badge: "Voice Intelligence",
    description:
      "Eliminate phone tag and calendar delays. Candidates complete structured, conversational voice screens on their own time while AI evaluates technical accuracy, soft skills, and communication clarity.",
    href: "/features/automated-interviews",
    ctaText: "View Voice Interviews",
    bullets: [
      "24/7 automated candidate phone & browser voice interviews",
      "Live transcription with highlighted technical keywords",
      "Objective rubric grading with confidence and anti-cheat checks",
      "Instant 24-second candidate evaluation summaries for hiring managers",
    ],
    stats: "24s Avg. Evaluation",
  },
  {
    id: "candidate-screening",
    title: "OCR Resume Parsing & Skill Vectors",
    eyebrow: "QUALIFICATION INTELLIGENCE",
    badge: "OCR & Neural NLP",
    description:
      "Move beyond rigid keyword matchers that miss top talent. Our OCR and neural vector engine analyzes contextual project experience, technical depth, and trajectory to rank applicants with unmatched accuracy.",
    href: "/features/candidate-screening",
    ctaText: "Explore Candidate Screening",
    bullets: [
      "OCR parsing for PDF, DOCX, scans, and code portfolios",
      "Multi-dimensional skill vector proximity matching",
      "Blind resume screening mode to eliminate unconscious bias",
      "Custom rubric scoring aligned to your company's hiring bar",
    ],
    stats: "94% Skill Match Precision",
  },
  {
    id: "ats",
    title: "Modern Applicant Tracking System (ATS)",
    eyebrow: "PIPELINE WORKFLOW",
    badge: "Next-Gen ATS",
    description:
      "A fast, intuitive candidate pipeline dashboard built for modern teams. Collaborate with hiring managers, track interviewer scorecards, and integrate with over 270 HR and productivity tools.",
    href: "/features/applicant-tracking",
    ctaText: "View ATS Features",
    bullets: [
      "Drag-and-drop Kanban candidate progression pipeline",
      "Centralized scorecards and asynchronous interviewer feedback",
      "Automated candidate rejection & progression emails",
      "Native integrations with Slack, Google Workspace, Lever, and Workday",
    ],
    stats: "270+ ATS Integrations",
  },
];

const comparisonData = [
  {
    capability: "Resume Screening",
    traditional: "Static keyword matching (misses synonyms & non-traditional paths)",
    hireytics: "Multi-dimensional OCR & semantic skill vector matching",
  },
  {
    capability: "Initial Screening Calls",
    traditional: "30-min recruiter phone calls taking 2–3 weeks of calendar scheduling",
    hireytics: "Asynchronous AI Voice Screening completed in under 24 hours",
  },
  {
    capability: "Historical Hiring Data",
    traditional: "Buried in siloed spreadsheets, email chains, and outdated files",
    hireytics: "Recall AI searchable memory across all candidate transcripts & notes",
  },
  {
    capability: "Hiring Manager Alignment",
    traditional: "Chasing feedback, inconsistent unstructured notes",
    hireytics: "Standardized objective rubric scorecards & automated alerts",
  },
  {
    capability: "Candidate Experience",
    traditional: "Weeks of silence ('resume black hole')",
    hireytics: "Instant acknowledgments, transparent voice screens, 24/7 access",
  },
  {
    capability: "Deployment & Setup",
    traditional: "Months of enterprise IT setup & high implementation fees",
    hireytics: "Instant cloud onboarding in under 60 seconds with no IT overhead",
  },
];

export default function FeaturesHubPage() {
  return (
    <>
      <JsonLd data={featuresHubSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs items={[{ label: "Features", href: "/features" }]} />

          {/* ========================================================
              PAGE HERO SECTION (Matches Home Page Warm Aesthetic)
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-800 shadow-2xs backdrop-blur-xs mb-4">
              <Sparkles className="h-3.5 w-3.5 text-indigo-600 animate-pulse" />
              <span>THE COMPLETE AI HIRING ECOSYSTEM</span>
            </div>
            
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Every stage of hiring. Connected into one intelligence layer.
            </h1>
            
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Autonomous execution where it saves 40+ hours per week, human control where judgment matters. Discover how Hireytics replaces disjointed tools with unified hiring intelligence.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/onboarding" variant="secondary">
                Start Interactive Onboarding
              </ButtonLink>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-2xs">
                <p className="font-heading text-2xl font-bold text-indigo-600">3.5x</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Faster Time-to-Hire</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-2xs">
                <p className="font-heading text-2xl font-bold text-emerald-600">94%</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Skill Match Precision</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-2xs">
                <p className="font-heading text-2xl font-bold text-rose-500">24s</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Avg. Voice Evaluation</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-2xs">
                <p className="font-heading text-2xl font-bold text-sky-600">0</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Manual Data Entry</p>
              </div>
            </div>
          </div>

          {/* ========================================================
              HERO VISUAL SHOWCASE: MAIN PLATFORM DASHBOARD
              ======================================================== */}
          <div className="mt-14 relative mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-white p-3 sm:p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.14)]">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950">
                <img
                  src="/features_dashboard_ui.jpg"
                  alt="Hireytics AI Recruiting Platform Dashboard Interface"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              FEATURE SUITE 1: RECALL V1.0 ENGINE (Full Bento Deep-Dive)
              ======================================================== */}
          <div className="mt-24 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Visual Card Left (Warm Atmospheric Gradient Frame) */}
              <div 
                className="lg:col-span-6 rounded-3xl p-6 sm:p-8 relative overflow-hidden flex items-center justify-center min-h-[380px] shadow-sm border border-indigo-100"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.45), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(168, 85, 247, 0.4), transparent 60%), linear-gradient(145deg, #1e1b4b 0%, #0f172a 100%)",
                }}
              >
                {/* Frosted Recall Window */}
                <div className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl text-white shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/15 pb-3">
                    <div className="flex items-center gap-2">
                      <Image src="/recall.png" alt="Recall" width={24} height={24} className="object-contain" />
                      <span className="text-xs font-bold uppercase tracking-wider">Recall Intelligence</span>
                    </div>
                    <span className="rounded-full bg-emerald-400/20 border border-emerald-400/30 px-2 py-0.5 text-[9px] font-bold text-emerald-300">
                      Context Synced
                    </span>
                  </div>

                  <div className="mt-3.5 space-y-2.5 text-xs">
                    <div className="rounded-xl bg-white/10 p-3 border border-white/10">
                      <p className="text-[10px] text-indigo-200 font-semibold">Natural Language Query</p>
                      <p className="font-medium text-slate-100 mt-0.5">&ldquo;Show me candidates who passed technical system design with Go & Kafka experience&rdquo;</p>
                    </div>

                    <div className="rounded-xl bg-indigo-950/80 p-3 border border-indigo-500/30 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-indigo-300">Sarah Chen • Staff Backend</span>
                        <span className="text-[10px] font-bold text-emerald-400">98% Match</span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-tight">
                        5+ yrs distributed systems. Scored 96/100 on system design voice interview.
                      </p>
                      <div className="flex items-center gap-1.5 pt-1 text-[10px] text-indigo-300 font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Source: Voice Interview & Scorecard #842</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Right */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 text-xs mb-3">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 font-bold text-indigo-800 text-[11px]">
                    FOUNDATIONAL MEMORY
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-bold text-emerald-800 text-[11px]">
                    v1.0 Live
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-snug">
                  Recall — Hiring software that remembers what happened.
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Instead of searching across dozens of spreadsheets, candidate profiles, and interview transcripts, ask Recall questions in plain language and get instant synthesized answers with verified citations.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Natural language queries across thousands of candidate records",
                    "Instant synthesis of past interview transcripts and scorecards",
                    "Proactive candidate resurfacing for newly opened roles",
                    "Full citation audit trail with timestamped proof",
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/recall" variant="primary">
                    Explore Recall Engine
                  </ButtonLink>
                  <ButtonLink href="/free-trial" variant="secondary">
                    Try 14-Day Free Trial
                  </ButtonLink>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              FEATURE SUITE 2: AI VOICE & VIDEO SCREENING (Image Showcase)
              ======================================================== */}
          <div className="mt-14 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Content Left */}
              <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
                <div className="flex items-center gap-2.5 text-xs mb-3">
                  <span className="rounded-full bg-purple-100 px-3 py-1 font-bold text-purple-800 text-[11px]">
                    SCREENING AUTOMATION
                  </span>
                  <span className="rounded-full bg-rose-100 px-3 py-1 font-bold text-rose-800 text-[11px]">
                    Asynchronous Voice
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-snug">
                  AI Voice Screening — Evaluate talent without scheduling friction.
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Eliminate 20 hours of recruiter phone screens every week. Hireytics conducts structured asynchronous voice screening calls with real-time speech transcription, technical rubric grading, and sentiment analysis.
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "24/7 automated candidate phone & browser voice interviews",
                    "Live transcription with highlighted technical keywords",
                    "Objective rubric grading with confidence and anti-cheat checks",
                    "Instant 24-second candidate evaluation summaries for hiring managers",
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <ButtonLink href="/features/automated-interviews" variant="primary">
                    Learn About Voice Screening
                  </ButtonLink>
                  <ButtonLink href="/free-trial" variant="secondary">
                    Test a Voice Interview
                  </ButtonLink>
                </div>
              </div>

              {/* Visual Right: High-Res UI Mockup */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/features_voice_ui.jpg"
                    alt="AI Voice Interview Screening and Rubric Evaluation Module"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              GRID OF REMAINING CORE CAPABILITIES (3-Column Bento Cards)
              ======================================================== */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                DEEP-DIVE CAPABILITIES
              </p>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">
                Precision engineering across every hiring touchpoint.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1: Autonomous Recruiting */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 shadow-2xs mb-5">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600">
                    AUTONOMOUS SOURCING
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
                    AI Recruiting Suite
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Automate talent discovery, qualification scoring, and multi-channel outreach campaigns without manual recruiter intervention.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Smart multi-touch outbound sequences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Dynamic candidate profile enrichment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>3.5x faster candidate pipeline velocity</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Autonomous</span>
                  <Link
                    href="/features/ai-recruiting"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Candidate Screening & OCR */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 shadow-2xs mb-5">
                    <FileSearch className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    NEURAL RESUME OCR
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
                    Candidate Screening
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Extract experience vectors from complex resumes, match skills directly to rubric criteria, and eliminate bias in shortlisting.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>OCR parsing for PDF, DOCX, & images</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Skill proximity vector matching</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Bias-free anonymized evaluation mode</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">94% Precision</span>
                  <Link
                    href="/features/candidate-screening"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Modern ATS Pipeline */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-md hover:-translate-y-1">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 shadow-2xs mb-5">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">
                    PIPELINE MANAGEMENT
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">
                    Applicant Tracking (ATS)
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    A lightning-fast Kanban candidate pipeline dashboard with customizable stages, team scorecards, and hiring velocity analytics.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Drag-and-drop pipeline progression</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Centralized team rubric scorecards</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>270+ native ATS & HR integrations</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">270+ Integrations</span>
                  <Link
                    href="/features/applicant-tracking"
                    className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              COMPARISON TABLE: LEGACY ATS VS HIREYTICS
              ======================================================== */}
          <div className="mt-24 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                HEAD-TO-HEAD COMPARISON
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                How Hireytics Compares to Traditional ATS Platforms
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-xs font-bold uppercase text-slate-500">Hiring Capability</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase text-slate-500">Traditional ATS / Manual</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase text-indigo-600 bg-indigo-50/50 rounded-t-xl">
                      Hireytics AI Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">{row.capability}</td>
                      <td className="py-4 px-4 text-slate-500 flex items-start gap-2">
                        <X className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </td>
                      <td className="py-4 px-4 font-medium text-slate-900 bg-indigo-50/30">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{row.hireytics}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ========================================================
              BOTTOM HIGH-CONVERTING CTA BANNER
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-indigo-200 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Start Hiring 3.5x Faster
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Ready to transform your hiring workflow?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Join high-performing founders and talent teams who use Hireytics to screen candidates with AI voice interviews and Recall context.
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
                No credit card required • Instant 60-second setup • 15 free voice minutes included
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
