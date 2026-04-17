"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Sparkles } from "lucide-react";

import { profile } from "@/lib/portfolio-data";
import { fadeInUp, smoothTransition, staggerContainer } from "@/styles/animations";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const logoStack = [
  { name: "React", src: "/react.svg", duration: 4.8 },
  { name: "Next.js", src: "/next.svg", duration: 5.4 },
  { name: "TypeScript", src: "/typescript.svg", duration: 5 },
  { name: "GitHub", src: "/github-mark.svg", duration: 5.8 },
];

const focusAreas = [
  "Full-stack web products (Next.js + TypeScript)",
  "AI-driven workflow automation and integrations",
  "Product delivery, release planning, and execution",
  "Performance optimization and SEO implementation",
];

const heroTechChips = [
  "Next.js",
  "React.js",
  "TypeScript",
  "Firebase",
  "MongoDB",
  "OpenAI API",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[76vh] items-center overflow-hidden pt-24 pb-10 sm:min-h-[82vh] sm:pb-14"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-200/70 blur-3xl dark:bg-emerald-400/18"
          animate={{ x: [0, 25, -20, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-lime-200/65 blur-3xl dark:bg-blue-400/12"
          animate={{ x: [0, -30, 15, 0], y: [0, 22, -14, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative mx-auto overflow-hidden rounded-[1.65rem] border border-white/75 bg-white/78 px-5 py-6 shadow-[0_28px_62px_-36px_rgba(15,23,42,0.32)] backdrop-blur-md lg:px-9 lg:py-8 dark:border-white/12 dark:bg-[#071329]/82 dark:shadow-[0_34px_70px_-38px_rgba(0,0,0,0.94)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_20%,rgba(52,211,153,0.12),transparent_35%),radial-gradient(circle_at_18%_80%,rgba(37,99,235,0.08),transparent_36%)] dark:bg-[radial-gradient(circle_at_88%_20%,rgba(52,211,153,0.1),transparent_35%),radial-gradient(circle_at_18%_80%,rgba(59,130,246,0.1),transparent_38%)]" />
          <div className="relative grid items-start gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-9">
            <div className="text-center lg:text-left">
              <motion.p
                variants={fadeInUp}
                transition={smoothTransition}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 dark:border-emerald-400/35 dark:bg-emerald-400/10 dark:text-emerald-200"
              >
                <Sparkles className="h-3.5 w-3.5" />
                available for product and AI-focused roles
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                transition={smoothTransition}
                className="mt-4 text-balance text-3xl font-semibold leading-[1.07] text-slate-900 sm:text-5xl lg:text-[3.05rem] dark:text-slate-50"
              >
                {profile.name}
                <span className="block bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent dark:from-sky-300 dark:to-blue-200">
                  {profile.role}
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                transition={smoothTransition}
                className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-300/95"
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
                className="mt-6 rounded-2xl border border-white/70 bg-white/74 p-4 text-left shadow-sm dark:border-white/12 dark:bg-[#0b1a33]/70"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                  Core stack
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {heroTechChips.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-500/12 dark:text-emerald-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={fadeInUp}
              transition={smoothTransition}
              className="mx-auto w-full max-w-[410px] rounded-2xl border border-white/70 bg-gradient-to-br from-white via-emerald-50/70 to-blue-50/40 p-5 shadow-[0_22px_52px_-36px_rgba(15,23,42,0.55)] dark:border-white/12 dark:from-[#0c1d37] dark:via-[#0a1931] dark:to-[#081427]"
            >
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 dark:border-white/12 dark:bg-[#0b1a33]/74">
                <div className="flex items-center gap-4">
                  <Image
                    src="/profilepic.jpg"
                    alt={`${profile.name} profile photo`}
                    width={88}
                    height={88}
                    className="h-20 w-20 rounded-2xl border border-white/70 object-cover shadow-sm dark:border-white/15"
                    priority
                  />
                  <div>
                    <p className="text-lg font-semibold text-slate-900 dark:text-white">{profile.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{profile.role}</p>
                    <p className="mt-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
                      Currently at {profile.company}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {profile.location}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/70 bg-white/80 p-4 dark:border-white/12 dark:bg-[#0b1a33]/74">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                  Tech toolkit
                </p>
                <div className="mt-3 grid grid-cols-4 gap-2.5">
                  {logoStack.map((logo) => (
                    <motion.div
                      key={logo.name}
                      className="flex h-12 w-full items-center justify-center rounded-xl border border-white/70 bg-white/85 shadow-sm dark:border-white/12 dark:bg-[#102443]/85"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: logo.duration, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Image src={logo.src} alt={`${logo.name} logo`} width={24} height={24} className="h-6 w-6 object-contain" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/70 bg-white/80 p-4 dark:border-white/12 dark:bg-[#0b1a33]/74">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 dark:text-slate-400">
                  Focus areas
                </p>
                <ul className="mt-3 space-y-2">
                  {focusAreas.map((area) => (
                    <li key={area} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
