"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Eyebrow, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { profile, socials } from "@/data/portfolio";

const inputClass =
  "mt-2 block w-full rounded-xl border border-strong bg-surface px-4 py-3 text-sm text-fg placeholder:text-fg-faint transition-colors duration-300 focus:border-accent focus:outline-none";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <GithubIcon className="h-4 w-4" />,
  LinkedIn: <LinkedinIcon className="h-4 w-4" />,
  LeetCode: <span className="font-mono text-xs font-bold">LC</span>,
  DockerHub: <span className="font-mono text-xs font-bold">D</span>,
  Twitter: <span className="font-mono text-xs font-bold">X</span>,
  Instagram: <span className="font-mono text-xs font-bold">IG</span>,
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", hp: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.hp) return;
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      setForm({ name: "", email: "", subject: "", message: "", hp: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <Section id="contact" label="Contact" className="relative overflow-hidden py-28 md:py-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-glow opacity-50 blur-[160px]"
      />

      <div className="container-x relative">
        <Eyebrow>09 — Contact</Eyebrow>

        <div className="mt-10">
          <h2 className="max-w-5xl font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl lg:text-[7.5rem]">
            LET&apos;S BUILD
            <br />
            <span className="text-gradient-accent">SOMETHING.</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            Have an interesting problem, system, or idea? I&apos;m open to
            internships and full-time roles in backend, full-stack, and systems
            engineering.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="min-w-0 space-y-10">
            <div className="group">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-faint">
                Email — fastest
              </p>
              <a
                href={profile.emailHref}
                className="mt-3 inline-flex max-w-full items-center gap-3 break-all font-display text-2xl font-medium tracking-tight transition-colors duration-300 hover:text-accent md:text-4xl"
                data-cursor
              >
                <Mail className="h-6 w-6 text-accent" aria-hidden="true" />
                {profile.email}
                <ArrowUpRight
                  className="h-5 w-5 text-fg-faint transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-fg-faint">
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="group flex items-center gap-2 rounded-full border border-strong px-4 py-2.5 text-sm font-medium text-fg-muted transition-all duration-300 hover:border-accent hover:text-accent"
                    data-cursor
                  >
                    {socialIcons[s.label]}
                    {s.label}
                    <ArrowUpRight
                      className="h-3 w-3 text-fg-faint opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-strong p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-fg-faint">
                Need the formal version?
              </p>
              <div className="mt-4">
                <Button
                  href={profile.resumeHref}
                  download={profile.resumeDownloadName}
                  arrow
                >
                  Download resume
                </Button>
              </div>
              <p className="mt-4 font-mono text-xs text-fg-faint">
                {profile.location} · {profile.timezone}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="hp" value={form.hp} />
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="font-mono text-xs text-fg-muted">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="font-mono text-xs text-fg-muted">
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="font-mono text-xs text-fg-muted">
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
                placeholder="Internship, role, or a problem worth solving"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="font-mono text-xs text-fg-muted">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-y`}
                placeholder="Tell me about the system or problem..."
                required
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </Button>

              <AnimatePresence mode="wait">
                {status === "ok" && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-accent-3"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Message sent. I&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-[#ff6b6b]"
                  >
                    Couldn&apos;t send right now — use the email above instead.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}