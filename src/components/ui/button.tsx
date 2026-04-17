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
    "bg-gradient-to-r from-[#16a34a] to-[#22c55e] text-white shadow-[0_14px_28px_-14px_rgba(22,163,74,0.75)] hover:brightness-110",
  secondary:
    "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-300 hover:bg-emerald-100",
  ghost:
    "border border-slate-200 bg-white/70 text-slate-800 hover:border-slate-300 hover:bg-white",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
