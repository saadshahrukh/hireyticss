import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { Users, Brain, CheckCircle2, ShieldCheck, Sparkles, Workflow } from "lucide-react";

export const metadata = buildMetadata({
  title: "Recruiting Software for Talent Acquisition Teams | Hireytics",
  description:
    "Empower talent acquisition teams and recruiters with AI voice screening, candidate pipeline tracking, and Recall intelligence context.",
  path: "/solutions/recruiting-teams",
});

const solutionSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics for Recruiting Teams",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Recruiting software solution built for high-volume talent acquisition teams and recruitment agencies."
};

export default function RecruitingTeamsSolutionPage() {
  return (
    <>
      <JsonLd data={solutionSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/#value" },
              { label: "Recruiting & Talent Acquisition Teams", href: "/solutions/recruiting-teams" },
            ]}
          />

          <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <Users className="h-3.5 w-3.5 text-sky-600" />
              <span>Talent Acquisition & TA Ops</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Recruiting Automation for High-Volume Talent Acquisition Teams
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Manage multi-role recruiting pipelines with confidence. Hireytics enables recruiters to automate screening, coordinate candidate feedback with hiring managers, and leverage Recall intelligence to surface past applicant profiles instantly.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free Trial
              </ButtonLink>
              <ButtonLink href="/recall" variant="secondary">
                Discover Recall Intelligence
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Built for High-Velocity Talent Acquisition
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                    <Workflow className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Multi-Stage Workflow Automation</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Automate notifications, candidate status updates, assessment triggers, and panel interview scorecards.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Cross-Pipeline Reasoning</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Use Recall to check if a new applicant previously interviewed for another position across your organization.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Enterprise Compliance</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Ensure structured interview scorecards, audit logs, and data retention policies comply with workplace regulations.
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
