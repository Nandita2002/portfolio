'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 text-white flex flex-col items-center px-6 py-12 space-y-20">
      {/* Profile Section */}
      <motion.section
        className="flex flex-col items-center text-center space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/profilepic.jpg"
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full border-4 border-purple-500 shadow-lg"
        />
        <h1 className="text-4xl font-bold">Nandita Mahesh</h1>
        <p className="text-lg text-purple-200 max-w-2xl">
          Associate Software Developer & Delivery Manager | Passionate about building scalable web applications,
          technology-driven solutions, and impactful digital products.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 text-2xl mt-4">
          <a href="https://github.com/Nandita2002" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nandita" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaTwitter />
          </a>
          <a href="mailto:nanditam2029@gmail.com" className="hover:text-purple-400">
            <FaEnvelope />
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
            <FaInstagram />
          </a>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Portfolio</h2>
        <p className="text-purple-200 text-center">
          Experienced in <span className="font-semibold">Web Development, MERN stack, and Digital Solutions</span>.  
          I create responsive, accessible, and optimized applications that deliver seamless user experiences.
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Project 1 */}
          <motion.div
            className="bg-purple-800/50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">Student Sync</h3>
            <p className="text-purple-200 mb-3">
              A student management system built with Next.js and MongoDB to manage courses, attendance, and
              performance tracking.
            </p>
            <a
              href="https://github.com/Nandita2002/Student_Sync"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:underline"
            >
              View Project →
            </a>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg-purple-800/50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">Hands-on Seva (NGO Website)</h3>
            <p className="text-purple-200 mb-3">
              An NGO platform built using Next.js and TailwindCSS, connecting volunteers with social initiatives.
            </p>
            <a
              href="https://github.com/Nandita2002/Hands-on-seva-An-NGO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Upcoming Projects Section */}
      <motion.section
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Upcoming Projects</h2>
        <ul className="list-disc list-inside text-purple-200 space-y-3">
          <li>QR Code Generator (Next.js + Tailwind CSS + TypeScript)</li>
          <li>Visiting Card Generator (Next.js + Tailwind CSS)</li>
          <li>Accessible Learning Platform for Disabled Individuals (MERN Stack)</li>
        </ul>
      </motion.section>
    </main>
  );
}
