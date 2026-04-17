export const siteConfig = {
  name: "Nandita Mahesh Portfolio",
  title: "Nandita Mahesh | Software Developer & CTO",
  description:
    "Modern portfolio of Nandita Mahesh, Software Developer and CTO at SocialGradeup, showcasing projects, experience, and services.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanditamahesh.dev",
  ogImage: "/profilepic.jpg",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nandita Mahesh",
  jobTitle: "Software Developer / CTO",
  worksFor: {
    "@type": "Organization",
    name: "SocialGradeup",
  },
  sameAs: ["https://linkedin.com/in/nandita", "https://github.com/Nandita2002"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanditamahesh.dev",
};
