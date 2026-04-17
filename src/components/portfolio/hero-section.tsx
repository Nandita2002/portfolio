"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

import { profile } from "@/lib/portfolio-data";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const technologies = [
  { name: "React", src: "/react.svg", style: "top-6 left-8", duration: 8.8, rotate: 10 },
  { name: "Next.js", src: "/next.svg", style: "top-8 right-8", duration: 10.2, rotate: -7 },
  { name: "TypeScript", src: "/typescript.svg", style: "bottom-8 left-12", duration: 9.4, rotate: -8 },
  { name: "GitHub", src: "/github-mark.svg", style: "bottom-10 right-9", duration: 11, rotate: 8 },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[82vh] items-center overflow-hidden pt-24 pb-12 sm:min-h-[86vh] sm:pb-16"
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
          className="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-white/70 bg-white/65 px-5 py-7 shadow-[0_28px_60px_-34px_rgba(15,23,42,0.35)] backdrop-blur-md lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-9 lg:py-9 dark:border-white/10 dark:bg-slate-900/65"
        >
          <div className="text-center lg:text-left">
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
              className="mt-5 text-balance text-3xl font-semibold leading-[1.08] text-slate-900 sm:text-5xl lg:text-[3.3rem] dark:text-white"
            >
              {profile.name}
              <span className="block bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-blue-200">
                {profile.role}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={smoothTransition}
              className="mx-auto mt-4 max-w-xl text-pretty text-[0.98rem] leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-300"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={smoothTransition}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
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

            <motion.div
              variants={fadeInUp}
              transition={smoothTransition}
              className="mt-6 grid grid-cols-2 gap-2.5 text-left sm:grid-cols-4 lg:max-w-[32rem]"
            >
              {[
                { label: "Frontend", value: "React + Next.js" },
                { label: "Typed Stack", value: "TypeScript" },
                { label: "Versioning", value: "GitHub Workflow" },
                { label: "Delivery", value: "Smooth + Scalable" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/75 bg-white/70 p-3 shadow-sm dark:border-white/10 dark:bg-slate-900/65"
                >
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className="mt-0.5 text-xs font-medium text-slate-800 dark:text-slate-100">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            transition={smoothTransition}
            className="relative mx-auto flex h-[310px] w-full max-w-[360px] items-center justify-center rounded-2xl border border-white/75 bg-gradient-to-br from-white to-emerald-50 shadow-[0_20px_55px_-34px_rgba(15,23,42,0.5)] dark:border-white/10 dark:from-slate-900 dark:to-slate-800"
          >
            <motion.div
              className="absolute inset-4 rounded-2xl border border-emerald-200/60 bg-white/65 dark:border-emerald-500/30 dark:bg-slate-900/70"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY }}
            />

            <motion.div
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-200 bg-white shadow-md dark:border-emerald-500/30 dark:bg-slate-950"
              animate={{ y: [0, -8, 0], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-sm font-semibold tracking-wide text-emerald-700 dark:text-emerald-300">Tech</span>
            </motion.div>

            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className={`absolute ${tech.style} z-20 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-[0_16px_28px_-18px_rgba(15,23,42,0.5)] dark:border-white/10 dark:bg-slate-900/85`}
                animate={{
                  y: [0, -10, 0],
                  rotate: [tech.rotate, tech.rotate + 3, tech.rotate - 2, tech.rotate],
                }}
                transition={{ duration: tech.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Image src={tech.src} alt={`${tech.name} logo`} width={36} height={36} className="h-9 w-9 object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
