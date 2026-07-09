"use client";

import { useState } from "react";
import { Send, Building2, Users, Mail, Phone, MessageSquare } from "lucide-react";
import { FadeIn, SectionHeader } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";

const companySizes = [
  "1–50 employees",
  "51–200 employees",
  "201–500 employees",
  "500+ employees",
];

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="section-block bg-slate-50/80">
      <div className="section-container">
        <SectionHeader
          eyebrow="Get Started"
          title="See what Hireytics can do for your team"
          description="Share your hiring challenges — we'll walk you through a personalized demo and show you the ROI for your organization."
        />

        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/40">
            <div className="grid lg:grid-cols-5">
              <div className="bg-black p-8 text-white md:p-10 lg:col-span-2">
                <h3 className="text-xl font-bold md:text-2xl">
                  What you&apos;ll get from a demo
                </h3>
                <ul className="mt-8 space-y-5">
                  {[
                    "Walkthrough tailored to your hiring volume and team size",
                    "ROI estimate based on your current time-to-hire",
                    "Live look at AI scoring and onboarding workflows",
                    "Zero pressure — just clarity on whether we're the right fit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-sm leading-relaxed text-slate-100">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 md:p-10 lg:col-span-3">
                {submitted ? (
                  <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                      <Send className="h-7 w-7 text-emerald-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      Inquiry received!
                    </h3>
                    <p className="mt-2 max-w-sm text-slate-600">
                      Our team will reach out within 24 hours to schedule your
                      personalized demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                          Work Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="jane@company.com"
                            className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
                          Company
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="company"
                            name="company"
                            type="text"
                            required
                            placeholder="Acme Corp"
                            className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                          Phone (optional)
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="size" className="mb-2 block text-sm font-medium text-slate-700">
                        Company Size
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <select
                          id="size"
                          name="size"
                          required
                          defaultValue=""
                          className="w-full appearance-none rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20"
                        >
                          <option value="" disabled>Select team size</option>
                          {companySizes.map((size) => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                        What hiring challenges are you facing?
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Slow screening, scattered tools, no visibility into hiring metrics..."
                          className="w-full resize-none rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition-all focus:border-slate-500 focus:ring-2 focus:ring-slate-500/20"
                        />
                      </div>
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-3.5 rounded-xl">
                      Submit Inquiry
                      <Send className="h-4 w-4" />
                    </Button>

                    <p className="text-center text-xs text-slate-400">
                      No spam. We respond within one business day.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
