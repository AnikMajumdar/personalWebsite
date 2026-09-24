"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Cpu } from "lucide-react";
import type { Project } from "@/data/projects";
import { Counter } from "./ui/Counter";
import { Reveal } from "./ui/Reveal";
import { ProjectVisual } from "./ProjectVisual";
import { GithubIcon } from "./ui/icons";
import { cn } from "@/lib/utils";

const metricCols: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean;
}

export function FeaturedProject({ project, reverse = false }: FeaturedProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const Icon = project.icon;

  return (
    <div ref={ref} className="mt-16 sm:mt-20">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-eyebrow text-accent-soft">Featured Project</span>
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </Reveal>

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Content */}
        <div className={cn(reverse && "lg:order-2")}>
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

          {(project.github || project.demo) && (
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
          )}
        </div>

        {/* Visual */}
        <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
          <motion.div
            style={{ y }}
            className="surface-card ring-accent relative aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <ProjectVisual
              motif={project.motif}
              gradient={project.gradient}
              uid={`${project.id}-featured`}
              image={project.image}
              imageAlt={project.imageAlt}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-background/90 to-transparent p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-accent-soft">
                {project.categories.join(" · ")}
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <Reveal delay={0.1}>
          <dl
            className={cn(
              "mt-10 grid grid-cols-1 divide-y divide-border overflow-hidden rounded-3xl surface-card sm:divide-x sm:divide-y-0",
              metricCols[project.metrics.length] ?? "sm:grid-cols-3"
            )}
          >
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
