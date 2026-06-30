import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueProposition />
        <HowItWorks />
        <VideoSection />
        <Testimonials />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
