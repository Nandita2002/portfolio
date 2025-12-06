'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';

type Project = {
  title: string;
  stack: string;
  link: string;
};

type Metric = {
  label: string;
  value: string;
};

type Article = {
  title: string;
  link: string;
  tag?: string;
};

const PROFILE = {
  name: 'Nandita Mahesh',
  role: 'Associate Software Developer & Delivery Manager',
  tagline:
    'Full-stack engineer focused on scalable web platforms, clean delivery, and real-world impact.',
  email: 'nanditam2029@gmail.com',
  location: 'India',
};

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Nandita2002', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nandita', Icon: FaLinkedin },
  { label: 'Twitter', href: 'https://twitter.com/', Icon: FaTwitter },
  { label: 'Email', href: `mailto:${PROFILE.email}`, Icon: FaEnvelope },
  { label: 'Instagram', href: 'https://instagram.com/', Icon: FaInstagram },
];

const FEATURED_PROJECTS: Project[] = [
  {
    title: 'Student Sync',
    stack: 'Next.js · MongoDB · Tailwind · NextAuth',
    link: 'https://github.com/Nandita2002/Student_Sync',
  },
  {
    title: 'Hands-on Seva NGO',
    stack: 'Next.js · Tailwind · MongoDB',
    link: 'https://github.com/Nandita2002/Hands-on-seva-An-NGO',
  },
  {
    title: 'QR Code Generator',
    stack: 'Next.js · TypeScript · Tailwind',
    link: 'https://github.com/Nandita2002/QR-code-generator',
  },
  {
    title: 'Visiting Card Generator',
    stack: 'Next.js · Tailwind',
    link: 'https://github.com/Nandita2002/visiting-card-generator',
  },
  {
    title: 'Certificate Generator',
    stack: 'Next.js · Tailwind · QR',
    link: 'https://github.com/Nandita2002/certificate-generator',
  },
  {
    title: 'pkbook',
    stack: 'Next.js · Node.js · MongoDB',
    link: 'https://github.com/Nandita2002/pkbook',
  },
  {
    title: 'SocialGradeup – Agency',
    stack: 'Next.js · Tailwind · SEO',
    link: 'https://github.com/Nandita2002/socialgradeup',
  },
  {
    title: 'Forestlife Foundation',
    stack: 'Next.js · Tailwind',
    link: 'https://github.com/Nandita2002/Formsite-foundation',
  },
];

const OTHER_REPOS: string[] = [
  'portfolio',
  'client',
  'student-management-system-cmss',
  'student-payment-system',
  'student-management-System',
  'iimtify-it-certification',
  'spotify-clone',
  'sign-in-and-sign-up-form',
  'portfolio-website',
  'clock',
  'simple-login-form',
];

const SKILLS: string[] = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'REST APIs',
  'Git & GitHub',
  'Project Delivery',
  'Client Communication',
];

const METRICS: Metric[] = [
  { label: 'Build', value: 'PASS' },
  { label: 'Deployments', value: '10+ prod' },
  { label: 'Latency', value: '42ms' },
  { label: 'Commits', value: '1,200+' },
];

const DEV_LEVEL = {
  level: 12,
  xpPercent: 73, // % toward next level
  title: 'Full-Stack Engineer Progress',
  mission: 'Ship reliable, production-ready web products.',
};

const ACTIVITY_LOGS: string[] = [
  'Compiling timeline… OK',
  'Syncing GitHub repositories… 8 featured, 10+ misc',
  'Loading NGO & EduTech projects… OK',
  'Checking deployment status… all green',
  'Scanning tech stack… Next.js · Node.js · MongoDB · Tailwind',
  'Preparing project spotlight… ready',
];

const TIME_LINES: string[] = [
  'System uptime synced with reality…',
  'Temporal module calibrated successfully.',
  'Clock drift: 0.0001ms — stable.',
  'Monitoring timeline integrity…',
  'Chronology checkpoint updated.',
  'Local timestream active.',
  'Syncing with universal clock…',
  'Time node online.',
  'Coordinates locked in present moment.',
  'Temporal engine running nominal.',
];

// TODO: replace `link` with your actual LinkedIn article URLs
const ARTICLES: Article[] = [
  {
    title: 'Designing a Student Management System with Next.js & MongoDB',
    link: '#',
    tag: 'Architecture',
  },
  {
    title: 'Building Reliable Dashboards for NGOs & Social Impact Platforms',
    link: '#',
    tag: 'Product · NGOs',
  },
  {
    title: 'From Idea to Deployment: How I Ship Web Apps End-to-End',
    link: '#',
    tag: 'Process',
  },
];

const SLIDES = ['About', 'Projects', 'Skills', 'Contact'] as const;
type SlideKey = (typeof SLIDES)[number];

// keep it simple for framer custom
const slideVariants: any = {
  enter: (dir: 1 | -1) => ({
    x: dir === 1 ? 80 : -80,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir: 1 | -1) => ({
    x: dir === 1 ? -80 : 80,
    opacity: 0,
    scale: 0.97,
  }),
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState<SlideKey>('About');
  const [direction, setDirection] = useState<1 | -1>(1);
  const [logIndex, setLogIndex] = useState(0);
  const [now, setNow] = useState<Date>(new Date());
  const [timeLineIndex, setTimeLineIndex] = useState(0);
  const [mounted, setMounted] = useState(false); // avoid hydration mismatch

  // mark when we're on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setActiveSlide((prev) => {
        const currentIndex = SLIDES.indexOf(prev);
        const nextIndex = (currentIndex + 1) % SLIDES.length;
        return SLIDES[nextIndex];
      });
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate activity logs
  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % ACTIVITY_LOGS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Rotate tricky time lines
  useEffect(() => {
    const timer = setInterval(
      () => setTimeLineIndex((prev) => (prev + 1) % TIME_LINES.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  // Keyboard controls: ← → and 1–4
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setDirection(1);
        setActiveSlide((prev) => {
          const i = SLIDES.indexOf(prev);
          return SLIDES[(i + 1) % SLIDES.length];
        });
      }
      if (e.key === 'ArrowLeft') {
        setDirection(-1);
        setActiveSlide((prev) => {
          const i = SLIDES.indexOf(prev);
          return SLIDES[(i - 1 + SLIDES.length) % SLIDES.length];
        });
      }

      if (['1', '2', '3', '4'].includes(e.key)) {
        const index = Number(e.key) - 1;
        if (SLIDES[index]) {
          setDirection(index > SLIDES.indexOf(activeSlide) ? 1 : -1);
          setActiveSlide(SLIDES[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeSlide]);

  const handleSlideChange = (target: SlideKey) => {
    const currentIndex = SLIDES.indexOf(activeSlide);
    const targetIndex = SLIDES.indexOf(target);
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setActiveSlide(target);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND MAGIC */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-purple-600/50 blur-3xl"
          animate={{ x: [0, 20, -10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-20 h-80 w-80 rounded-full bg-cyan-500/40 blur-3xl"
          animate={{ x: [0, -30, 10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute top-1/3 -right-10 h-56 w-56 rounded-full bg-fuchsia-500/30 blur-3xl"
          animate={{ y: [0, -20, 10, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror' }}
        />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] [background-size:40px_40px]" />
        {/* vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
      </div>

      {/* FOREGROUND */}
      <div className="relative z-10 flex min-h-screen flex-col px-4 pb-4 pt-3 md:px-10 md:pb-6 md:pt-5">
        {/* HEADER */}
        <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/40 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 text-base font-semibold shadow-lg shadow-purple-500/50 md:h-12 md:w-12 md:text-lg">
              NM
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight md:text-2xl">
                {PROFILE.name}
              </h1>
              <p className="text-xs text-purple-100 md:text-sm">
                {PROFILE.role}
              </p>
              <p className="text-[10px] text-purple-300 md:text-xs">
                Class: Full-Stack Engineer
              </p>
            </div>
          </div>

          {/* RIGHT: time/date + tricky line + tabs */}
          <div className="flex flex-col items-end gap-1">
            {/* time + date (only render on client to avoid hydration issues) */}
            {mounted && (
              <>
                <div className="flex items-center gap-2 font-mono text-[10px] text-purple-200 md:text-xs">
                  <span>
                    {now.toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-cyan-400" />
                  <span suppressHydrationWarning>
                    {now.toLocaleTimeString(undefined, {
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit',
                    })}
                  </span>
                </div>
                <p className="max-w-xs text-right font-mono text-[10px] text-purple-300 md:text-xs">
                  {TIME_LINES[timeLineIndex]}
                </p>
              </>
            )}

            {/* Tabs */}
            <nav className="mt-1 flex items-center gap-1.5 self-start rounded-full border border-white/20 bg-black/40 px-1.5 py-1 shadow-[0_0_20px_rgba(34,211,238,0.25)] md:self-auto md:gap-2">
              {SLIDES.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSlideChange(s)}
                  className={`rounded-full px-3 py-1.5 text-[11px] transition md:text-xs ${
                    activeSlide === s
                      ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-black shadow-md shadow-cyan-400/40'
                      : 'text-purple-100 hover:bg-white/10 active:scale-95'
                  }`}
                >
                  {s}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* METRICS STRIP (HUD FEEL) */}
        <section className="mt-2 mb-1 flex flex-wrap gap-2 text-[10px] font-mono text-purple-200 md:text-xs">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-1 rounded-full border border-white/15 bg-black/40 px-2 py-1 shadow-[0_0_16px_rgba(15,23,42,0.9)] hover:border-cyan-300/70 hover:bg-cyan-400/10 transition"
            >
              <span className="text-cyan-300">{m.label}:</span>
              <span>{m.value}</span>
            </div>
          ))}
        </section>

        {/* DEV STATUS – game-like feel */}
        <section className="mb-1 w-full max-w-xl">
          <div className="rounded-2xl border border-white/20 bg-black/40 px-3 py-3 shadow-[0_0_18px_rgba(8,47,73,0.8)]">
            <div className="flex items-center justify-between font-mono text-[10px] text-purple-100 md:text-xs">
              <span className="text-cyan-300">
                Player: {PROFILE.name} · Lv {DEV_LEVEL.level}
              </span>
              <span>{DEV_LEVEL.title}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400"
                style={{ width: `${DEV_LEVEL.xpPercent}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between font-mono text-[10px] text-purple-200 md:text-[11px]">
              <span>XP</span>
              <span>{DEV_LEVEL.xpPercent}% to next milestone</span>
            </div>
            <p className="mt-2 text-[10px] text-purple-300 md:text-xs">
              Current mission: {DEV_LEVEL.mission}
            </p>
          </div>
        </section>

        {/* MAIN SLIDES AREA */}
        <section className="flex flex-1 items-center justify-center px-1 pt-4 pb-4 md:px-4 md:pb-6">
          <div className="flex h-full w-full items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full max-w-5xl rounded-3xl border border-white/15 bg-white/7 p-4 shadow-xl backdrop-blur-3xl md:p-8"
              >
                {activeSlide === 'About' && <AboutSlide />}
                {activeSlide === 'Projects' && <ProjectsSlide />}
                {activeSlide === 'Skills' && <SkillsSlide />}
                {activeSlide === 'Contact' && <ContactSlide />}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* FOOTER + ACTIVITY LOG */}
        <footer className="mt-auto space-y-1">
          <div className="flex items-center justify-between text-[10px] text-purple-200 md:text-xs">
            <span className="font-mono">
              mode: <span className="text-cyan-300">slideshow</span> · auto-cycle:{' '}
              <span className="text-fuchsia-300">on</span>
            </span>
            <span className="font-mono">
              slide {SLIDES.indexOf(activeSlide) + 1}/{SLIDES.length} · controls:{' '}
              <span className="text-cyan-300">← →</span> &nbsp;/&nbsp;{' '}
              <span className="text-cyan-300">1–4</span>
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={logIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex w-full items-center gap-2 rounded-2xl border border-cyan-400/40 bg-black/60 px-3 py-2 font-mono text-[10px] text-cyan-200 md:text-xs"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>{ACTIVITY_LOGS[logIndex]}</span>
            </motion.div>
          </AnimatePresence>
        </footer>
      </div>
    </main>
  );
}

// SLIDES

function AboutSlide() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div>
        <h2 className="mb-2 text-lg font-semibold md:text-xl">
          About Nandita
        </h2>
        <p className="mb-2 text-xs text-purple-100 md:text-sm">
          I&apos;m a full-stack engineer who cares about both clean engineering
          and predictable delivery. I like taking ownership of a feature from
          &quot;rough idea&quot; to shipped build — breaking it down, designing
          the right data flow, building the UI and APIs, and making sure it
          actually works for real users.
        </p>
        <p className="mb-2 text-xs text-purple-100 md:text-sm">
          My current stack revolves around Next.js, React, TypeScript, Node.js,
          MongoDB and Tailwind CSS. I&apos;ve built platforms for NGOs,
          education, management systems and digital agencies — from student
          lifecycle tools to NGO portals and branded websites.
        </p>
        <p className="text-xs text-purple-100 md:text-sm">
          As a delivery manager, I&apos;m used to coordinating with clients,
          tracking progress, and making sure releases don&apos;t become chaos.
          The goal is simple: ship fast, ship clean, and keep it maintainable.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 text-[11px] text-purple-100 md:grid-cols-3 md:text-xs">
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Strengths</p>
          <p>Ownership, fast execution, clean UI & APIs.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">I like building</p>
          <p>Dashboards, internal tools, platforms with actual users.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Current focus</p>
          <p>Product-based roles and serious web apps.</p>
        </div>
      </div>

      {/* Recent writing / articles */}
      <div className="mt-4 rounded-2xl border border-white/20 bg-black/30 p-3">
        <p className="mb-2 text-[11px] uppercase tracking-[0.16em] text-fuchsia-300 md:text-xs">
          Recent writing · LinkedIn style
        </p>
        <div className="flex flex-wrap gap-2">
          {ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.link}
              target={article.link === '#' ? undefined : '_blank'}
              rel={article.link === '#' ? undefined : 'noopener noreferrer'}
              className="group flex items-center gap-2 rounded-2xl border border-white/20 bg-black/40 px-3 py-2 text-[11px] hover:border-cyan-300/70 hover:bg-cyan-500/10 transition md:text-xs"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 group-hover:bg-fuchsia-300" />
              <div>
                <p className="font-medium text-purple-50">
                  {article.title}
                  {article.link === '#' && (
                    <span className="ml-1 text-[10px] text-purple-300">
                      (add your LinkedIn URL)
                    </span>
                  )}
                </p>
                {article.tag && (
                  <p className="text-[10px] text-purple-300">{article.tag}</p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsSlide() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-lg font-semibold md:text-xl">Projects</h2>
        <span className="font-mono text-[10px] text-purple-200 md:text-xs">
          {FEATURED_PROJECTS.length} main · {OTHER_REPOS.length}+ repos
        </span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 overflow-y-auto pr-1 md:grid-cols-2">
        {FEATURED_PROJECTS.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-white/20 bg-black/35 p-3 transition hover:border-cyan-300/70 hover:bg-cyan-500/10"
          >
            <div>
              <p className="mb-1 flex items-center justify-between gap-2 text-sm font-medium">
                <span>{p.title}</span>
                <span className="rounded-full border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] group-hover:border-cyan-300/70">
                  View →
                </span>
              </p>
              <p className="mb-1 text-[11px] text-cyan-200">{p.stack}</p>
            </div>
            <p className="line-clamp-3 text-[11px] text-purple-100">
              {p.title === 'Student Sync'
                ? 'End-to-end student lifecycle management with role-based access, attendance and performance dashboards.'
                : p.title === 'Hands-on Seva NGO'
                ? 'NGO platform for campaigns, volunteers and public updates.'
                : p.title === 'QR Code Generator'
                ? 'Generate sharable QR codes instantly for URLs and text.'
                : p.title === 'Visiting Card Generator'
                ? 'Digital visiting card builder with live preview and export.'
                : p.title === 'Certificate Generator'
                ? 'Dynamic certificate builder with QR verification workflow.'
                : p.title === 'pkbook'
                ? 'Book/product-style platform with structured content.'
                : p.title === 'SocialGradeup – Agency'
                ? 'Digital agency site optimised for speed, SEO and lead flow.'
                : 'Environmental NGO site for awareness and campaigns.'}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-1">
        <p className="mb-1 text-[11px] text-fuchsia-300 md:text-xs">
          Other repositories
        </p>
        <div className="flex max-h-14 flex-wrap gap-1.5 overflow-y-auto pr-1">
          {OTHER_REPOS.map((r) => (
            <span
              key={r}
              className="rounded-full border border-white/20 bg-black/40 px-2 py-1 text-[10px]"
            >
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillsSlide() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div>
        <h2 className="mb-2 text-lg font-semibold md:text-xl">
          Skills & Stack
        </h2>
        <p className="mb-3 text-xs text-purple-100 md:text-sm">
          Practical stack: strong frontend, simple backend, clear APIs and Git
          practices that don&apos;t slow the team down. I care about code that
          can survive production, not just pass a demo.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 text-[11px] text-purple-100 md:grid-cols-3 md:text-xs">
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Frontend</p>
          <p>Next.js, React, TypeScript, Tailwind CSS.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Backend</p>
          <p>Node.js, Express, MongoDB, REST APIs.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Dev & tools</p>
          <p>Git, GitHub, VS Code, Postman.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Delivery</p>
          <p>Breaking features down, tracking, shipping on time.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Soft skills</p>
          <p>Client communication, ownership, mentoring juniors.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-cyan-300">Domains</p>
          <p>EduTech, NGOs, digital marketing, internal tools.</p>
        </div>
      </div>
    </div>
  );
}

function ContactSlide() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div>
        <h2 className="mb-2 text-lg font-semibold md:text-xl">
          Work with me
        </h2>
        <p className="mb-3 text-xs text-purple-100 md:text-sm">
          If you&apos;re hiring for a product-based role or need someone to fix
          or ship a serious web app, reach out.
        </p>
        <p className="text-xs text-purple-100 md:text-sm">
          I prefer roles where I can own features end-to-end, reduce chaos for
          the team, and make sure what we ship actually works for real users —
          not just in slides.
        </p>
      </div>

      <div className="mt-2 grid grid-cols-1 gap-3 text-[11px] text-purple-100 md:grid-cols-2 md:text-xs">
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-fuchsia-300">Ideal roles</p>
          <p>Full-stack / Frontend Engineer in a product team.</p>
        </div>
        <div className="rounded-2xl border border-white/20 bg-black/35 p-3">
          <p className="mb-1 text-fuchsia-300">How I can help</p>
          <p>Turn requirements into shipped features with clean code.</p>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-cyan-400/40 transition hover:from-cyan-300 hover:to-fuchsia-300 md:text-sm"
        >
          Email me: {PROFILE.email}
        </a>
        <p className="max-w-md text-[11px] text-purple-200 md:text-xs">
          Send the problem statement / job description. I&apos;ll reply with
          what I can realistically deliver and timelines.
        </p>
      </div>
    </div>
  );
}
