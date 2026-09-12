"use client";

import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/ui/Motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr Hasan",
    role: "Head of People & Talent",
    company: "Link Service Pvt. Ltd.",
    quote:    
    "Onboarding and initial resume screening used to eat dozens of hours every week. Now it's completely unified in Hireytics. Our leadership team finally has the real-time talent velocity data they need in one place.",
    rating: 5,
  },
  {
    id: 2,
    name: "James",
    role: "VP of Talent Operations",
    company: "Gravity Labs",
    quote:
      "The AI Voice Interviewer asks deeper, more contextually relevant follow-up questions than our manual first rounds ever did. It saves our senior engineering leaders countless hours every quarter.",
    rating: 5,
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

      <div className="section-container max-w-6xl">
        <FadeIn>
          {/* Two-Column Clean Testimonial Layout */}
          <div
            className="grid gap-10 lg:grid-cols-12 lg:items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Left Column: Heading & Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-3">
                  Customer Stories
                </p>
                <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl leading-tight">
                  Trusted by high-growth talent teams.
                </h2>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  Organizations replace fragmented spreadsheets and disconnected tools with Hireytics to streamline screening, interviews, and workforce operations.
                </p>
              </div>

              {/* Carousel Navigation Controls */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIdx
                          ? "w-8 bg-slate-900"
                          : "w-2.5 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={prevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:bg-slate-100 hover:text-black cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-2xs transition hover:bg-slate-100 hover:text-black cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Testimonial Card (7 cols) */}
            <div className="lg:col-span-7 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-xl shadow-slate-200/40"
                >
                  <Quote className="absolute right-8 top-8 h-10 w-10 text-slate-200" />

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(activeStory.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg leading-relaxed text-slate-800 font-medium">
                    &ldquo;{activeStory.quote}&rdquo;
                  </blockquote>

                  {/* Author Information */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white shadow-sm">
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

                    <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-400">
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

