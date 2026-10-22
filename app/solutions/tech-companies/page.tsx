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
  Code2,
  Cpu,
  Terminal,
  Zap,
  CheckCircle2,
  Users,
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  Layers,
  FileCode2,
  GitBranch,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "Best All-in-One HR & AI Recruiting Platform for Tech Companies",
  description:
    "Hireytics is the leading all-in-one HR and AI recruiting platform for high-growth tech companies and scaleups. Screen software engineers, conduct AI voice interviews, and preserve engineering talent context with Recall.",
  path: "/solutions/tech-companies",
});

const techSolutionSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hireytics for Tech Companies & Scaleups",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Technical Recruitment & AI Interview Platform",
  operatingSystem: "Web",
  url: "https://hireytics.com/solutions/tech-companies",
  description:
    "Technical recruiting platform designed for technology companies, scaleups, and engineering leaders to evaluate software engineers and technical candidates objectively.",
  featureList: [
    "Contextual Skill Vector Matching for Software Engineers",
    "Asynchronous AI Voice Screening for Technical & Systems Design Experience",
    "Dynamic Follow-Up Probing on Technical Architecture & Trade-Offs",
    "Recall Engineering Candidate Knowledge Base Across Past Requisitions",
    "Zero Senior Engineer Burnout on Initial Phone Screening Calls",
  ],
};

const techCapabilities = [
  {
    title: "Semantic Vector Resume Matching",
    description:
      "Detect genuine systems programming and cloud engineering experience. Understand the semantic difference between configuring Docker vs architecting distributed microservices.",
    icon: <Cpu className="h-5 w-5 text-indigo-600" />,
    badge: "Vector AI",
  },
  {
    title: "AI Voice Technical Pre-Screening",
    description:
      "Candidates explain their architectural decisions, concurrency tradeoffs, and debugging methodologies in structured voice sessions. AI grades responses against exact rubrics.",
    icon: <Terminal className="h-5 w-5 text-amber-500" />,
    badge: "Asynchronous",
  },
  {
    title: "Zero Senior Engineer Interview Burnout",
    description:
      "Save your Staff and Principal engineers 15+ hours every week. Let Hireytics handle top-of-funnel technical screening so engineers only interview pre-calibrated finalists.",
    icon: <Clock className="h-5 w-5 text-rose-500" />,
    badge: "Engineering ROI",
  },
  {
    title: "Recall Engineering Pipeline Memory",
    description:
      "Engineers who barely missed the bar for Staff roles 6 months ago might be the perfect Senior hire today. Recall surfaces previous technical evaluations instantly.",
    icon: <Brain className="h-5 w-5 text-purple-600" />,
    badge: "Zero Rework",
  },
];

const techMetrics = [
  { label: "Engineering Hours Saved / Week", value: "18.5 hrs", subtext: "Per hiring manager and tech lead" },
  { label: "Technical Screen-to-Offer Velocity", value: "11 Days", subtext: "Down from industry average of 49 days" },
  { label: "Candidate Technical Drop-off", value: "< 4.2%", subtext: "Asynchronous flexible voice scheduling" },
  { label: "False Positive Interview Reduction", value: "84%", subtext: "Objective rubric calibration" },
];

export default function TechCompaniesSolutionPage() {
  return (
    <>
      <JsonLd data={techSolutionSchema} />
      <JsonLd data={generateSoftwareApplicationSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Solutions", item: "/solutions" },
          { name: "Tech Companies", item: "/solutions/tech-companies" },
        ])}
      />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Tech Companies", href: "/solutions/tech-companies" },
            ]}
          />

          {/* ========================================================
              HERO SECTION
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/80 px-3.5 py-1 text-xs font-semibold text-purple-800 shadow-2xs backdrop-blur-xs mb-4">
              <Code2 className="h-3.5 w-3.5 text-purple-600" />
              <span>BUILT FOR TECH SCALEUPS & ENGINEERING LEADERS</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              The Best All-in-One HR & AI Recruiting Platform for Tech Companies.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Hiring top-tier software engineers, AI researchers, and technical leaders is brutally competitive. Hireytics combines deep skill vector matching, AI voice technical screens, and Recall company memory to cut engineering hiring cycles by 75%.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Tech Startup Plans
              </ButtonLink>
            </div>
          </div>

          {/* ========================================================
              TECH STATS
              ======================================================== */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs text-center"
              >
                <div className="font-heading text-3xl sm:text-4xl font-extrabold text-purple-600">
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
              TECHNICAL DEEP DIVE SECTION
              ======================================================== */}
          <div className="mt-16 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 font-mono">
                  OBJECTIVE EVALUATION
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Stop Wasting Staff Engineers on Unqualified Candidate Screens
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  In high-growth tech companies, engineering leaders frequently lose 20% to 30% of their productive sprint capacity conducting repetitive screening interviews with applicants who cannot pass basic technical requirements.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Hireytics automates this initial hurdle. Candidates take an asynchronous, conversational voice screen where the AI poses calibrated technical scenarios, listens to system design reasoning, and provides timestamped code snippets and transcripts for your team.
                </p>
                <div className="pt-2 flex flex-col gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Calibrated questions tailored to backend, fullstack, devops, and ML roles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Dynamic follow-up probing when candidate answers are vague or incomplete</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Anti-cheat acoustic signals and verified applicant validation</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-3xl bg-slate-950 p-6 sm:p-7 text-white border border-slate-800 shadow-2xl space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <Terminal className="h-4 w-4 text-emerald-400" />
                      <span>tech-interview-evaluator.ts</span>
                    </span>
                    <span className="text-slate-500 text-[10px]">AI Voice Screen • 14m 22s</span>
                  </div>
                  <div className="space-y-2 text-slate-300">
                    <div className="text-slate-500">// Candidate: David K. (Principal Distributed Systems)</div>
                    <div className="text-indigo-400 font-bold">
                      Q: "How do you mitigate split-brain in Raft consensus clusters across multi-region VPCs?"
                    </div>
                    <div className="pl-3 border-l-2 border-indigo-500/50 text-slate-300 text-[11px] leading-relaxed">
                      "I enforce a strict majority quorum across an odd number of voting nodes. By using lease timers and preventing uncommitted log entries from being applied without quorum acknowledgment, split-brain scenarios are provably avoided."
                    </div>
                    <div className="mt-3 rounded-lg bg-emerald-950/60 border border-emerald-700/60 p-2.5 flex items-center justify-between text-emerald-300 font-bold text-[11px]">
                      <span>System Design Rubric: PASS (98/100)</span>
                      <span className="bg-emerald-900 px-2 py-0.5 rounded text-[10px]">Advanced Quorum Proof</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              TECHNICAL PILLARS
              ======================================================== */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-600 font-mono">
                ENGINEERING HIRING ARCHITECTURE
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Built for Fast-Moving Tech Teams
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {techCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 border border-purple-100 shadow-2xs">
                        {cap.icon}
                      </div>
                      <span className="rounded-md bg-purple-50 border border-purple-100 px-2 py-0.5 text-[10px] font-bold text-purple-700">
                        {cap.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              RECALL CONTEXT CALLOUT
              ======================================================== */}
          <RecallContextCallout
            stage="Technical Engineering Sourcing"
            headline="How Recall Indexes Engineering Qualifications and Code Context"
            description="Tech talent pipelines move quickly, but candidate evaluations often disappear after a job is filled. Recall acts as an active engineering knowledge base: query historical coding evaluations, systems design rubrics, and salary negotiations across past quarters."
            exampleQuery="Recall, find software engineers we interviewed in the past 6 months who demonstrated strong Go and Rust skills and were open to remote work."
          />

          {/* ========================================================
              BOTTOM CTA BANNER
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-purple-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-purple-200 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Accelerate Engineering Velocity
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Hire 10x better engineers in half the time.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Empower your engineering managers with AI voice screening and Recall candidate memory. Get 15 free voice screening minutes today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/free-trial" variant="primary">
                  Start 14-Day Free Trial
                </ButtonLink>
                <ButtonLink href="/solutions/mid-market" variant="secondary">
                  Explore Mid-Market Solutions
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
