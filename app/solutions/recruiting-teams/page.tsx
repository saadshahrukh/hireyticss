import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { 
  Users, 
  Brain, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Workflow,
  ArrowRight,
  Layers,
  BarChart3,
  GitBranch,
  Clock,
  Check,
  Zap,
  Target
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export const metadata = buildMetadata({
  title: "Recruiting Software for Talent Acquisition Teams | Hireytics",
  description:
    "Empower talent acquisition teams and recruiters with AI voice screening, candidate pipeline tracking, ATS integrations, and Recall intelligence context.",
  path: "/solutions/recruiting-teams",
});

const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics for Recruiting Teams & TA Ops",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Recruiting software solution built for high-volume talent acquisition teams and recruitment agencies."
};

export default function RecruitingTeamsSolutionPage() {
  return (
    <>
      <JsonLd data={solutionSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Talent Acquisition & Recruiting Teams", href: "/solutions/recruiting-teams" },
            ]}
          />

          {/* ========================================================
              HERO SECTION
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-800 shadow-2xs backdrop-blur-xs mb-4">
              <Users className="h-3.5 w-3.5 text-indigo-600" />
              <span>TALENT ACQUISITION & RECRUITING OPS</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Scale High-Volume Hiring with Autonomous Precision.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Empower recruiters and hiring managers to review 10x more candidates in half the time. Hireytics combines asynchronous voice screening, rubric scorecards, and cross-pipeline Recall memory.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Team & Agency Plans
              </ButtonLink>
            </div>
          </div>

          {/* ========================================================
              HERO MOCKUP
              ======================================================== */}
          <div className="mt-14 relative mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-white p-3 sm:p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.14)]">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950">
                <img
                  src="/solutions_overview_ui.jpg"
                  alt="Enterprise Talent Acquisition Pipeline and Collaboration Suite"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              THREE PILLARS FOR TA TEAMS (Bento Cards)
              ======================================================== */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                HIGH-THROUGHPUT RECRUITING
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Built for multi-role hiring pipelines and tight hiring SLAs
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-2xs mb-5">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Multi-Stage Workflow Automation</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Automate candidate stage progression, evaluation triggers, calendar scheduling, and rejection notices with customizable logic.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-indigo-600">3.5x Faster Pipeline Velocity</span>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 shadow-2xs mb-5">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Cross-Pipeline Recall Reasoning</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Surface silver-medalist applicants from past requisitions. Ask Recall natural language questions across all interview transcripts.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-purple-600">Continuous Talent Memory</span>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs mb-5">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Enterprise Compliance & Audits</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  EEOC-aligned rubric scoring, anonymized blind review options, and SOC2-compliant data privacy controls built for modern TA ops.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-emerald-600">SOC2 & GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              DEEP DIVE: VOICE INTERVIEWS & RUBRIC HARMONIZATION
              ======================================================== */}
          <div className="mt-24 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                  PANEL HARMONIZATION
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                  Eliminate hiring manager subjectivity with standardized scoring rubrics.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Different interviewers have different standards. Hireytics AI applies objective, consistent evaluation rubrics across all candidate screening interviews, ensuring apples-to-apples comparisons.
                </p>
                <div className="mt-6 space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Real-time transcription with highlighted technical competence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Instant anti-cheat & identity verification flags</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>270+ native integrations with Greenhouse, Lever, Workday, & Slack</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <img
                    src="/features_voice_ui.jpg"
                    alt="AI Voice Interview Scorecard & Rubric Analysis"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to supercharge your talent acquisition team?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Test Hireytics with 15 free voice interview minutes and see how much faster your team can close top talent.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/onboarding" variant="secondary">
                Request Team Demo
              </ButtonLink>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
