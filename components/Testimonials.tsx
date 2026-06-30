"use client";

import { Star, Quote } from "lucide-react";
import { SectionHeader, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Head of HR",
    company: "TechNova Solutions",
    quote:
      "We were losing candidates to faster competitors. Hireytics cut our time-to-hire from 26 days to 18 — and the AI scoring means we never second-guess a shortlist again.",
    rating: 5,
  },
  {
    name: "James Okonkwo",
    role: "VP of People",
    company: "ScaleBridge Inc.",
    quote:
      "Onboarding used to eat 15 hours per hire. Now it's mostly automated. Our executives finally have the workforce visibility they've been asking for — in one place.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Talent Acquisition Lead",
    company: "Meridian Health",
    quote:
      "Candidates notice when your hiring process feels modern. Our Quality Index jumped 22% after switching — and our offer acceptance rate went up with it.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-block bg-slate-50/80">
      <div className="section-container">
        <SectionHeader
          eyebrow="Customer Stories"
          title="Real teams. Real results."
          description="HR leaders who replaced fragmented workflows with Hireytics — and measured the difference."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200/60 hover:shadow-xl hover:shadow-blue-500/5">
                <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-100 transition-colors group-hover:text-blue-50" />

                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="mt-5 flex-1 text-sm leading-relaxed text-slate-600">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-3 border-t border-slate-100 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-xs font-bold text-white">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
