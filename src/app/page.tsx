'use client';

import { useRef } from 'react';
import type { MouseEvent as ReactMouseEvent } from 'react';
import { motion, type Variants, useMotionValue, useSpring } from 'framer-motion';
import {
  FaArrowRight,
  FaBolt,
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
    'I design and engineer premium web products that blend visual craft, smooth motion, and dependable delivery.',
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
      'Complete student lifecycle system with role-based dashboards, attendance workflows, and analytics.',
    stack: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
    link: 'https://github.com/Nandita2002/Student_Sync',
  },
  {
    title: 'Hands-on Seva NGO',
    category: 'Social Impact Web App',
    summary:
      'Volunteer and campaign platform designed for clarity, easy updates, and team collaboration.',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/Nandita2002/Hands-on-seva-An-NGO',
  },
  {
    title: 'Certificate Generator',
    category: 'Automation Tool',
    summary:
      'Template-based certificate generation system with dynamic QR verification and export flow.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/Nandita2002/certificate-generator',
  },
];

const SERVICES: Service[] = [
  {
    title: 'Product UI Engineering',
    description:
      'Responsive frontend development with polished interface details and smooth interactions.',
  },
  {
    title: 'Full-stack Delivery',
    description:
      'From requirements to release: architecture, APIs, frontend, QA handoff, and production readiness.',
  },
  {
    title: 'Execution & Coordination',
    description:
      'Clear communication with stakeholders and predictable release cycles for business outcomes.',
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Nandita2002', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nandita', Icon: FaLinkedin },
  { label: 'Dribbble', href: 'https://dribbble.com/', Icon: FaDribbble },
];

const HERO_SKILLS = [
  'Next.js',
  'TypeScript',
  'Framer Motion',
  'Design Systems',
  'API Design',
  'MongoDB',
  'UI Engineering',
  'Delivery Management',
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfefd] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-16 left-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl"
          animate={{ x: [0, -28, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute bottom-8 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.07),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_35%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-10 pt-4 sm:px-6 sm:pt-6 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="sticky top-3 z-30 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_14px_30px_rgba(37,99,235,0.14)] backdrop-blur-xl md:px-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <a href="#home" className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 6, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(37,99,235,0.24)]"
              >
                NM
              </motion.div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">{PROFILE.name}</p>
                <p className="text-[11px] text-slate-500">{PROFILE.role}</p>
              </div>
            </a>

            <nav className="flex flex-wrap items-center justify-end gap-2 text-xs">
              {NAV.map((itemNav) => (
                <motion.a
                  key={itemNav.href}
                  href={itemNav.href}
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-blue-300 hover:text-blue-700"
                >
                  {itemNav.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.header>

        <motion.section
          id="home"
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-6 grid gap-4 rounded-[2rem] border border-white/80 bg-white/80 p-4 shadow-[0_24px_45px_rgba(16,185,129,0.12)] backdrop-blur-xl sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8"
        >
          <motion.article variants={item}>
            <motion.p
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700"
            >
              <FaRegStar className="text-[10px]" />
              Animated folio-style developer portfolio
            </motion.p>
            <h1 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Creative visual systems. Smooth interactions. Strong execution.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {PROFILE.intro}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${PROFILE.email}`}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(37,99,235,0.28)] transition hover:from-emerald-400 hover:to-blue-500"
              >
                Hire me
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatType: 'mirror' }}
                >
                  <FaArrowRight className="text-xs" />
                </motion.span>
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_9px_19px_rgba(16,185,129,0.13)] transition hover:border-blue-300 hover:text-blue-700"
              >
                Explore work
              </motion.a>
            </div>

            <SkillsMarquee />

            <motion.div variants={container} className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={item}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_8px_16px_rgba(37,99,235,0.09)]"
                >
                  <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.article>

          <ParallaxHeroCard variants={item} />
        </motion.section>

        <section id="work" className="mt-8">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects with premium visuals and measurable outcomes"
          />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-70px' }}
            className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          >
            {PROJECTS.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={item}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_14px_30px_rgba(16,185,129,0.1)] transition hover:border-blue-300 hover:shadow-[0_20px_36px_rgba(37,99,235,0.2)]"
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
                <motion.span
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-blue-700"
                  whileHover={{ x: 2 }}
                >
                  View project <FaArrowRight className="text-[10px]" />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        </section>

        <section id="services" className="mt-10">
          <SectionHeading eyebrow="Services" title="How I can help your product team" />
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-70px' }}
            className="mt-4 grid gap-4 md:grid-cols-3"
          >
            {SERVICES.map((service) => (
              <motion.article
                key={service.title}
                variants={item}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_12px_26px_rgba(37,99,235,0.1)]"
              >
                <h3 className="text-base font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-10 rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-emerald-50 p-5 shadow-[0_22px_42px_rgba(37,99,235,0.16)] sm:p-7"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-blue-700">Contact</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Let&apos;s craft your next standout digital product.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Share your brief, design direction, or product goals. I can help transform ideas
            into responsive, production-ready experiences.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <motion.a
              href={`mailto:${PROFILE.email}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <FaEnvelope />
              {PROFILE.email}
            </motion.a>
            <motion.a
              href="https://github.com/Nandita2002"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <FaGithub />
              GitHub
            </motion.a>
          </div>
        </motion.section>

        <footer className="mt-8 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-xs text-slate-500 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>Designed and developed by {PROFILE.name}.</p>
            <p className="inline-flex items-center gap-1.5">
              <FaCodeBranch className="text-[10px]" />
              Motion-rich folio-style layout built with Next.js and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function ParallaxHeroCard({ variants }: { variants: Variants }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 18, mass: 0.6 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 18, mass: 0.6 });

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.aside
      variants={variants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl border border-slate-200 bg-[#f9fcff] p-5 shadow-[0_20px_36px_rgba(37,99,235,0.14)] sm:p-6"
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 900,
        transformStyle: 'preserve-3d',
      }}
      ref={cardRef}
    >
      <motion.div
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-200/60 blur-2xl"
        animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5.8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-emerald-200/60 blur-2xl"
        animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.68, 0.4] }}
        transition={{ duration: 6.2, repeat: Infinity }}
      />

      <div className="relative space-y-4 [transform:translateZ(24px)]">
        <AvatarOrbitalFrame />

        <div className="rounded-2xl border border-blue-100 bg-white p-4">
          <h2 className="text-xl font-semibold text-slate-900">{PROFILE.name}</h2>
          <p className="mt-1 text-sm text-slate-600">{PROFILE.role}</p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-slate-500">
            <FaLocationArrow className="text-[11px] text-blue-600" />
            {PROFILE.location}
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-white p-4">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-emerald-700">
            <FaBolt className="text-[10px]" />
            Collaboration style
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Fast execution, clean communication, and production-focused decisions.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SOCIALS.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              <Icon className="text-[11px]" />
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

function AvatarOrbitalFrame() {
  return (
    <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-full">
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-200"
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-2 rounded-full border-2 border-emerald-200"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_16px_rgba(37,99,235,0.6)]"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-500 shadow-[0_0_16px_rgba(16,185,129,0.6)]"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.8, delay: 0.9, repeat: Infinity }}
      />
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 text-2xl font-semibold text-white shadow-[0_14px_24px_rgba(37,99,235,0.3)]">
        NM
      </div>
    </div>
  );
}

function SkillsMarquee() {
  const items = [...HERO_SKILLS, ...HERO_SKILLS];

  return (
    <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white/90 py-2">
      <motion.div
        className="flex w-max gap-2 px-2"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
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
