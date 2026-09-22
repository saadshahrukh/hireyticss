import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "14-Day Free Trial | Hireytics",
  description: "Start a 14-day free trial of Hireytics recruitment platform and Recall intelligence engine.",
  path: "/free-trial",
  noIndex: true,
});

export default function FreeTrialLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
