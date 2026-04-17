"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, HandHeart } from "lucide-react";

import { profile, stats } from "@/lib/portfolio-data";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";

const highlights = [
  {
    title: "Web Developer",
    description:
      "Building scalable interfaces and backend-integrated products with modern React and Next.js architecture.",
    icon: BriefcaseBusiness,
  },
  {
    title: "CTO at SocialGradeup",
    description:
      "Leading product engineering, delivery systems, and innovation roadmaps for startup and agency clients.",
    icon: Building2,
  },
  {
    title: "NGO Impact Work",
    description:
      "Designing and shipping mission-first platforms that improve community outreach and operational clarity.",
    icon: HandHeart,
  },
];

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Product-minded engineering with leadership and social impact."
          description={profile.summary}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.div key={item.title} variants={fadeInUp} transition={smoothTransition}>
              <GlassCard className="h-full">
                <item.icon className="h-5 w-5 text-emerald-600 dark:text-emerald-300" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          className="mt-8 grid gap-4 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp} transition={smoothTransition}>
              <GlassCard className="h-full bg-slate-50/70 dark:bg-slate-900/55">
                <p className="text-3xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-blue-700 dark:text-blue-300">{stat.label}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
