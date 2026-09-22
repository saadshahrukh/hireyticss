import { SITE_URL, SITE_NAME } from "./seo";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-icon.png`,
    "sameAs": [
      "https://www.linkedin.com/company/hireytics",
      "https://x.com/hireytics",
      "https://facebook.com/hireytics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@hireytics.com",
      "contactType": "customer support"
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": SITE_NAME,
    "operatingSystem": "All modern web browsers (Cloud-based SaaS)",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "280",
      "offerCount": "4"
    },
    "description": "Hireytics is hiring software for companies to manage recruiting, candidate screening, interviews, assessments, onboarding, and workforce analytics with Recall intelligence."
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": it.name,
      "item": it.item.startsWith("http") ? it.item : `${SITE_URL}${it.item}`
    }))
  };
}

export function generateArticleSchema({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName
}: {
  headline: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_URL}${url}`
    },
    "headline": headline,
    "description": description,
    "image": imageUrl ? (imageUrl.startsWith("http") ? imageUrl : `${SITE_URL}${imageUrl}`) : `${SITE_URL}/logo-grad.png`,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo-icon.png`
      }
    }
  };
}
