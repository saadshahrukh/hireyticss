import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { Layers, Users, CheckCircle2, ArrowRight, BarChart3, Filter } from "lucide-react";

export const metadata = buildMetadata({
  title: "Applicant Tracking System (ATS) & Pipeline Management | Hireytics",
  description:
    "Manage candidate pipelines, track application stages, evaluate interview feedback, and automate hiring workflows with Hireytics ATS.",
  path: "/features/applicant-tracking",
});

const featureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics Applicant Tracking System",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Applicant tracking system (ATS) by Hireytics for managing talent pipelines, job applications, interview stages, and team feedback."
};

export default function ApplicantTrackingFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/#why-hireytics" },
              { label: "Applicant Tracking System", href: "/features/applicant-tracking" },
            ]}
          />

          <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <Layers className="h-3.5 w-3.5 text-sky-600" />
              <span>Modern ATS Architecture</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Applicant Tracking System Built for Fast-Growing Companies
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Say goodbye to clunky legacy ATS tools. Hireytics gives recruiters and hiring managers a clean, intuitive pipeline dashboard to manage applications, schedule assessments, review team feedback, and track candidates from first touch to offer letter.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start Free Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                View Pricing Plans
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Key Features of Hireytics ATS
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                    <Filter className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Custom Pipeline Stages</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Define custom recruitment stages tailored to technical engineering, sales, or operations roles.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Collaborative Scorecards</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Collect structured interviewer scorecards and feedback instantly after every interview round.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Pipeline Analytics</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Monitor time-to-hire, candidate pass rates, bottleneck stages, and sourcing channel quality.
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
