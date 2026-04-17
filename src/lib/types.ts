export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Stat = {
  label: string;
  value: string;
  description: string;
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Project = {
  title: string;
  image: string;
  techStack: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "code" | "megaphone" | "search";
};

export type SocialLink = {
  platform: string;
  href: string;
};

export type LinkedInArticle = {
  title: string;
  url: string;
  publishedAt?: string;
  summary?: string;
};
