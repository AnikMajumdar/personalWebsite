import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  BrainCircuit,
  Database,
  Boxes,
} from "lucide-react";

export interface SkillGroup {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    blurb: "Python and Go anchor my recent engineering work.",
    icon: Code2,
    accent: "#4d8bff",
    skills: ["Python", "Go", "C++", "Java", "JavaScript / TypeScript"],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    blurb: "Services built for real-time, distributed workloads.",
    icon: Server,
    accent: "#22d3ee",
    skills: ["FastAPI", "REST APIs", "gRPC", "Node.js"],
  },
  {
    id: "aiml",
    title: "AI / ML",
    blurb: "Applied CV and ML pipelines behind CourtCheck and AeroRoute.",
    icon: BrainCircuit,
    accent: "#38bdf8",
    skills: ["PyTorch", "OpenCV", "scikit-learn", "CatBoost"],
  },
  {
    id: "database",
    title: "Data",
    blurb: "Relational, geospatial, and graph storage.",
    icon: Database,
    accent: "#60a5fa",
    skills: ["PostgreSQL", "PostGIS", "Neo4j", "ClickHouse"],
  },
  {
    id: "infra",
    title: "Infrastructure",
    blurb: "Containerized apps shipped and scaled.",
    icon: Boxes,
    accent: "#4d8bff",
    skills: ["Docker", "Kubernetes", "Linux", "Modal", "Git"],
  },
];
