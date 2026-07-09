import type { Metadata } from "next";
import "./globals.css";
import "@/components/hero.css";

export const metadata: Metadata = {
  title: "Hireytics — Intelligent Workforce Platform",
  description:
    "All-in-one HRM + Recruitment CRM with AI-augmented hiring, automated onboarding, and workforce analytics. Reduce time-to-hire by 30% and gain actionable insights.",
     icons: {
    icon: [
      { url: "/logo-icon.png" },
    ],
  },
  keywords: [
    "HRM",
    "Recruitment CRM",
    "AI hiring",
    "workforce analytics",
    "HR software",
    "Hireytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--background)] text-black">
        {children}
      </body>
    </html>
  );
}
