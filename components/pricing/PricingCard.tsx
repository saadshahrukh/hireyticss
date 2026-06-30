"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Tooltip } from "@/components/ui/Tooltip";
import type { Plan } from "@/components/pricing/data";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FeatureRow({ feature }: { feature: Plan["features"][0] }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <li className="flex items-start gap-2.5 text-sm text-slate-600">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" strokeWidth={2.5} />
      <span className="leading-snug">
        {feature.text}
        {feature.tooltip && <Tooltip content={feature.tooltip} />}
        {feature.accordion && (
          <span className="block mt-1">
            <button
              type="button"
              onClick={() => setAccordionOpen(!accordionOpen)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              View {feature.accordion.title}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${accordionOpen ? "rotate-180" : ""}`}
              />
            </button>
            {accordionOpen && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-2 space-y-1 rounded-lg bg-blue-50/60 px-3 py-2 text-xs text-slate-600"
              >
                {feature.accordion.items.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </span>
        )}
      </span>
    </li>
  );
}

interface PricingCardProps {
  plan: Plan;
  index: number;
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  const isCustom = plan.id === "custom";
  const isPopular = plan.popular;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={`relative flex h-full flex-col rounded-2xl border bg-white transition-all duration-300 ${
        isPopular
          ? "border-blue-200 shadow-xl shadow-blue-500/10 ring-1 ring-blue-100 lg:-mt-2 lg:mb-2 lg:scale-[1.03]"
          : "border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 z-10 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full brand-gradient px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-blue-500/25">
            <Sparkles className="h-3.5 w-3.5" />
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex flex-1 flex-col p-6 ${isPopular ? "pt-8" : ""}`}>
        <div className="mb-6">
          <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
          {isCustom ? (
            <div className="mt-4">
              <p className="text-2xl font-bold tracking-tight text-slate-900">
                Need Something Custom?
              </p>
              {plan.description && (
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {plan.description}
                </p>
              )}
            </div>
          ) : (
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                ${plan.price}
              </span>
              <span className="text-sm font-medium text-slate-500">/month</span>
            </div>
          )}
        </div>

        {plan.plusLabel && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
            {plan.plusLabel}
          </p>
        )}

        <ul className="mb-8 flex-1 space-y-3">
          {plan.features.map((feature) => (
            <FeatureRow key={feature.text} feature={feature} />
          ))}
        </ul>

        <ButtonLink
          href={plan.ctaHref}
          variant={plan.ctaVariant}
          className={`w-full ${isPopular ? "!rounded-xl" : ""}`}
        >
          {plan.cta}
        </ButtonLink>
      </div>
    </motion.article>
  );
}
