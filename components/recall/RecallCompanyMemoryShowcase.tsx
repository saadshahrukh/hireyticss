"use client";

import Image from "next/image";
import { Users, History, TrendingUp, Sparkles, Award, ArrowUpRight } from "lucide-react";

export default function RecallCompanyMemoryShowcase() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] md:p-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-pink-100 bg-pink-50 p-1">
            <Image src="/recall.png" alt="Recall" width={20} height={20} className="h-full w-full object-contain" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Institutional Talent Memory</h4>
            <p className="text-[11px] text-slate-500">Cross-Lifecycle Intelligence</p>
          </div>
        </div>
        <span className="rounded-md bg-purple-50 px-2.5 py-1 text-[10.5px] font-semibold text-purple-700">
          Persistent Knowledge
        </span>
      </div>

      <div className="mt-4 space-y-3">
        {/* Memory Item 1 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 transition hover:border-slate-300">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                DM
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900">David Miller</span>
                  <span className="text-[11px] text-slate-500">• Re-engagement Alert</span>
                </div>
                <p className="text-[11px] text-slate-500">Interviewed 6 mos ago for Mid-Level role</p>
              </div>
            </div>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
              94% Match for New Lead Role <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-2.5 rounded-lg border border-slate-200 bg-white p-2 text-[11px] text-slate-600">
            <strong>Recall Insight:</strong> Previous interviewer rated system design 9/10. Highly recommended for the new Backend Staff Architect opening without restarting from square one.
          </div>
        </div>

        {/* Memory Item 2 */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5 transition hover:border-slate-300">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                EW
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-900">Emma Wilson</span>
                  <span className="text-[11px] text-slate-500">• Candidate → Employee (Day 90)</span>
                </div>
                <p className="text-[11px] text-slate-500">Hired UI/UX Designer</p>
              </div>
            </div>
            <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-700">
              Onboarding Goal Met
            </span>
          </div>
          <div className="mt-2.5 rounded-lg border border-slate-200 bg-white p-2 text-[11px] text-slate-600">
            <strong>Recall Insight:</strong> Initial interview flagged strength in design systems; successfully delivered new Hireytics component library in Q1 review.
          </div>
        </div>
      </div>
    </div>
  );
}
