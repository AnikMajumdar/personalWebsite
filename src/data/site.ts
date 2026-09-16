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
  tagline: "Building production backend and AI/ML systems.",
  heroDescription:
    "UC Davis Computer Science student building production software across distributed systems, AI/ML, and full-stack applications.",
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
    { label: "Email", href: "#contact", icon: Mail },
    { label: "Resume", href: "#resume", icon: FileText },
  ] satisfies SocialLink[],

  about: {
    statement:
      "I like building software where the engineering problem connects to a real-world system, from analyzing tennis matches with computer vision to processing spacecraft telemetry and optimizing flight routes with geospatial data.",
    detail:
      "My work spans backend systems, AI/ML, and full-stack development, with a focus on turning complex data and workflows into usable software.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
