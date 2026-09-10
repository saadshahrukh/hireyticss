"use client";

import { useState } from "react";
import { 
  Check, 
  Sparkles, 
  Bot, 
  BrainCircuit, 
  Code2, 
  RefreshCw, 
  Sliders, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Globe, 
  User, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureModule {
  id: string;
  name: string;
  description: string;
  pricePerCandidate: number;
  flatFee?: number;
  icon: any;
  defaultChecked?: boolean;
}

const FEATURE_MODULES: FeatureModule[] = [
  {
    id: "ai-screening",
    name: "AI Autonomous Voice & Video Screening",
    description: "Adaptive multi-turn behavioral & technical interviews with real-time scoring.",
    pricePerCandidate: 3,
    icon: Bot,
    defaultChecked: true,
  },
  {
    id: "recall-engine",
    name: "Hireytics Recall Engine",
    description: "Instant candidate talent pool re-activation & autonomous silver-medalist matching.",
    pricePerCandidate: 2,
    icon: BrainCircuit,
    defaultChecked: true,
  },
  {
    id: "code-sandbox",
    name: "Live Code Sandbox & Technical Benchmarking",
    description: "Isolated multi-language execution environments with plagiarism & latency analytics.",
    pricePerCandidate: 2,
    icon: Code2,
    defaultChecked: false,
  },
  {
    id: "ats-sync",
    name: "Enterprise ATS 2-Way Live Sync",
    description: "Real-time bi-directional pipeline integration for Greenhouse, Lever, Workday & Ashby.",
    pricePerCandidate: 1,
    icon: RefreshCw,
    defaultChecked: true,
  },
  {
    id: "custom-rubrics",
    name: "Custom Agent Persona & Rubric Tuning",
    description: "Train company-specific evaluation benchmarks and cultural match criteria.",
    pricePerCandidate: 1,
    icon: Sliders,
    defaultChecked: false,
  },
  {
    id: "dedicated-sla",
    name: "99.99% Enterprise SLA & Dedicated Architect",
    description: "Custom VPC deployment, SOC2 Type II compliance pack & 15-minute response SLA.",
    pricePerCandidate: 0,
    flatFee: 250,
    icon: ShieldCheck,
    defaultChecked: false,
  },
];

export default function CustomPricingCalculator() {
  const [candidates, setCandidates] = useState<number>(200);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "ai-screening",
    "recall-engine",
    "ats-sync",
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    notes: "",
  });

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Base price is $5 per candidate
  const BASE_PRICE_PER_CANDIDATE = 5;

  const featurePerCandidateTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_MODULES.find((f) => f.id === featId);
    return acc + (feat?.pricePerCandidate || 0);
  }, 0);

  const flatFeesTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_MODULES.find((f) => f.id === featId);
    return acc + (feat?.flatFee || 0);
  }, 0);

  const totalPerCandidate = BASE_PRICE_PER_CANDIDATE + featurePerCandidateTotal;
  const monthlyTotal = candidates * totalPerCandidate + flatFeesTotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div id="custom-pricing" className="mt-20 scroll-mt-28">
      <div className="rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white via-indigo-50/20 to-white p-6 sm:p-10 lg:p-12 shadow-xl shadow-slate-200/50">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50/80 px-3.5 py-1 text-xs font-bold text-indigo-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-indigo-600" />
            Interactive Custom Calculator
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Build your custom hiring infrastructure
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Platform base rate starts at <span className="font-bold text-indigo-600">$5 / candidate</span>. 
            Toggle modular capabilities according to your engineering and recruitment stack needs.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Configurator & Checkboxes */}
          <div className="lg:col-span-7 space-y-6">
            {/* Candidate volume slider */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Monthly Candidate Volume
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Estimated candidates interviewed or processed per month
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">
                    {candidates.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-medium block">candidates / mo</span>
                </div>
              </div>

              <div className="mt-6">
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="20"
                  value={candidates}
                  onChange={(e) => setCandidates(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="mt-2 flex justify-between text-[11px] font-semibold text-slate-400 font-mono">
                  <span>20 cands</span>
                  <span>500 cands</span>
                  <span>1,000 cands</span>
                  <span>2,000+ cands</span>
                </div>
              </div>
            </div>

            {/* Functionality Checks */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Platform Features & Modular Add-ons
                </h3>
                <span className="text-xs font-semibold text-indigo-600">
                  {selectedFeatures.length} selected
                </span>
              </div>

              {/* Base Platform card (always included) */}
              <div className="mb-3 rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">
                        Hireytics Base Core Engine
                      </h4>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                        Base Platform
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Multi-stage ATS pipeline, team collaboration, calendar booking & candidate portals.
                    </p>
                  </div>
                </div>
                <div className="text-right whitespace-nowrap pl-4">
                  <span className="text-sm font-bold text-slate-900 font-mono">$5</span>
                  <span className="text-[10px] text-slate-500 block">/ cand</span>
                </div>
              </div>

              {/* Modular checkboxes */}
              <div className="space-y-2.5">
                {FEATURE_MODULES.map((module) => {
                  const isChecked = selectedFeatures.includes(module.id);
                  const Icon = module.icon;
                  return (
                    <button
                      key={module.id}
                      type="button"
                      onClick={() => toggleFeature(module.id)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 flex items-start justify-between gap-3 ${
                        isChecked
                          ? "border-indigo-600 bg-white shadow-md shadow-indigo-500/10 ring-1 ring-indigo-600"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/40"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                            isChecked
                              ? "bg-indigo-600 border-indigo-600 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isChecked && <Check className="h-3.5 w-3.5" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="h-4 w-4 text-indigo-600" />
                            <h4 className="text-sm font-bold text-slate-900">
                              {module.name}
                            </h4>
                          </div>
                          <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right whitespace-nowrap shrink-0 pl-2">
                        {module.flatFee ? (
                          <>
                            <span className="text-sm font-bold text-slate-900 font-mono">
                              +${module.flatFee}
                            </span>
                            <span className="text-[10px] text-slate-500 block">/ month flat</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm font-bold text-slate-900 font-mono">
                              +${module.pricePerCandidate}
                            </span>
                            <span className="text-[10px] text-slate-500 block">/ cand</span>
                          </>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Summary & Light Modern Enterprise Form */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/40 relative overflow-hidden">
              <div className="relative">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Calculated Estimate
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">Custom Tier Summary</h3>
                  </div>
                  <div className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold font-mono text-emerald-700">
                    Transparent Rate
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span>Base Platform Rate ({candidates} cand @ $5)</span>
                    <span className="font-mono font-bold text-slate-900">${(candidates * 5).toLocaleString()}</span>
                  </div>
                  {featurePerCandidateTotal > 0 && (
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Selected Add-ons ({candidates} cand @ ${featurePerCandidateTotal})</span>
                      <span className="font-mono font-bold text-indigo-600">
                        +${(candidates * featurePerCandidateTotal).toLocaleString()}
                      </span>
                    </div>
                  )}
                  {flatFeesTotal > 0 && (
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span>Flat Enterprise SLA Add-on</span>
                      <span className="font-mono font-bold text-indigo-600">+${flatFeesTotal}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Total Estimated Monthly</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-4xl font-extrabold text-slate-900 font-mono">
                        ${monthlyTotal.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-normal">/ mo</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 block font-medium">Effective Unit Cost</span>
                    <span className="text-sm font-mono font-bold text-emerald-700">
                      ${(monthlyTotal / candidates).toFixed(2)} / cand
                    </span>
                  </div>
                </div>

                {/* Form or Confirmation */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-5 text-center"
                    >
                      <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
                      <h4 className="mt-2 text-sm font-bold text-slate-900">
                        Custom Quote Request Received!
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                        We have logged your configuration ({candidates} candidates/mo with {selectedFeatures.length} add-ons). Our enterprise team will send contract terms and sandbox credentials to <strong className="text-slate-900">{formData.email || "your work email"}</strong> within 2 business hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Lock in this custom configuration
                      </p>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                          />
                        </div>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="Work Email (name@company.com)"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                        />
                      </div>

                      <div className="relative">
                        <Globe className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Company Website URL (e.g. acme.inc)"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/60 py-2 pl-8 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-2.5 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                      >
                        {loading ? (
                          "Generating Custom Invoice..."
                        ) : (
                          <>
                            Request Custom Deployment Package
                            <ArrowRight className="h-3.5 w-3.5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
