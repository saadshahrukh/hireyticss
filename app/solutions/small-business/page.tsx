import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
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
  Briefcase
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

export const metadata = buildMetadata({
  title: "Recruiting & Hiring Software for Small Business & Startups | Hireytics",
  description:
    "Hireytics empowers small business founders and hiring managers to screen candidates, run AI interviews, and manage recruiting without an expensive HR department.",
  path: "/solutions/small-business",
});

const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics for Small Business & Startups",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Recruiting software solution tailored for small businesses, founders, and growing startup teams."
};

export default function SmallBusinessSolutionPage() {
  return (
    <>
      <JsonLd data={solutionSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: "Small Business & Startups", href: "/solutions/small-business" },
            ]}
          />

          {/* ========================================================
              HERO SECTION
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-sky-50/80 px-3.5 py-1 text-xs font-semibold text-sky-800 shadow-2xs backdrop-blur-xs mb-4">
              <Building2 className="h-3.5 w-3.5 text-sky-600" />
              <span>FOUNDERS & STARTUP HIRING</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Enterprise-Grade AI Hiring Built for Small Teams.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              When every hire determines your runway and growth, founders can’t afford 20 hours a week reviewing resumes or paying $25k headhunter fees. Hireytics gives you an automated hiring department out of the box.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free 14-Day Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                Explore SMB Flat Pricing
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
                  src="/features_dashboard_ui.jpg"
                  alt="Small Business Candidate Screening and Pipeline Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              WHY SMALL BUSINESSES CHOOSE HIREYTICS (Expanded Feature Bento)
              ======================================================== */}
          <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                DESIGNED FOR FOUNDERS & LEAN TEAMS
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                Everything you need to hire like a 50-person HR team
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Turn your recruiting pipeline into an automated powerhouse. No expensive agency retainers or full-time recruiting salaries required.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="group relative flex flex-col justify-between rounded-[32px] border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 shadow-2xs group-hover:scale-105 transition-transform">
                      <Zap className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-sky-50 border border-sky-100 px-3 py-1 text-xs font-bold text-sky-800">
                      Under 60s
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">Setup in Under 60 Seconds</h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    No IT department or complicated training required. Paste a job description and start receiving structured, scored candidates immediately.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>One-click requisition generation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Direct resume drag-and-drop parsing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Instant candidate qualification rubric</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">Zero Setup Delay</span>
                </div>
              </div>

              <div className="group relative flex flex-col justify-between rounded-[32px] border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-2xs group-hover:scale-105 transition-transform">
                      <Brain className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                      Asynchronous AI
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">Asynchronous Voice Screening</h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Let AI conduct initial structured voice screens so founders only spend precious executive hours interviewing the top 5% of vetted applicants.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Screen candidates 24/7 in their browser</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Concise 24-second audio digests</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Anti-cheat speech verification</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Save 15+ Hours / Week</span>
                </div>
              </div>

              <div className="group relative flex flex-col justify-between rounded-[32px] border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xs transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs group-hover:scale-105 transition-transform">
                      <TrendingUp className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      Save $18k+ / Hire
                    </span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900">Predictable Flat Pricing</h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    No hidden recruiter commissions, seat taxes, or per-job penalties. Scale your hiring budget transparently as your team expands.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 border-t border-slate-100 pt-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Flat monthly rate starting at $199</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Unlimited candidate resume parsing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>No long-term contracts; cancel anytime</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">90% Less Than Agencies</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              FOUNDER ROI COMPARISON SECTION (Expansive Showcase)
              ======================================================== */}
          <div className="mt-24 rounded-[36px] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/20 p-8 sm:p-12 lg:p-16 shadow-md">
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <span className="rounded-full bg-emerald-100/80 border border-emerald-200/80 px-3.5 py-1 text-xs font-bold text-emerald-900 shadow-2xs">
                  SMB FINANCIAL ADVANTAGE
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  Stop overpaying recruitment agencies 25% of first-year salaries.
                </h2>
                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  For a $100k engineer or product hire, traditional headhunters charge $20,000–$25,000. With Hireytics, your entire team gets autonomous sourcing, AI voice interviews, and Recall intelligence for a flat $199/month.
                </p>
                <div className="mt-8 space-y-3.5 text-sm sm:text-base text-slate-700">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="font-medium">Average net savings of $18,400 per technical placement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="font-medium">Time-to-hire reduced from 48 days down to 12 days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="font-medium">Transparent monthly billing; zero long-term lock-in</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-6">
                  Hiring Cost Breakdown (Per Role)
                </h3>
                <div className="space-y-5 text-sm sm:text-base">
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800/80">
                    <span className="text-slate-400">Recruiting Agency (20% fee on $100k):</span>
                    <span className="font-bold text-rose-400 text-lg">$20,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-800/80">
                    <span className="text-slate-400">Founder screening time (30 hrs @ $150/hr):</span>
                    <span className="font-bold text-rose-400 text-lg">$4,500</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-base sm:text-lg">
                    <span className="font-bold text-white">Hireytics Flat Monthly:</span>
                    <span className="font-extrabold text-emerald-400 text-xl sm:text-2xl">$199 / mo</span>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">Estimated Net Savings:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-700/80 px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-xs">
                    Save $24,301 / Hire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
              Build your dream team without breaking your budget.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Start your 14-day free trial now. Screen candidates with AI voice interviews today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Pricing Plans
              </ButtonLink>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
