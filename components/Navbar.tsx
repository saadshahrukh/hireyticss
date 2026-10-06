"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  ChevronRight, 
  ChevronDown,
  Brain, 
  Mic, 
  Layers, 
  FileSearch, 
  Bot, 
  Zap,
  Users,
  CheckCircle2,
  Building2,
  BarChart3
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

interface FeatureItem {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  badge?: string;
}

const featuresList: FeatureItem[] = [
  {
    title: "Recall AI Intelligence",
    href: "/recall",
    description: "Hiring software that remembers context across your entire candidate lifecycle.",
    icon: <Brain className="h-6 w-6 text-emerald-600" />,
    iconColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
    badge: "Core AI",
  },
  {
    title: "AI Recruiting Suite",
    href: "/features/ai-recruiting",
    description: "Autonomous candidate sourcing, qualification checks, and vector matching.",
    icon: <Sparkles className="h-6 w-6 text-rose-500" />,
    iconColor: "bg-rose-50 text-rose-500 border-rose-100",
    badge: "Popular",
  },
  {
    title: "Candidate Screening",
    href: "/features/candidate-screening",
    description: "OCR resume parsing, skill vector matching, and automated candidate ranking.",
    icon: <FileSearch className="h-6 w-6 text-amber-500" />,
    iconColor: "bg-amber-50 text-amber-500 border-amber-100",
  },
  {
    title: "Applicant Tracking (ATS)",
    href: "/features/applicant-tracking",
    description: "Modern candidate pipeline management, scorecards, and velocity tracking.",
    icon: <Layers className="h-6 w-6 text-sky-600" />,
    iconColor: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    title: "AI Voice Interviews",
    href: "/features/automated-interviews",
    description: "Asynchronous voice screening with real-time transcription and rubric scoring.",
    icon: <Mic className="h-6 w-6 text-purple-600" />,
    iconColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Talent Analytics & ROI",
    href: "/features",
    description: "Monitor, analyze, and track hiring velocity, conversion rates, and team throughput.",
    icon: <BarChart3 className="h-6 w-6 text-teal-600" />,
    iconColor: "bg-teal-50 text-teal-600 border-teal-100",
  },
];

const generalNavLinks = [
  { label: "Features", href: "/features", isMega: true },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileFeaturesExpanded, setMobileFeaturesExpanded] = useState(true);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isSolid = solid || scrolled || featuresOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileDrawerOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setFeaturesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setFeaturesOpen(false);
    }, 180);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? "bg-white/95 backdrop-blur-xl shadow-xs border-b border-slate-200/80"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex max-w-6xl items-center justify-between py-3.5 md:py-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="flex h-9 w-9 items-center justify-center shadow-slate-300/20 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo-icon.png" alt="Hireytics Logo" width={32} height={32} className="object-contain" />
            </div>
            <span>
              <Image src="/logo-grad.png" alt="Hireytics Logo" width={150} height={52} className="hidden h-7 w-auto md:block object-contain" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-6 lg:gap-8 md:flex">
            
            {/* Features Mega Menu Trigger */}
            <li 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/features"
                onClick={() => setFeaturesOpen(false)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors py-2 cursor-pointer ${
                  featuresOpen ? "text-slate-950 font-semibold" : "text-slate-600 hover:text-slate-950"
                }`}
                aria-expanded={featuresOpen}
              >
                <span>Features</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    featuresOpen ? "rotate-180 text-slate-950" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Mega Menu Dropdown Container - Replicating Image Style with 2-Column Matrix */}
              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-full -translate-x-[36%] pt-2.5 w-[660px] z-50 pointer-events-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] backdrop-blur-2xl">
                      {/* 2-Column Grid with Bigger Icons */}
                      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                        {featuresList.map((item) => (
                          <Link
                            key={item.href + item.title}
                            href={item.href}
                            onClick={() => setFeaturesOpen(false)}
                            className="group flex items-start gap-3.5 rounded-xl p-2 -m-2 transition-all duration-150 hover:bg-slate-50/80"
                          >
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${item.iconColor} transition-transform duration-200 group-hover:scale-110 shadow-2xs`}>
                              {item.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-1.5">
                                <span className="text-[13.5px] font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                  {item.title}
                                </span>
                                {item.badge && (
                                  <span className="rounded-md bg-indigo-50 border border-indigo-100/80 px-1.5 py-0.2 text-[9px] font-bold text-indigo-700">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11.5px] text-slate-500 leading-snug mt-0.5">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Mega Menu Footer Quick Action Bar */}
                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 text-slate-500">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="font-medium">Recall v1.0 Intelligence Live</span>
                        </div>
                        <Link
                          href="/features"
                          onClick={() => setFeaturesOpen(false)}
                          className="font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/link"
                        >
                          <span>Explore all features & tour</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Other Static Links */}
            {generalNavLinks.filter(l => !l.isMega).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full"
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={process.env.PORTAL_URL || "https://app.hireytics.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
            >
              <span className="underline">Login</span>
              <MdArrowOutward className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <Link
              href="/free-trial"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Free Trial
            </Link>

            <Link
              href="/onboarding"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:brightness-110"
            >
              <span>Try Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-2xs backdrop-blur-xs transition hover:bg-slate-100 md:hidden"
            onClick={() => setMobileDrawerOpen(true)}
            aria-label="Open mobile navigation drawer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/* =========================================================================
         Mobile Slide-Out Drawer Navigation
         ========================================================================= */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setMobileDrawerOpen(false)}
            />

            {/* Slide-in Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 z-50 flex w-[330px] max-w-[88vw] flex-col justify-between bg-white p-6 shadow-2xl overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Image src="/logo-icon.png" alt="Hireytics" width={26} height={26} className="object-contain" />
                    <span className="font-heading text-base font-bold text-slate-900">
                      Hire<span className="gradient-text">ytics</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileDrawerOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100"
                    aria-label="Close drawer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Mobile Navigation List */}
                <div className="mt-4 space-y-1">
                  
                  {/* Features Accordion */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-2">
                    <button
                      type="button"
                      onClick={() => setMobileFeaturesExpanded(!mobileFeaturesExpanded)}
                      className="flex w-full items-center justify-between px-2 py-2 text-sm font-bold text-slate-900"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-indigo-600" /> Features
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition-transform ${
                          mobileFeaturesExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileFeaturesExpanded && (
                      <div className="mt-2 space-y-1.5 border-t border-slate-200/60 pt-2">
                        {featuresList.map((item) => (
                          <Link
                            key={item.href + item.title}
                            href={item.href}
                            onClick={() => setMobileDrawerOpen(false)}
                            className="flex items-start gap-3 rounded-xl p-2 text-xs font-semibold text-slate-800 transition hover:bg-white hover:text-indigo-600 shadow-2xs"
                          >
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${item.iconColor}`}>
                              {item.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-900">{item.title}</span>
                                {item.badge && (
                                  <span className="rounded bg-indigo-100 px-1.5 py-0.2 text-[9px] font-bold text-indigo-800">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10.5px] font-normal text-slate-500 leading-tight mt-0.5 line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Other Links */}
                  {generalNavLinks.filter(l => !l.isMega).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions & Footer */}
              <div className="border-t border-slate-100 pt-4 space-y-2.5 mt-6">
                <Link
                  href="/onboarding"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:brightness-110"
                >
                  <span>Try Now — Start Onboarding</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/free-trial"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-800 shadow-2xs hover:bg-slate-50"
                >
                  <span>Start 14-Day Free Trial</span>
                </Link>

                <a
                  href={process.env.PORTAL_URL || "https://app.hireytics.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex w-full items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-950"
                >
                  <span className="underline">Candidate & Team Login</span>
                  <MdArrowOutward className="text-sm" />
                </a>

                <div className="flex items-center justify-between pt-1 text-[10.5px] text-slate-400">
                  <span>© Hireytics 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

