import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { generateArticleSchema } from "@/lib/schema";
import { Clock, User, Calendar, ArrowUpRight, ArrowLeft } from "lucide-react";

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

// Generate section IDs for Table of Contents
function extractSections(content: string) {
  const lines = content.split("\n");
  const sections: { id: string; title: string }[] = [];

  lines.forEach((line) => {
    if (line.startsWith("## ")) {
      const title = line.replace("## ", "").trim();
      const id = title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      sections.push({ id, title });
    }
  });

  return sections;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const sections = extractSections(article.content);
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
      <main className="min-h-screen bg-white pt-28 pb-20">
        <div className="section-container max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: article.title, href: `/blog/${article.slug}` },
            ]}
          />

          {/* Simple Clean Header - No Box Shadow or Background Box */}
          <div className="border-b border-slate-200 pb-8 mt-2">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-700">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                Published: {article.publishedDate}
              </span>
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
              {article.title}
            </h1>

            <div className="mt-4 flex items-center gap-3 text-xs text-slate-600">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="h-8 w-8 rounded-full object-cover shrink-0 border border-slate-200"
              />
              <div>
                <span className="font-bold text-slate-900 block">{article.author.name}</span>
                <span className="text-slate-500 text-[11px] block">{article.author.role}</span>
              </div>
            </div>
          </div>

          {/* Sticky Left TOC Navigation + Main Content Center */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[240px_1fr] xl:gap-14">
            
            {/* Sticky Navigation Left Column */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {sections.length > 0 && (
                  <div>
                    <div className="border-b border-slate-200 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Table of Contents
                    </div>
                    <nav className="mt-3 space-y-1.5 text-xs">
                      {sections.map((sec) => (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          className="block text-slate-600 hover:text-sky-600 transition-colors font-medium py-1 leading-snug"
                        >
                          {sec.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                )}

                <div className="border-t border-slate-200 pt-4 space-y-2 text-xs font-semibold text-slate-700">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Related Features
                  </div>
                  <Link href="/features/ai-recruiting" className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-1">
                    <span>AI Recruiting</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link href="/features/applicant-tracking" className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-1">
                    <span>Applicant Tracking</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link href="/features/candidate-screening" className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-1">
                    <span>Candidate Screening</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link href="/features/automated-interviews" className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-1">
                    <span>AI Voice Interviews</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link href="/recall" className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-1">
                    <span>Recall Intelligence</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                  <Link href="/pricing" className="flex items-center justify-between text-slate-600 hover:text-slate-900 py-1">
                    <span>Pricing & Plans</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Center Content Body - Raw Text, Simple Images & Hyperlinks */}
            <div className="max-w-none text-slate-800 leading-relaxed text-base">
              
              {/* Cover Image at top of content */}
              <div className="mb-8 overflow-hidden rounded-2xl bg-slate-100 h-[340px] sm:h-[420px] w-full">
                <img
                  src={article.coverImage}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {article.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("# ")) {
                  return null; // Skip title heading
                }

                if (paragraph.startsWith("## ")) {
                  const title = paragraph.replace("## ", "").trim();
                  const id = title
                    .toLowerCase()
                    .replace(/[^a-z0-9\s-]/g, "")
                    .replace(/\s+/g, "-");

                  return (
                    <h2
                      key={idx}
                      id={id}
                      className="text-2xl font-bold text-slate-900 pt-8 mt-6 border-t border-slate-100 scroll-mt-32"
                    >
                      {title}
                    </h2>
                  );
                }

                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="text-lg font-bold text-slate-900 pt-4 mt-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }

                if (paragraph.startsWith("---")) {
                  return <hr key={idx} className="my-8 border-slate-100" />;
                }

                // Render Markdown Images directly
                if (paragraph.startsWith("![")) {
                  const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                  if (match) {
                    const altText = match[1];
                    const src = match[2];
                    return (
                      <div key={idx} className="my-8 overflow-hidden rounded-2xl bg-slate-100 h-[320px] sm:h-[380px] w-full">
                        <img
                          src={src}
                          alt={altText}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    );
                  }
                }

                if (paragraph.startsWith("* ")) {
                  const items = paragraph.split("\n* ").map((it) => it.replace("* ", ""));
                  return (
                    <ul key={idx} className="space-y-2 my-4 pl-5 list-disc text-sm text-slate-700">
                      {items.map((it, itemIdx) => (
                        <li key={itemIdx}>{it}</li>
                      ))}
                    </ul>
                  );
                }

                // Render paragraphs with markdown links parsed cleanly
                return (
                  <p key={idx} className="mt-4 text-base leading-relaxed text-slate-700">
                    {parseMarkdownLinks(paragraph)}
                  </p>
                );
              })}

              <div className="mt-12 border-t border-slate-200 pt-6 flex items-center justify-between">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-950">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Blog Articles</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Helper to convert markdown links [text](url) into clean React standard <Link> components
function parseMarkdownLinks(text: string) {
  const parts = [];
  const regex = /\[(.*?)\]\((.*?)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    const linkText = match[1];
    const linkUrl = match[2];
    parts.push(
      <Link
        key={match.index}
        href={linkUrl}
        className="font-semibold text-sky-600 hover:text-sky-800 underline decoration-sky-300 underline-offset-2"
      >
        {linkText}
      </Link>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}
