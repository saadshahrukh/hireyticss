import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Mail, CheckCircle2, ChevronRight, Lock, FileText, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Hireytics",
  description:
    "Learn how Hireytics collects, protects, uses, and processes information for candidates, hiring teams, and organizations.",
};

const sections = [
  { id: "who-we-are", title: "1. Who We Are" },
  { id: "scope", title: "2. Scope of This Policy" },
  { id: "information-we-collect", title: "3. Information We Collect" },
  { id: "how-we-use-information", title: "4. How We Use Information" },
  { id: "recall-and-ai-processing", title: "5. Recall and AI Processing" },
  { id: "how-we-share-information", title: "6. How We Share Information" },
  { id: "customer-data-and-ownership", title: "7. Customer Data and Ownership" },
  { id: "data-security", title: "8. Data Security" },
  { id: "data-retention", title: "9. Data Retention" },
  { id: "your-rights-and-choices", title: "10. Your Rights and Choices" },
  { id: "international-transfers", title: "11. International Data Transfers" },
  { id: "cookies", title: "12. Cookies and Similar Technologies" },
  { id: "children-privacy", title: "13. Children's Privacy" },
  { id: "third-party-services", title: "14. Third-Party Services" },
  { id: "changes", title: "15. Changes to This Privacy Policy" },
  { id: "contact-us", title: "16. Contact Us" },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          {/* Breadcrumb & Header */}
          <div className="border-b border-slate-200/80 pb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <a href="/" className="hover:text-slate-900 transition">Home</a>
              <ChevronRight className="h-3 w-3" />
              <span className="text-slate-900">Privacy Policy</span>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  Privacy Policy
                </h1>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                  This policy explains what information Hireytics collects, how we protect it, when we share it, and the rights available to individuals and organizations.
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 text-xs">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700 border border-slate-200">
                  <Clock className="h-3.5 w-3.5 text-slate-500" />
                  Effective: September 9, 2026
                </span>
                <span className="text-slate-400">Version 2.4</span>
              </div>
            </div>
          </div>

          {/* Main Grid: Sticky Sidebar + Content Body */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr] xl:gap-14">
            {/* Left Column: Sticky Navigation Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>Table of Contents</span>
                </div>
                <nav className="mt-3 space-y-1 text-xs">
                  {sections.map((sec) => (
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
                    href="/terms"
                    className="flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-slate-950"
                  >
                    <span>Terms of Service</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Legal Prose Content */}
            <div className="prose prose-slate max-w-none rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs sm:p-10 lg:p-12 text-slate-700">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4 sm:p-5 text-sm leading-relaxed text-sky-950 not-prose mb-8">
                <p className="font-semibold text-sky-900">
                  At Hireytics, we build software for teams that manage hiring and people operations. Our platform processes information that organizations provide about their candidates, employees, recruiters, hiring managers, and other users.
                </p>
                <p className="mt-2 text-sky-800">
                  We take that responsibility seriously. Please read this Privacy Policy together with our <a href="/terms" className="font-semibold underline">Terms of Service</a>.
                </p>
              </div>

              {/* Section 1 */}
              <section id="who-we-are" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">1. Who We Are</h2>
                <p>
                  Hireytics (&ldquo;Hireytics,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides hiring and workforce software that helps organizations manage recruiting workflows, candidate information, interviews, assessments, feedback, and related hiring operations.
                </p>
                <p>
                  For organizations using Hireytics, the organization that creates and manages the account generally determines what candidate or employee information is submitted to the platform and how that information is used.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 2 */}
              <section id="scope" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">2. Scope of This Policy</h2>
                <p>This Privacy Policy applies to information collected through:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>The Hireytics website;</li>
                  <li>Hireytics web applications and dashboards;</li>
                  <li>Candidate-facing Hireytics pages and voice interview sessions;</li>
                  <li>Accounts created with Hireytics;</li>
                  <li>Integrations and services connected to Hireytics;</li>
                  <li>Communications between you and Hireytics; and</li>
                  <li>Other services that link to this Privacy Policy.</li>
                </ul>
                <p>
                  This policy does not necessarily apply to third-party websites, services, or applications that integrate with Hireytics. Those services maintain their own privacy policies.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 3 */}
              <section id="information-we-collect" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">3. Information We Collect</h2>
                <p>The information we collect depends on how you use Hireytics.</p>

                <h3 className="text-base font-bold text-slate-900 mt-4">3.1 Account and Organization Information</h3>
                <p>When an organization or individual creates an account, we may collect:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Name, email address, password or authentication information;</li>
                  <li>Organization name, job title, and organization settings;</li>
                  <li>Billing information and account preferences; and</li>
                  <li>Information required to administer the subscription.</li>
                </ul>

                <h3 className="text-base font-bold text-slate-900 mt-4">3.2 Candidate and Recruitment Information</h3>
                <p>Organizations using Hireytics may submit information about job candidates, including:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Name, email address, phone number, and location;</li>
                  <li>Resume, CV, employment history, education, skills, and certifications;</li>
                  <li>Job application information, assessment responses, and recruiter notes;</li>
                  <li>Interview feedback, hiring stage transitions, and hiring decisions.</li>
                </ul>

                <h3 className="text-base font-bold text-slate-900 mt-4">3.3 Information Collected Through Interviews</h3>
                <p>
                  When an organization uses Hireytics to conduct an interview or assessment, Hireytics may process:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Candidate voice responses, audio information, and transcripts;</li>
                  <li>Interview metadata, duration, evaluation criteria, and AI-generated analysis.</li>
                </ul>

                <h3 className="text-base font-bold text-slate-900 mt-4">3.4 Automatically Collected Technical Data</h3>
                <p>
                  IP address, browser type, device information, operating system, pages visited, session tokens, error logs, and telemetry necessary to secure and operate the service.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 4 */}
              <section id="how-we-use-information" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">4. How We Use Information</h2>
                <p>We use collected information for legitimate service operations, including to:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Provide Hireytics:</strong> Operate hiring workflows, parse resumes, conduct voice interviews, generate transcripts, and power Recall functionality;</li>
                  <li><strong>Maintain & Secure:</strong> Authenticate accounts, detect unauthorized activity, prevent fraud, and ensure reliable cloud uptime;</li>
                  <li><strong>Improve the Platform:</strong> Diagnose errors, understand usage patterns, and optimize user experience;</li>
                  <li><strong>Customer Communications:</strong> Provide account updates, security advisories, billing notices, and technical support.</li>
                </ul>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 5 */}
              <section id="recall-and-ai-processing" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">5. Recall and AI Processing</h2>
                <p>
                  Recall is Hireytics&apos; intelligence layer that helps users reason across information already stored within their organization&apos;s hiring environment.
                </p>
                <p>
                  Recall processes job descriptions, candidate profiles, resumes, interview transcripts, and feedback to provide grounded, cited answers.
                </p>
                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs leading-relaxed text-amber-900 not-prose my-4">
                  <strong>Important Note:</strong> Hireytics does not intend Recall to independently make employment decisions on behalf of an organization. Organizations and hiring managers remain solely responsible for employment decisions, candidate evaluations, and compliance with employment laws.
                </div>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 6 */}
              <section id="how-we-share-information" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">6. How We Share Information</h2>
                <p className="font-semibold text-slate-900">
                  We do NOT sell customer candidate data as a product.
                </p>
                <p>We may share information only in limited operational circumstances:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Service Providers:</strong> Cloud hosting (AWS/GCP), database infrastructure, language-model and speech processing providers (OpenAI, Anthropic, Deepgram), payment processors (Stripe), and security auditors;</li>
                  <li><strong>Legal Compliance:</strong> When required by law, subpoena, or to protect the safety and rights of users;</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or asset sale under standard confidentiality safeguards.</li>
                </ul>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 7 - 9 */}
              <section id="customer-data-and-ownership" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">7. Customer Data and Ownership</h2>
                <p>
                  Customer-submitted candidate and hiring information remains under the customer&apos;s ownership and control. Hireytics processes data strictly to provide the requested software services.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="data-security" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">8. Data Security</h2>
                <p>
                  We implement industry-standard administrative, physical, and technical safeguards, including tenant-level data isolation, encryption in transit (TLS 1.3), encryption at rest (AES-256), access logging, and secrets management.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="data-retention" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">9. Data Retention</h2>
                <p>
                  We retain information for as long as necessary to fulfill the purposes outlined in this policy or as requested by the account administrator. Upon account termination, data is deleted or anonymized in accordance with our standard data retention schedule.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 10 */}
              <section id="your-rights-and-choices" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">10. Your Rights and Choices</h2>
                <p>
                  Depending on your jurisdiction (such as GDPR, CCPA, or UK DPA), you may have the right to access, correct, delete, restrict, or port your personal information. Candidates seeking to exercise rights regarding data submitted to an employer via Hireytics should contact that employer directly.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 11 - 15 */}
              <section id="international-transfers" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">11. International Data Transfers</h2>
                <p>
                  Information may be processed on servers located internationally with standard contractual clauses and legal transfer mechanisms.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="cookies" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">12. Cookies & Analytics</h2>
                <p>
                  We use essential session cookies for authentication and performance optimization. You can adjust your browser cookie settings at any time.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="children-privacy" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">13. Children&apos;s Privacy</h2>
                <p>
                  Hireytics is designed exclusively for business and professional employment use. We do not knowingly collect personal information from individuals under 16.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="third-party-services" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">14. Third-Party Integrations</h2>
                <p>
                  Our services may link with third-party software (such as Google Workspace, Slack, or HRIS platforms). Their privacy terms apply to data processed on their systems.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              <section id="changes" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">15. Changes to This Privacy Policy</h2>
                <p>
                  We may update this policy periodically. We will post revised versions with an updated &ldquo;Last Updated&rdquo; date and provide notice for material revisions.
                </p>
              </section>

              <hr className="my-8 border-slate-100" />

              {/* Section 16 */}
              <section id="contact-us" className="scroll-mt-32">
                <h2 className="text-xl font-bold text-slate-900">16. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please reach out to our privacy team:</p>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 not-prose text-xs">
                  <p className="font-bold text-slate-900 text-sm">Hireytics Legal & Privacy Team</p>
                  <p className="mt-1 text-slate-600">Email: <a href="mailto:contact@hireytics.com" className="font-semibold text-slate-900 underline">contact@hireytics.com</a></p>
                  <p className="text-slate-500 mt-0.5">Support & General: <a href="mailto:support@hireytics.com" className="text-slate-700 underline">support@hireytics.com</a> | <a href="mailto:info@hireytics.com" className="text-slate-700 underline">info@hireytics.com</a></p>
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
