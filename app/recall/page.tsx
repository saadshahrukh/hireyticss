import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecallPage from "@/components/recall/RecallPage";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Recall — AI Hiring Assistant & Intelligence Engine | Hireytics",
  description:
    "Recall is the AI intelligence feature inside Hireytics that connects hiring information across job roles, candidate profiles, resumes, interview transcripts, and team feedback.",
  path: "/recall",
});

const recallSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Recall by Hireytics",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Recall is an AI hiring intelligence assistant inside Hireytics that enables talent teams to query candidate profiles, interview transcripts, resume data, and pipeline context."
};

export default function RecallRoute() {
  return (
    <>
      <JsonLd data={recallSchema} />
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

