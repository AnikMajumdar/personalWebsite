import type { LucideIcon } from "lucide-react";
import { Aperture } from "lucide-react";

export type Category =
  | "AI/ML"
  | "Full Stack"
  | "Backend"
  | "Computer Vision"
  | "Distributed Systems"
  | "Data"
  | "Developer Tools";

export const categories: Category[] = [
  "AI/ML",
  "Full Stack",
  "Backend",
  "Computer Vision",
  "Distributed Systems",
  "Data",
  "Developer Tools",
];

export type Motif = "orbit" | "nodes" | "scan" | "wave" | "grid" | "layers" | "flow";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  categories: Category[];
  stack: string[];
  problem: string;
  highlights: string[];
  impact: string;
  metrics?: ProjectMetric[];
  github?: string;
  demo?: string;
  year?: string;
  featured?: boolean;
  icon: LucideIcon;
  motif: Motif;
  gradient: [string, string];
}

export const projects: Project[] = [
  {
    id: "courtcheck",
    name: "CourtCheck",
    tagline:
      "From 20+ hours of weekly film review to a ~5-minute per-match summary.",
    description:
      "A tennis analytics platform built with UC Davis Aggie Sports Analytics for the UC Davis women's tennis program. CourtCheck turns match footage into structured analytics and AI-generated scouting reports through a pipeline of specialized computer-vision and machine-learning models.",
    categories: ["Computer Vision", "AI/ML", "Full Stack"],
    stack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Modal",
    ],
    problem:
      "Reviewing match film for a college tennis program can take 20+ hours a week. CourtCheck compresses that into a concise, automated per-match summary coaches can act on.",
    highlights: [
      "Ball tracking with TrackNet v2 and player pose estimation with YOLOv8m-pose",
      "Bounce classification with a CatBoost model, plus a Temporal Convolutional Network trained on UC Davis-labeled data for pose-based analysis",
      "GPT-based automated scouting reports generated from the processed match analytics",
      "FastAPI backend with Supabase / PostgreSQL and signed-URL video access, deployed on Modal and Vercel",
    ],
    impact:
      "Turns 20+ hrs/week of film review into a ~5-minute per-match summary, with ~3× processing throughput across a pipeline of 5+ CV/ML models. Used by coaches in the UC Davis women's tennis program, with 5,000+ GitHub visits.",
    metrics: [
      { value: "5+", label: "CV / ML Models" },
      { value: "3×", label: "Throughput" },
      { value: "5,000+", label: "GitHub Visits" },
    ],
    // TODO: add the public CourtCheck repo + live demo URLs to surface the CTAs.
    // github: "https://github.com/...",
    // demo: "https://...",
    featured: true,
    icon: Aperture,
    motif: "scan",
    gradient: ["#7c8cff", "#b18cff"],
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const otherProjects = projects.filter((p) => !p.featured);
