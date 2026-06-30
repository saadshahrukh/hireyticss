"use client";

import { ArrowRight, TrendingDown, Layers, EyeOff } from "lucide-react";
import { FadeIn, SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const pains = [
  {
    icon: Layers,
    pain: "Scattered tools & spreadsheets",
    loss: "HR teams lose 12+ hours/week switching between ATS, payroll, and onboarding apps.",
    gain: "One platform for hire-to-retire — every workflow connected, zero data silos.",
    metric: "12hrs",
    metricLabel: "saved weekly",
  },
  {
    icon: TrendingDown,
    pain: "Slow, biased screening",
    loss: "Top candidates accept other offers while your team manually reviews hundreds of resumes.",
    gain: "AI scores every interview in minutes — qualified talent routed to HR automatically.",
    metric: "30%",
    metricLabel: "faster hiring",
  },
  {
    icon: EyeOff,
    pain: "Zero workforce visibility",
    loss: "Leadership makes headcount decisions blind — no real-time view of cost, velocity, or quality.",
    gain: "Live dashboards on hiring cost, time-to-fill, and workforce health — decisions backed by data.",
    metric: "8.4",
    metricLabel: "quality index",
  },
];

export default function ValueProposition() {
  return (
    <section id="value" className="section-block bg-slate-50/80">
      <div className="section-container">
        <SectionHeader
          eyebrow="The Problem"
          title="Every day without a unified system costs you talent and time"
          description="Most HR teams juggle disconnected tools while losing candidates, burning budget, and flying blind on workforce decisions. Hireytics fixes that."
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {pains.map((item) => (
            <StaggerItem key={item.pain}>
              <div className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl brand-gradient-subtle">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-extrabold gradient-text">{item.metric}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {item.metricLabel}
                    </p>
                  </div>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-red-500/80">
                  What you lose
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{item.pain}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.loss}</p>

                <div className="my-6 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                  <ArrowRight className="h-4 w-4 text-blue-500" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  What you gain
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-700">
                  {item.gain}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2} className="mt-16 md:mt-20">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-sm">
            <div className="grid gap-8 md:grid-cols-4 md:gap-6 md:divide-x md:divide-slate-100">
              {[
                { value: "200+", label: "HR teams onboarded" },
                { value: "18 days", label: "Avg. time-to-hire" },
                { value: "22%", label: "Quality index uplift" },
                { value: "15hrs", label: "Saved per new hire" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:px-4">
                  <p className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
