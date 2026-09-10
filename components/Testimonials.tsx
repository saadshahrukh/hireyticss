"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, TrendingUp, Sparkles, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader, FadeIn } from "@/components/ui/Motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyCategory: string;
  metric: string;
  metricLabel: string;
  quote: string;
  rating: number;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Head of People & Talent",
    company: "TechNova Solutions",
    companyCategory: "Enterprise SaaS • 450+ Employees",
    metric: "18 Days",
    metricLabel: "Time-to-Hire (Down from 26)",
    quote:
      "We were losing top engineering talent to faster competitors. Hireytics cut our time-to-hire by over 30% — and Recall's cross-interview reasoning means our hiring committee never second-guesses a shortlist again.",
    rating: 5,
    highlight: "Cut time-to-hire from 26 to 18 days with automated voice screening",
  },
  {
    id: 2,
    name: "James Okonkwo",
    role: "VP of Talent Operations",
    company: "ScaleBridge Inc.",
    companyCategory: "Fintech • 800+ Employees",
    metric: "40+ Hrs",
    metricLabel: "Saved per recruiter / month",
    quote:
      "Onboarding and initial resume screening used to eat dozens of hours every week. Now it's completely unified in Hireytics. Our executives finally have the real-time talent velocity data they've been asking for in one place.",
    rating: 5,
    highlight: "Automated end-to-end screening & compliance handoffs",
  },
  {
    id: 3,
    name: "Elena Vasquez",
    role: "Global Talent Acquisition Lead",
    company: "Meridian Health",
    companyCategory: "HealthTech • 1,200+ Employees",
    metric: "+24%",
    metricLabel: "Offer Acceptance Rate",
    quote:
      "Candidates notice immediately when your hiring process feels modern and responsive. Our Candidate Quality Index jumped 22% after switching to Hireytics — and our offer acceptance rate climbed right alongside it.",
    rating: 5,
    highlight: "24% higher candidate engagement and interview completion",
  },
  {
    id: 4,
    name: "Marcus Sterling",
    role: "Chief Technology Officer",
    company: "Vanguard Logic",
    companyCategory: "AI Cloud Infrastructure • 200+ Team",
    metric: "92%",
    metricLabel: "Technical Screening Accuracy",
    quote:
      "The AI Voice Interviewer asks deeper, more contextually relevant follow-up questions than our manual first rounds ever did. It saves our senior engineers hundreds of hours every quarter.",
    rating: 5,
    highlight: "Zero false-positive technical shortlist escalations",
  },
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const activeStory = testimonials[currentIdx];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-slate-50/80 py-20 lg:py-28">
      {/* Background ambient gradient glow */}
      <div
        className="pointer-events-none absolute -bottom-20 right-10 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(0, 130, 155, 0.3) 0%, rgba(217, 70, 239, 0.2) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="section-container max-w-7xl">
        <FadeIn>
          {/* Two-Column Testimonial Layout */}
          <div
            className="grid gap-10 lg:grid-cols-[1.1fr_1.3fr] lg:items-center xl:gap-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Column: Impact Highlights & Controls */}
            <div className="space-y-6">
              <div>
                <span className="font-utility text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  Customer Impact Stories
                </span>
                <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Real talent teams. Measured performance.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Leading organizations replace fragmented spreadsheets and disconnected ATS tools with Hireytics. Here is what happens when hiring is connected.
                </p>
              </div>

              {/* Dynamic Key Metric Card */}
              <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                <div>
                  <div className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {activeStory.metric}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {activeStory.metricLabel}
                  </div>
                </div>
                <div className="border-l border-slate-100 pl-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" /> Verified Customer
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {activeStory.companyCategory}
                  </div>
                </div>
              </div>

              {/* Carousel Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIdx
                          ? "w-8 bg-slate-900"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:bg-slate-100 hover:text-black"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:bg-slate-100 hover:text-black"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Active Testimonial Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-3xl border border-slate-200/90 bg-white p-8 shadow-xl shadow-slate-200/40 lg:p-10"
                >
                  <Quote className="absolute right-8 top-8 h-12 w-12 text-slate-100/90" />

                  {/* Rating Stars & Highlight Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex gap-1">
                      {[...Array(activeStory.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-800 border border-sky-100">
                      {activeStory.highlight}
                    </span>
                  </div>

                  {/* Large Quote */}
                  <blockquote className="mt-6 text-base leading-relaxed text-slate-800 sm:text-lg sm:leading-relaxed font-medium">
                    &ldquo;{activeStory.quote}&rdquo;
                  </blockquote>

                  {/* Author Information */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white shadow-md">
                        {activeStory.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-heading text-base font-bold text-slate-900">
                          {activeStory.name}
                        </p>
                        <p className="text-xs text-slate-500">
                          {activeStory.role} • <strong className="text-slate-700">{activeStory.company}</strong>
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-bold text-slate-400">
                      <Building2 className="h-4 w-4 text-slate-400" />
                      <span>{activeStory.company}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
