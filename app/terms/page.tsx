import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Clock, ChevronRight, Scale, ArrowUpRight, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service — Hireytics",
  description:
    "Review the terms governing your access to and use of Hireytics software, artificial intelligence features, Recall, and workforce tools.",
};

const termsSections = [
  { id: "about", title: "1. About Hireytics" },
  { id: "accounts", title: "2. Accounts & Security" },
  { id: "organization-accounts", title: "3. Organization Accounts" },
  { id: "your-data", title: "4. Your Data" },
  { id: "candidate-information", title: "5. Candidate Information" },
  { id: "ai-features-recall", title: "6. AI Features and Recall" },
  { id: "no-automated-guarantee", title: "7. No Automated Decisions" },
  { id: "acceptable-use", title: "8. Acceptable Use Policy" },
  { id: "intellectual-property", title: "9. Intellectual Property" },
  { id: "feedback", title: "10. Feedback" },
  { id: "subscriptions-payments", title: "11. Subscriptions & Payments" },
  { id: "free-trials", title: "12. Free Trials & Beta Features" },
  { id: "third-party", title: "13. Third-Party Services" },
  { id: "availability", title: "14. Service Availability" },
  { id: "security", title: "15. Security" },
  { id: "confidentiality", title: "16. Confidentiality" },
  { id: "termination", title: "17. Suspension & Termination" },
  { id: "effect-termination", title: "18. Effect of Termination" },
  { id: "disclaimers", title: "19. Disclaimers" },
  { id: "liability", title: "20. Limitation of Liability" },
  { id: "indemnification", title: "21. Indemnification" },
  { id: "service-changes", title: "22. Changes to the Services" },
  { id: "terms-changes", title: "23. Changes to These Terms" },
  { id: "governing-law", title: "24. Governing Law" },
  { id: "entire-agreement", title: "25. Entire Agreement" },
  { id: "contact", title: "26. Contact Us" },
];

export default function TermsPage() {
  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          {/* Header & Breadcrumb */}
          <div className="border-b border-slate-200/80 pb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <a href="/" className="hover:text-slate-900 transition">Home</a>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-900">Terms of Service</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Terms of Service
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                  These Terms govern your access to and use of Hireytics, including our website, software, Recall intelligence engine, and workforce operations.
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 text-xs">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 border border-slate-200">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  Effective: September 9, 2026
                </span>
                <span className="text-slate-400">Version 3.1</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Sticky Sidebar + Content Body */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr] xl:gap-14">
            {/* Table of Contents Sticky Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Scale className="h-4 w-4 text-slate-600" />
                  <span>Agreement Sections</span>
                </div>
                <nav className="mt-3 space-y-1 text-xs">
                  {termsSections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block rounded-lg px-2.5 py-1.5 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <a
                    href="/privacy"
                    className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-slate-950"
                  >
                    <span>Privacy Policy</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Terms Content Body */}
            <div className="prose prose-slate max-w-none rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-10 lg:p-12 text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5 text-sm leading-relaxed text-slate-800 not-prose mb-8">
                <p className="font-semibold text-slate-900">
                  By creating an account, accessing, or using Hireytics, you agree to these Terms of Service. If you are using Hireytics on behalf of an organization, you represent that you have the authority to bind that organization.
                </p>
              </div>

              {/* Section 1 */}
              <section id="about" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">1. About Hireytics</h2>
                <p>
                  Hireytics provides software that helps organizations manage hiring, recruiting workflows, resume screening, voice interviews, transcripts, candidate evaluation, workforce analytics, and Recall intelligence.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 2 & 3 */}
              <section id="accounts" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">2. Accounts</h2>
                <p>
                  You agree to provide accurate account information, maintain password security, avoid unauthorized credential sharing, and promptly notify us of any security compromise.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="organization-accounts" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">3. Organization Accounts</h2>
                <p>
                  If you use Hireytics on behalf of an entity, that organization owns the account, controls the submitted candidate data, and is responsible for complying with applicable labor and data-protection laws.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 4 & 5 */}
              <section id="your-data" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">4. Your Data</h2>
                <p>
                  You retain all intellectual property rights in information submitted to Hireytics. You grant Hireytics a limited license to host, process, and transmit your data solely to provide and maintain the services.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="candidate-information" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">5. Candidate Information</h2>
                <p>
                  Organizations agree they will only submit candidate data where they possess a lawful basis and appropriate notices/consents. Hireytics acts as a software provider and does not serve as the employer or decision-maker.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 6 & 7 */}
              <section id="ai-features-recall" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">6. AI Features and Recall</h2>
                <p>
                  Hireytics utilizes advanced language and audio models to assist with analysis. Recall is designed to summarize and compare data contained within your workspace.
                </p>
                <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs leading-relaxed text-amber-950 not-prose my-4">
                  <strong>Human Judgment Required:</strong> AI-generated summaries, match scores, and interview insights should not be treated as infallible. Users must apply human review and professional discretion before relying on AI outputs.
                </div>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="no-automated-guarantee" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">7. No Automated Employment Decision Guarantee</h2>
                <p>
                  Hireytics is not intended to independently make final employment hiring, rejection, promotion, or termination decisions. Final employment determinations remain the sole responsibility of human hiring authorities.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 8 - 10 */}
              <section id="acceptable-use" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">8. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Violate laws, regulations, or third-party rights;</li>
                  <li>Reverse engineer, decompile, or scrape platform data without permission;</li>
                  <li>Circumvent security controls or introduce malicious software;</li>
                  <li>Abuse API quotas or access other tenants&apos; data.</li>
                </ul>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="intellectual-property" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">9. Intellectual Property</h2>
                <p>
                  Hireytics and its licensors retain all rights, title, and interest in the Hireytics software, designs, algorithms, trademarks, and documentation.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 11 - 15 */}
              <section id="subscriptions-payments" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">11. Subscriptions and Payments</h2>
                <p>
                  Paid plans renew automatically according to selected billing intervals. Fees are non-refundable except where required by law or stated in writing.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="disclaimers" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">19. Disclaimers</h2>
                <p>
                  The services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="liability" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">20. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Hireytics will not be liable for indirect, incidental, special, or consequential damages. Aggregate liability is limited to the amounts paid by you in the 12 months preceding the claim.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 24 - 26 */}
              <section id="governing-law" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">24. Governing Law</h2>
                <p>
                  These Terms are governed by applicable commercial laws without regard to conflict-of-law principles.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="contact" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">26. Contact Us</h2>
                <p>For inquiries regarding these Terms:</p>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 not-prose text-xs">
                  <p className="font-bold text-slate-900 text-sm">Hireytics Legal Department</p>
                  <p className="mt-1 text-slate-600">Email: <a href="mailto:contact@hireytics.com" className="font-semibold text-slate-900 underline">contact@hireytics.com</a></p>
                  <p className="text-slate-500 mt-0.5">Support: <a href="mailto:support@hireytics.com" className="text-slate-700 underline">support@hireytics.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
