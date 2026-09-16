import type { LucideIcon } from "lucide-react";
import {
  Aperture,
  Network,
  ScanSearch,
  LineChart,
  Terminal,
  ShieldCheck,
  Layers,
} from "lucide-react";

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
  year: string;
  featured?: boolean;
  icon: LucideIcon;
  motif: Motif;
  gradient: [string, string];
}

/**
 * Project catalogue. Links are placeholders ("#") — no identifying accounts.
 */
export const projects: Project[] = [
  {
    id: "aperture",
    name: "Aperture",
    tagline: "A low-latency computer-vision pipeline for real-time video.",
    description:
      "An edge-ready inference pipeline that turns raw camera streams into structured, queryable insight in real time.",
    categories: ["Computer Vision", "AI/ML"],
    stack: ["Python", "PyTorch", "OpenCV", "ONNX Runtime", "gRPC", "CUDA", "Docker"],
    problem:
      "Running multi-stage vision workloads on high-FPS streams while keeping end-to-end latency low enough for real-time decisions.",
    highlights: [
      "Ensemble of detection, tracking, and segmentation models fused into one streaming graph",
      "Dynamic GPU batching and ONNX Runtime compilation for 3× throughput",
      "Back-pressure-aware gRPC transport with frame-drop guarantees",
    ],
    impact:
      "Sustained sub-30ms inference on 1080p streams and cut GPU cost per stream by 60%.",
    metrics: [
      { value: "5+", label: "ML Models" },
      { value: "3×", label: "Throughput" },
      { value: "5,000+", label: "GitHub Visits" },
    ],
    github: "#",
    demo: "#",
    year: "2025",
    featured: true,
    icon: Aperture,
    motif: "scan",
    gradient: ["#7c8cff", "#b18cff"],
  },
  {
    id: "helix",
    name: "Helix",
    tagline: "A fault-tolerant orchestrator for millions of background jobs.",
    description:
      "A distributed task engine that schedules, retries, and observes millions of jobs with exactly-once semantics.",
    categories: ["Distributed Systems", "Backend"],
    stack: ["Go", "gRPC", "Kubernetes", "PostgreSQL", "Redis"],
    problem:
      "Coordinating huge volumes of asynchronous work across nodes without duplicate execution or lost tasks.",
    highlights: [
      "Raft-backed scheduler with leader election and graceful failover",
      "Idempotent execution layer delivering exactly-once side effects",
      "Horizontal sharding of the work queue for linear scaling",
    ],
    impact:
      "Held 99.98% delivery reliability while scaling to 2M+ jobs per day.",
    metrics: [
      { value: "2M+", label: "Jobs / day" },
      { value: "99.98%", label: "Reliability" },
    ],
    github: "#",
    year: "2025",
    icon: Network,
    motif: "nodes",
    gradient: ["#5fd6e6", "#7c8cff"],
  },
  {
    id: "atlas",
    name: "Atlas",
    tagline: "Semantic search over millions of documents in under 100ms.",
    description:
      "A retrieval-augmented search service delivering grounded answers over large private corpora.",
    categories: ["AI/ML", "Data"],
    stack: ["Python", "FastAPI", "Vector Databases", "LLMs", "ClickHouse"],
    problem:
      "Making millions of unstructured documents instantly searchable with grounded, citation-backed answers.",
    highlights: [
      "Hybrid dense + sparse retrieval with cross-encoder re-ranking",
      "Streaming RAG pipeline with citation tracing and caching",
      "ClickHouse-backed analytics on query and relevance signals",
    ],
    impact:
      "Reduced median query latency to 92ms across a 4M-document index.",
    metrics: [
      { value: "4M+", label: "Documents" },
      { value: "92ms", label: "p50 Latency" },
    ],
    github: "#",
    demo: "#",
    year: "2024",
    icon: ScanSearch,
    motif: "orbit",
    gradient: ["#b18cff", "#7c8cff"],
  },
  {
    id: "continuum",
    name: "Continuum",
    tagline: "Real-time analytics dashboards from streaming event data.",
    description:
      "A full-stack analytics platform that transforms raw event streams into live, explorable dashboards.",
    categories: ["Full Stack", "Data"],
    stack: ["Next.js", "React", "TypeScript", "ClickHouse", "Supabase"],
    problem:
      "Giving teams sub-second visibility into product metrics without waiting on batch ETL.",
    highlights: [
      "Columnar ClickHouse warehouse feeding incremental materialized views",
      "Edge-rendered dashboards with optimistic, streaming updates",
      "Composable query builder with shareable, typed views",
    ],
    impact:
      "Delivered live dashboards over 200M+ events with a 95+ Lighthouse score.",
    metrics: [
      { value: "200M+", label: "Events" },
      { value: "95+", label: "Lighthouse" },
    ],
    github: "#",
    demo: "#",
    year: "2024",
    icon: LineChart,
    motif: "wave",
    gradient: ["#7c8cff", "#5fd6e6"],
  },
  {
    id: "forge",
    name: "Forge",
    tagline: "A batteries-included CLI to scaffold, test, and ship services.",
    description:
      "An opinionated developer toolchain that turns a new service idea into a deployable system in minutes.",
    categories: ["Developer Tools", "Backend"],
    stack: ["Go", "gRPC", "Docker", "CI/CD"],
    problem:
      "Eliminating the repetitive setup between a new idea and a production-ready, observable service.",
    highlights: [
      "Template engine generating typed clients, tests, and CI in one command",
      "Pluggable module system for auth, telemetry, and storage",
      "Reproducible container builds with cached, hermetic layers",
    ],
    impact:
      "Cut new-service bootstrap time from days to under ten minutes.",
    metrics: [
      { value: "10 min", label: "To Deploy" },
      { value: "20+", label: "Generators" },
    ],
    github: "#",
    year: "2024",
    icon: Terminal,
    motif: "grid",
    gradient: ["#9b9ba6", "#7c8cff"],
  },
  {
    id: "sentinel",
    name: "Sentinel",
    tagline: "A high-throughput inference gateway with guardrails.",
    description:
      "A routing and safety layer that sits in front of LLM providers to add caching, guardrails, and observability.",
    categories: ["Backend", "AI/ML"],
    stack: ["Python", "FastAPI", "LLMs", "Redis", "Kubernetes"],
    problem:
      "Serving LLM traffic safely and affordably across providers under bursty load.",
    highlights: [
      "Adaptive routing across providers with cost- and latency-aware policies",
      "Semantic response cache cutting duplicate token spend",
      "Streaming guardrails for PII redaction and policy enforcement",
    ],
    impact:
      "Lowered token spend by 40% while adding full request observability.",
    metrics: [
      { value: "40%", label: "Cost Saved" },
      { value: "1.2k", label: "req/s" },
    ],
    github: "#",
    year: "2025",
    icon: ShieldCheck,
    motif: "flow",
    gradient: ["#7c8cff", "#6070ff"],
  },
  {
    id: "mosaic",
    name: "Mosaic",
    tagline: "An interactive studio for image segmentation datasets.",
    description:
      "A browser-based studio for labeling, augmenting, and validating computer-vision datasets at scale.",
    categories: ["Computer Vision", "Full Stack"],
    stack: ["React", "TypeScript", "PyTorch", "OpenCV", "FastAPI"],
    problem:
      "Producing high-quality segmentation labels fast, with model-assisted tooling in the loop.",
    highlights: [
      "Model-in-the-loop labeling with on-the-fly mask suggestions",
      "GPU-accelerated augmentation previews rendered client-side",
      "Versioned datasets with reproducible export manifests",
    ],
    impact:
      "Tripled labeling throughput while improving mask IoU consistency.",
    metrics: [
      { value: "3×", label: "Labeling Speed" },
      { value: "0.9+", label: "Mean IoU" },
    ],
    github: "#",
    demo: "#",
    year: "2023",
    icon: Layers,
    motif: "layers",
    gradient: ["#5fd6e6", "#b18cff"],
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
export const otherProjects = projects.filter((p) => !p.featured);
