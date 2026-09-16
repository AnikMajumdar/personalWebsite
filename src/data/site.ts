import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, type IconType } from "@/components/ui/icons";

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

/**
 * Central site configuration. Intentionally free of personally identifying
 * information — replace placeholder hrefs ("#") with real links if desired.
 */
export const siteConfig = {
  role: "Software Engineer",
  subrole: "Computer Science · UC Davis",
  tagline: "Building intelligent software for the future.",
  heroDescription:
    "I'm a UC Davis Computer Science student building software at the intersection of AI and systems — production-facing backends, full-stack products, and computer-vision and machine-learning pipelines.",
  resumeUrl: "#resume",

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Resume", href: "#resume", id: "resume" },
  ] satisfies NavItem[],

  // Placeholder, non-identifying links. Swap "#" for real URLs when ready.
  socials: [
    { label: "GitHub", href: "#", icon: GithubIcon },
    { label: "LinkedIn", href: "#", icon: LinkedinIcon },
    { label: "Resume", href: "#resume", icon: FileText },
  ] satisfies SocialLink[],

  about: {
    statement:
      "I build intelligent, scalable software across the boundary between sophisticated backend systems and AI-powered applications.",
    detail:
      "I'm a Computer Science student at UC Davis focused on production-oriented engineering — distributed backends, APIs, real-time data, and applied AI. My work spans computer-vision and machine-learning pipelines, full-stack products, and the infrastructure that ships them to real users.",
    interests: [
      "Backend Engineering",
      "AI Engineering",
      "Full-Stack Development",
      "Computer Vision",
      "Distributed Systems",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
