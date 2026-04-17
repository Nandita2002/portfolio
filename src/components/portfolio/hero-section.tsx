"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

import { profile } from "@/lib/portfolio-data";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-14 sm:pb-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-500/20"
          animate={{ x: [0, 25, -20, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-lime-200/65 blur-3xl dark:bg-lime-500/15"
          animate={{ x: [0, -30, 15, 0], y: [0, 22, -14, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl rounded-2xl border border-white/70 bg-white/65 px-6 py-10 text-center shadow-[0_28px_60px_-34px_rgba(15,23,42,0.35)] backdrop-blur-md sm:px-10 sm:py-14 dark:border-white/10 dark:bg-slate-900/65"
        >
          <motion.p
            variants={fadeInUp}
            transition={smoothTransition}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:border-emerald-500/35 dark:bg-emerald-500/10 dark:text-emerald-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            available for impactful products
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            transition={smoothTransition}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.08] text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            {profile.name}
            <span className="block bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-blue-200">
              {profile.role}
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            transition={smoothTransition}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            transition={smoothTransition}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="#projects" className="min-w-44">
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary" className="min-w-44">
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
