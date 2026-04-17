import type {
  Experience,
  LinkedInArticle,
  NavItem,
  Project,
  Service,
  SkillCategory,
  SocialLink,
  Stat,
} from "@/lib/types";

export const profile = {
  name: "Nandita Mahesh",
  role: "Software Developer / CTO",
  tagline:
    "Crafting conversion-focused products with smooth UX, clean architecture, and measurable impact.",
  company: "SocialGradeup",
  location: "India",
  email: "nanditam2029@gmail.com",
  summary:
    "I build high-performance web experiences from idea to deployment. Alongside development, I lead teams, delivery, and product strategy as CTO at SocialGradeup.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Projects Delivered", value: "45+", description: "Web platforms and products" },
  { label: "Years Experience", value: "4+", description: "Shipping for startups and agencies" },
  { label: "Happy Clients", value: "30+", description: "Across multiple domains" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 92 },
      { name: "Next.js", level: 93 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "MongoDB", level: 86 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", level: 82 },
      { name: "Git", level: 91 },
      { name: "WordPress", level: 85 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "SocialGradeup Agency Platform",
    image: "/projects/socialgradeup.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    description:
      "A premium agency platform with service funnels, analytics-ready pages, and conversion-first UI architecture.",
    liveUrl: "https://socialgradeup.com",
    githubUrl: "https://github.com/Nandita2002/socialgradeup",
  },
  {
    title: "Hands-on Seva NGO Portal",
    image: "/projects/ngo-portal.svg",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    description:
      "An NGO portal focused on campaigns, volunteer onboarding, and donation storytelling with fast content workflows.",
    liveUrl: "https://example.com/ngo-portal",
    githubUrl: "https://github.com/Nandita2002/Hands-on-seva-An-NGO",
  },
  {
    title: "Student Sync",
    image: "/projects/student-sync.svg",
    techStack: ["Next.js", "MongoDB", "Framer Motion"],
    description:
      "A student lifecycle dashboard that centralizes attendance, reporting, and operational workflows in one UI.",
    liveUrl: "https://example.com/student-sync",
    githubUrl: "https://github.com/Nandita2002/Student_Sync",
  },
  {
    title: "Certificate Generator",
    image: "/projects/certificate.svg",
    techStack: ["Next.js", "TypeScript", "QR Verification"],
    description:
      "Certificate generation suite with QR-based verification and export-friendly templates for institutions.",
    liveUrl: "https://example.com/certificate-generator",
    githubUrl: "https://github.com/Nandita2002/certificate-generator",
  },
  {
    title: "Visiting Card Builder",
    image: "/projects/visiting-card.svg",
    techStack: ["Next.js", "Tailwind CSS", "UI Animation"],
    description:
      "Dynamic visiting card creator with instant previews, polished micro-interactions, and mobile-first controls.",
    liveUrl: "https://example.com/visiting-card",
    githubUrl: "https://github.com/Nandita2002/visiting-card-generator",
  },
  {
    title: "QR Studio",
    image: "/projects/qr-studio.svg",
    techStack: ["Next.js", "TypeScript", "Design System"],
    description:
      "Fast QR generation tool with downloadable outputs and a clean, lightweight interaction layer.",
    liveUrl: "https://example.com/qr-studio",
    githubUrl: "https://github.com/Nandita2002/QR-code-generator",
  },
];

export const experiences: Experience[] = [
  {
    role: "Associate Software Developer",
    company: "Product & Services Team",
    period: "2022 - Present",
    summary:
      "Built end-to-end web applications, improved maintainability with reusable architectures, and optimized UX performance.",
  },
  {
    role: "Delivery Manager",
    company: "Cross-functional Projects",
    period: "2023 - Present",
    summary:
      "Led project planning, sprint delivery, and stakeholder communication while ensuring high quality and predictable releases.",
  },
  {
    role: "CTO",
    company: "SocialGradeup Digital Agency",
    period: "2024 - Present",
    summary:
      "Driving technical direction, scaling engineering systems, and delivering growth-ready products in web, marketing, and SEO domains.",
  },
];

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Modern, scalable, and conversion-ready websites with premium UX and clean architecture.",
    icon: "code",
  },
  {
    title: "Digital Marketing",
    description: "Data-backed campaigns and landing page systems designed to improve lead quality and visibility.",
    icon: "megaphone",
  },
  {
    title: "SEO Strategy",
    description: "Technical and content SEO improvements for stronger search presence and long-term growth.",
    icon: "search",
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", href: "https://linkedin.com/in/nandita" },
  { platform: "GitHub", href: "https://github.com/Nandita2002" },
];

export const linkedinFallbackArticles: LinkedInArticle[] = [
  {
    title: "Designing a Scalable Student Management Platform with Next.js",
    url: "https://www.linkedin.com/pulse/example-article-1",
    publishedAt: "2026-01-16",
    summary:
      "Architecture decisions, feature ownership patterns, and practical scaling lessons from a real-world student platform.",
  },
  {
    title: "How I Build Premium Portfolio Experiences That Convert",
    url: "https://www.linkedin.com/pulse/example-article-2",
    publishedAt: "2026-02-06",
    summary:
      "A process-driven walkthrough of structure, animation, UX polish, and performance optimization for modern personal brands.",
  },
  {
    title: "From Delivery Manager to CTO: Engineering Execution Framework",
    url: "https://www.linkedin.com/pulse/example-article-3",
    publishedAt: "2026-03-08",
    summary:
      "My framework for aligning product direction, engineering velocity, and stakeholder communication without losing code quality.",
  },
];
