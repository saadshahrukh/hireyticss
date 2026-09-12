"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import StatusModal from "@/components/ui/StatusModal";
import { 
  Sparkles, 
  CreditCard, 
  LockKeyhole, 
  Tag, 
  ArrowRight, 
  FileText,
  Loader2,
  Mail
} from "lucide-react";
import { plans, type Plan } from "@/components/pricing/data";

function CheckoutContent() {
  const searchParams = useSearchParams();

  const queryPlan = searchParams.get("plan") || "pro";
  const queryBilling = searchParams.get("billing") || "monthly";
  const queryEmail = searchParams.get("email") || "";
  const queryFirstName = searchParams.get("firstName") || searchParams.get("name") || "";
  const queryLastName = searchParams.get("lastName") || "";
  const queryCompany = searchParams.get("company") || "";

  const [selectedPlanId, setSelectedPlanId] = useState<string>(queryPlan);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    queryBilling === "yearly" ? "yearly" : "monthly"
  );

  // Form State
  const [email, setEmail] = useState(queryEmail);
  const [stayUpdated, setStayUpdated] = useState(true);
  const [firstName, setFirstName] = useState(queryFirstName);
  const [lastName, setLastName] = useState(queryLastName);
  const [companyName, setCompanyName] = useState(queryCompany);
  const [address1, setAddress1] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Payment State
  const [paymentTab, setPaymentTab] = useState<"card" | "paypal" | "invoice">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  // Promo Code State
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [discountError, setDiscountError] = useState("");

  // Submission State
  const [isProcessing, setIsProcessing] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    status: "success" | "error";
    message?: string;
  }>({
    isOpen: false,
    status: "success",
  });

  // Sync with URL params
  useEffect(() => {
    if (queryPlan) setSelectedPlanId(queryPlan);
    if (queryBilling) setBillingCycle(queryBilling === "yearly" ? "yearly" : "monthly");
    if (queryEmail) setEmail(queryEmail);
    if (queryFirstName) setFirstName(queryFirstName);
    if (queryCompany) setCompanyName(queryCompany);
  }, [queryPlan, queryBilling, queryEmail, queryFirstName, queryCompany]);

  // Plan pricing
  const currentPlan = useMemo(() => {
    return plans.find((p) => p.id === selectedPlanId) || plans.find((p) => p.id === "pro") || plans[2];
  }, [selectedPlanId]);

  const rawMonthlyPrice = currentPlan.price || 80;
  const effectiveMonthlyPrice = billingCycle === "yearly" ? Math.round(rawMonthlyPrice * 0.8) : rawMonthlyPrice;
  const discountAmount = discountApplied ? Math.round(effectiveMonthlyPrice * 0.2) : 0;
  const finalPrice = Math.max(0, effectiveMonthlyPrice - discountAmount);

  const handleApplyDiscount = (e: React.FormEvent) => {
    e.preventDefault();
    if (discountCode.trim().toUpperCase() === "HIRE20" || discountCode.trim().toUpperCase() === "LAUNCH20") {
      setDiscountApplied(true);
      setDiscountError("");
    } else {
      setDiscountError("Invalid promo code. Try HIRE20");
      setDiscountApplied(false);
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "Checkout Subscription",
          subject: `[New Subscription] ${firstName} ${lastName} - ${currentPlan.name} Plan ($${finalPrice})`,
          data: {
            customerName: `${firstName} ${lastName}`.trim(),
            contactEmail: email,
            companyName: companyName || "N/A",
            selectedPlan: currentPlan.name,
            billingCycle: billingCycle.toUpperCase(),
            monthlyCharge: `$${finalPrice}`,
            originalPrice: `$${rawMonthlyPrice}`,
            discountApplied: discountApplied ? "20% Promo (HIRE20)" : "None",
            paymentMethod: paymentTab === "card" ? "Credit Card" : paymentTab === "paypal" ? "PayPal" : "Corporate Invoice",
            billingAddress: `${address1} ${apartment ? `, ${apartment}` : ""}, ${city}, ${stateCode} ${zipCode}`.trim(),
            stayUpdatedNewsletter: stayUpdated ? "Yes" : "No",
            timestamp: new Date().toISOString(),
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Checkout request failed.");
      }

      setModalState({
        isOpen: true,
        status: "success",
        message: `We've received your request! We'll email your workspace credentials to ${email} shortly.`,
      });
    } catch (err) {
      console.error(err);
      setModalState({
        isOpen: true,
        status: "error",
        message: "An error occurred while processing your checkout. Please retry.",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col justify-between">
      
      {/* Top Checkout Header */}
      <header className="border-b border-slate-200/80 bg-white py-4 px-6 sm:px-12 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              Hireytics<span className="text-sky-500">.</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <LockKeyhole className="h-3.5 w-3.5 text-emerald-600" />
            <span>256-Bit SSL Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto w-full p-6 sm:p-10 my-6">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-sm">
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <Link href="/" className="hover:underline">HOME</Link> / CHECKOUT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column (Contact, Billing & Payment) */}
            <form onSubmit={handleSubscribe} className="lg:col-span-7 space-y-7">
              
              {/* Contact Information */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-3">Contact Information</h3>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                <label className="mt-2.5 flex items-center gap-2 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={stayUpdated}
                    onChange={(e) => setStayUpdated(e.target.checked)}
                    className="rounded border-slate-300 text-sky-500 focus:ring-0"
                  />
                  <span>Stay up to date with news and offers</span>
                </label>
              </div>

              {/* Billing Details */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-3">Billing details</h3>
                <div className="space-y-2.5">
                  <div className="grid grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="First name*"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                    />
                    <input
                      type="text"
                      placeholder="Last name*"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Company name (Optional)"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Address 1*"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                  />

                  <input
                    type="text"
                    placeholder="Apartment, suit, etc (Optional)"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                  />

                  <div className="grid grid-cols-3 gap-2.5">
                    <input
                      type="text"
                      required
                      placeholder="City*"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                    />
                    <input
                      type="text"
                      required
                      placeholder="State*"
                      value={stateCode}
                      onChange={(e) => setStateCode(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Zip code*"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-3">Payment Information</h3>
                
                {/* Payment Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setPaymentTab("card")}
                    className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-bold transition-all cursor-pointer ${
                      paymentTab === "card"
                        ? "border-sky-500 bg-sky-50/60 text-sky-950 ring-1 ring-sky-500"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <CreditCard className="h-3.5 w-3.5" /> Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentTab("paypal")}
                    className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-bold transition-all cursor-pointer ${
                      paymentTab === "paypal"
                        ? "border-sky-500 bg-sky-50/60 text-sky-950 ring-1 ring-sky-500"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentTab("invoice")}
                    className={`flex items-center justify-center gap-1.5 rounded-xl border py-2.5 text-xs font-bold transition-all cursor-pointer ${
                      paymentTab === "invoice"
                        ? "border-sky-500 bg-sky-50/60 text-sky-950 ring-1 ring-sky-500"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <FileText className="h-3.5 w-3.5" /> More / Invoice
                  </button>
                </div>

                {paymentTab === "card" ? (
                  <div className="space-y-2 rounded-xl border border-slate-200 bg-slate-50/40 p-3.5">
                    <input
                      type="text"
                      required
                      placeholder="Card number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-mono text-slate-800 outline-none focus:border-sky-500"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-mono text-slate-800 outline-none focus:border-sky-500"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVC"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-mono text-slate-800 outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
                    {paymentTab === "paypal" ? "PayPal Express authentication will open upon clicking Subscribe." : "Net 30 electronic invoice terms will be dispatched directly to your business contact."}
                  </div>
                )}
              </div>

              {/* Subscribe Button */}
              <div>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full rounded-xl bg-[#00A3FF] py-3.5 text-sm font-bold text-white shadow-md shadow-sky-500/20 transition-all hover:bg-[#0092E5] active:scale-[0.99] disabled:opacity-70 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Processing Subscription...</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <LockKeyhole className="h-3.5 w-3.5 text-slate-500" />
                  <span>Secure checkout</span>
                </div>
              </div>
            </form>

            {/* Right Column: Order Summary (EXACT MATCHING ATTACHED IMAGE) */}
            <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm space-y-5 h-fit">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900">Order Summary</h3>
                
                {/* Switch to Yearly Toggle */}
                <label className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 cursor-pointer">
                  <span>Switch to Yearly</span>
                  <input
                    type="checkbox"
                    checked={billingCycle === "yearly"}
                    onChange={(e) => setBillingCycle(e.target.checked ? "yearly" : "monthly")}
                    className="h-4 w-7 rounded-full appearance-none bg-slate-300 checked:bg-sky-500 transition-colors cursor-pointer relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-transform checked:after:translate-x-3"
                  />
                </label>
              </div>

              {/* Selected Plan Tile */}
              <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white shadow-sm font-bold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Hireytics {currentPlan.name}</h4>
                    <Link
                      href="/onboarding"
                      className="text-[10px] font-semibold text-sky-600 hover:underline block"
                    >
                      Change plan
                    </Link>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-slate-900 font-mono">
                    ${effectiveMonthlyPrice}
                  </span>
                  <span className="text-[10px] text-slate-500 block">/ Month</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                Your order will charge now at the price below, and you will charge every billing period.
              </p>

              {/* Promo Code Input */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    placeholder="Promo code (HIRE20)"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 px-2.5 text-xs uppercase text-slate-800 placeholder-slate-400 outline-none focus:border-sky-500"
                  />
                  <button
                    type="button"
                    onClick={handleApplyDiscount}
                    className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-sky-600 transition"
                  >
                    Apply
                  </button>
                </div>
                {discountApplied && (
                  <p className="mt-1 text-[10px] font-semibold text-emerald-600">
                    ✓ 20% discount code applied!
                  </p>
                )}
                {discountError && (
                  <p className="mt-1 text-[10px] font-semibold text-rose-500">
                    {discountError}
                  </p>
                )}
              </div>

              {/* Price & Total Rows */}
              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Price</span>
                  <span className="font-mono text-slate-900 font-semibold">${effectiveMonthlyPrice}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount (20%)</span>
                    <span className="font-mono">- ${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-slate-100 text-sm font-bold text-slate-900">
                  <span>Total</span>
                  <span className="font-mono">USD ${finalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Submission Status Modal */}
      <StatusModal
        isOpen={modalState.isOpen}
        status={modalState.status}
        message={modalState.message}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        onRetry={() => setModalState({ ...modalState, isOpen: false })}
        actionText={modalState.status === "success" ? "Go to Dashboard" : "Retry"}
        actionHref={modalState.status === "success" ? "/" : undefined}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>© 2026 Hireytics Inc. All rights reserved. • <Link href="/privacy" className="hover:underline">Privacy</Link> • <Link href="/terms" className="hover:underline">Terms</Link></p>
        <p className="mt-1 text-[11px] text-slate-400">
          Support: <a href="mailto:support@hireytics.com" className="hover:underline">support@hireytics.com</a> • Inquiries: <a href="mailto:contact@hireytics.com" className="hover:underline">contact@hireytics.com</a>
        </p>
      </footer>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center text-sm font-semibold text-slate-500">Loading Checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
