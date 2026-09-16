"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function ExperienceTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.6"],
  });

  const main = experience.filter((e) => !e.earlier);
  const earlier = experience.filter((e) => e.earlier);

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of building and shipping."
          description="Where I've built production-facing software, from distributed ground systems at Turion Space to a computer-vision platform used by UC Davis coaches."
        />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-10">
          {/* Rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[11px]" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent via-violet to-transparent sm:left-[11px]"
          />

          <div className="space-y-10">
            {main.map((item, i) => {
              const Icon = item.kind === "education" ? GraduationCap : Briefcase;
              return (
                <Reveal key={item.id} delay={i * 0.04} y={26}>
                  <div className="relative">
                    {/* Node */}
                    <span className="absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-border-strong bg-elevated sm:-left-10">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>

                    <div className="surface-card rounded-2xl p-6 transition-colors duration-300 hover:border-border-strong sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-soft">
                          <Icon className="h-3.5 w-3.5" />
                          {item.period}
                        </span>
                        {item.metric && (
                          <span className="inline-flex items-baseline gap-1.5 rounded-full border border-border bg-white/[0.02] px-3 py-1">
                            <span className="text-sm font-semibold text-gradient">
                              {item.metric.value}
                            </span>
                            <span aria-hidden className="text-[11px] text-faint">
                              ·
                            </span>
                            <span className="text-[11px] text-muted">
                              {item.metric.label}
                            </span>
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted">{item.org}</p>

                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {item.summary}
                      </p>

                      {item.achievements.length > 0 && (
                        <ul className="mt-4 space-y-2">
                          {item.achievements.map((a) => (
                            <li key={a} className="flex gap-2.5 text-sm text-foreground/80">
                              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.stack.length > 0 && (
                        <ul className="mt-5 flex flex-wrap gap-1.5">
                          {item.stack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-md border border-border bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {earlier.length > 0 && (
          <div className="mt-12">
            <p className="text-eyebrow text-[10px] text-faint">
              Earlier Experience
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {earlier.map((item) => (
                <div key={item.id} className="surface-card rounded-2xl p-5">
                  <span className="font-mono text-xs text-accent-soft">
                    {item.period}
                  </span>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted">{item.org}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
