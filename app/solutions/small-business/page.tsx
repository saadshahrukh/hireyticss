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
              WHY SMALL BUSINESSES CHOOSE HIREYTICS (3-Card Bento)
              ======================================================== */}
          <div className="mt-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
                DESIGNED FOR FOUNDERS
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Everything you need to hire like a 50-person HR team
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-100 shadow-2xs mb-5">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Setup in Under 60 Seconds</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No IT department or complicated training required. Paste a job description and start receiving structured, scored candidates immediately.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-sky-600">Zero Implementation Delay</span>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-2xs mb-5">
                  <Brain className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Asynchronous Voice Screening</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Let AI conduct initial structured voice screens so founders only spend precious executive hours interviewing the top 5% of candidates.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-indigo-600">Save 15+ Hours / Week</span>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs hover:border-slate-300 hover:shadow-md transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-2xs mb-5">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900">Predictable Flat Pricing</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  No hidden recruiter commission, seat tax, or per-job penalties. Scale your hiring budget transparently as your team expands.
                </p>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-emerald-600">90% Less Than Agencies</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              FOUNDER ROI COMPARISON SECTION
              ======================================================== */}
          <div className="mt-24 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-6">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  SMB FINANCIAL ADVANTAGE
                </span>
                <h2 className="mt-4 font-heading text-2xl sm:text-3xl font-bold text-slate-900">
                  Stop overpaying recruitment agencies 25% of first-year salaries.
                </h2>
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  For a $100k engineer or product hire, traditional headhunters charge $20,000–$25,000. With Hireytics, your entire team gets autonomous sourcing, AI voice interviews, and Recall intelligence for a flat $199/month.
                </p>
                <div className="mt-6 space-y-2.5 text-sm text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Average savings of $18,400 per technical hire</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Time-to-hire reduced from 48 days down to 12 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>No long-term commitments; cancel anytime</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-3xl bg-slate-900 text-white p-8 border border-slate-800 shadow-xl">
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  Hiring Cost Breakdown (Per Role)
                </h3>
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400">Recruiting Agency (20% fee on $100k):</span>
                    <span className="font-bold text-rose-400 text-base">$20,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                    <span className="text-slate-400">Founder screening time (30 hrs @ $150/hr):</span>
                    <span className="font-bold text-rose-400 text-base">$4,500</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 text-base">
                    <span className="font-bold text-white">Hireytics Flat Monthly:</span>
                    <span className="font-extrabold text-emerald-400 text-lg">$199 / mo</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Estimated Net Savings:</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full">
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
