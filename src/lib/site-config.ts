export const siteConfig = {
  name: "Nandita Mahesh Portfolio",
  title: "Nandita Mahesh | Associate Software Developer",
  description:
    "Portfolio of Nandita Mahesh, Associate Software Developer and Delivery Manager, showcasing full-stack and AI-powered product work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanditamahesh.dev",
  ogImage: "/profilepic.jpg",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nandita Mahesh",
  jobTitle: "Associate Software Developer & Delivery Manager",
  worksFor: {
    "@type": "Organization",
    name: "Cordito",
  },
  sameAs: ["https://www.linkedin.com/in/nanditamahesh/", "https://github.com/Nandita2002"],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nanditamahesh.dev",
};
