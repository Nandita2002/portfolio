'use client';

import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCodeBranch,
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaRegStar,
} from 'react-icons/fa';

type Project = {
  title: string;
  category: string;
  summary: string;
  stack: string[];
  link: string;
};

type Service = {
  title: string;
  description: string;
};

type Stat = {
  value: string;
  label: string;
};

const PROFILE = {
  name: 'Nandita Mahesh',
  role: 'Associate Software Developer & Delivery Manager',
  location: 'India',
  email: 'nanditam2029@gmail.com',
  intro:
    'I build elegant digital experiences and robust web products with a clean UI style and product-focused engineering.',
};

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const STATS: Stat[] = [
  { value: '12+', label: 'Products shipped' },
  { value: '1.2k+', label: 'Commits delivered' },
  { value: '10+', label: 'Deployments' },
];

const PROJECTS: Project[] = [
  {
    title: 'Student Sync Platform',
    category: 'Dashboard Product',
    summary:
      'A complete student lifecycle system with role-based dashboards, attendance workflows, and analytics.',
    stack: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
    link: 'https://github.com/Nandita2002/Student_Sync',
  },
  {
    title: 'Hands-on Seva NGO',
    category: 'Social Impact Web App',
    summary:
      'A volunteer and campaign platform designed for clarity, easy updates, and team collaboration.',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Nandita2002/Hands-on-seva-An-NGO',
  },
  {
    title: 'Certificate Generator',
    category: 'Automation Tool',
    summary:
      'A template-based certificate generation system with dynamic QR verification and export flow.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/Nandita2002/certificate-generator',
  },
];

const SERVICES: Service[] = [
  {
    title: 'Product UI Engineering',
    description:
      'Responsive frontend development with polished interface details and performance-conscious builds.',
  },
  {
    title: 'Full-stack Delivery',
    description:
      'From requirements to release: architecture, APIs, frontend, QA handoff, and production readiness.',
  },
  {
    title: 'Execution & Coordination',
    description:
      'Clear communication with stakeholders and predictable release cycles for real business outcomes.',
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Nandita2002', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nandita', Icon: FaLinkedin },
  { label: 'Dribbble', href: 'https://dribbble.com/', Icon: FaDribbble },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfefd] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-blue-300/35 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, 16, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-emerald-300/35 blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, -14, 0] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.06),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-4 sm:px-6 sm:pt-6 md:px-8">
        <header className="sticky top-3 z-30 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-[0_12px_28px_rgba(37,99,235,0.14)] backdrop-blur md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(37,99,235,0.24)]">
                NM
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">{PROFILE.name}</p>
                <p className="text-[11px] text-slate-500">{PROFILE.role}</p>
              </div>
            </a>

            <nav className="flex flex-wrap items-center justify-end gap-2 text-xs">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section
          id="home"
          className="mt-6 grid gap-4 rounded-[2rem] border border-white/80 bg-white/85 p-4 shadow-[0_22px_42px_rgba(16,185,129,0.12)] backdrop-blur sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8"
        >
          <motion.article
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
              <FaRegStar className="text-[10px]" />
              Folio-style developer portfolio
            </p>
            <h1 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Creative frontend aesthetics. Reliable product engineering.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {PROFILE.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.25)] transition hover:from-emerald-400 hover:to-blue-500"
              >
                Hire me
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_8px_18px_rgba(16,185,129,0.13)] transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore work
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {STATS.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_8px_16px_rgba(37,99,235,0.08)]"
                >
                  <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.aside
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-200 bg-[#f9fcff] p-5 shadow-[0_18px_34px_rgba(37,99,235,0.12)] sm:p-6"
          >
            <div className="rounded-2xl border border-blue-100 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Profile card</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{PROFILE.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{PROFILE.role}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
                <FaLocationArrow className="text-[11px] text-blue-600" />
                {PROFILE.location}
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-emerald-100 bg-white p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-emerald-700">
                Collaboration style
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Fast execution, clean communication, and production-focused decisions.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                >
                  <Icon className="text-[11px]" />
                  {label}
                </a>
              ))}
            </div>
          </motion.aside>
        </section>

        <section id="work" className="mt-8">
          <SectionHeading eyebrow="Selected work" title="Projects with polished UX and measurable outcomes" />
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {PROJECTS.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_30px_rgba(16,185,129,0.1)] transition hover:border-blue-300 hover:shadow-[0_18px_34px_rgba(37,99,235,0.18)]"
              >
                <p className="text-[11px] uppercase tracking-[0.16em] text-blue-700">{project.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] text-emerald-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-700">
                  View project <FaArrowRight className="text-[10px] transition group-hover:translate-x-0.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="services" className="mt-10">
          <SectionHeading eyebrow="Services" title="How I can help your product team" />
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <motion.article
                key={service.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_26px_rgba(37,99,235,0.1)]"
              >
                <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-emerald-50 p-5 shadow-[0_20px_40px_rgba(37,99,235,0.14)] sm:p-7">
          <p className="text-xs uppercase tracking-[0.2em] text-blue-700">Contact</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Let&apos;s craft your next standout digital product.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Share your brief, design direction, or product goals. I can help transform ideas
            into responsive, production-ready experiences.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <FaEnvelope />
              {PROFILE.email}
            </a>
            <a
              href="https://github.com/Nandita2002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </section>

        <footer className="mt-8 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-xs text-slate-500 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Designed and developed by {PROFILE.name}.
            </p>
            <p className="inline-flex items-center gap-1.5">
              <FaCodeBranch className="text-[10px]" />
              Responsive folio-inspired layout built with Next.js and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-blue-700">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
