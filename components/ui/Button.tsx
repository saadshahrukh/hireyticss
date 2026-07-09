"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white shadow-lg shadow-slate-400/10 hover:bg-slate-900",
  secondary:
    "border border-slate-300 bg-white text-black hover:border-slate-400 hover:bg-slate-100 shadow-sm",
  ghost:
    "text-black hover:text-slate-900 hover:bg-slate-100",
  dark:
    "bg-slate-900 text-white hover:bg-black shadow-md hover:shadow-lg hover:shadow-slate-500/20",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", href, children, className = "", ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <motion.a
          href={href}
          className={cls}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button href={href} variant={variant} className={className}>
      {children}
    </Button>
  );
}
