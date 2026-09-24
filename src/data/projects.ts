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
  image?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    id: "courtcheck",
    name: "CourtCheck",
    tagline:
      "From 20+ hours of weekly film review to a ~5-minute per-match summary.",
    description:
      "Full-stack computer vision platform built with UC Davis Women's Tennis to automate match analysis and scouting.",
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
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Modal",
    ],
    problem:
      "Reviewing match film for a college tennis program can take 20+ hours a week. CourtCheck compresses that into a concise, automated per-match summary coaches can act on.",
    highlights: [
      "Built a multi-stage computer vision pipeline using TrackNet v2, YOLOv8m-pose, CatBoost, and PyTorch for ball tracking, player pose, bounce classification, and stroke recognition.",
      "Deployed GPU-accelerated inference on Modal and integrated 5+ ML/CV models into a production analytics pipeline.",
      "Built a FastAPI + PostgreSQL/Supabase backend and Next.js frontend, reducing ~20 hours of manual film review to ~5 minutes per match.",
    ],
    impact:
      "Cuts 20+ hrs/week of film review to a ~5-minute per-match summary, with ~3× video-processing throughput. Used by UC Davis women's tennis coaches, with 5,000+ GitHub clones.",
    metrics: [
      { value: "5+", label: "CV / ML Models" },
      { value: "3×", label: "Throughput" },
      { value: "5K+", label: "Repository Clones" },
    ],
    github: "https://github.com/AggieSportsAnalytics/CourtCheck",
    demo: "https://courtcheck-rho.vercel.app/",
    featured: true,
    icon: Aperture,
    motif: "scan",
    gradient: ["#7c8cff", "#b18cff"],
    image: "/courtcheckImage.png",
    imageAlt:
      "CourtCheck computer-vision overlay on a tennis match — court detection, ball tracking, and player detection with a court minimap.",
  },
  {
    id: "aeroroute",
    name: "AeroRoute",
    tagline:
      "Geospatial flight-route optimization across 85,000+ airports with weather-aware ML predictions.",
    description:
      "Full-stack flight route optimization platform combining geospatial search, weather data, machine learning, and route-specific explanations grounded in a Gemini-powered RAG system.",
    categories: ["Backend", "Full Stack", "AI/ML", "Data"],
    stack: [
      "FastAPI",
      "PostGIS",
      "PostgreSQL",
      "scikit-learn",
      "Gemini",
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
    ],
    problem:
      "Planning a good flight route means searching a huge space of airports and candidates while accounting for weather and diversions. AeroRoute turns that into an optimized, explainable plan.",
    highlights: [
      "Built a geospatial routing engine over 85,000+ airports using PostGIS spatial queries, weather data, and diversion-airport analysis.",
      "Built scikit-learn models for flight-delay and estimated-time-enroute prediction and integrated their outputs into route optimization.",
      "Built a Gemini-powered RAG system that provides route-specific explanations and decision support.",
      "Built an asynchronous FastAPI backend with JWT authentication, rate limiting, REST APIs, and persistent route storage.",
    ],
    impact:
      "Searches 85,000+ airports to generate optimized, explainable flight plans, backed by ML predictions and an AI decision-support copilot.",
    metrics: [
      { value: "85K+", label: "Airports Searched" },
      { value: "2", label: "ML Prediction Models" },
    ],
    github: "https://github.com/AnikMajumdar/AeroRoute",
    demo: "https://aeroroute-six.vercel.app/",
    featured: true,
    icon: Route,
    motif: "nodes",
    gradient: ["#5fd6e6", "#7c8cff"],
    image: "/aeroRoureImage.png",
    imageAlt:
      "AeroRoute flight-planning map — an optimized primary route with alternate paths, waypoints, weather checkpoints, and diversion airports across the United States.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
