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
 * Experience timeline. Dates for Turion Space were not supplied — the period
 * label is a placeholder to replace with a real date range.
 */
export const experience: Experience[] = [
  {
    id: "turion",
    role: "Software Engineering Intern",
    org: "Turion Space",
    period: "Internship",
    kind: "work",
    summary:
      "Built and debugged production-facing distributed ground software for spacecraft command, telemetry, and data workflows.",
    achievements: [
      "Developed command-and-telemetry infrastructure using Go microservices, processing real-time telemetry over UDP networking.",
      "Built a Flask REST image-retrieval API that reduced oversized raw UDP JSON payloads by ~25%.",
      "Validated and debugged Kubernetes deployments using Python, Bash, Docker, and Kubernetes.",
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
    ],
  },
  {
    id: "asa",
    role: "Software Engineer & Project Manager",
    org: "UC Davis Aggie Sports Analytics",
    period: "Present",
    kind: "work",
    summary:
      "Engineering and project leadership on CourtCheck, a tennis analytics platform for the UC Davis women's tennis program.",
    achievements: [
      "Contributed full-stack, backend/database, deployment, and ML/CV pipeline work to an established production project.",
      "Built GPT-based automated scouting-report generation on top of the processed match analytics.",
      "Hold project-management responsibilities within the organization.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "Supabase", "PyTorch", "Modal"],
  },
  {
    id: "education",
    role: "B.S. Computer Science",
    org: "University of California, Davis",
    period: "Expected Dec 2027",
    kind: "education",
    summary: "Focused on software engineering, AI / ML, and systems.",
    achievements: [],
    stack: [],
  },
];
