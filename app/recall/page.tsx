import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecallPage from "@/components/recall/RecallPage";

export const metadata: Metadata = {
  title: "Recall v1.0 — Hireytics",
  description:
    "Recall is the intelligence layer inside Hireytics that connects hiring information across jobs, candidates, interviews, and feedback — so teams can ask questions in plain language.",
  keywords: [
    "Recall",
    "Hireytics",
    "AI hiring assistant",
    "hiring intelligence",
    "recruitment context",
    "workforce platform",
  ],
};

export default function RecallRoute() {
  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-[var(--background)]">
        <RecallPage />
      </main>
      <Footer />
    </>
  );
}
