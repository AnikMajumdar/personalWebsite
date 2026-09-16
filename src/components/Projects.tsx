"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { categories, featuredProjects, otherProjects, type Category } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { FeaturedProject } from "./FeaturedProject";
import { SectionHeading } from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

type Filter = Category | "All";
const filters: Filter[] = ["All", ...categories];

/** Bento spans + card variant keyed by project id. */
const layout: Record<string, { span: string; variant: "default" | "wide" }> = {
  helix: { span: "sm:col-span-2 lg:col-span-2", variant: "wide" },
  atlas: { span: "lg:col-span-1", variant: "default" },
  continuum: { span: "lg:col-span-1", variant: "default" },
  forge: { span: "lg:col-span-1", variant: "default" },
  sentinel: { span: "lg:col-span-1", variant: "default" },
  mosaic: { span: "sm:col-span-2 lg:col-span-2", variant: "wide" },
};

export function Projects() {
  const [active, setActive] = useState<Filter>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? otherProjects
        : otherProjects.filter((p) => p.categories.includes(active)),
    [active]
  );

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Selected Work"
          title="Two products, built end to end."
          description="Two production systems spanning backend, AI/ML, computer vision, geospatial, and full-stack engineering."
        />

        {/* Featured deep-dives */}
        {featuredProjects.map((project, i) => (
          <FeaturedProject
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
          />
        ))}

        {/* Additional projects appear automatically when more are added */}
        {otherProjects.length > 0 && (
        <div className="mt-24 sm:mt-28">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <LayoutGroup id="project-filters">
              {filters.map((f) => {
                const isActive = active === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActive(f)}
                    aria-pressed={isActive}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-border-strong bg-white/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {f}
                  </button>
                );
              })}
            </LayoutGroup>
          </div>

          {/* Bento grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-flow-dense"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => {
                const cfg = layout[project.id] ?? {
                  span: "lg:col-span-1",
                  variant: "default" as const,
                };
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    variant={cfg.variant}
                    className={cfg.span}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted">
              No projects in this category yet.
            </p>
          )}
        </div>
        )}
      </div>
    </section>
  );
}
