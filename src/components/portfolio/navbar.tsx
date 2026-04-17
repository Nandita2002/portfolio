"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { useThemeState } from "@/components/ui/theme-provider";

export function Navbar() {
  const { mounted, theme, toggleTheme } = useThemeState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 }
    );

    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.5)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
        >
          <div className="flex items-center justify-between gap-4">
            <a
              href="#hero"
              className="text-sm font-semibold tracking-wide text-slate-900 transition hover:text-emerald-600 dark:text-white dark:hover:text-emerald-300"
            >
              NM Portfolio
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium transition-all duration-300",
                    activeSection === item.href
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Toggle color mode"
                onClick={toggleTheme}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {!mounted ? (
                  <span className="h-4 w-4 rounded-full bg-slate-300 dark:bg-slate-600" />
                ) : theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen((current) => !current)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 grid gap-1 border-t border-slate-200 pt-3 md:hidden dark:border-slate-700"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-medium transition",
                    activeSection === item.href
                      ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </motion.div>
      </Container>
    </header>
  );
}
