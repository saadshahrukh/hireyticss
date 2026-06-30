"use client";

import { FadeIn } from "@/components/ui/Motion";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/components/pricing/data";

export default function PricingFAQ() {
  return (
    <section className="section-block">
      <div className="section-container max-w-3xl">
        <FadeIn>
          <div className="section-header">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-desc">
              Everything you need to know about plans, billing, and getting
              started with Hireytics.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion
            items={faqItems.map((item) => ({
              title: item.title,
              content: item.content,
            }))}
          />
        </FadeIn>
      </div>
    </section>
  );
}
