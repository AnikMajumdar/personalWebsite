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
    id: "asa",
    role: "Software Engineer & Project Manager",
    org: "UC Davis Aggie Sports Analytics",
    period: "Present",
    kind: "work",
    summary:
      "Engineering and project leadership on CourtCheck, a tennis analytics platform for the UC Davis women's tennis program.",
    achievements: [
      "Contribute full-stack, backend/database, deployment, and ML/CV pipeline work to an established production project.",
      "Built GPT-based automated scouting-report generation on top of the processed match analytics.",
      "Hold project-management responsibilities within the organization.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "Supabase", "PyTorch", "Modal"],
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
      "Built a real-time image-retrieval feature (Flask + REST) that returns captured images in a single API request, reducing payload size by 25%.",
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
    id: "include-fullstack",
    role: "Full Stack Developer",
    org: "#include Davis",
    period: "Sep 2025 - Jun 2026",
    kind: "work",
    summary: "Built a marketplace platform for engineers.",
    achievements: [],
    stack: [],
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
    id: "include-frontend",
    role: "Frontend Developer",
    org: "#include Davis",
    period: "Jan 2025 - Sep 2025",
    kind: "work",
    summary: "Created the Aggie Pier Mentoring platform.",
    achievements: [],
    stack: [],
  },
  {
    id: "ekadence",
    role: "Intern",
    org: "eKadence",
    period: "Jun 2022 - Aug 2022",
    kind: "work",
    summary: "Researched, designed, developed, and tested new product ideas.",
    achievements: [
      "Created a calendar filter, a To-Do widget, and a hypothetical grader, allowing students to create hypothetical assignments to determine the impact on their grades.",
    ],
    stack: [],
  },
  {
    id: "osi-digital",
    role: "Intern",
    org: "OSI Digital",
    period: "Jun 2021 - Aug 2021",
    kind: "work",
    summary:
      "Developed integrations between enterprise business systems using Postman and Dell Boomi, streamlining data exchange and automation.",
    achievements: [
      "Performed API development and testing, improving system interoperability and reducing manual data processing.",
    ],
    stack: ["Postman", "Dell Boomi"],
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
      "Probability & Statistics",
      "Linear Algebra",
    ],
    metric: { value: "3.5", label: "GPA" },
  },
];
