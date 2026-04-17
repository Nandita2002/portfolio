"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

import { profile } from "@/lib/portfolio-data";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const technologies = [
  {
    name: "React",
    src: "/react.svg",
    x: 24,
    y: 26,
    duration: 8.8,
    rotate: 8,
  },
  {
    name: "Next.js",
    src: "/next.svg",
    x: 76,
    y: 26,
    duration: 10.2,
    rotate: -8,
  },
  {
    name: "TypeScript",
    src: "/typescript.svg",
    x: 24,
    y: 74,
    duration: 9.2,
    rotate: -7,
  },
  {
    name: "GitHub",
    src: "/github-mark.svg",
    x: 76,
    y: 74,
    duration: 10.8,
    rotate: 7,
  },
];

const techRail = ["React", "Next.js", "TypeScript", "GitHub", "Node.js", "Framer Motion"];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[78vh] items-center overflow-hidden pt-24 pb-10 sm:min-h-[82vh] sm:pb-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-400/24"
          animate={{ x: [0, 25, -20, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-lime-200/65 blur-3xl dark:bg-blue-400/16"
          animate={{ x: [0, -30, 15, 0], y: [0, 22, -14, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto grid max-w-6xl gap-6 rounded-2xl border border-white/70 bg-white/70 px-5 py-6 shadow-[0_26px_58px_-34px_rgba(15,23,42,0.3)] backdrop-blur-md lg:grid-cols-[1.08fr_0.92fr] lg:gap-9 lg:px-9 lg:py-8 dark:border-white/15 dark:bg-[#071329]/82 dark:shadow-[0_34px_65px_-38px_rgba(0,0,0,0.92)]"
        >
          <div className="pointer-events-none absolute top-8 bottom-8 left-[54%] hidden w-px bg-gradient-to-b from-transparent via-emerald-200/70 to-transparent lg:block dark:via-emerald-400/26" />
          <div className="text-center lg:text-left">
            <motion.p
              variants={fadeInUp}
              transition={smoothTransition}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-400/12 dark:text-emerald-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              available for impactful products
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              transition={smoothTransition}
              className="mt-4 text-balance text-3xl font-semibold leading-[1.08] text-slate-900 sm:text-5xl lg:text-[3.15rem] dark:text-slate-50"
            >
              {profile.name}
              <span className="block bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-blue-200">
                {profile.role}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              transition={smoothTransition}
              className="mx-auto mt-4 max-w-xl text-pretty text-[0.96rem] leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-300/95"
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
              className="mt-6 rounded-2xl border border-white/75 bg-white/70 p-3.5 text-left shadow-sm dark:border-white/12 dark:bg-[#0b1a33]/72"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                Core stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {techRail.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-500/13 dark:text-emerald-200"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-300" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            transition={smoothTransition}
            className="relative mx-auto flex h-[300px] w-full max-w-[350px] items-center justify-center rounded-2xl border border-white/75 bg-gradient-to-br from-white to-emerald-50 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.45)] dark:border-white/12 dark:from-[#0c1d37] dark:to-[#081427]"
          >
            <motion.div
              className="absolute inset-6 rounded-full border border-emerald-200/70 dark:border-emerald-400/28"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-11 rounded-full border border-dashed border-emerald-200/75 dark:border-emerald-300/26"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {technologies.map((tech) => (
                <line
                  key={`${tech.name}-line`}
                  x1="50"
                  y1="50"
                  x2={tech.x}
                  y2={tech.y}
                  stroke="rgb(52 211 153 / 0.3)"
                  strokeWidth="0.55"
                />
              ))}
            </svg>

            <motion.div
              className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-200 bg-white shadow-md dark:border-emerald-400/30 dark:bg-[#091225]"
              animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Image src="/nm-logo.svg" alt="NM logo" width={52} height={52} className="h-12 w-12" />
            </motion.div>

            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="absolute z-20 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-[0_16px_28px_-18px_rgba(15,23,42,0.45)] dark:border-white/12 dark:bg-[#0b1a33]/85"
                style={{ left: `${tech.x}%`, top: `${tech.y}%`, transform: "translate(-50%, -50%)" }}
                animate={{
                  y: [0, -8, 0],
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
