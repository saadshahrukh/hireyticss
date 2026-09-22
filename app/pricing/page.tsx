import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/pricing/PricingSection";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FadeIn } from "@/components/ui/Motion";
import { ButtonLink } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing Plans for AI Hiring & Applicant Tracking | Hireytics",
  description:
    "Flexible pricing plans for teams of every size. Start free with AI interviews, resume screening, and analytics — scale to Enterprise with custom workflows and Recall integration.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Navbar solid />
      <main className="relative overflow-hidden pt-24">
        <div className="section-container max-w-6xl pt-4">
          <Breadcrumbs items={[{ label: "Pricing", href: "/pricing" }]} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-slate-200/60" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-slate-100/80" />

        <PricingSection />
        <ComparisonTable />
        <PricingFAQ />

        <section id="custom-pricing" className="section-block !pt-0 scroll-mt-24">
          <div className="section-container max-w-4xl">
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-8 py-14 text-center shadow-xl shadow-slate-200/40 md:px-16">
                <div className="absolute inset-0 bg-slate-100/80" />
                <div className="relative">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Need Custom Architecture or Enterprise Pricing?
                  </h2>
                  <p className="mx-auto mt-4 max-w-md text-slate-600">
                    Our team will walk you through your hiring volume, custom workflow needs, and integration goals to build a tailored plan.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    <ButtonLink href="/#inquiry" variant="primary">
                      Request a Demo
                    </ButtonLink>
                    <ButtonLink href="/#inquiry" variant="secondary">
                      Talk to Sales
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

