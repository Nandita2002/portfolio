"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles, Zap } from "lucide-react";

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
      className="relative flex min-h-[79vh] items-center overflow-hidden pt-24 pb-10 sm:min-h-[84vh] sm:pb-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-400/22"
          animate={{ x: [0, 25, -20, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-lime-200/65 blur-3xl dark:bg-blue-400/14"
          animate={{ x: [0, -30, 15, 0], y: [0, 22, -14, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto overflow-hidden rounded-[1.55rem] border border-white/75 bg-white/74 px-5 py-6 shadow-[0_28px_62px_-36px_rgba(15,23,42,0.32)] backdrop-blur-md lg:px-9 lg:py-8 dark:border-white/12 dark:bg-[#071329]/80 dark:shadow-[0_34px_70px_-38px_rgba(0,0,0,0.94)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(52,211,153,0.13),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(37,99,235,0.08),transparent_36%)] dark:bg-[radial-gradient(circle_at_88%_20%,rgba(52,211,153,0.12),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(59,130,246,0.11),transparent_38%)]" />
          <div className="relative grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            <div className="flex flex-col justify-between text-center lg:text-left">
              <div>
                <motion.p
                  variants={fadeInUp}
                  transition={smoothTransition}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 dark:border-emerald-400/35 dark:bg-emerald-400/10 dark:text-emerald-200"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  available for impactful products
                </motion.p>

                <motion.h1
                  variants={fadeInUp}
                  transition={smoothTransition}
                  className="mt-4 text-balance text-3xl font-semibold leading-[1.06] text-slate-900 sm:text-5xl lg:text-[3.22rem] dark:text-slate-50"
                >
                  {profile.name}
                  <span className="block bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-blue-200">
                    {profile.role}
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  transition={smoothTransition}
                  className="mx-auto mt-4 max-w-xl text-pretty text-[0.98rem] leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-300/95"
                >
                  {profile.tagline}
                </motion.p>
              </div>

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
                className="mt-6 rounded-2xl border border-white/70 bg-white/72 p-3.5 text-left shadow-sm dark:border-white/12 dark:bg-[#0b1a33]/68"
              >
                <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  <Zap className="h-3.5 w-3.5 text-emerald-500 dark:text-emerald-300" />
                  Core stack
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {techRail.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 dark:border-emerald-400/28 dark:bg-emerald-500/12 dark:text-emerald-200"
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
              className="relative mx-auto flex h-[318px] w-full max-w-[360px] items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-br from-white via-emerald-50/75 to-blue-50/40 shadow-[0_22px_52px_-36px_rgba(15,23,42,0.55)] dark:border-white/12 dark:from-[#0c1d37] dark:via-[#0a1931] dark:to-[#081427]"
            >
              <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/45 dark:border-white/8" />
              <motion.div
                className="absolute inset-6 rounded-full border border-emerald-200/70 dark:border-emerald-400/24"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 34, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-11 rounded-full border border-dashed border-emerald-200/75 dark:border-emerald-300/22"
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
                    stroke="rgb(52 211 153 / 0.28)"
                    strokeWidth="0.55"
                  />
                ))}
              </svg>

              <motion.div
                className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-emerald-200 bg-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.45)] dark:border-emerald-400/28 dark:bg-[#091225]"
                animate={{ y: [0, -4, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 6.5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Image src="/nm-logo.svg" alt="NM logo" width={52} height={52} className="h-12 w-12" />
              </motion.div>

              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="absolute z-20 rounded-2xl border border-white/80 bg-white/88 p-3 shadow-[0_16px_28px_-18px_rgba(15,23,42,0.45)] dark:border-white/12 dark:bg-[#0b1a33]/86"
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
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
