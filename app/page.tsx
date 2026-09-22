import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import HowItWorks from "@/components/HowItWorks";
import WhyHireytics from "@/components/WhyHireytics";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { generateSoftwareApplicationSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "AI Recruiting Software & Applicant Tracking System | Hireytics",
  description:
    "Hireytics is an AI-powered hiring platform that automates candidate screening, conducts voice interview evaluations, and provides instant hiring context using Recall.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={generateSoftwareApplicationSchema()} />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <HowItWorks />
        <WhyHireytics />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

