'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#050505] via-[#111827] to-[#0f172a] text-white font-sans scroll-smooth">
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-center py-24 px-8 gap-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[120px] absolute -top-20 -left-32 animate-pulse" />
          <div className="w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[100px] absolute bottom-0 right-0 animate-pulse" />
        </div>

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 text-center md:text-left bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(255,0,150,0.3)]"
        >
          <h1 className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-400 via-yellow-300 to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-6">
            Hi, I’m Nandita Mahesh
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            <span className="text-green-400 font-semibold">Software Developer 🚀</span>
            <br /> Building futuristic, scalable digital products 🔮
            <br /> Turning <span className="text-pink-300">caffeine ☕</span> into <span className="text-yellow-300">code 💻</span>
          </p>

          <div className="flex gap-6 justify-center md:justify-start mb-8">
            <SocialIcons />
          </div>

          <a
            href="https://drive.google.com/uc?export=download&id=1YjzfHJwUeSBWkj3tTvXEl1yQRo1CqexT"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition font-semibold shadow-[0_0_15px_rgba(236,72,153,0.6)]"
          >
            Download Resume
          </a>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-full border-4 border-pink-400/40 shadow-[0_0_25px_rgba(236,72,153,0.6)]">
            <Image
              src="/profilepic.jpg"
              alt="Nandita Mahesh"
              width={400}
              height={400}
              className="object-cover w-full h-full hover:scale-105 transition duration-500"
            />
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <SectionWrapper title="💻 My Projects" color="text-pink-400">
        {projects}
      </SectionWrapper>

      {/* ONGOING PROJECTS SECTION */}
      <SectionWrapper title="🚧 Ongoing Projects" color="text-yellow-300">
        {ongoingProjects}
      </SectionWrapper>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-400 border-t border-gray-800">
        Made with 💻🔥 by <span className="text-pink-400 font-semibold">Nandita Mahesh</span>
      </footer>
    </main>
  );
}

/* REUSABLE SECTIONS */
const SectionWrapper = ({ title, children, color }) => (
  <section className="py-20 px-6 relative">
    <h2 className={`text-4xl font-extrabold text-center mb-14 ${color}`}>{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      {children.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,255,128,0.2)] hover:scale-105 transition-transform"
        >
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image src={project.image} alt={project.name} width={500} height={300} className="object-cover w-full h-full hover:scale-110 transition duration-500" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
          <p className="text-gray-300 mb-3">{project.description}</p>
          <p className="text-sm text-green-400 mb-4 font-mono">Tech Stack: {project.tech}</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full hover:opacity-90 transition font-semibold shadow-[0_0_12px_rgba(236,72,153,0.6)]"
          >
            View Project →
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

/* PROJECT DATA */
const projects = [
  {
    name: "Forest Life Foundation",
    description: "Official live website built for environmental NGO.",
    tech: "Next.js, TypeScript, MongoDB, SEO, Vercel",
    image: "/projects/forestlife.png",
    link: "https://www.forestlifefoundation.org/",
  },
  {
    name: "Cordito (Busibay)",
    description: "Digital workflow management platform.",
    tech: "Next.js, TypeScript, Firebase, REST APIs",
    image: "/projects/cordito.png",
    link: "https://www.cordito.com",
  },
  {
    name: "QR Code Generator",
    description: "A responsive and lightweight QR Code generator with certificate verification.",
    tech: "React, Tailwind CSS, TypeScript, QRCode.react, html2canvas",
    image: "/projects/qrcode.png",
    link: "https://qr-code-generator-chi-mauve.vercel.app/",
  },
  {
    name: "Student Management System",
    description: "Comprehensive MERN stack based student information system.",
    tech: "MongoDB, Express.js, React, Node.js, Tailwind",
    image: "/projects/student.png",
    link: "https://github.com/Nandita2002/Student_Sync",
  },
  {
    name: "Hands on Seva NGO",
    description: "NGO platform built with full-stack technologies.",
    tech: "React.js, Node.js, MongoDB, Express.js",
    image: "/projects/hos.png",
    link: "https://github.com/Nandita2002/Hands-on-seva-An-NGO",
  }
];

const ongoingProjects = [
  {
    name: "Visiting Card Generator",
    description: "Generate and customize digital visiting cards with live preview and QR code export.",
    tech: "Next.js, TypeScript, Tailwind CSS, QRCode.react, html2canvas",
    image: "/projects/vcard.png",
    link: "https://visiting-card-generator-gamma.vercel.app/",
  },
  {
    name: "E-Certificate Generator",
    description: "Advanced certificate generator with real-time form data, QR verification, and customizable design.",
    tech: "MongoDB, Express.js, React, Node.js, Tailwind CSS, jsPDF",
    image: "/projects/e-cert.png",
    link: "https://certificate-generator-two-pi.vercel.app/",
  },
  {
    name: "Social Gradeup Web App",
    description: "SEO-friendly digital agency platform with modern UI and smooth animations.",
    tech: "Next.js, TypeScript, Tailwind CSS, Framer Motion, SEO",
    image: "/projects/socialg.png",
    link: "/",
  },
];

/* SOCIAL ICONS */
const SocialIcons = () => (
  <>
    <a href="https://github.com/Nandita2002" target="_blank" rel="noopener noreferrer">
      <FaGithub size={32} className="hover:text-green-400 transition drop-shadow-[0_0_10px_rgba(0,255,128,0.6)]" />
    </a>
    <a href="https://www.linkedin.com/in/nandita-mahesh" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={32} className="hover:text-blue-400 transition drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
    </a>
    <a href="https://twitter.com/nandita" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={32} className="hover:text-sky-400 transition drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]" />
    </a>
    <a href="https://www.instagram.com/nandita_mahesh" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={32} className="hover:text-pink-400 transition drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
    </a>
    <a href="mailto:nanditam2029@gmail.com">
      <FaEnvelope size={32} className="hover:text-yellow-300 transition drop-shadow-[0_0_10px_rgba(253,224,71,0.6)]" />
    </a>
  </>
);
