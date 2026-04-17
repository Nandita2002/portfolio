import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/70 bg-white/65 p-6 shadow-[0_18px_45px_-28px_rgba(15,23,42,0.35)] backdrop-blur",
        "transition-all duration-300 hover:shadow-[0_20px_55px_-30px_rgba(34,197,94,0.45)]",
        className
      )}
    >
      {children}
    </div>
  );
}
