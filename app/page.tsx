import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import HowItWorks from "@/components/HowItWorks";
import WhyHireytics from "@/components/WhyHireytics";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
