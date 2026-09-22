import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { Mic, CheckCircle2, MessageSquare, Brain, Sparkles } from "lucide-react";

export const metadata = buildMetadata({
  title: "AI Voice Interview Software & Screening Automation | Hireytics",
  description:
    "Conduct automated AI voice interviews with real-time transcription, structured scoring, and candidate evaluations inside Hireytics.",
  path: "/features/automated-interviews",
});

const featureSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hireytics AI Voice Interview Software",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "AI voice interview screening and automated assessment software by Hireytics."
};

export default function AutomatedInterviewsFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/#why-hireytics" },
              { label: "AI Voice Interviews", href: "/features/automated-interviews" },
            ]}
          />

          <div className="mt-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 sm:p-12 lg:p-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <Mic className="h-3.5 w-3.5 text-sky-600" />
              <span>AI Voice Screening</span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              AI Voice Interview Software That Scales Initial Screening
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Conduct structured initial voice screens asynchronously without back-and-forth scheduling hassle. Hireytics AI interviewers ask job-relevant questions, generate full transcripts, and deliver objective candidate assessments directly to your recruiting pipeline.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/free-trial" variant="primary">
                Try AI Voice Interviews Free
              </ButtonLink>
              <ButtonLink href="/recall" variant="secondary">
                Query Interview Transcripts with Recall
              </ButtonLink>
            </div>

            <div className="mt-14 border-t border-slate-100 pt-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                How Hireytics AI Voice Screening Works
              </h2>

              <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                    <Mic className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Interactive Voice Sessions</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Candidates complete phone or browser voice interviews on their schedule with natural speech interaction.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Real-Time Transcription</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Every interview session generates clean, searchable audio transcripts accessible to hiring managers instantly.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">Transcript Reasoning with Recall</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Use Recall to compare candidate answers across different interview sessions using plain language queries.
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
