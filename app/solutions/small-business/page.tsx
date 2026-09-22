import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { Building2, CheckCircle2, Zap, Users, TrendingUp } from "lucide-react";

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
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/#value" },
              { label: "Small Business & Startups", href: "/solutions/small-business" },
            ]}
          />

          <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <Building2 className="h-3.5 w-3.5 text-sky-600" />
              <span>Small Business & Startup Hiring</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Hiring Software Designed for Small Businesses & Growing Startups
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              When every hire counts and time is limited, founders and hiring managers cannot afford to spend 20 hours a week sifting through resumes. Hireytics gives small teams enterprise-grade AI screening, applicant tracking, and interview intelligence at a fraction of the cost.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free 14-Day Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                Explore SMB Pricing
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why Small Businesses Choose Hireytics
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Setup in Under 60 Seconds</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    No complex IT deployment required. Start receiving and evaluating candidates immediately.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">AI Voice Screening</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Let AI run phone screens so founders only spend time interviewing top-tier candidates.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Predictable Flat Pricing</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    No hidden seat fees or per-job listing surcharges. Scale your hiring budget with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
