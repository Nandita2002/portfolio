"use client";

import { motion } from "framer-motion";

import { profile } from "@/lib/portfolio-data";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/60 bg-white/70 py-8 backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col gap-2 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-400"
        >
          <p>
            © {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript, Tailwind, and Framer Motion.
          </p>
          <p className="text-blue-700 dark:text-blue-300">Designed for smoothness, clarity, and impact.</p>
        </motion.div>
      </Container>
    </footer>
  );
}
