import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { generateArticleSchema } from "@/lib/schema";
import { Clock, User, Calendar, Tag, ArrowLeft, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Article Not Found | Hireytics Blog",
      description: "The requested article could not be found.",
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${article.title} | Hireytics Blog`,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    ogType: "article",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = getAllArticles();
  const relatedArticles = allArticles.filter((art) => art.slug !== article.slug);

  const articleSchema = generateArticleSchema({
    headline: article.title,
    description: article.metaDescription,
    url: `/blog/${article.slug}`,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate || article.publishedDate,
    authorName: article.author.name,
  });

  return (
    <>
      <JsonLd data={articleSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-slate-50/50 pt-28 pb-20">
        <div className="section-container max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: article.title, href: `/blog/${article.slug}` },
            ]}
          />

          <article className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-10 lg:p-12">
            {/* Category & Meta Banner */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-sky-100 px-3 py-1 font-bold text-sky-800">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                Published {article.publishedDate}
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
              {article.title}
            </h1>

            {/* Author Profile Box */}
            <div className="mt-6 flex items-center gap-3 border-y border-slate-100 py-4 text-xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 font-bold text-white text-xs">
                {article.author.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="font-bold text-slate-900">{article.author.name}</p>
                <p className="text-slate-500">{article.author.role}</p>
              </div>
            </div>

            {/* Article Markdown Content Body */}
            <div className="mt-8 prose prose-slate max-w-none text-slate-700 space-y-6 leading-relaxed">
              {article.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("# ")) {
                  return null; // Skip duplicate H1
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold text-slate-900 pt-6 border-t border-slate-100">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-slate-900 pt-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("---")) {
                  return <hr key={idx} className="my-6 border-slate-100" />;
                }
                if (paragraph.startsWith("* ")) {
                  const items = paragraph.split("\n* ").map((it) => it.replace("* ", ""));
                  return (
                    <ul key={idx} className="space-y-2 my-4 pl-4 border-l-2 border-sky-400 text-sm">
                      {items.map((it, itemIdx) => (
                        <li key={itemIdx}>{it}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-base text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Contextual Product Feature Callout */}
            <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50/70 p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-900">
                <Sparkles className="h-4 w-4 text-sky-600" />
                <span>See Hireytics in Action</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">
                Streamline Your Screening & Interview Workflows
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Hireytics connects resume parsing, automated AI voice interviews, candidate pipelines, and Recall hiring context in a single workspace.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Link
                  href="/free-trial"
                  className="rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-sky-700 transition"
                >
                  Start 14-Day Free Trial
                </Link>
                <Link
                  href="/recall"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-50 transition"
                >
                  Learn About Recall Engine
                </Link>
              </div>
            </div>
          </article>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-14 border-t border-slate-200/80 pt-10">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Related Articles</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition hover:border-slate-300"
                  >
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                      {rel.category}
                    </span>
                    <h4 className="mt-2 text-base font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2">{rel.excerpt}</p>
                    <Link
                      href={`/blog/${rel.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-800"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
