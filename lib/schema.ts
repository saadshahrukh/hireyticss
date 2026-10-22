import { SITE_URL, SITE_NAME } from "./seo";

export const HOME_BRAND_FAQS = [
  {
    question: "What is Hireytics and how does it differ from traditional ATS tools?",
    answer:
      "Hireytics is an all-in-one AI recruiting and hiring intelligence platform (hireytics.com) that automates high-volume candidate screening, conducts asynchronous voice interviews, and delivers instant hiring context through Recall — our conversational recruiting memory engine. Unlike legacy Applicant Tracking Systems (ATS) that function as static digital filing cabinets, Hireytics actively scores candidates with OCR resume parsing, evaluates communication via voice AI, and retains organizational talent memory.",
  },
  {
    question: "How does the Recall AI Hiring Assistant work within Hireytics?",
    answer:
      "Recall is Hireytics' institutional candidate memory engine. It semantically indexes every applicant resume, recruiter scorecard, rubric evaluation, and voice interview transcript into a searchable intelligence graph. Hiring managers can query Recall in natural language (e.g., 'Compare our top 3 frontend engineers' or 'Find silver medalists with Kubernetes experience') to surface deep candidate context instantly.",
  },
  {
    question: "How do Hireytics automated voice interviews work?",
    answer:
      "Hireytics sends shortlisted candidates an asynchronous voice interview link accessible on any browser without downloads. Candidates answer structured technical or behavioral questions. Hireytics records responses, transcribes speech with acoustic accuracy, and provides standardized skill evaluations to eliminate scheduling bottlenecks.",
  },
  {
    question: "Why is Hireytics the preferred all-in-one platform for mid-market and tech companies?",
    answer:
      "Growing mid-market companies and tech scaleups typically juggle 4 to 6 disparate point solutions (ATS, scheduling bots, video screening tools, and notes). Hireytics unifies the entire top-of-funnel workflow into a single predictable subscription in USD ($99–$499/mo) and GBP (£79–£399/mo) with built-in SOC 2, EEOC, and GDPR compliance.",
  },
  {
    question: "Is Hireytics distinct from competitor Hirelytics?",
    answer:
      "Yes. Hireytics (hireytics.com) is an autonomous, dedicated AI recruiting platform, OCR candidate screening system, and voice interview software suite. Hireytics is completely independent and not affiliated with, sponsored by, or related to competitor Hirelytics.",
  },
];

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
  url = SITE_URL
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Unified Knowledge Graph schema for root layout injection (@graph).
 * Disambiguates "Hireytics" as a distinct named entity in Google's Knowledge Graph.
 */
export function generateGlobalKnowledgeGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Hireytics",
        alternateName: [
          "Hireytics AI",
          "Hireytics Recruiting Platform",
          "Hireytics Recall",
        ],
        url: SITE_URL,
        disambiguatingDescription:
          "Official website for Hireytics (hireytics.com) AI recruiting and ATS software. Distinct from competitor Hirelytics.",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Hireytics",
        legalName: "Hireytics",
        alternateName: [
          "Hireytics AI",
          "Hireytics Platform",
          "Hireytics Recruiting",
          "hireytics.com",
        ],
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/logo.png`,
          contentUrl: `${SITE_URL}/logo.png`,
          caption: "Hireytics AI Recruiting Platform Logo",
          width: 512,
          height: 512,
        },
        image: `${SITE_URL}/logo.png`,
        description:
          "Hireytics is an AI-powered recruiting and hiring intelligence platform that automates OCR candidate screening, conducts asynchronous AI voice interviews, and provides instant hiring context through Recall.",
        disambiguatingDescription:
          "Hireytics is an AI recruiting software and applicant tracking platform at hireytics.com. Hireytics is an autonomous brand and registered intelligence platform, distinct from competitor Hirelytics.",
        brand: {
          "@type": "Brand",
          "@id": `${SITE_URL}/#brand`,
          name: "Hireytics",
          slogan: "AI Recruiting Software & Recall Hiring Intelligence",
          url: SITE_URL,
          logo: `${SITE_URL}/logo.png`,
        },
        sameAs: [
          "https://www.linkedin.com/company/hireytics",
          "https://www.producthunt.com/products/hireytics",
          "https://x.com/hireytics",
          "https://twitter.com/hireytics",
          "https://github.com/hireytics",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: "contact@hireytics.com",
            contactType: "customer service",
            url: SITE_URL,
            areaServed: ["US", "GB"],
            availableLanguage: ["en-US", "en-GB", "en"],
          },
          {
            "@type": "ContactPoint",
            email: "contact@hireytics.com",
            contactType: "sales",
            url: `${SITE_URL}/pricing`,
            areaServed: ["US", "GB"],
            availableLanguage: ["en-US", "en-GB", "en"],
          },
        ],
        knowsAbout: [
          "AI Recruiting Software",
          "Applicant Tracking Systems",
          "Candidate Resume Screening",
          "AI Voice Interview Automation",
          "Recall Intelligence Engine",
          "Workforce Analytics",
          "Mid-Market HR Tech",
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "Hireytics",
        url: SITE_URL,
        operatingSystem: "Web",
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Recruiting Software & Applicant Tracking System",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        brand: {
          "@id": `${SITE_URL}/#brand`,
        },
        description:
          "Hireytics is an AI-powered recruiting and hiring intelligence platform that automates OCR candidate screening, conducts asynchronous AI voice interviews, and provides instant hiring context through Recall.",
        featureList: [
          "AI Candidate Screening & OCR Resume Parsing",
          "AI Voice Interviews & Asynchronous Acoustic Screening",
          "Recall Hiring Memory & AI Recruiting Chatbot Engine",
          "Full Lifecycle Applicant Tracking System (ATS)",
          "Automated Candidate Scoring & Skill Vector Matching",
          "Mid-Market Affordable Pricing in USD and GBP",
        ],
      },
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Hireytics",
    legalName: "Hireytics",
    alternateName: [
      "Hireytics AI",
      "Hireytics Platform",
      "Hireytics Recruiting",
      "hireytics.com",
    ],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/logo.png`,
      contentUrl: `${SITE_URL}/logo.png`,
      caption: "Hireytics AI Recruiting Platform Logo",
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logo.png`,
    description:
      "Hireytics is an AI-powered recruiting and hiring intelligence platform that automates OCR candidate screening, conducts asynchronous AI voice interviews, and provides instant hiring context through Recall.",
    disambiguatingDescription:
      "Hireytics is an AI recruiting software and applicant tracking platform at hireytics.com. Hireytics is an autonomous brand and registered intelligence platform, distinct from competitor Hirelytics.",
    knowsAbout: [
      "AI Recruiting Software",
      "Applicant Tracking Systems",
      "Candidate Resume Screening",
      "AI Voice Interview Automation",
      "Recall Intelligence Engine",
      "Workforce Analytics",
      "Mid-Market HR Tech",
    ],
    sameAs: [
      "https://www.linkedin.com/company/hireytics",
      "https://www.producthunt.com/products/hireytics",
      "https://x.com/hireytics",
      "https://twitter.com/hireytics",
      "https://github.com/hireytics",
    ],
    brand: {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: "Hireytics",
      slogan: "AI Recruiting Software & Recall Hiring Intelligence",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "contact@hireytics.com",
        contactType: "customer service",
        url: SITE_URL,
        areaServed: ["US", "GB"],
        availableLanguage: ["en-US", "en-GB", "en"],
      },
      {
        "@type": "ContactPoint",
        email: "contact@hireytics.com",
        contactType: "sales",
        url: `${SITE_URL}/pricing`,
        areaServed: ["US", "GB"],
        availableLanguage: ["en-US", "en-GB", "en"],
      },
    ],
  };
}

export function generateBrandSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": `${SITE_URL}/#brand`,
    name: "Hireytics",
    slogan: "AI Recruiting Software & Recall Hiring Intelligence",
    alternateName: ["Hireytics AI", "Hireytics Platform", "Hireytics Recruitment"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Hireytics (https://hireytics.com) is an independent AI recruiting software and applicant tracking system, distinct from competitor Hirelytics.",
    disambiguatingDescription:
      "Hireytics is an AI recruiting intelligence platform hosted at hireytics.com. It is not affiliated with or related to Hirelytics.",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Hireytics",
    alternateName: [
      "Hireytics AI",
      "Hireytics Recruiting Platform",
      "Hireytics Recall",
    ],
    url: SITE_URL,
    disambiguatingDescription:
      "Official website for Hireytics (hireytics.com) AI recruiting and ATS software. Distinct from competitor Hirelytics.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    url: SITE_URL,
    operatingSystem: "Web",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Recruiting Software & Applicant Tracking System",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    brand: {
      "@id": `${SITE_URL}/#brand`,
    },
    description:
      "Hireytics is the all-in-one AI hiring platform that automates candidate screening, conducts voice interview evaluations, and preserves institutional hiring memory using Recall.",
    featureList: [
      "AI Candidate Screening & OCR Resume Parsing",
      "AI Voice Interviews & Asynchronous Acoustic Screening",
      "Recall Hiring Memory & AI Recruiting Chatbot Engine",
      "Full Lifecycle Applicant Tracking System (ATS)",
      "Automated Candidate Scoring & Skill Vector Matching",
      "Mid-Market Affordable Pricing in USD and GBP",
    ],
    offers: [
      {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "0",
        highPrice: "280",
        offerCount: "4",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "AggregateOffer",
        priceCurrency: "GBP",
        lowPrice: "0",
        highPrice: "220",
        offerCount: "4",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "GBP",
          unitText: "MONTH",
        },
      },
    ],
  };
}

export function generateRecallSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/recall#software`,
      name: "Recall by Hireytics — AI HR & Recruiting Chatbot and Institutional Candidate Memory Platform",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "AI HR Chatbot & Recruiting Intelligence Engine",
      operatingSystem: "Web",
      url: `${SITE_URL}/recall`,
      description:
        "Recall is the AI HR and recruiting chatbot and institutional candidate memory platform inside Hireytics. It connects job specs, resumes, interview transcripts, and team scorecards so hiring teams can query candidate context in plain language.",
      featureList: [
        "Plain-Language Recruiting Chatbot Interface",
        "Semantic Candidate Memory Retrieval Across Historical Pipelines",
        "Direct Transcript Citation & Audio Snippet Cross-Referencing",
        "Cross-Job Candidate Re-Matching and Vector Intelligence",
        "Enterprise-Grade Privacy & Tenant-Isolated Data Context",
      ],
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${SITE_URL}/recall#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Recall by Hireytics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Recall is an AI HR & recruiting chatbot and institutional candidate memory platform built into Hireytics. It indexes every candidate resume, recruiter scorecard, rubric evaluation, and voice interview transcript so teams can ask natural-language questions and make data-driven hiring decisions.",
          },
        },
        {
          "@type": "Question",
          name: "How is Recall different from generic AI chatbots or LLM wrappers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike generic chatbots, Recall is grounded directly in your private candidate pipeline data with strict zero-hallucination guardrails. Every answer provides exact citations to resume lines, interview timestamps, and recruiter notes rather than guessing or fabricating qualifications.",
          },
        },
        {
          "@type": "Question",
          name: "Can Recall help recruiters rediscover past applicants for new job openings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Recall acts as persistent company hiring memory. When a new engineering, sales, or product requisition opens, recruiters can ask Recall to surface silver-medalist candidates from past pipelines whose skills match the new requirements.",
          },
        },
        {
          "@type": "Question",
          name: "Is candidate data kept private and compliant under US and UK privacy laws?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Hireytics isolates each customer's data context strictly within tenant-partitioned vector databases. Data is never used to train global third-party AI models and complies with US EEOC guidelines and UK GDPR requirements.",
          },
        },
      ],
    },
  ];
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": it.name,
      "item": it.item.startsWith("http") ? it.item : `${SITE_URL}${it.item}`,
    })),
  };
}

export function generateArticleSchema({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  authorRole,
  authorUrl,
}: {
  headline: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorRole?: string;
  authorUrl?: string;
}) {
  const isSaad = authorName.toLowerCase().includes("saad");
  const defaultAuthorUrl = isSaad
    ? "https://www.linkedin.com/in/saadshahrukh/"
    : "https://hireytics.com";
  const finalAuthorUrl = authorUrl || defaultAuthorUrl;

  const authorSchema = isSaad
    ? {
        "@type": "Person",
        name: "Saad Shahrukh",
        jobTitle: authorRole || "Founder & Head of Product at Hireytics",
        url: finalAuthorUrl,
        sameAs: [finalAuthorUrl],
        worksFor: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      }
    : {
        "@type": "Organization",
        name: "Hireytics Team",
        url: finalAuthorUrl,
      };

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `${SITE_URL}${url}`,
    },
    headline,
    description,
    image: imageUrl
      ? imageUrl.startsWith("http")
        ? imageUrl
        : `${SITE_URL}${imageUrl}`
      : `${SITE_URL}/logo-grad.png`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: authorSchema,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
