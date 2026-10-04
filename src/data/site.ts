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
    image: "/Anik Headshot.JPG",
    imageAlt: "Anik Majumdar",
    bio: [
      "Hi, I'm Anik, a Computer Science student at UC Davis graduating in December 2027. I've worked at startups including Turion Space, where I built mission control software for spacecraft operations, and XIPHI.AI, where I worked with vector databases and backend systems.",
      "On campus, I'm involved with Aggie Sports Analytics, where I've helped build computer vision and machine learning tools for the UC Davis tennis team. I enjoy working on projects where software connects to a real-world problem, whether that's spacecraft telemetry, sports analytics, or geospatial routing.",
      "Outside of computer science, I enjoy going to the gym, running, swimming, spending time outdoors, and hanging out with friends. I'm from Orange County, California, so I especially enjoy being near the beach. I'm also working toward my private pilot license and hope to complete it after graduation.",
      "Looking ahead, I want to work on challenging problems and build technology that has a meaningful real-world impact. I also hope to give back to the communities that have shaped me, including organizations like the Boy Scouts of America and my temple.",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
