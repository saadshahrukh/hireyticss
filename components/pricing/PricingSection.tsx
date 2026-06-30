"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock } from "lucide-react";
import BillingToggle, { type BillingPeriod } from "@/components/pricing/BillingToggle";
import PricingCard from "@/components/pricing/PricingCard";
import { plans } from "@/components/pricing/data";
import { useState } from "react";

export default function PricingSection() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section className="section-block pt-28 md:pt-36">
      <div className="section-container !max-w-[1800px]">
        <div className="section-header">
          <p className="section-eyebrow">Pricing</p>
          <h1 className="section-title">
            Plans that scale with your{" "}
            <span className="gradient-text">hiring ambitions</span>
          </h1>
          <p className="section-desc">
            Start free, grow with confidence. Every plan includes the core HRM
            platform — pick the AI interview capacity and analytics depth that
            matches your team.
          </p>

          <div className="mt-10 flex justify-center">
            <BillingToggle value={billing} onChange={setBilling} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {billing === "monthly" ? (
            <motion.div
              key="monthly"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 gap-6 overflow-visible sm:grid-cols-2 xl:grid-cols-5"
            >
              {plans.map((plan, i) => (
                <PricingCard key={plan.id} plan={plan} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="annual"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-xl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-xl shadow-slate-200/40">
                <div className="absolute inset-0 brand-gradient-subtle" />
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/40 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-100/40 blur-3xl" />

                <div className="relative">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl brand-gradient shadow-lg shadow-blue-500/20">
                    <CalendarClock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Annual billing coming soon
                  </h3>
                  <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
                    We&apos;re preparing annual plans with exclusive savings for
                    teams committed to long-term hiring excellence. Check back
                    shortly or contact us for early access.
                  </p>
                  <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-5 py-2 text-xs font-semibold text-blue-700">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                    </span>
                    Launching Q3 2026
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
