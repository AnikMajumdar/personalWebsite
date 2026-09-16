import type { LucideIcon } from "lucide-react";
import { Aperture, Route } from "lucide-react";

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
      "A full-stack computer-vision and AI platform, built in partnership with UC Davis Tennis, that turns raw match footage into ball tracking, court detection, stroke recognition, heatmaps, shot maps, and AI-generated scouting reports for coaches.",
    categories: ["Computer Vision", "AI/ML", "Full Stack"],
    stack: [
      "Python",
      "PyTorch",
      "OpenCV",
      "TrackNet v2",
      "YOLOv8m-pose",
      "CatBoost",
      "FastAPI",
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Modal",
      "GPT",
    ],
    problem:
      "Reviewing match film for a college tennis program can take 20+ hours a week. CourtCheck compresses that into a concise, automated per-match summary coaches can act on.",
    highlights: [
      "Multi-stage CV pipeline: TrackNet v2 ball tracking, court detection, YOLOv8m-pose player pose, CatBoost bounce classification, and stroke recognition",
      "GPU-accelerated inference on Modal, integrating 5+ specialized ML/CV models feeding downstream analytics",
      "GPT-powered analysis turns processed analytics into scouting reports, heatmaps, and shot maps",
      "FastAPI backend with Supabase (Auth, Storage, signed URLs) and PostgreSQL; Next.js / React / TypeScript frontend",
    ],
    impact:
      "Cuts 20+ hrs/week of film review to a ~5-minute per-match summary, with ~3× video-processing throughput. Used by UC Davis women's tennis coaches, with 5,000+ GitHub clones.",
    metrics: [
      { value: "5+", label: "CV / ML Models" },
      { value: "3×", label: "Throughput" },
      { value: "5,000+", label: "GitHub Clones" },
    ],
    demo: "https://courtcheck-rho.vercel.app/",
    featured: true,
    icon: Aperture,
    motif: "scan",
    gradient: ["#7c8cff", "#b18cff"],
  },
  {
    id: "aeroroute",
    name: "AeroRoute",
    tagline:
      "Optimized flight routes across 85,000+ airports, with geospatial search and an AI copilot.",
    description:
      "A full-stack flight route optimization platform that combines geospatial search, weather, and machine learning to plan routes — with a Gemini-powered RAG copilot for route-specific explanations and decision support.",
    categories: ["Backend", "Full Stack", "AI/ML", "Data"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "PostGIS",
      "PostgreSQL",
      "Supabase",
      "scikit-learn",
      "Gemini",
    ],
    problem:
      "Planning a good flight route means searching a huge space of airports and candidates while accounting for weather and diversions. AeroRoute turns that into an optimized, explainable plan.",
    highlights: [
      "Geospatial routing engine over 85,000+ airports using PostGIS spatial queries, weather data, and diversion-airport analysis",
      "scikit-learn models predict flight delays and estimated time enroute, feeding the route optimizer",
      "Gemini-powered RAG copilot delivers route-specific explanations and decision support on top of the optimizer",
      "Asynchronous FastAPI backend with JWT authentication, rate limiting, REST APIs, and persistent route storage",
    ],
    impact:
      "Searches 85,000+ airports to generate optimized, explainable flight plans, backed by ML predictions and an AI decision-support copilot.",
    metrics: [
      { value: "85K+", label: "Airports Searched" },
      { value: "2", label: "ML Prediction Models" },
    ],
    demo: "https://aeroroute-six.vercel.app/",
    featured: true,
    icon: Route,
    motif: "nodes",
    gradient: ["#5fd6e6", "#7c8cff"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
