"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Cpu } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Reveal";
import { ProjectVisual } from "./ProjectVisual";
import { GithubIcon } from "./ui/icons";

export function FeaturedProject() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const project = featuredProject;
  const Icon = project.icon;

  return (
    <div ref={ref} className="mt-24 sm:mt-28">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-eyebrow text-accent-soft">Featured Project</span>
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[linear-gradient(135deg,#8b97ff,#b18cff)] shadow-[0_10px_30px_-10px_rgba(124,140,255,0.7)]">
                <Icon className="h-5 w-5 text-[#0a0a12]" />
              </span>
              <h3 className="text-h2 text-gradient">{project.name}</h3>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-5 text-lead text-foreground/90">{project.tagline}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-3 text-muted">{project.description}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-6 space-y-3">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-muted">
                  <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.16}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-border bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm"
                >
                  Live Demo <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-white/[0.03] px-6 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-white/[0.06]"
                >
                  <GithubIcon className="h-4 w-4" /> View Source
                </a>
              )}
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={0.1}>
          <motion.div
            style={{ y }}
            className="surface-card ring-accent relative aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <ProjectVisual
              motif={project.motif}
              gradient={project.gradient}
              uid={`${project.id}-featured`}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background/90 to-transparent p-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-accent-soft">
                  {project.categories.join(" · ")}
                </p>
                <p className="mt-1 text-sm text-muted">Real-time perception pipeline</p>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Metrics */}
      {project.metrics && (
        <Reveal delay={0.1}>
          <dl className="mt-10 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl surface-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1 p-6 sm:p-8">
                <dd className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                  <Counter value={m.value} />
                </dd>
                <dt className="text-sm text-muted">{m.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </div>
  );
}
