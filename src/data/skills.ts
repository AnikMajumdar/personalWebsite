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
      { name: "Go", level: 90 },
      { name: "TypeScript", level: 86 },
      { name: "JavaScript", level: 82 },
      { name: "Java", level: 75 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "APIs and services built for real-time, distributed workloads.",
    icon: Server,
    accent: "#5fd6e6",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "REST APIs", level: 90 },
      { name: "gRPC", level: 84 },
      { name: "Microservices", level: 85 },
      { name: "Distributed Systems", level: 84 },
      { name: "Real-time Data", level: 82 },
      { name: "Flask", level: 82 },
    ],
  },
  {
    id: "aiml",
    title: "AI / ML",
    blurb: "Applied computer-vision and ML pipelines, plus LLM-powered features.",
    icon: BrainCircuit,
    accent: "#b18cff",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "Computer Vision", level: 90 },
      { name: "OpenCV", level: 88 },
      { name: "Object Detection", level: 85 },
      { name: "Pose Estimation", level: 84 },
      { name: "Video Analysis", level: 85 },
      { name: "LLM / GPT Applications", level: 84 },
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
    ],
  },
  {
    id: "database",
    title: "Databases / Data",
    blurb: "Storage and retrieval tuned to the access pattern.",
    icon: Database,
    accent: "#b18cff",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "Supabase", level: 88 },
      { name: "Vector Databases", level: 78 },
      { name: "ClickHouse", level: 76 },
    ],
  },
  {
    id: "infra",
    title: "Infrastructure",
    blurb: "Containerized applications shipped and scaled.",
    icon: Boxes,
    accent: "#7c8cff",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Git", level: 92 },
      { name: "Cloud", level: 80 },
      { name: "Containerized Apps", level: 84 },
    ],
  },
];
