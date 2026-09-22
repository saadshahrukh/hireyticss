import type { Metadata } from "next";

export const SITE_URL = "https://hireytics.com";
export const SITE_NAME = "Hireytics";
export const DEFAULT_TITLE = "AI Recruiting Software & Applicant Tracking System | Hireytics";
export const DEFAULT_DESCRIPTION =
  "Hireytics is hiring software for modern companies to streamline recruitment, automated candidate screening, voice interview evaluation, and hiring context using Recall.";

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

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
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
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
      creator: "@hireytics",
      site: "@hireytics",
    },
  };
}
