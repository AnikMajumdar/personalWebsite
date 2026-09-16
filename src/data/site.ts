import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, FileText } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Central site configuration. Intentionally free of personally identifying
 * information — replace placeholder hrefs ("#") with real links if desired.
 */
export const siteConfig = {
  role: "Software Engineer",
  subrole: "CS Student",
  tagline: "Building intelligent software for the future.",
  heroDescription:
    "I design and build AI/ML systems, resilient backend services, and polished full-stack products — turning hard technical problems into fast, reliable software.",
  resumeUrl: "/resume.pdf",

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Resume", href: "#resume", id: "resume" },
  ] satisfies NavItem[],

  // Placeholder, non-identifying links. Swap "#" for real URLs when ready.
  socials: [
    { label: "GitHub", href: "#", icon: Github },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Resume", href: "/resume.pdf", icon: FileText },
  ] satisfies SocialLink[],

  about: {
    statement:
      "Software engineer focused on building scalable systems, intelligent applications, and polished user experiences.",
    detail:
      "I care about the full lifecycle of a product — from the data pipelines and inference services that power it, to the interface that makes it feel effortless. I gravitate toward problems at the intersection of machine learning and systems engineering.",
    interests: [
      "AI Engineering",
      "Backend Systems",
      "Full-Stack Development",
      "Computer Vision",
      "Developer Infrastructure",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
