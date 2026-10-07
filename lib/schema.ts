import { SITE_URL, SITE_NAME } from "./seo";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    "name": SITE_NAME,
    "legalName": "Hireytics Inc.",
    "alternateName": ["Hireytics", "Hireytics AI", "Hireytics Platform"],
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/logo-icon.png`,
      "width": 512,
      "height": 512
    },
    "image": `${SITE_URL}/logo-grad.png`,
    "description": "Hireytics (https://hireytics.com) is an AI recruiting software platform featuring automated candidate screening, voice interview evaluations, and Recall pipeline intelligence.",
    "disambiguatingDescription": "Hireytics is an AI recruiting software and applicant tracking software platform at hireytics.com. It is distinct from Hirelytics.",
    "knowsAbout": [
      "AI Recruiting Software",
      "Applicant Tracking Systems",
      "Candidate Resume Screening",
      "AI Voice Interview Automation",
      "Recall Intelligence Engine",
      "Workforce Analytics"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/hireytics",
      "https://x.com/hireytics",
      "https://facebook.com/hireytics"
    ],
    "brand": {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo-icon.png`
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "contact@hireytics.com",
      "contactType": "customer service",
      "url": SITE_URL
    }
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": SITE_NAME,
    "alternateName": ["Hireytics AI", "Hireytics SaaS"],
    "url": SITE_URL,
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    },
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
    "@id": `${SITE_URL}/#software`,
    "name": SITE_NAME,
    "url": SITE_URL,
    "operatingSystem": "All modern web browsers (Cloud-based SaaS)",
    "applicationCategory": "BusinessApplication",
    "publisher": {
      "@id": `${SITE_URL}/#organization`
    },
    "brand": {
      "@id": `${SITE_URL}/#brand`
    },
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
      "@id": `${SITE_URL}/#organization`
    }
  };
}
