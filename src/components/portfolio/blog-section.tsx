"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import type { LinkedInArticle } from "@/lib/types";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";

type BlogSectionProps = {
  articles: LinkedInArticle[];
};

function formatPublishedDate(rawDate?: string): string | null {
  if (!rawDate) {
    return null;
  }

  const parsedDate = new Date(rawDate);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function BlogSection({ articles }: BlogSectionProps) {
  return (
    <AnimatedSection id="blog" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Latest LinkedIn writing and thought leadership."
          description="Fresh insights from product delivery, engineering strategy, and startup execution."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {articles.map((article) => {
            const publishedAt = formatPublishedDate(article.publishedAt);

            return (
              <motion.article key={article.url} variants={fadeInUp} transition={smoothTransition}>
                <GlassCard className="flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-400/30 dark:bg-blue-500/12 dark:text-blue-200">
                      <span className="text-[11px] font-bold leading-none">in</span>
                      LinkedIn Article
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                      {article.title}
                    </h3>

                    {article.summary ? (
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {article.summary}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    {publishedAt ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {publishedAt}
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-slate-400 dark:text-slate-500">Recently published</span>
                    )}

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-300"
                    >
                      Read
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </GlassCard>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
