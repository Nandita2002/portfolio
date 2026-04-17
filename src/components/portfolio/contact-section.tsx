"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, FolderGit2, SendHorizonal } from "lucide-react";

import { profile, socialLinks } from "@/lib/portfolio-data";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { Container } from "@/components/ui/container";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

type ContactErrors = {
  name?: string;
  email?: string;
  message?: string;
};

type ContactApiResponse = {
  ok: boolean;
  message?: string;
};
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: ContactErrors = {};

    if (!name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email.trim() || !isValidEmail(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage(null);
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          source: "portfolio-contact-form",
        }),
      });

      const payload = (await response.json()) as ContactApiResponse;

      if (!response.ok || !payload.ok) {
        setSubmitError(payload.message ?? "Unable to submit your message right now.");
        return;
      }

      setSubmitMessage(payload.message ?? "Thanks! Your message has been received.");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitError("Something went wrong while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection id="contact" className="bg-slate-50/70 py-16 dark:bg-slate-900/55 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s build something ambitious together."
          description="Share your idea, role, or project goal. I&apos;ll get back with a practical execution plan."
        />

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-100">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                  placeholder="Your name"
                  aria-invalid={errors.name ? true : undefined}
                />
                {errors.name ? <p className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-100">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? true : undefined}
                />
                {errors.email ? <p className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-800 dark:text-slate-100">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
                  placeholder="Tell me about your project or role..."
                  aria-invalid={errors.message ? true : undefined}
                />
                {errors.message ? (
                  <p className="mt-1 text-xs text-rose-600 dark:text-rose-300">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#22c55e] px-5 py-3 text-sm font-semibold text-white shadow-[0_15px_32px_-18px_rgba(22,163,74,0.9)] transition hover:brightness-110"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <SendHorizonal className="ml-2 h-4 w-4" />
              </button>

              {submitMessage ? (
                <p className="inline-flex items-center gap-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  {submitMessage}
                </p>
              ) : null}
              {submitError ? <p className="text-sm font-medium text-rose-600 dark:text-rose-300">{submitError}</p> : null}
            </form>
          </GlassCard>

          <GlassCard className="flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Contact Details</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Based in {profile.location}. Open to software development, product engineering, AI workflow automation,
                and delivery-focused roles.
              </p>
            </div>

            <div className="space-y-3 text-sm">
              {profile.phone ? (
                <div className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                  {profile.phone}
                </div>
              ) : null}
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-emerald-500/40 dark:hover:text-emerald-300"
              >
                {profile.email}
              </a>
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-blue-500/40 dark:hover:text-blue-300"
                >
                  <span>{link.platform}</span>
                  {link.platform === "LinkedIn" ? (
                    <span className="text-xs font-semibold tracking-wide">in</span>
                  ) : (
                    <FolderGit2 className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </GlassCard>
        </div>
      </Container>
    </AnimatedSection>
  );
}
