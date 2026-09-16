"use client";

import { useState, type FormEvent } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "./ui/Reveal";

const connectLinks = siteConfig.socials.filter((s) =>
  ["GitHub", "LinkedIn", "Resume"].includes(s.label)
);

const inputClass =
  "w-full rounded-xl border border-border bg-white/[0.02] px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-faint focus:border-border-strong focus:ring-2 focus:ring-accent/25";
const labelClass = "mb-1.5 block text-xs font-medium text-muted";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      const json = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!res.ok) throw new Error(json?.error ?? "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Pitch + links */}
          <div>
            <Reveal>
              <span className="text-eyebrow text-accent-soft">Contact</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h1 mt-5 text-gradient">Let&rsquo;s build something.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-lead text-muted">
                Have a role, a project, or a question? Send a message and I&rsquo;ll
                get back to you.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                {connectLinks.map((s) => {
                  const Icon = s.icon;
                  const external = !s.href.startsWith("#");
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2 text-sm text-muted transition-colors hover:border-border-strong hover:text-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="surface-card rounded-3xl p-6 sm:p-8"
              noValidate
            >
              {/* Honeypot: hidden from users, tempting to bots. */}
              <div className="hidden" aria-hidden>
                <label htmlFor="website">Leave this field empty</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid gap-5">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={200}
                    autoComplete="name"
                    placeholder="Jane Recruiter"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    autoComplete="email"
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    maxLength={5000}
                    rows={5}
                    placeholder="A few lines about the role or project…"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 text-sm disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  Send message
                </button>

                {status === "success" && (
                  <p
                    role="status"
                    className="flex items-center gap-2 text-sm text-[#7fe0a8]"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Thanks! Your message was sent. I&rsquo;ll be in touch.
                  </p>
                )}
                {status === "error" && (
                  <p
                    role="alert"
                    className="flex items-start gap-2 text-sm text-[#ff8f8f]"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
