import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { FileSearch, CheckCircle2, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

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

export default function CandidateScreeningFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/#why-hireytics" },
              { label: "Candidate Screening", href: "/features/candidate-screening" },
            ]}
          />

          <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <FileSearch className="h-3.5 w-3.5 text-sky-600" />
              <span>Automated Screening Engine</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              AI Candidate Screening Software That Identifies Top Talent Fast
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Eliminate hours of manual resume scanning. Hireytics uses OCR resume parsing and skill matching algorithms to extract candidate experience, evaluate core competencies, and surface qualified applicants instantly.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Try Candidate Screening Free
              </ButtonLink>
              <ButtonLink href="/recall" variant="secondary">
                See How Recall Analyzes Resumes
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                What Makes Hireytics Candidate Screening Superior
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">OCR Resume Parsing</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Extract work history, education, skills, and certifications from PDF, DOCX, and scanned documents accurately.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Skill Vector Matching</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Compare candidate competencies directly against job requirements instead of relying on simple keyword counts.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Unbiased Screening</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Evaluate candidates strictly on relevant experience, skills, and job criteria to promote fair recruitment.
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
