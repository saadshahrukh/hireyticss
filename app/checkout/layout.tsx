import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Checkout & Subscription | Hireytics",
  description: "Complete your Hireytics subscription checkout securely.",
  path: "/checkout",
  noIndex: true,
});

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
