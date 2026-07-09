"use client";

import { Check, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/Motion";
import {
  comparisonRows,
  type ComparisonValue,
  type PlanId,
} from "@/components/pricing/data";

const planLabels: { id: PlanId; label: string }[] = [
  { id: "free", label: "Free" },
  { id: "basic", label: "Basic" },
  { id: "pro", label: "Pro" },
  { id: "enterprise", label: "Enterprise" },
  { id: "custom", label: "Custom" },
];

function CellValue({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
        <Check className="h-4 w-4 text-emerald-600" strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-50">
        <Minus className="h-4 w-4 text-slate-300" strokeWidth={2} />
      </span>
    );
  }
  return (
    <span className="text-sm font-medium text-slate-700">{value}</span>
  );
}

export default function ComparisonTable() {
  return (
    <section className="section-block bg-slate-50/60">
      <div className="section-container max-w-[1400px]">
        <FadeIn>
          <div className="section-header">
            <p className="section-eyebrow">Compare Plans</p>
            <h2 className="section-title">Feature comparison at a glance</h2>
            <p className="section-desc">
              See exactly what&apos;s included in each plan so you can choose
              with confidence.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[880px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/80">
                    <th className="sticky left-0 z-10 bg-slate-50/95 px-6 py-5 text-left text-sm font-bold text-slate-900 backdrop-blur-sm">
                      Features
                    </th>
                    {planLabels.map((plan) => (
                      <th
                        key={plan.id}
                        className={`px-4 py-5 text-center text-sm font-bold ${
                          plan.id === "pro"
                            ? "text-slate-900"
                            : "text-slate-900"
                        }`}
                      >
                        {plan.label}
                        {plan.id === "pro" && (
                          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                            Popular
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-slate-100 transition-colors hover:bg-slate-50/50 ${
                        i === comparisonRows.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="sticky left-0 z-10 bg-white px-6 py-4 text-sm font-medium text-slate-700">
                        {row.feature}
                      </td>
                      {planLabels.map((plan) => (
                        <td
                          key={plan.id}
                          className={`px-4 py-4 text-center ${
                            plan.id === "pro" ? "bg-slate-100/60" : ""
                          }`}
                        >
                          <CellValue value={row[plan.id]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
