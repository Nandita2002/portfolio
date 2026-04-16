'use client';

import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCodeBranch,
  FaCrown,
  FaEnvelope,
  FaGamepad,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaRocket,
  FaShieldAlt,
  FaTrophy,
} from 'react-icons/fa';

type Project = {
  title: string;
  status: string;
  description: string;
  impact: string;
  stack: string[];
  href: string;
};

type SkillPath = {
  title: string;
  level: string;
  tools: string[];
};

type Achievement = {
  title: string;
  note: string;
};

const PROFILE = {
  name: 'Nandita Mahesh',
  role: 'Associate Software Developer & Delivery Manager',
  location: 'India',
  email: 'nanditam2029@gmail.com',
  tagline:
    'Light-mode, game-inspired developer experience built with premium visuals and product-first engineering depth.',
};

const NAV_ITEMS = [
  { label: 'Quest Board', href: '#projects' },
  { label: 'Skill Tree', href: '#skills' },
  { label: 'XP Log', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const PLAYER_STATS = [
  { label: 'Level', value: '12' },
  { label: 'XP Progress', value: '73%' },
  { label: 'Production Drops', value: '10+' },
  { label: 'Commits', value: '1.2k+' },
];

const PROJECTS: Project[] = [
  {
    title: 'Student Sync',
    status: 'Main Quest',
    description:
      'Student lifecycle platform with role-based dashboards, attendance tracking, and academic flows.',
    impact:
      'Unified multiple admin operations into one product surface to reduce operational friction.',
    stack: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
    href: 'https://github.com/Nandita2002/Student_Sync',
  },
  {
    title: 'Hands-on Seva NGO',
    status: 'Social Impact Quest',
    description:
      'Campaign and volunteer portal with practical CMS-like workflows for non-technical teams.',
    impact:
      'Improved campaign visibility and publishing speed while keeping the user flow clear.',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    href: 'https://github.com/Nandita2002/Hands-on-seva-An-NGO',
  },
  {
    title: 'Certificate Generator',
    status: 'Automation Quest',
    description:
      'Dynamic certificate engine with QR verification support and reusable generation templates.',
    impact:
      'Enabled fast, repeatable issuance workflows for education and events.',
    stack: ['Next.js', 'TypeScript', 'QR', 'Tailwind CSS'],
    href: 'https://github.com/Nandita2002/certificate-generator',
  },
  {
    title: 'SocialGradeup',
    status: 'Growth Quest',
    description:
      'Conversion-focused agency website built with speed, clarity, and SEO foundations.',
    impact:
      'Shipped a cleaner funnel and stronger digital presence for lead discovery.',
    stack: ['Next.js', 'Tailwind CSS', 'SEO'],
    href: 'https://github.com/Nandita2002/socialgradeup',
  },
];

const SKILL_PATHS: SkillPath[] = [
  {
    title: 'Frontend Combat',
    level: 'Epic',
    tools: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Motion UI'],
  },
  {
    title: 'Backend Strategy',
    level: 'Advanced',
    tools: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Auth pipelines'],
  },
  {
    title: 'Delivery Leadership',
    level: 'Elite',
    tools: ['Scope planning', 'Client sync', 'Release ownership', 'QA handoff'],
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Feature-to-production ownership',
    note: 'Translate rough requirements into stable production features.',
  },
  {
    title: 'Cross-domain delivery',
    note: 'Built products across NGO, EduTech, and agency ecosystems.',
  },
  {
    title: 'Team-ready engineering',
    note: 'Focus on maintainability, velocity, and predictable execution.',
  },
];

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Nandita2002', Icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/nandita', Icon: FaLinkedin },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6f8ff] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-cyan-300/40 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 18, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror' }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-fuchsia-300/40 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror' }}
        />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,#d7ddf0_1px,transparent_1px),linear-gradient(to_bottom,#d7ddf0_1px,transparent_1px)] [background-size:34px_34px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:px-6 md:px-8">
        <header className="sticky top-4 z-20 mb-8 rounded-2xl border border-white/60 bg-white/65 p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-semibold text-white shadow-md shadow-cyan-300/50">
                NM
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">{PROFILE.name}</p>
                <p className="text-xs text-slate-500">{PROFILE.role}</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-2 text-xs">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <motion.article
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_15px_50px_rgba(59,130,246,0.13)] backdrop-blur-xl"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-fuchsia-50 px-3 py-1 text-[11px] font-medium text-fuchsia-700">
              <FaGamepad className="text-[10px]" />
              Light Mode Edition 2026
            </p>
            <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Premium developer portfolio with a game-inspired personality.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              {PROFILE.tagline} I build polished user experiences, resilient APIs, and
              production-ready systems with delivery discipline.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500"
              >
                Start a project
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="https://github.com/Nandita2002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              >
                <FaGithub />
                Open GitHub
              </a>
            </div>
          </motion.article>

          <motion.aside
            variants={reveal}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_15px_45px_rgba(168,85,247,0.14)] backdrop-blur-xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Player card
                </p>
                <h2 className="mt-1 text-lg font-semibold text-slate-900">{PROFILE.name}</h2>
              </div>
              <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">
                <FaCrown className="mr-1 inline" />
                Elite Builder
              </span>
            </div>
            <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
              <FaLocationArrow className="text-xs text-cyan-600" />
              {PROFILE.location}
            </p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '73%' }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">XP progress to next level: 73%</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {PLAYER_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-2.5"
                >
                  <p className="text-base font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-[11px] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.aside>
        </section>

        <section className="mt-8 grid gap-4 xl:grid-cols-12">
          <motion.article
            id="projects"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_15px_45px_rgba(59,130,246,0.12)] backdrop-blur-xl xl:col-span-7"
          >
            <SectionLabel icon={<FaRocket />} label="Quest Board" />
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Featured missions shipped for real users.
            </h3>
            <div className="mt-5 space-y-3">
              {PROJECTS.map((project) => (
                <a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:shadow-[0_10px_24px_rgba(14,116,144,0.15)]"
                >
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-base font-semibold text-slate-900">{project.title}</p>
                    <span className="rounded-full border border-fuchsia-200 bg-fuchsia-50 px-2 py-0.5 text-[10px] font-medium text-fuchsia-700">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{project.description}</p>
                  <p className="mt-2 text-sm text-slate-500">{project.impact}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-200 bg-cyan-50 px-2 py-1 text-[11px] text-cyan-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.article>

          <motion.article
            id="skills"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_15px_45px_rgba(14,165,233,0.12)] backdrop-blur-xl xl:col-span-5"
          >
            <SectionLabel icon={<FaShieldAlt />} label="Skill Tree" />
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Battle-tested engineering paths.
            </h3>
            <div className="mt-5 space-y-3">
              {SKILL_PATHS.map((path) => (
                <div
                  key={path.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-900">{path.title}</p>
                    <span className="text-[11px] font-medium text-cyan-700">
                      {path.level}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {path.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] text-slate-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            id="experience"
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_15px_45px_rgba(99,102,241,0.12)] backdrop-blur-xl xl:col-span-5"
          >
            <SectionLabel icon={<FaCodeBranch />} label="XP Log" />
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Delivery style and execution timeline.
            </h3>
            <div className="mt-5 space-y-3">
              {ACHIEVEMENTS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-[0_15px_45px_rgba(217,70,239,0.12)] backdrop-blur-xl xl:col-span-7"
          >
            <SectionLabel icon={<FaTrophy />} label="Achievement Zone" />
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              Why teams trust my gameplay in production.
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">High reliability</p>
                <p className="mt-1 text-sm text-emerald-800">
                  I optimize for maintainable systems and predictable delivery.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                <p className="text-sm font-semibold text-cyan-900">Product intuition</p>
                <p className="mt-1 text-sm text-cyan-800">
                  I prioritize user journeys and feature value, not just code output.
                </p>
              </div>
              <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                <p className="text-sm font-semibold text-violet-900">Execution speed</p>
                <p className="mt-1 text-sm text-violet-800">
                  Strong rhythm from architecture to release with clean handoff.
                </p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-900">Team alignment</p>
                <p className="mt-1 text-sm text-amber-800">
                  Clear communication with clients and cross-functional stakeholders.
                </p>
              </div>
            </div>
          </motion.article>
        </section>

        <section id="contact" className="mt-8">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-50 via-white to-violet-50 p-6 shadow-[0_18px_40px_rgba(14,116,144,0.14)]"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-700">Final checkpoint</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
              Ready to launch your next product mission?
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
              Send your product brief or role details. I can scope the work, build it cleanly,
              and ship with high confidence.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                <FaEnvelope />
                {PROFILE.email}
              </a>
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <footer className="mt-8 border-t border-slate-200 pt-5 text-xs text-slate-500">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>Designed by {PROFILE.name} in light-mode game aesthetic.</p>
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

function SectionLabel({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-600">
      <span className="text-cyan-700">{icon}</span>
      {label}
    </p>
  );
}
