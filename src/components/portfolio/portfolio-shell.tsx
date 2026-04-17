"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { LoadingScreen } from "@/components/portfolio/loading-screen";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SkillsSection } from "@/components/portfolio/skills-section";

export function PortfolioShell() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        <LoadingScreen loading={loading} />
      </AnimatePresence>

      <div className="relative">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
