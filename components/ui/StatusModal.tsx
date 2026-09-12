"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Mail } from "lucide-react";

interface StatusModalProps {
  isOpen: boolean;
  status: "success" | "error";
  title?: string;
  message?: string;
  onRetry?: () => void;
  onClose?: () => void;
  actionText?: string;
  actionHref?: string;
}

export default function StatusModal({
  isOpen,
  status,
  title,
  message,
  onRetry,
  onClose,
  actionText,
  actionHref,
}: StatusModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-2xl transition-all">
        
        {status === "error" ? (
          /* Error Card (Matching Attached Left Screenshot) */
          <div>
            {/* Red Warning Triangle Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
                <AlertTriangle className="h-10 w-10 text-rose-500 fill-rose-500/20" />
              </div>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              {title || "Error!"}
            </h3>

            <p className="mt-2.5 text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
              {message || "An error occurred while processing. Please retry."}
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={onRetry || onClose}
                className="w-full rounded-xl bg-rose-600 py-3 text-xs font-bold text-white shadow-md shadow-rose-500/20 transition-all hover:bg-rose-700 active:scale-[0.98] cursor-pointer"
              >
                {actionText || "Retry"}
              </button>
            </div>
          </div>
        ) : (
          /* Success Card (Matching Attached Right Screenshot) */
          <div className="relative">
            {/* Celebration Confetti & Green Checkmark Badge Illustration */}
            <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
              {/* Confetti Elements */}
              <span className="absolute -top-1 left-2 h-2 w-2 rounded-full bg-amber-400 animate-bounce" />
              <span className="absolute top-1 right-3 h-2.5 w-1.5 rotate-45 bg-rose-400" />
              <span className="absolute bottom-2 left-1 h-2 w-2 rotate-12 bg-sky-400" />
              <span className="absolute bottom-1 right-2 h-2.5 w-2 -rotate-12 bg-indigo-500" />
              <span className="absolute top-4 left-0 h-1.5 w-3 rotate-45 bg-purple-400" />
              <span className="absolute top-3 right-0 h-2 w-2 rounded-full bg-emerald-400" />

              {/* Central Green Badge Icon */}
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
                <svg
                  className="h-9 w-9 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-slate-900">
              {title || "Success!"}
            </h3>

            <p className="mt-2.5 text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              {message || "We've received your request! We'll email your workspace credentials to your email."}
            </p>

            <div className="mt-6">
              {actionHref ? (
                <Link
                  href={actionHref}
                  className="w-full inline-flex items-center justify-center rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-700 active:scale-[0.98]"
                >
                  {actionText || "Get Started"}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-xl bg-emerald-600 py-3 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all hover:bg-emerald-700 active:scale-[0.98] cursor-pointer"
                >
                  {actionText || "Get Started"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Bottom Corner Contact Info */}
        <div className="mt-6 border-t border-slate-100 pt-3 text-[11px] text-slate-400 flex items-center justify-center gap-1">
          <Mail className="h-3 w-3 text-slate-400" />
          <span>Any queries? Contact us at </span>
          <a
            href="mailto:contact@hireytics.com"
            className="font-semibold text-slate-700 hover:text-indigo-600 hover:underline"
          >
            contact@hireytics.com
          </a>
        </div>

      </div>
    </div>
  );
}
