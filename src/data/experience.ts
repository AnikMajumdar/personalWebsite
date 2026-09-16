export type ExperienceKind = "work" | "education";

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  kind: ExperienceKind;
  summary: string;
  achievements: string[];
  stack: string[];
}

/**
 * Experience timeline. Organizations are described generically to avoid
 * exposing identifying details.
 */
export const experience: Experience[] = [
  {
    id: "ai-infra",
    role: "Software Engineer",
    org: "AI Infrastructure Startup",
    period: "2025 — Present",
    kind: "work",
    summary:
      "Building the serving and tooling layer for large-scale machine-learning inference.",
    achievements: [
      "Designed an LLM inference gateway with adaptive routing that cut token spend by 40%.",
      "Shipped streaming guardrails and a semantic cache serving 1.2k requests per second.",
      "Established load-testing and observability standards adopted across the platform.",
    ],
    stack: ["Python", "FastAPI", "LLMs", "Redis", "Kubernetes", "gRPC"],
  },
  {
    id: "backend-platform",
    role: "Backend Engineer",
    org: "Cloud Platform Team",
    period: "2024 — 2025",
    kind: "work",
    summary:
      "Owned distributed services powering asynchronous workloads across the fleet.",
    achievements: [
      "Built a Raft-backed job orchestrator delivering exactly-once execution at 2M+ jobs/day.",
      "Reduced tail latency 35% by redesigning the queue sharding strategy.",
      "Led migration to gRPC, standardizing typed contracts across teams.",
    ],
    stack: ["Go", "gRPC", "PostgreSQL", "Kubernetes", "Docker"],
  },
  {
    id: "cv-research",
    role: "Machine Learning Engineer",
    org: "Computer Vision Lab",
    period: "2023 — 2024",
    kind: "work",
    summary:
      "Researched and productionized real-time perception models for streaming video.",
    achievements: [
      "Fused detection, tracking, and segmentation models into one low-latency pipeline.",
      "Achieved sub-30ms inference via dynamic GPU batching and ONNX compilation.",
      "Authored the internal labeling studio that tripled dataset throughput.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "ONNX", "CUDA"],
  },
  {
    id: "fullstack",
    role: "Full-Stack Developer",
    org: "Developer Tools Startup",
    period: "2022 — 2023",
    kind: "work",
    summary:
      "Delivered end-to-end analytics products from data model to interface.",
    achievements: [
      "Built streaming analytics dashboards over 200M+ events with a 95+ Lighthouse score.",
      "Designed a typed, composable query builder used across the product.",
      "Introduced a component system that accelerated feature delivery.",
    ],
    stack: ["Next.js", "React", "TypeScript", "ClickHouse", "Supabase"],
  },
  {
    id: "education",
    role: "B.S. Computer Science",
    org: "University",
    period: "2021 — 2025",
    kind: "education",
    summary:
      "Focused on machine learning, distributed systems, and algorithms.",
    achievements: [
      "Coursework across ML, computer vision, operating systems, and databases.",
      "Teaching assistant for data structures and systems programming.",
    ],
    stack: ["Algorithms", "Machine Learning", "Systems", "Databases"],
  },
];
