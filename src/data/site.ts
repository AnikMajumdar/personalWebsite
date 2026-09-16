import { FileText, Mail } from "lucide-react";
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
 * Central site configuration. Professional identity plus a public contact
 * email. No phone or address. The resume stays behind Clerk auth.
 */
export const siteConfig = {
  name: "Anik Majumdar",
  role: "Software Engineer",
  subrole: "Computer Science · UC Davis",
  tagline: "Building intelligent software and scalable systems.",
  heroDescription:
    "Computer Science student at UC Davis building across backend systems, AI/ML, and full-stack applications, from distributed systems to computer vision and geospatial AI.",
  resumeUrl: "#resume",

  nav: [
    { label: "Home", href: "#home", id: "home" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Resume", href: "#resume", id: "resume" },
  ] satisfies NavItem[],

  // Professional links. Contact details are intentionally omitted.
  socials: [
    { label: "GitHub", href: "https://github.com/AnikMajumdar", icon: GithubIcon },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/anik-maj/",
      icon: LinkedinIcon,
    },
    { label: "Email", href: "mailto:amaj@ucdavis.edu", icon: Mail },
    { label: "Resume", href: "#resume", icon: FileText },
  ] satisfies SocialLink[],

  about: {
    statement:
      "Software engineering at the intersection of backend systems, AI/ML, and real-world applications.",
    detail:
      "I'm a Computer Science student at UC Davis focused on building production software across backend systems, AI/ML, and full-stack applications. My projects span computer vision, geospatial optimization, recommendation engines, distributed systems, and AI-powered applications.",
    interests: [
      "Backend Engineering",
      "AI Engineering",
      "Full-Stack Development",
      "Computer Vision",
      "Geospatial Software",
      "Distributed Systems",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
