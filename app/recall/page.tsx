import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecallPage from "@/components/recall/RecallPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { generateRecallSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Recall — AI HR & Recruiting Chatbot and Candidate Memory Platform",
  description:
    "Recall is the AI HR and recruiting chatbot and institutional candidate memory platform inside Hireytics. Query resumes, interview transcripts, and hiring scorecards in plain language.",
  path: "/recall",
});

export default function RecallRoute() {
  return (
    <>
      <JsonLd data={generateRecallSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", item: "/" },
          { name: "Recall AI Engine", item: "/recall" },
        ])}
      />
      <Navbar solid />
      <main className="min-h-screen bg-[var(--background)] pt-24">
        <div className="section-container max-w-6xl pt-4">
          <Breadcrumbs items={[{ label: "Recall", href: "/recall" }]} />
        </div>
        <RecallPage />
      </main>
      <Footer />
    </>
  );
}
