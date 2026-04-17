"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/lib/portfolio-data";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="bg-slate-50/70 py-16 dark:bg-slate-900/55 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Balanced frontend craftsmanship and backend reliability."
          description="A practical stack focused on performance, maintainability, and polished user experience."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeInUp} transition={smoothTransition}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                <div className="mt-6 space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700 transition group-hover:text-emerald-700 dark:text-slate-200 dark:group-hover:text-emerald-300">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700/60">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[#16a34a] to-[#22c55e]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
