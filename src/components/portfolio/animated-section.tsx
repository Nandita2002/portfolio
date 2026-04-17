"use client";

import { motion } from "framer-motion";

type AnimatedSectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export function AnimatedSection({ id, children, className }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
