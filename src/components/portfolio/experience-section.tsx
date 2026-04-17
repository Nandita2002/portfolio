"use client";

import { motion } from "framer-motion";

import { experiences } from "@/lib/portfolio-data";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="bg-slate-50/70 py-16 dark:bg-slate-900/55 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Roles where delivery, leadership, and product quality meet."
          description="A timeline of technical ownership and cross-functional execution."
        />

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative space-y-5"
        >
          <span className="absolute top-2 bottom-2 left-4 hidden w-px bg-emerald-200 sm:block dark:bg-emerald-500/35" />
          {experiences.map((experience) => (
            <motion.li key={experience.role} variants={fadeInUp} transition={smoothTransition}>
              <GlassCard className="relative pl-6 sm:pl-10">
                <span className="absolute top-7 left-3 hidden h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#16a34a] to-[#22c55e] sm:block" />
                <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">{experience.period}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {experience.role}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {experience.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {experience.summary}
                </p>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </AnimatedSection>
  );
}
