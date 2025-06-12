"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-mono">
      
      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 px-10 gap-10">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-pink-400 drop-shadow-md mb-6">
            Hi, I’m Nandita Mahesh
          </h1>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            <span className="text-green-400 font-bold">Software Developer 🚀</span> <br />
            Turning Future Technologies Into Scalable Digital Solutions🔥
            <br /> Turning <span className="text-pink-300">caffeine ☕</span> into <span className="text-yellow-300">code 💻</span>.
          </p>

          <div className="flex gap-6 justify-center md:justify-start mb-6">
            <SocialIcons />
          </div>

         <a 
  href="https://drive.google.com/uc?export=download&id=1YjzfHJwUeSBWkj3tTvXEl1yQRo1CqexT" 
  className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-400 transition font-semibold"
>
  Download Resume
</a>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-80 h-80 overflow-hidden shadow-xl rounded-full">
            <Image src="/profile.jpg" alt="Nandita Mahesh" width={320} height={320} className="object-cover" />
          </div>
        </motion.div>

      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 px-5 bg-black bg-opacity-40 backdrop-blur-md">
        <h2 className="text-4xl font-bold text-center mb-12 text-pink-300">💻 My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl hover:scale-105 transition border border-white/20"
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image src={project.image} alt={project.name} width={500} height={300} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{project.name}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <p className="text-sm text-yellow-400 mb-4 font-mono">Tech Stack: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-400 transition font-semibold"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="py-6 text-center text-gray-400 border-t border-gray-700">
        Coded with 💻🔥 by <span className="text-pink-400">Nandita Mahesh</span>
      </footer>
    </main>
  );
}

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
    link: "#",
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

const SocialIcons = () => (
  <>
    <a href="https://github.com/Nandita2002" target="_blank" rel="noopener noreferrer">
      <FaGithub size={32} className="hover:text-pink-400 transition" />
    </a>
    <a href="https://linkedin.com/in/nandita-mahesh" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={32} className="hover:text-pink-400 transition" />
    </a>
    <a href="https://twitter.com/nandita" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={32} className="hover:text-pink-400 transition" />
    </a>
    <a href="https://instagram.com/nandita" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={32} className="hover:text-pink-400 transition" />
    </a>
    <a href="mailto:nanditam2029@gmail.com">
      <FaEnvelope size={32} className="hover:text-pink-400 transition" />
    </a>
  </>
);
