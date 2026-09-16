import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  BrainCircuit,
  Boxes,
  MonitorSmartphone,
  Database,
} from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100, subtle proficiency signal
}

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    blurb: "The core tools I reach for daily.",
    icon: Code2,
    accent: "#7c8cff",
    skills: [
      { name: "Python", level: 95 },
      { name: "Go", level: 88 },
      { name: "TypeScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 88 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "Services built to stay fast under load.",
    icon: Server,
    accent: "#5fd6e6",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "gRPC", level: 88 },
      { name: "REST APIs", level: 93 },
      { name: "Microservices", level: 86 },
      { name: "Flask", level: 82 },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    blurb: "From models to production inference.",
    icon: BrainCircuit,
    accent: "#b18cff",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "Computer Vision", level: 88 },
      { name: "LLMs", level: 87 },
      { name: "OpenCV", level: 85 },
      { name: "Vector Databases", level: 84 },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    blurb: "Shipping and scaling with confidence.",
    icon: Boxes,
    accent: "#7c8cff",
    skills: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 85 },
      { name: "CI/CD", level: 88 },
      { name: "Cloud", level: 86 },
      { name: "Git", level: 95 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces that feel effortless.",
    icon: MonitorSmartphone,
    accent: "#5fd6e6",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 90 },
    ],
  },
  {
    id: "database",
    title: "Database",
    blurb: "Storage tuned to the access pattern.",
    icon: Database,
    accent: "#b18cff",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "ClickHouse", level: 84 },
      { name: "Supabase", level: 86 },
    ],
  },
];
