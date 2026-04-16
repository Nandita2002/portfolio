'use client';

import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCodeBranch,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaRegLightbulb,
} from 'react-icons/fa';

type Stat = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  href: string;
};

type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

type Experience = {
  period: string;
  role: string;
  company: string;
  bullets: string[];
};

const PROFILE = {
  name: 'Nandita Mahesh',
  role: 'Associate Software Developer & Delivery Manager',
  tagline:
    'I build scalable web products with clean architecture, high delivery speed, and polished user experience.',
  email: 'nanditam2029@gmail.com',
  location: 'India',
};

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const STATS: Stat[] = [
  { label: 'Production deployments', value: '10+' },
  { label: 'Featured projects', value: '8' },
  { label: 'Commits shipped', value: '1,200+' },
  { label: 'Core stack focus', value: 'Next.js + TS' },
];

const PROJECTS: Project[] = [
  {
    title: 'Student Sync',
    description:
      'Student lifecycle platform with role-based dashboards, attendance workflows, and academic tracking.',
    impact:
      'Reduced admin friction through one connected system for students, coordinators, and management.',
    stack: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
    href: 'https://github.com/Nandita2002/Student_Sync',
  },
  {
    title: 'Hands-on Seva NGO',
    description:
      'Operational portal for NGO campaigns, volunteers, and updates with a clear information flow.',
    impact:
      'Helped improve visibility of social campaigns while making updates easier for non-technical teams.',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    href: 'https://github.com/Nandita2002/Hands-on-seva-An-NGO',
  },
  {
    title: 'Certificate Generator',
    description:
      'Dynamic certificate generation app with customizable templates and QR-enabled verification.',
    impact:
      'Enabled fast batch-ready certificate workflows for education-focused use cases.',
    stack: ['Next.js', 'TypeScript', 'QR', 'Tailwind CSS'],
    href: 'https://github.com/Nandita2002/certificate-generator',
  },
  {
    title: 'SocialGradeup Agency Site',
    description:
      'Performance-oriented digital agency website focused on conversion flow and SEO clarity.',
    impact:
      'Delivered a cleaner brand presence with faster page performance and better lead discovery.',
    stack: ['Next.js', 'Tailwind CSS', 'SEO'],
    href: 'https://github.com/Nandita2002/socialgradeup',
  },
];

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    summary: 'Interfaces that feel fast, clear, and production-ready.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Component systems'],
  },
  {
    title: 'Backend & APIs',
    summary: 'Simple, maintainable backend logic aligned to product goals.',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Auth flows'],
  },
  {
    title: 'Delivery Leadership',
    summary: 'Execution discipline from planning to deployment.',
    items: ['Feature scoping', 'Client communication', 'Release ownership', 'Task breakdown'],
  },
];

const EXPERIENCE: Experience[] = [
  {
    period: 'Current',
    role: 'Associate Software Developer & Delivery Manager',
    company: 'Product & client-facing web projects',
    bullets: [
      'Ship full-stack features from requirements to production release.',
      'Coordinate delivery checkpoints, keeping stakeholders aligned and informed.',
      'Maintain code quality while balancing speed and reliability.',
    ],
  },
  {
    period: 'Recent Projects',
    role: 'Full-Stack Developer',
    company: 'NGO, EduTech, and agency platforms',
    bullets: [
      'Built dashboard-driven apps with reusable UI and API modules.',
      'Designed practical data flows for student, volunteer, and campaign systems.',
      'Improved maintainability by favoring clean structure over one-off fixes.',
    ],
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Nandita2002', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nandita', Icon: FaLinkedin },
  { label: 'Email', href: `mailto:${PROFILE.email}`, Icon: FaEnvelope },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-28 left-0 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl"
          animate={{ x: [0, 50, 10, 0], y: [0, 10, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ x: [0, -40, -10, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 26, repeat: Infinity, repeatType: 'mirror' }}
        />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),rgba(2,6,23,0.92)_65%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-4 pb-20 pt-6 sm:px-6 md:px-8">
        <header className="mb-12 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 font-semibold text-slate-950">
                NM
              </div>
              <div>
                <p className="text-base font-semibold text-white">{PROFILE.name}</p>
                <p className="text-xs text-slate-300">{PROFILE.role}</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/15 bg-slate-800/70 px-3 py-1.5 text-slate-200 transition hover:border-cyan-300/70 hover:text-cyan-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(8,47,73,0.35)] backdrop-blur"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Open to full-stack and frontend roles
            </div>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Developer portfolio with a product mindset.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              {PROFILE.tagline} I specialize in turning complex requirements into clean interfaces, reliable APIs, and deliverables that teams can trust in production.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-blue-400"
              >
                Let&apos;s work together
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="https://github.com/Nandita2002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-800/80 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
              >
                <FaGithub />
                View GitHub
              </a>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Quick profile</p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-3">
                <p className="text-slate-400">Name</p>
                <p className="mt-1 font-medium text-white">{PROFILE.name}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-3">
                <p className="text-slate-400">Role</p>
                <p className="mt-1 font-medium text-white">{PROFILE.role}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/80 p-3">
                <p className="text-slate-400">Location</p>
                <p className="mt-1 flex items-center gap-2 font-medium text-white">
                  <FaLocationArrow className="text-[10px] text-cyan-300" />
                  {PROFILE.location}
                </p>
              </div>
            </div>
          </motion.aside>
        </section>

        <section className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur"
            >
              <p className="text-xl font-semibold text-white">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </section>

        <section id="projects" className="mt-16">
          <SectionTitle
            eyebrow="Featured work"
            title="Projects built for real users and delivery outcomes."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-90px' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-cyan-300/50 hover:bg-slate-900"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <span className="inline-flex items-center gap-1 text-xs text-cyan-200 transition group-hover:text-cyan-100">
                    View repo <FaArrowRight className="text-[10px]" />
                  </span>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-slate-400">{project.impact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-16">
          <SectionTitle
            eyebrow="Core strengths"
            title="Balanced engineering across UI, APIs, and execution."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <motion.div
                key={group.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <p className="mb-2 text-sm font-semibold text-white">{group.title}</p>
                <p className="mb-4 text-sm text-slate-400">{group.summary}</p>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16">
          <SectionTitle
            eyebrow="Experience"
            title="Execution style focused on ownership and reliability."
          />
          <div className="mt-6 space-y-4">
            {EXPERIENCE.map((item) => (
              <motion.article
                key={`${item.company}-${item.role}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.role}</h3>
                    <p className="text-sm text-slate-300">{item.company}</p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-cyan-200">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <FaRegLightbulb className="mt-1 shrink-0 text-[11px] text-cyan-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-3xl border border-cyan-300/25 bg-gradient-to-br from-slate-900/90 to-slate-950 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.18),0_20px_80px_rgba(8,47,73,0.45)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
              Let&apos;s build something meaningful
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              Need a developer who can own delivery end-to-end?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
              Share your product brief, hiring role, or technical challenge. I can help scope, build, and ship with clear communication and practical engineering decisions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <FaEnvelope />
                {PROFILE.email}
              </a>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-800/70 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/70 hover:text-cyan-200"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>Designed and developed by {PROFILE.name}.</p>
            <p className="inline-flex items-center gap-1.5">
              <FaCodeBranch className="text-[11px]" />
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
