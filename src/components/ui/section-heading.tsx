import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-8 max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-base text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
