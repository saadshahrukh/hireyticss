import type { Metadata } from "next";
import "./globals.css";
import "@/components/hero.css";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { generateOrganizationSchema, generateWebSiteSchema, generateBrandSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Hireytics Inc.", url: SITE_URL }],
  publisher: "Hireytics Inc.",
  keywords: [
    "Hireytics",
    "Hireytics.com",
    "Hireytics AI",
    "Hireytics Platform",
    "Hireytics Recruiting",
    "Hireytics vs Hirelytics",
    "AI recruiting software",
    "applicant tracking system",
    "candidate screening software",
    "voice interview automation",
    "Recall AI",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico?v=20261011_3", sizes: "any" },
      { url: "/favicon-32x32.png?v=20261011_3", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=20261011_3", type: "image/png", sizes: "16x16" },
      { url: "/logo-icon.png?v=20261011_3", type: "image/png" },
    ],
    shortcut: ["/favicon.ico?v=20261011_3"],
    apple: [
      { url: "/apple-touch-icon.png?v=20261011_3", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo-grad.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    site: "@hireytics",
    creator: "@hireytics",
    images: [`${SITE_URL}/logo-grad.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.ico?v=20261011_3" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=20261011_3" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=20261011_3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=20261011_3" />
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateBrandSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-black">
        {children}
      </body>
    </html>
  );
}

