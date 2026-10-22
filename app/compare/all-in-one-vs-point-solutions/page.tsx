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
  Scale,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Zap,
  DollarSign,
  Layers,
  Brain,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronDown,
  Building2,
  FileSpreadsheet,
} from "lucide-react";

export const metadata = buildMetadata({
  title: "All-in-One HR Platform vs Point Solutions & Hidden Costs",
  description:
    "Compare the total cost, operational friction, and hidden fees of fragmented HR point solutions versus an all-in-one AI recruiting platform with Hireytics and Recall.",
  path: "/compare/all-in-one-vs-point-solutions",
});

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "All-in-One HR Platform vs Point Solutions & Hidden Costs",
  description:
    "Comprehensive comparison of Total Cost of Ownership (TCO), software integration debt, and hiring velocity between fragmented HR point solutions and an all-in-one AI platform.",
  url: "https://hireytics.com/compare/all-in-one-vs-point-solutions",
};

const pointSolutionStack = [
  { tool: "Standalone ATS (Greenhouse / Lever)", cost: "$18,000 – $32,000 / yr", issue: "Requires separate per-seat recruiter licensing" },
  { tool: "Async Video Screen Tool (HireVue / Spark Hire)", cost: "$9,000 – $18,000 / yr", issue: "Disconnected candidate video logs" },
  { tool: "OCR Resume Parser & Vector Search Add-on", cost: "$6,000 – $12,000 / yr", issue: "API sync lag and keyword stuffing vulnerabilities" },
  { tool: "Interview Scheduling & Calibrations Tool", cost: "$3,600 – $7,200 / yr", issue: "Fragmented interviewer scorecards" },
  { tool: "Total Annual Point Solution Cost", cost: "$36,600 – $69,200 / yr", issue: "High maintenance, fragile webhooks, zero unified memory" },
];

const comparisonMatrix = [
  {
    category: "Software Subscription Cost",
    pointSolutions: "$36,000 to $70,000+ per year across 4+ contracts",
    hireytics: "Flat $1,440 to $3,360 per year (Save up to 95%)",
    winner: "Hireytics",
  },
  {
    category: "Candidate Experience",
    pointSolutions: "Disjointed: 3 separate logins, different branding, high drop-off",
    hireytics: "Unified 1-click candidate journey from application to voice interview",
    winner: "Hireytics",
  },
  {
    category: "Institutional Hiring Memory",
    pointSolutions: "Nonexistent. When a recruiter churns, notes are lost in silos",
    hireytics: "Recall AI searchable memory across all candidate transcripts & scorecards",
    winner: "Hireytics",
  },
  {
    category: "Integration & Webhook Maintenance",
    pointSolutions: "Constant sync errors, API version breaks, high IT overhead",
    hireytics: "Zero setup required: all features natively wired into single database",
    winner: "Hireytics",
  },
  {
    category: "Asynchronous Voice & Speech AI",
    pointSolutions: "Basic one-way video without conversational AI probing",
    hireytics: "Real-time conversational voice interviews with live follow-up questions",
    winner: "Hireytics",
  },
  {
    category: "Per-Seat Licensing Penalties",
    pointSolutions: "Cost scales aggressively for every hiring manager and recruiter added",
    hireytics: "Unlimited hiring manager seats; transparent predictable billing",
    winner: "Hireytics",
  },
  {
    category: "Implementation Time",
    pointSolutions: "3 to 6 months of enterprise consulting and IT configuration",
    hireytics: "Up and running in under 60 seconds with self-serve onboarding",
    winner: "Hireytics",
  },
];

export default function ComparePointSolutionsPage() {
  return (
    <>
      <JsonLd data={comparisonSchema} />
      <JsonLd data={generateSoftwareApplicationSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Compare", item: "/compare/all-in-one-vs-point-solutions" },
        ])}
      />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Compare", href: "/compare/all-in-one-vs-point-solutions" },
              { label: "All-in-One vs Point Solutions", href: "/compare/all-in-one-vs-point-solutions" },
            ]}
          />

          {/* ========================================================
              HERO SECTION
              ======================================================== */}
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-200/80 bg-rose-50/80 px-3.5 py-1 text-xs font-semibold text-rose-800 shadow-2xs backdrop-blur-xs mb-4">
              <Scale className="h-3.5 w-3.5 text-rose-600" />
              <span>TOTAL COST OF OWNERSHIP (TCO) ANALYSIS</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              All-in-One HR Platform vs. Point Solutions: The Real Hidden Costs.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Buying specialized point solutions for every stage of your hiring pipeline seems modular—until you uncover the integration maintenance costs, candidate drop-offs, and ballooning per-seat subscription invoices.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Consolidate Your Stack — Free Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View All-in-One Pricing
              </ButtonLink>
            </div>
          </div>

          {/* ========================================================
              HIDDEN COSTS CARD BREAKDOWN
              ======================================================== */}
          <div className="mt-16 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600 font-mono">
                THE POINT SOLUTION TAX
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                What a "Best-of-Breed" Fragmented Tech Stack Actually Costs
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-bold uppercase text-slate-500">
                    <th className="py-3 px-4">Point Solution Category</th>
                    <th className="py-3 px-4">Typical Annual Cost</th>
                    <th className="py-3 px-4">Hidden Operational Friction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {pointSolutionStack.map((item, idx) => {
                    const isTotal = idx === pointSolutionStack.length - 1;
                    return (
                      <tr
                        key={item.tool}
                        className={isTotal ? "bg-rose-50/70 font-bold text-slate-900" : "hover:bg-slate-50/50"}
                      >
                        <td className="py-4 px-4">{item.tool}</td>
                        <td className={`py-4 px-4 ${isTotal ? "text-rose-600 text-base" : "text-slate-700"}`}>
                          {item.cost}
                        </td>
                        <td className="py-4 px-4 text-slate-500 text-xs sm:text-sm">
                          {item.issue}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                <p className="text-xs sm:text-sm text-slate-800">
                  <span className="font-bold">Hireytics All-in-One Solution: </span>
                  Full ATS + OCR screening + AI voice interviews + Recall context for just{" "}
                  <span className="font-bold text-indigo-700">$120 to $280 / month</span> flat.
                </p>
              </div>
              <Link
                href="/free-trial"
                className="shrink-0 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-700 transition"
              >
                Eliminate Point Solutions
              </Link>
            </div>
          </div>

          {/* ========================================================
              HEAD-TO-HEAD MATRIX
              ======================================================== */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 font-mono">
                HEAD-TO-HEAD BREAKDOWN
              </span>
              <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Point Solutions vs. Hireytics All-in-One
              </h2>
            </div>

            <div className="overflow-x-auto rounded-[32px] border border-slate-200/90 bg-white shadow-sm p-4 sm:p-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-4 text-xs font-bold uppercase text-slate-500">Evaluation Dimension</th>
                    <th className="py-4 px-4 text-xs font-bold uppercase text-slate-500">
                      Fragmented Point Solutions
                    </th>
                    <th className="py-4 px-4 text-xs font-bold uppercase text-indigo-600 bg-indigo-50/60 rounded-t-xl">
                      Hireytics All-in-One Platform
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-slate-900">{row.category}</td>
                      <td className="py-4 px-4 text-slate-600 flex items-start gap-2">
                        <XCircle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.pointSolutions}</span>
                      </td>
                      <td className="py-4 px-4 font-semibold text-slate-900 bg-indigo-50/30">
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
              RECALL CONTEXT CALLOUT
              ======================================================== */}
          <RecallContextCallout
            stage="Stack Consolidation & Memory Retrieval"
            headline="Why Point Solutions Can Never Build Unified Candidate Memory"
            description="Point solutions store information in disconnected databases: your video interview notes stay in one silo, resumes in another, and rejection reasons in a third. Recall unifies every candidate interaction into a single semantic hiring memory, allowing your team to ask natural-language questions across your entire recruiting history."
            exampleQuery="Recall, compare candidate ratings between our technical screening rubrics and hiring manager debrief scorecards."
          />

          {/* ========================================================
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-20 rounded-[32px] border border-indigo-100 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-14 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md text-indigo-200 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" /> Cut Software Waste
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Consolidate your recruiting stack in 60 seconds.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Save $45,000+ per year, eliminate vendor chaos, and experience the power of Recall hiring memory. Start your 14-day free trial now.
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
