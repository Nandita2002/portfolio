import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white shadow-[0_14px_28px_-14px_rgba(22,163,74,0.75)] hover:brightness-110 dark:from-[#18a74d] dark:to-[#24c65e] dark:shadow-[0_16px_34px_-18px_rgba(16,185,129,0.65)]",
  secondary:
    "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-300 hover:bg-emerald-100 dark:border-emerald-500/35 dark:bg-emerald-500/12 dark:text-emerald-200 dark:hover:border-emerald-400/55 dark:hover:bg-emerald-500/20",
  ghost:
    "border border-slate-200 bg-white/70 text-slate-800 hover:border-slate-300 hover:bg-white dark:border-slate-600/60 dark:bg-slate-900/55 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:bg-slate-800/70",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
