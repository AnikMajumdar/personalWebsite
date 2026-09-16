import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  BrainCircuit,
  MonitorSmartphone,
  Database,
  Boxes,
} from "lucide-react";

export interface Skill {
  name: string;
  level: number; // 0-100, subtle emphasis (not a precise proficiency claim)
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
    blurb: "Python and Go anchor my recent engineering work.",
    icon: Code2,
    accent: "#7c8cff",
    skills: [
      { name: "Python", level: 95 },
      { name: "Go", level: 88 },
      { name: "TypeScript", level: 86 },
      { name: "JavaScript", level: 82 },
      { name: "SQL", level: 85 },
      { name: "C++", level: 74 },
      { name: "Java", level: 74 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    blurb: "Services built for real-time, distributed workloads.",
    icon: Server,
    accent: "#5fd6e6",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "REST APIs", level: 90 },
      { name: "gRPC", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    blurb: "Applied CV and ML pipelines, plus LLM-powered features.",
    icon: BrainCircuit,
    accent: "#b18cff",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "OpenCV", level: 88 },
      { name: "scikit-learn", level: 84 },
      { name: "CatBoost", level: 80 },
      { name: "pandas", level: 86 },
      { name: "NumPy", level: 86 },
      { name: "OpenAI API", level: 84 },
      { name: "Gemini API", level: 82 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Type-safe, polished product interfaces.",
    icon: MonitorSmartphone,
    accent: "#5fd6e6",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 86 },
      { name: "JavaScript", level: 82 },
      { name: "HTML / CSS", level: 85 },
    ],
  },
  {
    id: "database",
    title: "Databases & Data",
    blurb: "Relational, geospatial, and graph storage.",
    icon: Database,
    accent: "#b18cff",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "PostGIS", level: 80 },
      { name: "Neo4j", level: 80 },
      { name: "Supabase", level: 86 },
      { name: "MongoDB", level: 76 },
      { name: "ClickHouse", level: 74 },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    blurb: "Containerized apps shipped and scaled.",
    icon: Boxes,
    accent: "#7c8cff",
    skills: [
      { name: "Docker", level: 88 },
      { name: "Kubernetes", level: 84 },
      { name: "Linux", level: 82 },
      { name: "Git", level: 92 },
      { name: "Vercel", level: 86 },
      { name: "Modal", level: 80 },
    ],
  },
];
