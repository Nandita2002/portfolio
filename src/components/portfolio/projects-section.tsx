"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { projects } from "@/lib/portfolio-data";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected products across agency, NGO, and SaaS workflows."
          description="A curated collection of production-style builds with modern stacks, animated interactions, and practical outcomes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.16 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article key={project.title} variants={fadeInUp} transition={smoothTransition}>
              <GlassCard className="group h-full p-0 transition duration-300 hover:scale-[1.015]">
                <div className="relative overflow-hidden rounded-t-2xl border-b border-white/70 dark:border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={420}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open live project: ${project.title}`}
                      className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open GitHub repository: ${project.title}`}
                      className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
                    >
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
