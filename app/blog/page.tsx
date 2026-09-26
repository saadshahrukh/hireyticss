import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getFeaturedArticle } from "@/lib/blog-data";
import { buildMetadata } from "@/lib/seo";
import { MdArrowOutward } from "react-icons/md";
import { Clock } from "lucide-react";

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
  const featuredArticle = getFeaturedArticle();
  const remainingArticles = articles.filter((art) => art.slug !== featuredArticle.slug);

  return (
    <>
      <JsonLd data={blogSchema} />
      <Navbar solid />
      <main className="min-h-screen bg-white pt-28 pb-24">
        <div className="section-container max-w-6xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

          {/* Section Header */}
          <div className="mt-4 mb-8">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Recent Post
            </h1>
          </div>

          {/* Featured Post (Matches top section of attached UI image) */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Featured Image Left */}
            <div className="lg:col-span-6">
              <Link href={`/blog/${featuredArticle.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-3xl bg-slate-100 h-[280px] sm:h-[360px] w-full shadow-xs">
                  <img
                    src={featuredArticle.coverImage}
                    alt={featuredArticle.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* Featured Content Right */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2.5 text-xs">
                <span className="rounded-md bg-rose-100/80 px-2.5 py-1 font-semibold text-rose-700">
                  {featuredArticle.category}
                </span>
                <span className="rounded-md bg-indigo-100/80 px-2.5 py-1 font-semibold text-indigo-700">
                  Inspiration
                </span>
                <span className="text-slate-400 font-medium ml-2">
                  {featuredArticle.publishedDate}
                </span>
              </div>

              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 leading-[1.2] hover:text-sky-600 transition-colors">
                <Link href={`/blog/${featuredArticle.slug}`}>{featuredArticle.title}</Link>
              </h2>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-6">
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  <span className="underline decoration-slate-300 underline-offset-4 group-hover:decoration-sky-600">
                    Read Article
                  </span>
                  <MdArrowOutward className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of Remaining Posts (Matches 3-column cards in attached UI image) */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {remainingArticles.map((art) => (
              <article
                key={art.slug}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/60 bg-slate-50/40 p-4 shadow-2xs transition hover:border-slate-300 hover:bg-slate-50/90"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <Link href={`/blog/${art.slug}`} className="block group">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-slate-200">
                      <img
                        src={art.coverImage}
                        alt={art.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  {/* Badges & Date */}
                  <div className="mt-4 flex items-center gap-2 text-xs">
                    <span className="rounded-md bg-rose-100/80 px-2 py-0.5 font-semibold text-rose-700 text-[11px]">
                      {art.category}
                    </span>
                    <span className="rounded-md bg-indigo-100/80 px-2 py-0.5 font-semibold text-indigo-700 text-[11px]">
                      Inspiration
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium ml-auto">
                      {art.publishedDate}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="mt-3 font-heading text-lg font-bold tracking-tight text-slate-900 leading-snug line-clamp-2 hover:text-sky-600 transition-colors">
                    <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>

                {/* Author Footer (Matches bottom row of cards in attached image) */}
                <div className="mt-6 border-t border-slate-200/60 pt-3 flex items-center gap-3">
                  <img
                    src={art.author.avatar}
                    alt={art.author.name}
                    className="h-8 w-8 rounded-full object-cover shrink-0 border border-slate-200"
                  />
                  <div>
                    <span className="block text-xs font-bold text-slate-900">{art.author.name}</span>
                    <span className="block text-[10.5px] text-slate-400">
                      Updated on: {art.updatedDate || art.publishedDate}
                    </span>
                  </div>
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
