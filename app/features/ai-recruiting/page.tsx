import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { Sparkles, Brain, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata = buildMetadata({
  title: "AI Recruiting Software for Modern Hiring Teams | Hireytics",
  description:
    "Streamline hiring with AI recruiting software that screens candidates, evaluates voice interviews, and indexes hiring intelligence with Recall.",
  path: "/features/ai-recruiting",
});

const featureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics AI Recruiting Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI recruiting software by Hireytics that automates candidate matching, resume parsing, voice interview screening, and context retrieval."
};

export default function AIRecruitingFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/#why-hireytics" },
              { label: "AI Recruiting Software", href: "/features/ai-recruiting" },
            ]}
          />

          <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" />
              <span>Hireytics AI Recruiting Suite</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              AI Recruiting Software That Connects Your Entire Hiring Process
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Hireytics turns disparate applicant data into structured hiring intelligence. From automated resume screening to AI voice interview assessments and instant context search via Recall, Hireytics helps growing teams evaluate top candidates faster without sacrificing candidate experience.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/recall" variant="secondary">
                Explore Recall Engine
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Core Capabilities of Hireytics AI Recruiting
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Automated Candidate Screening</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Parse resumes, evaluate qualifications against job descriptions using OCR, and extract skill vectors automatically.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">AI Voice Interview Screening</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Conduct initial structured voice assessments with candidate transcripts, automated scoring, and detailed sentiment analysis.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Recall Hiring Assistant</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Ask natural language questions across candidate files, resumes, and transcripts directly inside Hireytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Why Teams Upgrade from Legacy Recruiting Tools
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <span><strong>Zero Manual Resume Filtering:</strong> Let AI handle initial qualification checks so recruiters focus on high-touch candidate conversations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <span><strong>Grounded Decision Support:</strong> Every recommendation is backed by real interview transcripts and candidate data, preventing hallucinated conclusions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                  <span><strong>Consistent Candidate Evaluation:</strong> Standardize interview criteria across hiring managers for fair, structured assessments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
