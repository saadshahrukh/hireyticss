"use client";

import { useMemo, useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  Mail, 
  Globe, 
  User, 
  Phone, 
  Check, 
  Briefcase, 
  ChevronDown, 
  ChevronRight, 
  Lock, 
  Search, 
  Zap,
  ArrowRight
} from "lucide-react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { plans } from "@/components/pricing/data";

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

const COUNTRIES: Country[] = [
  { name: "United States", code: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "France", code: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "India", code: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "Pakistan", code: "PK", dialCode: "+92", flag: "🇵🇰" },
  { name: "Netherlands", code: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "Switzerland", code: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Spain", code: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Italy", code: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Brazil", code: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "Japan", code: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Ireland", code: "IE", dialCode: "+353", flag: "🇮🇪" },
  { name: "Sweden", code: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "South Africa", code: "ZA", dialCode: "+27", flag: "🇿🇦" },
];

const ROLES = [
  "CEO / Founder",
  "VP of Talent / People",
  "Head of Talent Acquisition",
  "Hiring Manager",
  "Technical Recruiter",
  "Head of Engineering",
  "HR Generalist / Operations",
  "Other Executive",
];

const SIZES = [
  "1 – 10 employees",
  "11 – 50 employees",
  "51 – 200 employees",
  "201 – 1,000 employees",
  "1,000+ employees",
];

const steps = [
  { stepNum: 1, title: "Personal Details", percentage: 33 },
  { stepNum: 2, title: "Company Details", percentage: 66 },
  { stepNum: 3, title: "Choose Package", percentage: 100 },
];

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const planQuery = searchParams.get("plan");

  const [step, setStep] = useState(0);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("pro");

  // STEP 1: Personal Details
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country>(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  // STEP 2: Company Details
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [emailUsername, setEmailUsername] = useState("");
  const [companyRole, setCompanyRole] = useState("");
  const [companySize, setCompanySize] = useState("");

  // Close country dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Pre-select plan if passed via URL parameter
  useEffect(() => {
    if (planQuery) {
      const match = plans.find((p) => p.id.toLowerCase() === planQuery.toLowerCase());
      if (match) {
        setSelectedPlanId(match.id);
      }
    }
  }, [planQuery]);

  // Clean company URL to domain
  const cleanDomain = useMemo(() => {
    if (!companyUrl) return "";
    return companyUrl
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0]
      .trim()
      .toLowerCase();
  }, [companyUrl]);

  // Derived work email
  const fullWorkEmail = useMemo(() => {
    if (cleanDomain && emailUsername) {
      return `${emailUsername}@${cleanDomain}`;
    }
    return personalEmail;
  }, [cleanDomain, emailUsername, personalEmail]);

  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return COUNTRIES;
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
        c.dialCode.includes(countrySearch)
    );
  }, [countrySearch]);

  // Validation
  const canProceed = () => {
    if (step === 0) {
      return Boolean(firstName.trim() && personalEmail.trim() && personalEmail.includes("@") && phoneNumber.trim());
    }
    if (step === 1) {
      return Boolean(companyName.trim() && companyUrl.trim() && emailUsername.trim() && companyRole && companySize);
    }
    if (step === 2) {
      return Boolean(selectedPlanId);
    }
    return true;
  };

  const goNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (step < steps.length - 1 && canProceed()) {
      setStep((prev) => prev + 1);
    }
  };

  const goBack = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleCompleteAndCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      plan: selectedPlanId,
      billing: billingCycle,
      firstName: firstName,
      lastName: lastName,
      email: fullWorkEmail || personalEmail,
      company: companyName,
    }).toString();

    router.push(`/checkout?${query}`);
  };

  const currentPercentage = steps[step].percentage;

  return (
    <div className="min-h-screen bg-slate-50 px-0 py-0 lg:px-0">
      <div className="mx-auto flex min-h-screen w-full flex-col overflow-hidden bg-white shadow-2xl lg:flex-row">
        
        {/* Left Branded Sidebar */}
        <aside className="relative flex min-h-[320px] pt-20 items-center overflow-hidden lg:min-h-screen lg:w-[40%]">
          <Image
            src="/onboarding.jpg"
            alt="Onboarding"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(37,99,235,0.86),_rgba(109,40,217,0.86))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.25),_transparent_45%)]" />
          
          <div className="relative z-10 p-8 text-white sm:p-10 lg:p-12 flex flex-col justify-between h-full">
            <div>
              <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
                 Onboarding
              </Link>

              <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl text-white">
                Set up your autonomous recruiting workspace.
              </h1>
              <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-indigo-50">
                AI voice and video screening, live code execution, and candidate recall — customized to your company hiring rubrics in 3 quick steps.
              </p>

              <div className="mt-8 space-y-3">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <ShieldCheck size={16} /> Instant ATS Integration
                  </div>
                  <p className="mt-1 text-[11px] text-indigo-100">
                    Connect Greenhouse, Lever, Ashby, and Workday in one click.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Zap size={16} /> Fast Team Activation
                  </div>
                  <p className="mt-1 text-[11px] text-indigo-100">
                    Start screening qualified candidates immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Simple Floating Circular Avatar Icons (Trusted by 250+ talent leaders) */}
            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-white/15">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white/90 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Leader" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white/90 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Leader" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white/90 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Leader" />
              </div>
              <p className="text-xs font-medium text-white">
                Trusted by <strong className="font-bold text-white">250+ talent leaders</strong>
              </p>
            </div>
          </div>
        </aside>

        {/* Right Main Flow Area */}
        <main className="flex flex-1 flex-col item-center justify-center mt-20 p-6 sm:p-10 lg:p-12 overflow-y-auto">
          
          {/* Top Breadcrumb & Step Ring */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-5 max-w-xl mx-auto w-full">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                HOME / STEP {step + 1} OF {steps.length}
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900">
                {steps[step].title}
              </h2>
            </div>

            {/* Progress Ring */}
            <div className="flex items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center">
                <svg className="h-12 w-12 -rotate-90 transform" viewBox="0 0 36 36">
                  <path
                    className="text-slate-100"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-indigo-600 transition-all duration-500 ease-out"
                    strokeDasharray={`${currentPercentage}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[11px] font-bold font-mono text-slate-900">
                  {currentPercentage}%
                </span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="mt-8 flex-1 max-w-xl mx-auto w-full">
            
            {/* STEP 1: Personal Details */}
            {step === 0 && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 mb-1.5">
                      <User className="h-3.5 w-3.5 text-slate-400" /> First Name *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Sarah"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>

                  <label className="block text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 mb-1.5">
                      <User className="h-3.5 w-3.5 text-slate-400" /> Last Name (Optional)
                    </span>
                    <input
                      type="text"
                      placeholder="Jenkins"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                </div>

                {/* Phone Number with Perfectly Centered Flag & Code Selector */}
                <div className="relative" ref={countryDropdownRef}>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-slate-400" /> Mobile Phone Number *
                    </span>
                  </label>
                  <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/70 focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition overflow-visible h-[48px]">
                    <button
                      type="button"
                      onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                      className="flex items-center gap-2 px-3.5 h-full border-r border-slate-200 bg-slate-100/80 hover:bg-slate-200/70 text-xs font-semibold text-slate-800 rounded-l-xl shrink-0 cursor-pointer"
                    >
                      <span className="text-base leading-none">{selectedCountry.flag}</span>
                      <span className="font-mono text-xs leading-none">{selectedCountry.dialCode}</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                    </button>
                    <input
                      type="tel"
                      required
                      placeholder="555-0199"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-transparent px-3.5 py-3 text-sm text-slate-800 outline-none placeholder-slate-400 h-full"
                    />
                  </div>

                  {/* Country Code Popover */}
                  {countryDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1.5 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl z-50 max-h-56 overflow-y-auto">
                      <div className="relative mb-2 px-1">
                        <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Search country or code..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-8 pr-2 text-xs outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div className="space-y-0.5">
                        {filteredCountries.map((c) => (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry(c);
                              setCountryDropdownOpen(false);
                              setCountrySearch("");
                            }}
                            className={`w-full flex items-center justify-between rounded-lg px-2.5 py-2 text-xs text-left transition-colors cursor-pointer ${
                              selectedCountry.code === c.code
                                ? "bg-indigo-50 text-indigo-900 font-bold"
                                : "text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className="text-base leading-none">{c.flag}</span>
                              <span>{c.name}</span>
                            </span>
                            <span className="font-mono text-slate-400 text-xs">{c.dialCode}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <label className="block text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-400" /> Personal / Contact Email *
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="sarah.jenkins@gmail.com"
                    value={personalEmail}
                    onChange={(e) => setPersonalEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                  />
                </label>
              </div>
            )}

            {/* STEP 2: Company Details */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 mb-1.5">
                      <Building2 className="h-3.5 w-3.5 text-slate-400" /> Company Name *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="Acme Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>

                  <label className="block text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5 mb-1.5">
                      <Globe className="h-3.5 w-3.5 text-slate-400" /> Company Domain URL *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. acme.com"
                      value={companyUrl}
                      onChange={(e) => setCompanyUrl(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                  </label>
                </div>

                {/* Locked Work Email */}
                <label className="block text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 mb-1.5">
                    <Mail className="h-3.5 w-3.5 text-slate-400" /> Work Email (Locked Domain) *
                  </span>
                  {cleanDomain ? (
                    <div className="flex rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition">
                      <input
                        type="text"
                        required
                        placeholder="username"
                        value={emailUsername}
                        onChange={(e) => setEmailUsername(e.target.value.replace(/@.*/, ""))}
                        className="w-full bg-transparent px-3.5 py-3 text-sm text-slate-800 outline-none"
                      />
                      <div className="flex items-center gap-1.5 bg-slate-100 px-3.5 py-3 border-l border-slate-200 text-xs font-semibold text-indigo-900 select-none whitespace-nowrap">
                        <Lock className="h-3 w-3 text-slate-400" />
                        <span>@{cleanDomain}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-xs text-slate-500">
                      Enter company domain URL above to lock your work email domain.
                    </div>
                  )}
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5 text-slate-400" /> Your Role *
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={companyRole}
                        onChange={(e) => setCompanyRole(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 pr-10 cursor-pointer"
                      >
                        <option value="">Select your role</option>
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-slate-400" /> Company Size *
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={companySize}
                        onChange={(e) => setCompanySize(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100 pr-10 cursor-pointer"
                      >
                        <option value="">Select size</option>
                        {SIZES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Choose Package */}
            {step === 2 && (
              <div className="space-y-6">
                {/* Monthly / Yearly Toggle */}
                <div className="flex items-center justify-center gap-2">
                  <div className="inline-flex rounded-xl bg-slate-100 p-1">
                    <button
                      type="button"
                      onClick={() => setBillingCycle("monthly")}
                      className={`rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        billingCycle === "monthly"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Monthly Billing
                    </button>
                    <button
                      type="button"
                      onClick={() => setBillingCycle("yearly")}
                      className={`flex items-center gap-1.5 rounded-lg px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        billingCycle === "yearly"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Yearly Billing
                      <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-700">
                        Save 20%
                      </span>
                    </button>
                  </div>
                </div>

                {/* Plan Cards Grid matched dynamically with data.ts */}
                <div className="grid gap-3 sm:grid-cols-2">
                  {plans
                    .filter((p) => p.id !== "free" && p.id !== "custom")
                    .map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      const rawPrice = plan.price || 0;
                      const price = billingCycle === "yearly" ? Math.round(rawPrice * 0.8) : rawPrice;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`relative cursor-pointer rounded-2xl border p-4 transition-all duration-200 ${
                            isSelected
                              ? "border-indigo-600 bg-indigo-50/40 ring-2 ring-indigo-600 shadow-md"
                              : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50"
                          }`}
                        >
                          {plan.popular && (
                            <span className="absolute -top-2.5 right-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
                              Most Popular
                            </span>
                          )}
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-slate-900">{plan.name}</h4>
                              <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                                {plan.features[0]?.text || "AI interview screening"}
                              </p>
                            </div>
                            <div className="text-right shrink-0 pl-2">
                              <span className="text-lg font-extrabold text-slate-900 font-mono">
                                ${price}
                              </span>
                              <span className="text-[10px] text-slate-500 block">/ mo</span>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                            <span className="text-[11px] font-semibold text-slate-600">
                              {isSelected ? "Selected plan" : "Click to select"}
                            </span>
                            <div
                              className={`flex h-4 w-4 items-center justify-center rounded-full ${
                                isSelected ? "bg-indigo-600 text-white" : "border border-slate-300"
                              }`}
                            >
                              {isSelected && <Check className="h-2.5 w-2.5" />}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-100 pt-6 max-w-xl mx-auto w-full">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-slate-900 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <MdArrowOutward className="rotate-180" /> Back
            </button>

            {step < steps.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!canProceed()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none cursor-pointer"
              >
                Continue
                <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleCompleteAndCheckout}
                disabled={!canProceed()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00A3FF] hover:bg-[#0092E5] px-7 py-3 text-xs font-bold text-white shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Complete Setup & Proceed to Checkout
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function OnboardingFlow() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-sm font-semibold text-slate-500">Loading Onboarding...</div>}>
      <OnboardingContent />
    </Suspense>
  );
}
