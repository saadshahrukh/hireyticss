"use client";

import { FadeIn } from "@/components/ui/Motion";
import { Accordion } from "@/components/ui/Accordion";
import { HOME_BRAND_FAQS } from "@/lib/schema";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function HomeFAQ() {
  return (
    <section id="faq" className="section-block bg-slate-50/70 border-t border-slate-200/60 py-20 sm:py-28">
      <div className="section-container max-w-4xl">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-100/80 px-3 py-1 text-xs font-bold text-sky-800 mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Everything you need to know about <span className="text-gradient-primary">Hireytics</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore how Hireytics bridges AI candidate screening, asynchronous voice interviews, and Recall candidate memory into a unified hiring intelligence platform.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12">
            <Accordion
              items={HOME_BRAND_FAQS.map((faq) => ({
                title: faq.question,
                content: (
                  <p className="text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                ),
              }))}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
            <div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                Have specific technical or pipeline questions?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Explore our in-depth guides on AI recruiting software, voice screening benchmarks, and Recall architecture.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/recall"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <span>Explore Recall</span>
              </Link>
              <Link
                href="/free-trial"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-xl shadow-xs transition-colors"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
