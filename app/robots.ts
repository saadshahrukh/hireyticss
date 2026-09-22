import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/checkout",
          "/onboarding",
          "/free-trial",
          "/dashboard",
          "/settings",
          "/account",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
