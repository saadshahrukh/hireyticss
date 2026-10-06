import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { 
  Building2, 
  Users, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Brain, 
  TrendingUp,
  Workflow,
  Clock,
  DollarSign,
  Briefcase,
  Target,
  BarChart3
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Tailored AI Hiring Solutions | Hireytics",
  description:
    "Discover Hireytics hiring solutions tailored for Founders, Small Businesses, Scaleups, and High-Volume Talent Acquisition Teams.",
  path: "/solutions",
});

const solutionsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Hireytics Hiring Solutions by Team & Industry",
  "description": "Customized AI recruitment and talent intelligence workflows designed for businesses of all sizes.",
  "url": "https://hireytics.com/solutions"
};

const solutionAudiences = [
  {
    slug: "small-business",
    title: "Small Business & Startups",
    eyebrow: "FOUNDERS & HIRING MANAGERS",
    badge: "Fast Setup",
    description:
      "Hire top-tier talent without paying $25,000+ per hire to headhunters or spending 20 hours a week screening resumes.",
    icon: <Building2 className="h-6 w-6 text-sky-600" />,
    stats: "Save $18k+ Per Hire",
    benefits: [
      "Zero HR department required — AI conducts structured phone screens",
      "One-click job posting to top boards with automatic applicant parsing",
      "Recall AI remembers candidate qualifications across past roles",
      "Predictable transparent pricing with no per-seat penalties",
    ],
    href: "/solutions/small-business",
  },
  {
    slug: "recruiting-teams",
    title: "Talent Acquisition & TA Ops",
    eyebrow: "IN-HOUSE TEAMS & AGENCIES",
    badge: "High Velocity",
    description:
      "Scale hiring throughput across multiple hiring managers and departments with automated pipeline stages and unified memory.",
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    stats: "3.5x Pipeline Velocity",
    benefits: [
      "Autonomous resume screening & multi-dimensional skill vector matching",
      "Asynchronous AI voice interviews with 24-second executive summaries",
      "Centralized scorecards and interview alignment across panels",
      "Seamless two-way sync with Greenhouse, Lever, and Workday",
    ],
    href: "/solutions/recruiting-teams",
  },
];

const roiComparison = [
  {
    metric: "Average Time-to-Hire",
    traditional: "45–60 days of manual scheduling & screening",
    hireytics: "11–14 days with autonomous screening & Recall",
    gain: "75% Faster",
  },
  {
    metric: "Cost Per Placement",
    traditional: "$4,000 – $25,000 (Agencies & Recruiter Hours)",
    hireytics: "$199 – $499 flat monthly platform fee",
    gain: "90% Cost Reduction",
  },
  {
    metric: "Screening Capacity",
    traditional: "Max 15–20 phone screens per recruiter/week",
    hireytics: "Unlimited asynchronous AI voice screens 24/7",
    gain: "10x Scalability",
  },
  {
    metric: "Interviewer Feedback Velocity",
    traditional: "Chasing managers for 4–7 days post-interview",
    hireytics: "Instant AI rubric scoring & structured synthesis",
    gain: "Real-time",
  },
];

export default function SolutionsHubPage() {
  return (
    <>
      <JsonLd data={solutionsSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />

          {/* ========================================================
              SOLUTIONS HERO HEADER
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold text-sky-800 shadow-2xs backdrop-blur-xs mb-4">
              <Target className="h-3.5 w-3.5 text-sky-600 animate-pulse" />
              <span>TAILORED RECRUITMENT WORKFLOWS</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Recruitment solutions built for your team’s scale.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Whether you’re a founder making your first 10 critical hires or an enterprise talent acquisition team processing thousands of applicants, Hireytics adapts to your exact workflow.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/onboarding" variant="secondary">
                Find Your Solution
              </ButtonLink>
            </div>
          </div>

          {/* ========================================================
              SOLUTIONS VISUAL DASHBOARD HERO SHOWCASE
              ======================================================== */}
          <div className="mt-14 relative mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200/90 bg-white p-3 sm:p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.14)]">
              <div className="relative overflow-hidden rounded-2xl bg-slate-950">
                <img
                  src="/solutions_overview_ui.jpg"
                  alt="Hireytics Collaborative Team Recruitment Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              SOLUTIONS BY TEAM: 2 MAIN PATHS (Deep Bento Grid)
              ======================================================== */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                WHO WE BUILD FOR
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Choose the solution that matches your hiring goals
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {solutionAudiences.map((sol) => (
                <div
                  key={sol.slug}
                  className="flex flex-col justify-between rounded-[32px] border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-slate-300 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 border border-sky-100 shadow-2xs">
                        {sol.icon}
                      </div>
                      <span className="rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-bold text-emerald-800">
                        {sol.stats}
                      </span>
                    </div>

                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {sol.eyebrow}
                    </span>

                    <h3 className="mt-2 font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                      {sol.title}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="mt-8 space-y-3 border-t border-slate-100 pt-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        KEY CAPABILITIES:
                      </p>
                      {sol.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <ButtonLink href={sol.href} variant="primary">
                      Explore {sol.title} Solution
                    </ButtonLink>
                    <Link
                      href={sol.href}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-700 hover:text-indigo-600"
                    >
                      <span>Full Breakdown</span>
                      <MdArrowOutward className="text-sm" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              ROI & IMPACT METRICS: WHY COMPANIES SWITCH
              ======================================================== */}
          <div className="mt-24 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                MEASURABLE ROI
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                The Economic Impact of Hireytics AI Engine
              </h2>
              <p className="mt-3 text-sm text-slate-500">
                Compare traditional hiring agency and manual recruiter costs against Hireytics automated intelligence.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roiComparison.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-bold text-indigo-800">
                      {item.gain}
                    </span>
                    <h4 className="mt-3 font-heading text-base font-bold text-slate-900">
                      {item.metric}
                    </h4>
                    <div className="mt-4 space-y-2 text-xs">
                      <div>
                        <p className="text-[10px] font-semibold text-slate-400 uppercase">Legacy Approach</p>
                        <p className="text-slate-600 font-medium line-through decoration-rose-400 mt-0.5">
                          {item.traditional}
                        </p>
                      </div>
                      <div className="pt-1">
                        <p className="text-[10px] font-semibold text-emerald-600 uppercase">With Hireytics</p>
                        <p className="text-slate-900 font-bold mt-0.5">
                          {item.hireytics}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              HOW TEAMS DEPLOY IN 3 SIMPLE STEPS
              ======================================================== */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                SPEED TO VALUE
              </p>
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900">
                Up and running in less than 60 seconds
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 font-bold text-indigo-600 mb-4">
                  01
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Connect or Create Jobs</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Import roles directly from your existing ATS or paste a job description. Hireytics instantly generates custom evaluation rubrics and screening questions.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 border border-purple-100 font-bold text-purple-600 mb-4">
                  02
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Autonomous AI Screening</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Incoming applicants are parsed with OCR, ranked with skill vector matching, and invited to asynchronous AI voice interviews on their schedule.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100 font-bold text-emerald-600 mb-4">
                  03
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900">Decide with Recall</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Review 24-second structured candidate scorecards. Ask Recall questions to compare finalists and extend offers with 100% confidence.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM HIGH-CONVERTING CTA BANNER
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-indigo-200 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Transform Your Hiring
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Find the ideal solution for your hiring roadmap.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Try Hireytics risk-free with our 14-day free trial or talk with our solutions architects.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ButtonLink href="/free-trial" variant="primary">
                  Start 14-Day Free Trial
                </ButtonLink>
                <ButtonLink href="/pricing" variant="secondary">
                  Compare SMB & Enterprise Pricing
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
