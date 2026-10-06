import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";
import { 
  Layers, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  BarChart3, 
  Filter,
  Sparkles,
  ShieldCheck,
  Zap,
  Calendar,
  Clock,
  MoreHorizontal
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";

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

const atsCapabilities = [
  {
    title: "Customizable Pipeline Stages",
    description: "Build custom hiring stages tailored to technical engineering, executive leadership, or operational roles.",
    icon: <Filter className="h-5 w-5 text-emerald-500" />,
    badge: "Flexible Workflows",
  },
  {
    title: "Collaborative Interview Scorecards",
    description: "Collect structured interviewer rubrics and alignment notes in real-time immediately after each panel.",
    icon: <Users className="h-5 w-5 text-indigo-500" />,
    badge: "Team Alignment",
  },
  {
    title: "Recruiting Velocity Telemetry",
    description: "Monitor time-to-hire, candidate pass-through rates, bottleneck stages, and sourcing channel ROI.",
    icon: <BarChart3 className="h-5 w-5 text-sky-500" />,
    badge: "Analytics",
  },
  {
    title: "Bi-Directional ATS Sync",
    description: "Seamlessly integrate with Greenhouse, Lever, Ashby, Workday, and Slack with 1-click authentication.",
    icon: <Layers className="h-5 w-5 text-purple-500" />,
    badge: "270+ Connectors",
  },
];

export default function ApplicantTrackingFeaturePage() {
  return (
    <>
      <JsonLd data={featureSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-[#FAF9F6] pt-28 pb-24">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Features", href: "/features" },
              { label: "Applicant Tracking System", href: "/features/applicant-tracking" },
            ]}
          />

          {/* ========================================================
              HERO SPLIT SECTION
              ======================================================== */}
          <div className="mt-6 rounded-[32px] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
              
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-800 w-fit">
                  <Layers className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Modern ATS & Pipeline Architecture</span>
                </div>

                <h1 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  Applicant Tracking Built for Fast-Moving Talent Teams
                </h1>

                <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Say goodbye to clunky, outdated ATS interfaces. Hireytics provides hiring managers and recruiters with an intuitive, unified pipeline dashboard to manage applications, schedule panels, and track talent velocity.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  <ButtonLink href="/free-trial" variant="primary">
                    Start Free Trial
                  </ButtonLink>
                  <ButtonLink href="/pricing" variant="secondary">
                    View Pricing Plans
                  </ButtonLink>
                </div>

                <div className="mt-8 flex items-center gap-6 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Instant candidate imports
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Role-based access controls
                  </span>
                </div>
              </div>

              {/* Right Column: Visual Interactive Pipeline Card */}
              <div 
                className="lg:col-span-5 rounded-3xl p-6 sm:p-7 relative overflow-hidden flex items-center justify-center min-h-[360px] shadow-sm border border-slate-200/60"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(16, 185, 129, 0.45), transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(59, 130, 246, 0.35), transparent 60%), linear-gradient(145deg, #cbd5e1 0%, #d8e2dc 50%, #f1f5f9 100%)",
                }}
              >
                {/* Frosted Pipeline Window */}
                <div className="w-full rounded-2xl border border-white/90 bg-white/95 p-5 shadow-[0_18px_36px_rgba(0,0,0,0.1)] backdrop-blur-xl space-y-3.5">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800">Senior Full-Stack Pipeline</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">14 Active</span>
                  </div>

                  {/* Stage Columns */}
                  <div className="space-y-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">David Miller</p>
                        <p className="text-[10px] text-slate-400">AI Screen Complete • 92% Fit</p>
                      </div>
                      <span className="rounded bg-sky-100 text-sky-800 text-[9px] font-bold px-2 py-0.5">
                        Technical Panel
                      </span>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Emma Watson</p>
                        <p className="text-[10px] text-slate-400">System Design Review Complete</p>
                      </div>
                      <span className="rounded bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5">
                        Offer Ready
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="text-[10.5px]">Avg. Stage Velocity: <strong className="text-slate-800">1.8 days</strong></span>
                    <span className="text-indigo-600 font-bold text-[10.5px] cursor-pointer hover:underline">View Board →</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================
              ATS CAPABILITIES BENTO GRID
              ======================================================== */}
          <div className="mt-16">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 font-mono">
                PIPELINE EXCELLENCE
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Key Capabilities of Hireytics ATS
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Built to keep candidates moving quickly and your team perfectly coordinated.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {atsCapabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition hover:border-slate-300 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 shadow-2xs">
                        {cap.icon}
                      </div>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                        {cap.badge}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              BOTTOM CTA
              ======================================================== */}
          <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-12 text-center text-white shadow-xl">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Upgrade your applicant pipeline today
            </h3>
            <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
              Import existing candidates from your legacy ATS in minutes. Start streamlining your recruitment funnel.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <ButtonLink href="/free-trial" variant="primary">
                Start 14-Day Free Trial
              </ButtonLink>
              <ButtonLink href="/pricing" variant="secondary">
                Explore Pricing
              </ButtonLink>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
