import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { 
  FileSearch, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  FileText,
  Sparkles,
  Layers,
  Search,
  Filter,
  Brain,
  Zap,
  Award
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export const metadata = buildMetadata({
  title: "AI Candidate Screening Software & Resume Parsing | Hireytics",
  description:
    "Automate candidate resume screening with OCR resume parsing, skill match scoring, and automated candidate evaluation.",
  path: "/features/candidate-screening",
});

const featureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics Candidate Screening Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Automated candidate screening and OCR resume parsing software by Hireytics."
};

const capabilities = [
  {
    title: "Deep OCR Resume Parsing",
    description: "Extract work history, credentials, education, and portfolio links from PDF, DOCX, and scanned image documents accurately.",
    icon: <Cpu className="h-5 w-5 text-amber-500" />,
    badge: "Multi-Format",
  },
  {
    title: "Semantic Skill Vector Matching",
    description: "Evaluate candidates on contextual domain expertise and relevant achievements instead of rudimentary keyword count matching.",
    icon: <Search className="h-5 w-5 text-indigo-500" />,
    badge: "Vector AI",
  },
  {
    title: "Unbiased Screening Rubrics",
    description: "Evaluate applicant profiles against structured job competencies while removing demographic signals that trigger cognitive bias.",
    icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
    badge: "Fair Hiring",
  },
  {
    title: "Recall Context Intelligence",
    description: "Ask Recall plain-language questions across candidate resumes and portfolio documents to quickly verify niche experience.",
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    badge: "Instant Recall",
  },
];

export default function CandidateScreeningFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/features" },
              { label: "Candidate Screening", href: "/features/candidate-screening" },
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
                  <FileSearch className="h-3.5 w-3.5 text-sky-600" />
                  <span>Automated Screening Engine</span>
                </div>

                <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  AI Candidate Screening Software That Identifies Top Talent Fast
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Eliminate hundreds of hours spent manually scanning resumes. Hireytics combines deep OCR document parsing with skill vector matching to evaluate competencies and surface qualified applicants instantly.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <ButtonLink href="/free-trial" variant="primary">
                    Try Candidate Screening Free
                  </ButtonLink>
                  <ButtonLink href="/recall" variant="secondary">
                    See How Recall Analyzes Resumes
                  </ButtonLink>
                </div>

                <div className="mt-8 flex items-center gap-6 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 20+ file formats supported
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Real-time semantic scoring
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Interactive Card with Blurred Atmospheric Gradient */}
              <div 
                className="lg:col-span-5 rounded-3xl p-6 sm:p-7 relative overflow-hidden flex items-center justify-center min-h-[360px] shadow-sm border border-slate-200/60"
                style={{
                  background:
                    "radial-gradient(ellipse at 75% 25%, rgba(245, 158, 11, 0.4), transparent 60%), radial-gradient(ellipse at 25% 75%, rgba(99, 102, 241, 0.4), transparent 60%), linear-gradient(145deg, #cbd5e1 0%, #e2e8f0 50%, #f1f5f9 100%)",
                }}
              >
                {/* Frosted Resume Parser Window */}
                <div className="w-full rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_18px_36px_rgba(0,0,0,0.1)] backdrop-blur-xl space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 border border-amber-200 text-amber-600 font-bold text-xs">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">resume_devops_lead.pdf</p>
                        <p className="text-[10px] text-slate-400 leading-tight">OCR Extraction Completed (0.4s)</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                      95% Match
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-700 mb-1">
                        <span>Core Competency Score</span>
                        <span className="text-indigo-600">9.5 / 10</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full w-[95%]" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 space-y-1.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Extracted Skills</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">Kubernetes</span>
                        <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">AWS / Terraform</span>
                        <span className="rounded bg-white border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-700">Go & Python</span>
                        <span className="rounded bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">+8 More</span>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-slate-600 font-medium">Domain Experience</span>
                      <span className="text-[10px] font-bold text-slate-900 bg-white border border-slate-200 px-2 py-0.5 rounded">7+ Years</span>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Recall Scorecard Ready</span>
                    <button className="rounded-lg bg-slate-900 text-white px-3 py-1 text-[11px] font-bold hover:bg-black transition">
                      Schedule AI Interview
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
                What Makes Hireytics Candidate Screening Superior
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                State-of-the-art OCR parsing and semantic comparison designed for modern hiring workflows.
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
              How Hireytics Screening Replaces Manual Filtering
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <CheckCircle2 className="h-4 w-4" /> Beyond Keyword Match
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Understand applicant context and demonstrated expertise instead of discarding resumes due to slight keyword mismatch.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <CheckCircle2 className="h-4 w-4" /> 80% Time Reduction
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Screen 500+ applicants in minutes with automated scoring and instant shortlist recommendations.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
                  <CheckCircle2 className="h-4 w-4" /> Integrated with Recall
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Query candidate resumes directly with Recall to verify specific claims and previous projects on demand.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to automate candidate screening?
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Set up your job rubric, upload candidate resumes, and get ranked applicant shortlists in minutes.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free Trial
              </ButtonLink>
              <ButtonLink href="/onboarding" variant="secondary">
                Get Started
              </ButtonLink>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
