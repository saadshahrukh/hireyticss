import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { 
  Sparkles, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Zap,
  Users,
  Activity,
  Bot,
  FileCheck,
  BarChart3,
  Clock,
  Layers,
  ChevronRight
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export const metadata = buildMetadata({
  title: "AI Recruiting Software for Modern Hiring Teams | Hireytics",
  description:
    "Streamline hiring with AI recruiting software that screens candidates, evaluates voice interviews, and indexes hiring intelligence with Recall.",
  path: "/features/ai-recruiting",
});

const featureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics AI Recruiting Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI recruiting software by Hireytics that automates candidate matching, resume parsing, voice interview screening, and context retrieval."
};

const capabilities = [
  {
    title: "Autonomous Candidate Sourcing",
    description: "Scan applicant pipelines and external talent pools to automatically score qualification fit against job rubrics.",
    icon: <Zap className="h-5 w-5 text-amber-500" />,
    badge: "Fast Sourcing",
  },
  {
    title: "AI Voice & Video Pre-Screening",
    description: "Conduct structured, conversational asynchronous screens with full question calibrations and instant audio transcription.",
    icon: <Bot className="h-5 w-5 text-indigo-500" />,
    badge: "Asynchronous",
  },
  {
    title: "Recall Context Intelligence",
    description: "Connect candidate resumes, scorecards, and transcripts so hiring managers can ask plain language questions.",
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    badge: "Core AI",
  },
  {
    title: "Automated Pipeline Telemetry",
    description: "Track pass-through velocity, interviewer rubric alignment, and candidate experience scores in real time.",
    icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
    badge: "Real-Time",
  },
];

export default function AIRecruitingFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/features" },
              { label: "AI Recruiting Software", href: "/features/ai-recruiting" },
            ]}
          />

          {/* ========================================================
              HERO SPLIT SECTION (Matches Blog/Home Page Hero Style)
              ======================================================== */}
          <div className="mt-6 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800 w-fit">
                  <Sparkles className="h-3.5 w-3.5 text-sky-600" />
                  <span>Autonomous Talent Engine</span>
                </div>

                <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  AI Recruiting Software That Connects Your Entire Hiring Process
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Turn disconnected candidate resumes, interviews, and notes into unified hiring intelligence. Sourcing, automated voice screening, and contextual reasoning — all in one system.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <ButtonLink href="/free-trial" variant="primary">
                    Start 14-Day Free Trial
                  </ButtonLink>
                  <ButtonLink href="/recall" variant="secondary">
                    Explore Recall Engine
                  </ButtonLink>
                </div>

                <div className="mt-8 flex items-center gap-6 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> No credit card required
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 1-click ATS sync
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Interactive Card with Blurred Atmospheric Gradient */}
              <div 
                className="lg:col-span-5 rounded-3xl p-6 sm:p-7 relative overflow-hidden flex items-center justify-center min-h-[360px] shadow-sm border border-slate-200/60"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(99, 102, 241, 0.45), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(236, 72, 153, 0.35), transparent 60%), linear-gradient(145deg, #cbd5e1 0%, #e2e8f0 50%, #f1f5f9 100%)",
                }}
              >
                {/* Frosted Candidate Evaluation Window */}
                <div className="w-full rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_18px_36px_rgba(0,0,0,0.1)] backdrop-blur-xl space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Candidate"
                        className="h-8 w-8 rounded-full object-cover border border-white shadow-2xs"
                      />
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">Sarah Jenkins</p>
                        <p className="text-[10px] text-slate-400 leading-tight">Staff Frontend Engineer</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      96% Fit
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-600 font-medium">OCR Resume Parsing</span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Verified</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-600 font-medium">AI Voice Screen (45m)</span>
                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Score: 94/100</span>
                    </div>
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-600 font-medium">Rubric Calibration</span>
                      <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">3/3 Pass</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Recall Live Context Synced</span>
                    <button className="rounded-lg bg-slate-900 text-white px-3 py-1 text-[11px] font-bold hover:bg-black transition">
                      Advance to Offer
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              CORE CAPABILITIES BENTO GRID (Matches Home & Blog Style)
              ======================================================== */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 font-mono">
                DEEP DIVE
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Core Capabilities of Hireytics AI Recruiting
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Everything you need to replace manual spreadsheets and fragmented screening tools.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                        {cap.icon}
                      </div>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
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
              COMPARISON / VALUE BANNER
              ======================================================== */}
          <div className="mt-16 rounded-[32px] border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xs">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Why Teams Upgrade from Legacy Recruiting Tools
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <CheckCircle2 className="h-4 w-4" /> Zero Manual Resume Filtering
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Let AI handle qualification checks so recruiters focus exclusively on high-touch candidate conversations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <CheckCircle2 className="h-4 w-4" /> Grounded Decision Support
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every recommendation is backed by real interview transcripts and candidate data, preventing hallucinated conclusions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <CheckCircle2 className="h-4 w-4" /> Standardized Evaluations
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calibrate scorecards across hiring managers and remove subjective interviewer bias across rounds.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Start recruiting 3.5x faster with Hireytics
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Activate your workspace in under 60 seconds. Start screening candidates with Recall intelligence today.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/onboarding" variant="secondary">
                Start Onboarding
              </ButtonLink>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
