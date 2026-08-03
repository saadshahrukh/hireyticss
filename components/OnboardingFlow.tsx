'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, CreditCard, ShieldCheck, Sparkles } from 'lucide-react';
import {
  MdArrowOutward,
  MdCheck,
  MdGroups,
  MdPayment,
  MdPersonOutline,
  MdVerifiedUser,
} from 'react-icons/md';

const steps = [
  {
    title: 'Basic information',
    description: 'Tell us who you are and how we should reach you.',
    icon: MdPersonOutline,
  },
  {
    title: 'Compliance',
    description: 'Confirm the legal and operational acceptance steps.',
    icon: MdVerifiedUser,
  },
  {
    title: 'Buyer details',
    description: 'Share the buying context and implementation expectations.',
    icon: MdGroups,
  },
  {
    title: 'Payment setup',
    description: 'Choose your billing path and finalize your onboarding.',
    icon: MdPayment,
  },
] as const;

type FormState = {
  fullName: string;
  companyName: string;
  workEmail: string;
  personalEmail: string;
  phone: string;
  role: string;
  legalConsent: boolean;
  dpaConsent: boolean;
  privacyConsent: boolean;
  buyerName: string;
  buyerRole: string;
  teamSize: string;
  startDate: string;
  plan: string;
  paymentMethod: string;
};

const initialState: FormState = {
  fullName: '',
  companyName: '',
  workEmail: '',
  personalEmail: '',
  phone: '',
  role: '',
  legalConsent: false,
  dpaConsent: false,
  privacyConsent: false,
  buyerName: '',
  buyerRole: '',
  teamSize: '',
  startDate: '',
  plan: 'growth',
  paymentMethod: 'invoice',
};

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: keyof FormState;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block font-medium text-slate-700">
        {label}
        {required ? ' *' : ''}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
      />
    </label>
  );
}

export default function OnboardingFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  const updateField = (key: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      updateField(name as keyof FormState, checked);
    } else {
      updateField(name as keyof FormState, value);
    }
  };

  const goNext = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const canProceed = () => {
    if (step === 0) {
      return Boolean(
        form.fullName &&
          form.companyName &&
          form.workEmail &&
          form.personalEmail &&
          form.phone &&
          form.role,
      );
    }
    if (step === 1) {
      return form.legalConsent && form.dpaConsent && form.privacyConsent;
    }
    if (step === 2) {
      return Boolean(form.buyerName && form.buyerRole && form.teamSize && form.startDate);
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#f4f7ff_100%)] px-0 py-0 lg:px-0">
      <div className="mx-auto flex min-h-screen w-full flex-col overflow-hidden bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.35)] lg:flex-row">
        <aside className="relative flex min-h-[320px] items-center overflow-hidden lg:min-h-screen lg:w-[42%]">
          <Image
            src="/onboarding.jpg"
            alt="Team onboarding"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(14,116,144,0.78),_rgba(109,40,217,0.78))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.24),_transparent_45%)]" />
          <div className="relative z-10 p-8 text-white sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-100">
              <Sparkles size={14} /> Client onboarding
            </div>
            <h1 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
              Start strong with a tailored setup experience.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100 sm:text-base">
              We collect everything needed for your team to go live quickly: core contact details,
              legal acceptance, buyer context, and billing preferences.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck size={16} /> Secure setup
                </div>
                <p className="mt-2 text-sm text-slate-100">Legal consent and data handling are handled in one pass.</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CreditCard size={16} /> Flexible billing
                </div>
                <p className="mt-2 text-sm text-slate-100">Choose invoice or card billing based on your team’s process.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck size={16} /> Secure setup
                </div>
                <p className="mt-2 text-sm text-slate-100">Legal consent and data handling are handled in one pass.</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CreditCard size={16} /> Flexible billing
                </div>
                <p className="mt-2 text-sm text-slate-100">Choose invoice or card billing based on your team’s process.</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 !pt-32 bg-slate-50/80 p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-600">
                  Step {step + 1} of {steps.length}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{steps[step].title}</h2>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                {Math.round(((step + 1) / steps.length) * 100)}%
              </span>
            </div>

            <div className="relative flex items-center justify-between gap-2">
              {steps.map((item, index) => {
                const isComplete = index < step;
                const isActive = index === step;
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex flex-1 flex-col items-center">
                    <div className="flex w-full items-center">
                      {index > 0 && (
                        <div className={`h-[2px] flex-1 ${index <= step ? 'bg-sky-600' : 'bg-slate-200'}`} />
                      )}
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full border-2 ${isComplete ? 'border-sky-600 bg-sky-600 text-white' : isActive ? 'border-sky-600 bg-sky-50 text-sky-600' : 'border-slate-200 bg-white text-slate-400'}`}>
                        {isComplete ? <MdCheck size={20} /> : <Icon size={18} />}
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`h-[2px] flex-1 ${index < step ? 'bg-sky-600' : 'bg-slate-200'}`} />
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${isActive || isComplete ? 'text-slate-900' : 'text-slate-400'}`}>
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-6 rounded-[20px] border border-slate-200 bg-white/80 p-4 shadow-sm">
            <p className="text-sm leading-7 text-slate-600">{steps[step].description}</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 0 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="fullName" required placeholder="Alex Morgan" value={form.fullName} onChange={handleInputChange} />
                  <Field label="Company name" name="companyName" required placeholder="Northstar Labs" value={form.companyName} onChange={handleInputChange} />
                  <Field label="Work email" name="workEmail" type="email" required placeholder="alex@northstar.com" value={form.workEmail} onChange={handleInputChange} />
                  <Field label="Personal email" name="personalEmail" type="email" required placeholder="alex.morgan@gmail.com" value={form.personalEmail} onChange={handleInputChange} />
                  <Field label="Phone number" name="phone" required placeholder="+1 555 0123" value={form.phone} onChange={handleInputChange} />
                  <Field label="Role" name="role" required placeholder="HR Director" value={form.role} onChange={handleInputChange} />
                </div>
              )}

              {step === 1 && (
                <div className="space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <input type="checkbox" name="legalConsent" checked={form.legalConsent} onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600" />
                    <span className="text-sm text-slate-700">
                      I accept the client onboarding terms, service agreement, and any legal disclosures provided by Hireytics.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <input type="checkbox" name="dpaConsent" checked={form.dpaConsent} onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600" />
                    <span className="text-sm text-slate-700">
                      I confirm the data processing and privacy terms for employee and candidate information.
                    </span>
                  </label>
                  <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <input type="checkbox" name="privacyConsent" checked={form.privacyConsent} onChange={handleInputChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600" />
                    <span className="text-sm text-slate-700">
                      I authorize Hireytics to collect the required business information for onboarding and implementation support.
                    </span>
                  </label>
                </div>
              )}

              {step === 2 && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Buyer name" name="buyerName" required placeholder="Jamie Lee" value={form.buyerName} onChange={handleInputChange} />
                  <Field label="Buyer role" name="buyerRole" required placeholder="VP of Operations" value={form.buyerRole} onChange={handleInputChange} />
                  <label className="block text-sm">
                    <span className="mb-2 block font-medium text-slate-700">Team size *</span>
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleInputChange}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white"
                    >
                      <option value="">Select size</option>
                      <option value="1-50">1-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </label>
                  <Field label="Expected launch date" name="startDate" type="date" required value={form.startDate} onChange={handleInputChange} />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm">
                      <span className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
                        <Sparkles size={16} /> Plan
                      </span>
                      <select name="plan" value={form.plan} onChange={handleInputChange} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none">
                        <option value="growth">Growth</option>
                        <option value="scale">Scale</option>
                        <option value="enterprise">Enterprise</option>
                      </select>
                    </label>
                    <label className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 text-sm">
                      <span className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
                        <CreditCard size={16} /> Billing method
                      </span>
                      <select name="paymentMethod" value={form.paymentMethod} onChange={handleInputChange} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none">
                        <option value="invoice">Invoice</option>
                        <option value="card">Card payment</option>
                      </select>
                    </label>
                  </div>

                  <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-sky-50 to-violet-50 p-5">
                    <h3 className="text-lg font-semibold text-slate-900">Summary</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>• Contact: {form.fullName || 'Pending'} at {form.workEmail || 'Pending'}</li>
                      <li>• Company: {form.companyName || 'Pending'}</li>
                      <li>• Buyer: {form.buyerName || 'Pending'} • {form.teamSize || 'Pending'}</li>
                      <li>• Plan: {form.plan} • Billing: {form.paymentMethod}</li>
                    </ul>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button type="button" onClick={goBack} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900 disabled:opacity-50" disabled={step === 0}>
                  <MdArrowOutward className="rotate-180" /> Back
                </button>
                {step < steps.length - 1 ? (
                  <button type="button" onClick={goNext} disabled={!canProceed()} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300">
                    Continue <MdArrowOutward size={16} />
                  </button>
                ) : (
                  <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
                    Complete onboarding <MdArrowOutward size={16} />
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-slate-900">Onboarding request received</h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-700">
                Thanks, {form.fullName || 'there'}. We have captured your onboarding details and will follow up with your implementation guide shortly.
              </p>
              <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Return home <MdArrowOutward size={16} />
              </a>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
