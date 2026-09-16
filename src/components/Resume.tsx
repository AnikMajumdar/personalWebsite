"use client";

import { Download, Eye, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "./ui/Reveal";

const previewSections = [
  { title: "Experience", rows: [92, 78, 64] },
  { title: "Projects", rows: [88, 70] },
  { title: "Skills", rows: [96, 82] },
];

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <span className="text-eyebrow text-accent-soft">Resume</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-h1 mt-5 text-gradient">
                The full story, on one page.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-lead text-muted">
                A concise overview of my experience, projects, and technical
                depth — formatted for a quick read.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="btn-primary inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-white/[0.03] px-7 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-white/[0.06]"
                >
                  <Eye className="h-4 w-4 text-muted" />
                  View Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 flex items-center gap-2 font-mono text-xs text-faint">
                <FileText className="h-3.5 w-3.5" />
                PDF · Updated 2026
              </p>
            </Reveal>
          </div>

          {/* Document preview */}
          <Reveal delay={0.1}>
            <div className="group relative [perspective:1400px]">
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_50%_30%,rgba(124,140,255,0.22),transparent_65%)] blur-2xl" />
              <div className="surface-card relative overflow-hidden rounded-2xl p-6 transition-transform duration-500 [transform:rotateX(6deg)_rotateY(-8deg)] group-hover:[transform:rotateX(2deg)_rotateY(-3deg)] sm:p-8">
                {/* Header band */}
                <div className="flex items-center justify-between rounded-xl bg-[linear-gradient(120deg,rgba(124,140,255,0.16),rgba(177,140,255,0.1))] p-5">
                  <div>
                    <div className="text-lg font-semibold text-foreground">
                      Software Engineer
                    </div>
                    <div className="mt-1 h-2 w-28 rounded-full bg-white/15" />
                  </div>
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/40">
                    <FileText className="h-5 w-5 text-accent-soft" />
                  </div>
                </div>

                {/* Skeleton sections */}
                <div className="mt-6 space-y-6">
                  {previewSections.map((s) => (
                    <div key={s.title}>
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-xs font-medium uppercase tracking-widest text-muted">
                          {s.title}
                        </span>
                        <span className="ml-2 h-px flex-1 bg-border" />
                      </div>
                      <div className="mt-3 space-y-2">
                        {s.rows.map((w, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-sm bg-white/10" />
                            <span
                              className="h-2 rounded-full bg-white/[0.08]"
                              style={{ width: `${w}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sheen */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.05)_50%,transparent_70%)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
