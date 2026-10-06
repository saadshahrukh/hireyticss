import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { 
  Mic, 
  CheckCircle2, 
  MessageSquare, 
  Brain, 
  Sparkles,
  Zap,
  ShieldCheck,
  Headphones,
  Volume2,
  FileText,
  Lock
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export const metadata = buildMetadata({
  title: "AI Voice Interview Software & Screening Automation | Hireytics",
  description:
    "Conduct automated AI voice interviews with real-time transcription, structured scoring, and candidate evaluations inside Hireytics.",
  path: "/features/automated-interviews",
});

const featureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics AI Voice Interview Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI voice interview screening and automated assessment software by Hireytics."
};

const interviewCapabilities = [
  {
    title: "Conversational Voice Screening",
    description: "Candidates complete natural voice sessions from their phone or browser without app downloads.",
    icon: <Mic className="h-5 w-5 text-rose-500" />,
    badge: "Asynchronous",
  },
  {
    title: "Live Audio Transcription",
    description: "Every spoken response generates clean, searchable, timestamped text indexed automatically.",
    icon: <FileText className="h-5 w-5 text-indigo-500" />,
    badge: "Instant Transcripts",
  },
  {
    title: "Dynamic Follow-Up Questions",
    description: "AI intelligently probes deeper into candidate claims based on rubric parameters and JD requirements.",
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    badge: "Adaptive",
  },
  {
    title: "Recall Transcript Search",
    description: "Search across hundreds of candidate interview recordings using natural language questions in Recall.",
    icon: <Sparkles className="h-5 w-5 text-sky-500" />,
    badge: "Searchable",
  },
];

export default function AutomatedInterviewsFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/features" },
              { label: "AI Voice Interviews", href: "/features/automated-interviews" },
            ]}
          />

          {/* ========================================================
              HERO SPLIT SECTION
              ======================================================== */}
          <div className="mt-6 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold text-rose-800 w-fit">
                  <Mic className="h-3.5 w-3.5 text-rose-600" />
                  <span>AI Voice Interviewing</span>
                </div>

                <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  AI Voice Interview Software That Scales Initial Screening
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Conduct structured first-round voice interviews without scheduling bottlenecks. Hireytics AI interviewers ask calibrated questions, transcribe every word, and score candidates objectively.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <ButtonLink href="/free-trial" variant="primary">
                    Try AI Voice Interviews Free
                  </ButtonLink>
                  <ButtonLink href="/recall" variant="secondary">
                    Query Transcripts with Recall
                  </ButtonLink>
                </div>

                <div className="mt-8 flex items-center gap-6 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 15 free voice minutes included
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Anti-cheat audio verification
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Interactive Audio Interview Card */}
              <div 
                className="lg:col-span-5 rounded-3xl p-6 sm:p-7 relative overflow-hidden flex items-center justify-center min-h-[360px] shadow-sm border border-slate-200/60"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(244, 63, 94, 0.45), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(139, 92, 246, 0.35), transparent 60%), linear-gradient(145deg, #cbd5e1 0%, #ded7ea 50%, #f1f5f9 100%)",
                }}
              >
                {/* Frosted Audio Session Window */}
                <div className="w-full rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_18px_36px_rgba(0,0,0,0.1)] backdrop-blur-xl space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-ping" />
                      <span className="text-xs font-bold text-slate-900">Voice Session #482</span>
                    </div>
                    <span className="rounded bg-rose-50 text-rose-700 text-[10px] font-bold px-2 py-0.5">
                      Live Audio
                    </span>
                  </div>

                  {/* Transcript Snippet */}
                  <div className="space-y-2 text-xs">
                    <div className="rounded-xl bg-slate-50 p-2.5 border border-slate-100">
                      <p className="text-[10px] font-bold text-indigo-700">AI Interviewer</p>
                      <p className="text-slate-600 mt-0.5">&ldquo;Can you explain your approach to database indexing under high write load?&rdquo;</p>
                    </div>

                    <div className="rounded-xl bg-indigo-50/70 p-2.5 border border-indigo-100">
                      <p className="text-[10px] font-bold text-slate-800">Candidate Response (Audio & Transcript)</p>
                      <p className="text-slate-700 mt-0.5 italic">&ldquo;We partitioned tables by timestamp and utilized partial indexes to avoid write write amplification...&rdquo;</p>
                    </div>
                  </div>

                  {/* Audio Wave Visualizer */}
                  <div className="flex items-center justify-between pt-1 text-xs">
                    <div className="flex items-center gap-1">
                      {[40, 70, 30, 90, 60, 80, 45, 100, 50, 75].map((h, i) => (
                        <span key={i} style={{ height: `${h * 0.18}px` }} className="w-1 bg-rose-500 rounded-full inline-block" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500">04:18 / 15:00</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              CAPABILITIES BENTO GRID
              ======================================================== */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                AUDIO INTELLIGENCE
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                How Hireytics AI Voice Screening Works
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Automated audio assessments that save senior engineers and hiring managers dozens of screening hours.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {interviewCapabilities.map((cap) => (
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
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Test AI Voice Screening on your next candidate batch
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Get 15 free voice interview minutes with your 14-day trial. Setup takes under 60 seconds.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free Trial
              </ButtonLink>
              <ButtonLink href="/recall" variant="secondary">
                Explore Recall Engine
              </ButtonLink>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
