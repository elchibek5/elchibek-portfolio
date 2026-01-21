export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  dateLabel: string;
  tech: string[];
  featured?: boolean;
  problem: string;
  built: string[];
  decisions: string[];
  impact: string[];
  links: {
    github?: string;
    demo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "learnflow-ai-lms",
    title: "LearnFlow — AI-Powered LMS",
    oneLiner: "Secure LMS APIs + AI quiz/tutor features with reliability fallbacks.",
    dateLabel: "Jan 2025 – Present",
    tech: ["Spring Boot", "PostgreSQL", "JWT/RBAC", "Docker", "REST APIs"],
    featured: true,
    problem:
      "Students need personalized practice and feedback aligned to course content, but typical workflows are manual and inconsistent.",
    built: [
      "Core user flows: authentication, courses, quizzes, and progress tracking",
      "RBAC-secured REST APIs using JWT",
      "Relational schema designed for progress tracking and analytics-ready data",
      "Containerized services for consistent local/dev environments",
    ],
    decisions: [
      "Used retries/timeouts and fallbacks for AI features to keep UX predictable",
      "Kept controllers thin using DTOs and service boundaries for maintainability",
      "Designed schema to support future analytics and feature expansion",
    ],
    impact: [
      "Reliable, secure API foundation for an LMS product",
      "Predictable AI behavior under failures via safe fallbacks",
      "Clean system boundaries to scale features without rewrite pain",
    ],
    links: {
      github: "https://github.com/elchibek5/AiDA_Learn", //
    },
  },
  {
    slug: "documind-rag-assistant",
    title: "DocuMind — RAG Document Assistant",
    oneLiner: "RAG pipeline + FastAPI endpoints for fast, grounded document Q&A.",
    dateLabel: "Jan 2025",
    tech: ["Python", "FastAPI", "Vector DB", "Embeddings", "React"],
    featured: true,
    problem:
      "Manual search across large documents is slow and error-prone, especially when users need quick, grounded answers.",
    built: [
      "Ingestion pipeline: parsing, chunking, embeddings, and indexing",
      "Query API: semantic retrieval + grounded responses",
      "Validation and predictable error responses for messy inputs",
    ],
    decisions: [
      "Designed endpoints with timeouts/retries to avoid brittle AI UX",
      "Optimized retrieval + API flow to reduce response latency",
      "Added user-friendly failure messages instead of silent/cryptic errors",
    ],
    impact: [
      "Reduced search-to-answer time by 90% vs manual lookup",
      "More reliable AI behavior via defensive engineering",
    ],
    links: {
      github: "https://github.com/elchibek5/DocuMind", //
    },
  },
];
