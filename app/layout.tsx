import type { Metadata } from "next";
import "./globals.css";
import "@/components/hero.css";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: {
    icon: [{ url: "/logo-icon.png" }],
    apple: [{ url: "/logo-icon.png" }],
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
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateWebSiteSchema()} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-black">
        {children}
      </body>
    </html>
  );
}

