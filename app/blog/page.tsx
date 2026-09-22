import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { getAllArticles } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { Clock, User, ArrowRight, BookOpen, Tag } from "lucide-react";

export const metadata = buildMetadata({
  title: "AI Recruiting & Hiring Strategy Blog | Hireytics",
  description:
    "Explore in-depth articles on AI recruiting software, applicant tracking systems, candidate screening, interview automation, and hiring strategy.",
  path: "/blog",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Hireytics Hiring & Recruiting Blog",
  "description": "Educational articles, research guides, and industry insights on AI recruiting, ATS software, candidate screening, and hiring automation.",
  "url": "https://hireytics.com/blog"
};

export default function BlogHubPage() {
  const articles = getAllArticles();

  return (
    <>
      <JsonLd data={blogSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

          <div className="border-b border-slate-200/80 pb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3.5 py-1 text-xs font-semibold text-sky-800">
              <BookOpen className="h-3.5 w-3.5 text-sky-600" />
              <span>Hireytics Insights & Guides</span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Hiring Strategy, AI Recruiting & Talent Operations
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
              Practical guides and research for founders, recruiters, and talent acquisition leaders building modern, automated hiring operations.
            </p>
          </div>

          {/* Article Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((art) => (
              <article
                key={art.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 font-bold text-sky-800">
                      {art.category}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <Clock className="h-3 w-3 text-slate-400" />
                      {art.readingTime}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-slate-900 leading-snug hover:text-sky-600 transition-colors">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h2>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <User className="h-3.5 w-3.5 text-slate-400" />
                    <span>{art.author.name}</span>
                  </div>

                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
