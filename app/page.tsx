import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import HowItWorks from "@/components/HowItWorks";
import WhyHireytics from "@/components/WhyHireytics";
import Testimonials from "@/components/Testimonials";
import HomeFAQ from "@/components/HomeFAQ";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { generateSoftwareApplicationSchema, generateFAQSchema, HOME_BRAND_FAQS } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Hireytics — All-in-One AI Recruiting Platform & Recall Memory Engine",
  description:
    "Hireytics is the all-in-one AI recruiting platform featuring automated OCR candidate screening, asynchronous voice interviews, and Recall — institutional hiring memory and recruiting AI chatbot engine.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={generateSoftwareApplicationSchema()} />
      <JsonLd data={generateFAQSchema(HOME_BRAND_FAQS)} />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <HowItWorks />
        <WhyHireytics />
        <Testimonials />
        <HomeFAQ />
      </main>
      <Footer />
    </>
  );
}

