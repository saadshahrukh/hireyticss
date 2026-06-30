"use client";

import { motion } from "framer-motion";

export type BillingPeriod = "monthly" | "annual";

interface BillingToggleProps {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}

export default function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-sm">
      {(["monthly", "annual"] as const).map((period) => {
        const active = value === period;
        return (
          <button
            key={period}
            type="button"
            onClick={() => onChange(period)}
            className={`relative rounded-full px-6 py-2.5 text-sm font-semibold capitalize transition-colors duration-300 ${
              active ? "text-white" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {active && (
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 rounded-full brand-gradient shadow-md shadow-blue-500/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{period}</span>
          </button>
        );
      })}
    </div>
  );
}
