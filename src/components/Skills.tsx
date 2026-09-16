"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillGroups, type SkillGroup } from "@/data/skills";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const reduce = useReducedMotion();
  const Icon = group.icon;

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <div className="group surface-card relative h-full overflow-hidden rounded-3xl p-6 transition-colors duration-300 hover:border-border-strong">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `${group.accent}55` }}
        />

        <div className="flex items-center gap-3">
          <span
            className="grid h-10 w-10 place-items-center rounded-xl"
            style={{ background: `${group.accent}1f`, color: group.accent }}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-semibold tracking-tight text-foreground">
              {group.title}
            </h3>
            <p className="text-xs text-faint">{group.skills.length} skills</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted">{group.blurb}</p>

        <ul className="mt-5 space-y-3">
          {group.skills.map((skill) => (
            <li key={skill.name}>
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="text-foreground/85">{skill.name}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.span
                  className="block h-full rounded-full"
                  style={{ background: group.accent }}
                  initial={{ width: reduce ? `${skill.level}%` : 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Capabilities"
          title="A toolkit spanning the full stack."
          description="From model training to production infrastructure: the technologies I use to design, build, and ship reliable software."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.id} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
