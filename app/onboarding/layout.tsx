import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Onboarding | Hireytics",
  description: "Set up your Hireytics workspace and configure hiring workflow preferences.",
  path: "/onboarding",
  noIndex: true,
});

export default function OnboardingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
