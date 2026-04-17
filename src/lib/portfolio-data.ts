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
  role: "Associate Software Developer & Delivery Manager",
  tagline:
    "Building scalable full-stack and AI-powered products with strong execution, clean architecture, and measurable outcomes.",
  company: "Cordito",
  location: "Bangalore, Karnataka, India",
  email: "nanditam2029@gmail.com",
  phone: "+91 6361589943",
  linkedin: "https://www.linkedin.com/in/nandita-mahesh",
  github: "https://github.com/Nandita2002",
  summary:
    "Associate Software Developer and Delivery Manager with hands-on experience in full-stack and AI-driven development. Skilled in Next.js, React.js, TypeScript, Firebase, MongoDB, and AI tools such as OpenAI APIs, LangChain, Hugging Face, and TensorFlow Lite. Currently pursuing an MBA in Business Intelligence and Analytics.",
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
  { label: "Release Efficiency", value: "+20%", description: "Improved at Cordito through deployment optimization" },
  { label: "Performance Gain", value: "+15%", description: "Reduced page load time at Novel Sky Technologies" },
  { label: "Production Deployments", value: "10+ ", description: "Delivered across web and workflow products" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 94 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 91 },
      { name: "JavaScript", level: 89 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 87 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Firebase", level: 90 },
      { name: "MongoDB", level: 87 },
      { name: "SQL", level: 80 },
      { name: "Oracle 10g", level: 72 },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "OpenAI API", level: 88 },
      { name: "LangChain", level: 78 },
      { name: "Hugging Face", level: 76 },
      { name: "TensorFlow Lite", level: 72 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Figma", level: 82 },
      { name: "Git & GitHub", level: 92 },
      { name: "WordPress", level: 86 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Cordito",
    image: "/projects/socialgradeup.svg",
    techStack: ["Next.js", "TypeScript", "Firebase", "OpenAI API"],
    description:
      "Workflow automation product with AI-powered summarization and actionable workflow suggestions for faster execution.",
    liveUrl: "https://cordito.com",
    githubUrl: "https://cordito.com",
  },
  {
    title: "AI-Powered Student Sync",
    image: "/projects/ngo-portal.svg",
    techStack: ["MERN Stack", "Role-based Auth", "AI Analytics"],
    description:
      "Role-based student management platform with attendance workflows and AI-driven performance analytics dashboards.",
    liveUrl: "https://github.com/Nandita2002/Student_Sync",
    githubUrl: "https://github.com/Nandita2002/Student_Sync",
  },
  {
    title: "Social Gradeup",
    image: "/projects/student-sync.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
    description:
      "SEO-optimized digital agency platform with performance-focused architecture and AI-assisted content generation.",
    liveUrl: "https://socialgradeup.com",
    githubUrl: "https://github.com/Nandita2002/socialgradeup",
  },
  {
    title: "Fees Management System",
    image: "/projects/certificate.svg",
    techStack: ["React", "Automation", "AI Chatbot"],
    description:
      "React-based fee management solution with AI chatbot support for inquiries and automated receipt workflows.",
    liveUrl: "https://github.com/Nandita2002",
    githubUrl: "https://github.com/Nandita2002",
  },
  {
    title: "Hands-on Seva NGO Portal",
    image: "/projects/visiting-card.svg",
    techStack: ["Next.js", "Tailwind CSS", "MongoDB"],
    description:
      "Community-focused NGO portal supporting campaigns, volunteer updates, and awareness-driven storytelling.",
    liveUrl: "https://github.com/Nandita2002/Hands-on-seva-An-NGO",
    githubUrl: "https://github.com/Nandita2002/Hands-on-seva-An-NGO",
  },
  {
    title: "Certificate Generator",
    image: "/projects/qr-studio.svg",
    techStack: ["Next.js", "TypeScript", "QR Verification"],
    description:
      "Dynamic certificate generation flow with verification-ready QR support and easy export capabilities.",
    liveUrl: "https://github.com/Nandita2002/certificate-generator",
    githubUrl: "https://github.com/Nandita2002/certificate-generator",
  },
];

export const experiences: Experience[] = [
  {
    role: "Associate Software Developer & Delivery Manager",
    company: "Cordito",
    period: "Dec 2024 - Present",
    summary:
      "Led product delivery using Next.js, TypeScript, and Firebase, integrated AI-powered automation, and improved release cycle efficiency by 20%.",
  },
  {
    role: "Web Developer",
    company: "Novel Sky Technologies",
    period: "Jun 2024 - Nov 2024",
    summary:
      "Revamped UI/UX and optimized performance, reducing page load time by 15%, while improving SEO outcomes for client websites.",
  },
  {
    role: "WordPress Web Developer",
    company: "Elfinity Technologies",
    period: "Feb 2024 - Mar 2024",
    summary:
      "Customized WordPress themes and plugins to improve responsiveness, navigation, and end-user experience.",
  },
  {
    role: "Web Developer Intern",
    company: "Acala Design and Tech",
    period: "Aug 2023 - Oct 2023",
    summary:
      "Built responsive client websites with backend integrations while collaborating on implementation and handoff workflows.",
  },
  {
    role: "Campus Ambassador",
    company: "IIT Bombay",
    period: "Jul 2021 - Jul 2022",
    summary:
      "Promoted events, increased student participation, and received a Platinum Badge for high-impact engagement.",
  },
];

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description: "Scalable web products built with modern React, Next.js, TypeScript, and production-first architecture.",
    icon: "code",
  },
  {
    title: "AI Workflow Automation",
    description: "AI-powered automations using OpenAI and modern tooling to improve speed, productivity, and delivery quality.",
    icon: "search",
  },
  {
    title: "SEO & Digital Growth",
    description: "SEO-focused implementation and content workflows designed to improve discoverability and organic traffic.",
    icon: "megaphone",
  },
];

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", href: profile.linkedin },
  { platform: "GitHub", href: profile.github },
];

export const linkedinFallbackArticles: LinkedInArticle[] = [
  {
    title: "Doodhwala: Why the Milk & Grocery Delivery Startup Went Sour",
    url: "https://www.linkedin.com/pulse/doodhwala-why-milk-grocery-delivery-startup-went-sour-mahesh-db8mc",
    summary: "Startup breakdown and strategic lessons on operations, growth, and product-market sustainability.",
  },
  {
    title: "Nickel: The Unsung Hero Powering the Green Revolution",
    url: "https://www.linkedin.com/pulse/nickel-unsung-hero-powering-the-green-revolution-er-nandita-mahesh-fchmc",
    summary: "An industry-focused article on sustainability, battery ecosystems, and clean-tech momentum.",
  },
  {
    title: "How an API Gateway Saved My Scattered Services",
    url: "https://www.linkedin.com/pulse/how-api-gateway-saved-my-scattered-services-nandita-mahesh-wcvnc",
    summary:
      "Technical architecture learnings on service orchestration, reliability, and reducing integration complexity.",
  },
  {
    title: "The Day I Realized API Rate Limits Are Not Just Numbers",
    url: "https://www.linkedin.com/pulse/day-i-realized-api-rate-limits-just-numbers-nandita-mahesh-azcrc",
    summary: "A practical engineering narrative on API constraints, resilience strategies, and scalable request design.",
  },
];
