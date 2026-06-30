import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hireytics — Intelligent Workforce Platform",
  description:
    "All-in-one HRM + Recruitment CRM with AI-augmented hiring, automated onboarding, and workforce analytics. Reduce time-to-hire by 30% and gain actionable insights.",
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
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
