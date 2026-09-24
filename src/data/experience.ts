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
  metric?: { value: string; label: string };
}

export const experience: Experience[] = [
  {
    id: "asa-pm",
    role: "Project Manager",
    org: "UC Davis Aggie Sports Analytics",
    period: "Sep 2026 - Present",
    kind: "work",
    summary:
      "Leading project management for CourtCheck, the UC Davis women's tennis analytics platform.",
    achievements: [],
    stack: [],
  },
  {
    id: "turion",
    role: "Software Engineering Intern",
    org: "Turion Space",
    period: "Jun 2026 - Sep 2026",
    kind: "work",
    summary:
      "Designed and built production-facing distributed ground software for spacecraft command, telemetry, and real-time data workflows.",
    achievements: [
      "Implemented an end-to-end command-and-telemetry pipeline across a distributed Go microservice architecture with UDP communication and real-time processing.",
      "Built a real-time image-retrieval feature using Flask + REST that returns captured images in a single API request, reducing payload size by 25%.",
      "Developed automated validation and debugging workflows across Kubernetes clusters (Python, Bash, Docker) to verify command routing, telemetry ingestion, and service health.",
    ],
    stack: [
      "Go",
      "Python",
      "gRPC",
      "Protocol Buffers",
      "NATS",
      "Kubernetes",
      "Docker",
      "Flask",
      "Bash",
    ],
    metric: { value: "25%", label: "Payload reduction" },
  },
  {
    id: "asa-swe",
    role: "Software Engineer",
    org: "UC Davis Aggie Sports Analytics",
    period: "Sep 2025 - June 2026",
    kind: "work",
    summary:
      "Built CourtCheck, a computer-vision and AI tennis analytics platform for the UC Davis women's tennis program.",
    achievements: [
      "Built and deployed a full-stack computer vision and AI platform used by UC Davis women's tennis coaches to convert match footage into ball tracking, court detection, bounce classification, stroke recognition, heatmaps, shot maps, and scouting reports.",
      "Reduced coach film review from 20+ hours/week to a 5-minute per-match summary by building video upload workflows, FastAPI processing APIs, Supabase PostgreSQL/Auth/Storage, signed URLs, a Next.js analytics dashboard, and GPT-powered AI summaries.",
      "Engineered a GPU-accelerated Modal inference pipeline integrating 5+ ML/CV models, improving video processing throughput by ~3x and attracting 5,000+ GitHub clones.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "Supabase", "PyTorch", "Modal"],
  },
  {
    id: "xiphi",
    role: "Software Engineering Intern",
    org: "Xiphi.ai",
    period: "Jul 2025 - Sep 2025",
    kind: "work",
    summary:
      "Built a graph-based recommendation engine and backend data pipelines for an events platform.",
    achievements: [
      "Developed a graph-based recommendation engine generating personalized recommendations for sessions, booths, exhibitors, and attendee discovery.",
      "Built ETL pipelines ingesting users, interests, sessions, booths, and interactions from PostgreSQL into Neo4j, modeled for Cypher traversal and ranking.",
      "Implemented asynchronous FastAPI endpoints and refactored graph schemas and indexes on high-frequency nodes, reducing recommendation latency by 10%.",
    ],
    stack: ["Python", "FastAPI", "Neo4j", "PostgreSQL"],
    metric: { value: "10%", label: "Lower latency" },
  },
  {
    id: "education",
    role: "B.S. Computer Science",
    org: "University of California, Davis",
    period: "Expected Dec 2027",
    kind: "education",
    summary:
      "Foundations across algorithms, systems, and applied mathematics.",
    achievements: [],
    stack: [
      "Data Structures & Algorithms",
      "Algorithm Design & Analysis",
      "Software Development",
      "Object-Oriented Programming",
      "Computer Organization",
      "Discrete Mathematics",
    ],
    metric: { value: "3.5", label: "GPA" },
  },
];
