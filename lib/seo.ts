import type { Metadata } from "next";

export const SITE_URL = "https://hireytics.com";
export const SITE_NAME = "Hireytics";
export const DEFAULT_TITLE =
  "Hireytics — All-in-One AI Recruiting Platform & Recall Memory Engine";
export const DEFAULT_DESCRIPTION =
  "Hireytics is the all-in-one AI recruiting platform featuring OCR candidate screening, automated voice interviews, and Recall — institutional hiring memory and recruiting AI chatbot engine.";

/**
 * Strips redundant brand name suffixes to ensure child routes
 * never output duplicate titles like "| Hireytics | Hireytics".
 */
export function sanitizeTitle(rawTitle: string): string {
  return rawTitle
    .replace(/\s*\|\s*Hireytics\s*Blog$/i, "")
    .replace(/\s*\|\s*Hireytics$/i, "")
    .trim();
}

export function buildMetadata({
  title,
  description,
  path = "",
  noIndex = false,
  ogType = "website",
  ogImage = "/logo-grad.png",
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
  ogType?: "website" | "article";
  ogImage?: string;
}): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const cleanedTitle = sanitizeTitle(title);
  const isHomePage = path === "" || path === "/";

  // For the homepage, use absolute title to preserve exact branding without duplication
  const resolvedTitle = isHomePage
    ? { absolute: DEFAULT_TITLE }
    : cleanedTitle;

  const fullOgTitle = isHomePage
    ? DEFAULT_TITLE
    : `${cleanedTitle} | ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: resolvedTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "en-GB": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      title: fullOgTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      alternateLocale: ["en_GB"],
      type: ogType,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: cleanedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullOgTitle,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
      creator: "@hireytics",
      site: "@hireytics",
    },
  };
}
