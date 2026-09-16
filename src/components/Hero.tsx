"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { HeroVisual } from "./HeroVisual";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const domains = [
  "AI / ML",
  "Backend",
  "Full-Stack",
  "Computer Vision",
  "Distributed Systems",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Visual layer */}
      <div className="absolute inset-0 -z-[1]">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_40%,#000_25%,transparent_75%)]">
          <HeroVisual />
        </div>

        {/* Orbital rings for depth */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[540px] w-[540px] animate-spin-slow rounded-full border border-white/[0.05] sm:h-[720px] sm:w-[720px]" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[360px] w-[360px] rounded-full border border-white/[0.06] sm:h-[480px] sm:w-[480px]" />
        </div>

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(124,140,255,0.16),transparent_70%)] blur-2xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative z-10 flex flex-col items-center text-center"
      >
        <motion.a
          href="#projects"
          variants={item}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] py-1.5 pl-2 pr-3.5 text-sm text-muted backdrop-blur-sm transition-colors hover:border-border-strong hover:text-foreground"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent-soft">
            <Sparkles className="h-3 w-3" />
            Open to opportunities
          </span>
          <span className="hidden sm:inline">Software Engineer · CS Student</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.a>

        <motion.h1
          variants={item}
          className="text-display text-gradient mt-7 max-w-4xl"
        >
          Building{" "}
          <span className="text-gradient-accent">intelligent</span> software
          <br className="hidden sm:block" /> for the future.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lead mt-6 max-w-xl text-muted"
        >
          {siteConfig.heroDescription}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#projects"
            className="btn-primary group inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#resume"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-white/[0.03] px-7 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:border-border-strong hover:bg-white/[0.06]"
          >
            View Resume
            <ArrowUpRight className="h-4 w-4 text-muted" />
          </a>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-faint"
        >
          {domains.map((d, i) => (
            <li key={d} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-white/15" />}
              {d}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        aria-label="Scroll to projects"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint sm:flex"
      >
        <span className="text-eyebrow text-[10px]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1">
          <span className="h-1.5 w-1 rounded-full bg-accent-soft animate-scroll-hint" />
        </span>
      </a>
    </section>
  );
}
