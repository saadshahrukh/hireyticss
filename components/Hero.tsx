import {
  ArrowRight,
  TrendingUp,
  Users,
  Brain,
  CheckCircle2,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

function DashboardInfographic() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-100/60 to-violet-100/40 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/50">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <span className="ml-2 text-xs font-medium text-slate-400">
            hireytics.app/dashboard
          </span>
        </div>

        <div className="p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Workforce Overview
              </p>
              <p className="text-lg font-bold text-slate-900">Q2 2026</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Total Hires", value: "142", change: "+12%" },
              { label: "AI Score", value: "8.4", change: "+0.6" },
              { label: "Velocity", value: "18d", change: "-30%" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-100 bg-slate-50/50 p-3"
              >
                <p className="text-[10px] font-medium text-slate-400">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-[10px] font-semibold text-emerald-600">
                  {stat.change}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-100 p-4">
            <p className="mb-3 text-xs font-semibold text-slate-500">
              Hiring Pipeline
            </p>
            <div className="flex items-end gap-2 h-20">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-blue-400 transition-all"
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {[
              { name: "Sarah Chen", role: "Senior Engineer", score: 9.2 },
              { name: "Marcus Webb", role: "Product Lead", score: 8.7 },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-[10px] font-bold text-white">
                    {c.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      {c.name}
                    </p>
                    <p className="text-[10px] text-slate-400">{c.role}</p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  {c.score}/10
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="animate-float absolute -left-6 top-16 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-violet-600" />
          <div>
            <p className="text-[10px] text-slate-400">AI Analysis</p>
            <p className="text-xs font-bold text-slate-800">Score: 8.4/10</p>
          </div>
        </div>
      </div>

      <div className="animate-float-delay absolute -right-4 bottom-24 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          <div>
            <p className="text-[10px] text-slate-400">Status</p>
            <p className="text-xs font-bold text-emerald-700">HR Round Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-50/80 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-violet-50/60 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2563eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="section-container pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="text-xs font-semibold text-blue-700">
                Intelligent Workforce Platform
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem]">
              Hire Smarter.{" "}
              <span className="gradient-text">Manage Better.</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
              Hireytics unifies hiring, onboarding, payroll, attendance, and
              performance analytics in one premium platform — powered by
              AI-augmented candidate evaluation and real-time workforce
              insights.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="#inquiry" variant="primary">
                Start Free Inquiry
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#demo" variant="secondary">
                Watch Demo
              </ButtonLink>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-slate-200 to-slate-300 text-[10px] font-bold text-slate-600"
                  >
                    <Users className="h-4 w-4 text-slate-500" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Trusted by 200+ HR teams
                </p>
                <p className="text-xs text-slate-500">
                  Reduce time-to-hire by ~30%
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-up lg:pl-4" style={{ animationDelay: "0.15s" }}>
            <DashboardInfographic />
          </div>
        </div>
      </div>
    </section>
  );
}
