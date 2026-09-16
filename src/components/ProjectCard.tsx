"use client";

import { useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";
import { GithubIcon } from "./ui/icons";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "wide";
  className?: string;
}

export function ProjectCard({
  project,
  variant = "default",
  className,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;
  const wide = variant === "wide";

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn("h-full", className)}
    >
      <div
        ref={cardRef}
        onPointerMove={onMove}
        className="group surface-card relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(240px circle at var(--spot-x,50%) var(--spot-y,0), rgba(124,140,255,0.10), transparent 60%)",
          }}
        />

        <div className={cn("flex h-full flex-col", wide && "lg:flex-row")}>
          {/* Visual */}
          <div
            className={cn(
              "relative overflow-hidden border-b border-border",
              wide ? "h-48 lg:h-auto lg:w-[46%] lg:border-b-0 lg:border-r" : "h-44"
            )}
          >
            <ProjectVisual
              motif={project.motif}
              gradient={project.gradient}
              uid={project.id}
              className="transition-transform duration-500 group-hover:scale-[1.06]"
            />
            <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 font-mono text-[11px] text-muted backdrop-blur-md">
              {project.categories[0]}
            </span>
            <span className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-xl border border-border bg-background/60 backdrop-blur-md">
              <Icon className="h-[18px] w-[18px] text-accent-soft" />
            </span>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-1 flex-col p-5 sm:p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-faint">{project.year}</span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Tech stack */}
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.slice(0, wide ? 6 : 4).map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-muted transition-colors group-hover:border-border-strong group-hover:text-foreground/80"
                >
                  {tech}
                </li>
              ))}
              {project.stack.length > (wide ? 6 : 4) && (
                <li className="rounded-md px-2 py-0.5 font-mono text-[11px] text-faint">
                  +{project.stack.length - (wide ? 6 : 4)}
                </li>
              )}
            </ul>

            {/* Expandable details */}
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-5 space-y-4 border-t border-border pt-5 text-sm">
                    <div>
                      <p className="text-eyebrow text-[10px] text-faint">Problem</p>
                      <p className="mt-1.5 text-muted">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-eyebrow text-[10px] text-faint">
                        Technical Highlights
                      </p>
                      <ul className="mt-1.5 space-y-1.5">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex gap-2 text-muted">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-eyebrow text-[10px] text-faint">Impact</p>
                      <p className="mt-1.5 text-foreground/90">{project.impact}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between gap-3 pt-5">
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} source on GitHub`}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-lg border border-border px-2.5 py-1.5 text-xs text-muted transition-colors hover:border-border-strong hover:text-foreground"
                  >
                    Live <ArrowUpRight className="h-3 w-3" />
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-accent-soft transition-colors hover:text-accent"
              >
                {expanded ? "Less" : "Details"}
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-300",
                    expanded && "rotate-180"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
