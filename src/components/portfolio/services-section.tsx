"use client";

import { motion } from "framer-motion";
import { Code2, Megaphone, SearchCheck } from "lucide-react";

import { services } from "@/lib/portfolio-data";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";

const serviceIconMap = {
  code: Code2,
  megaphone: Megaphone,
  search: SearchCheck,
};

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Growth-aligned services designed for modern digital brands."
          description="A blend of engineering and strategy to help products scale smoothly."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];

            return (
              <motion.div key={service.title} variants={fadeInUp} transition={smoothTransition}>
                <GlassCard className="h-full">
                  <div className="inline-flex rounded-xl border border-emerald-200 bg-emerald-50 p-2.5 dark:border-emerald-500/35 dark:bg-emerald-500/10">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
