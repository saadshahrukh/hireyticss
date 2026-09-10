"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, ChevronRight, LayoutDashboard, Brain, HelpCircle, Shield, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { ButtonLink } from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
  { label: "Why Hireytics", href: "/#value" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Recall", href: "/recall", badge: "v1.0" },
  { label: "Pricing", href: "/pricing" },
  { label: "Demo", href: "/#demo" },
  { label: "Stories", href: "/#testimonials" },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const isSolid = solid || scrolled;

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? "bg-white/85 backdrop-blur-xl shadow-xs border-b border-slate-100/80"
            : "bg-transparent"
        }`}
      >
        <nav className="section-container flex max-w-6xl items-center justify-between py-4 md:py-5">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center shadow-slate-300/20 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo-icon.png" alt="Hireytics Logo" width={32} height={32} className="object-contain" />
            </div>
            <span>
              <Image src="/logo-grad.png" alt="Hireytics Logo" width={150} height={52} className="hidden h-7 w-auto md:block object-contain" />
            </span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full"
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="rounded-full bg-sky-100 px-1.5 py-0.2 text-[10px] font-bold text-sky-700">
                      {link.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://apphireytics.vercel.app/auth"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
            >
              <span className="underline">Login</span>
              <MdArrowOutward className="text-base transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/free-trial"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-2xs transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              Free Trial
            </a>

            <a
              href="/onboarding"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition-all hover:brightness-110"
            >
              <span>Try Now</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
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
              className="fixed inset-y-0 right-0 z-50 flex w-[310px] max-w-[85vw] flex-col justify-between bg-white p-6 shadow-2xl"
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

                {/* Navigation Link List */}
                <div className="mt-6 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileDrawerOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                    >
                      <div className="flex items-center gap-2">
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="rounded-md bg-sky-100 px-1.5 py-0.5 text-[10px] font-bold text-sky-800">
                            {link.badge}
                          </span>
                        )}
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Drawer Bottom Actions & Footer */}
              <div className="border-t border-slate-100 pt-4 space-y-2.5">
                <a
                  href="/onboarding"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 hover:brightness-110"
                >
                  <span>Try Now — Start Onboarding</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/free-trial"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-800 shadow-2xs hover:bg-slate-50"
                >
                  <span>Start 14-Day Free Trial</span>
                </a>

                <a
                  href="https://apphireytics.vercel.app/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileDrawerOpen(false)}
                  className="flex w-full items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:text-slate-950"
                >
                  <span className="underline">Candidate & Team Login</span>
                  <MdArrowOutward className="text-sm" />
                </a>

                <div className="flex items-center justify-between pt-1 text-[10.5px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    AI Engine v5.0 Live
                  </span>
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
