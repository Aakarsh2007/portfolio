export const personalInfo = {
  name: "Aakarsh Saxena",
  title: "Software Engineer",
  roles: ["Software Engineer", "AI Systems Builder", "Full-Stack Developer"],
  tagline:
    "I build reliable AI agents and production-grade full-stack systems — where LLMs do what they're good at, and deterministic code guards everything that matters.",
  email: "aakarshsaxena1804@gmail.com",
  phone: "+91-9145973954",
  linkedin: "https://www.linkedin.com/in/aakarsh-saxena-a71b21304/",
  github: "https://github.com/Aakarsh2007",
  leetcode: "https://leetcode.com/u/tQJTt5Mwpi/",
  resume: "/Aakarsh_Saxena_Resume.pdf",
  photo: "/aakarsh-saxena.jpg",
  location: "Lucknow, India",
};

export const education = [
  {
    institution: "Indian Institute of Information Technology Lucknow",
    detail: "B.Tech in Information Technology",
    period: "Aug 2024 – June 2028",
    location: "Lucknow, Uttar Pradesh",
  },
  {
    institution: "Atomic Energy Central School No. 4",
    detail: "Class XII: 91.8%  ·  Class X: 88.4%",
    period: "2022 – 2024",
    location: "Rawatbhata, Rajasthan",
  },
];

// Headline numbers shown in the hero strip.
export const stats = [
  { value: "#4", label: "Global rank, CodeChef Starters 233" },
  { value: "500+", label: "DSA problems solved" },
  { value: "Knight", label: "LeetCode rating" },
  { value: "Specialist", label: "Codeforces rating" },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  summary: string;
  highlights: string[];
  metrics: { value: string; label: string }[];
  tech: string[];
  github: string;
  live: string | null;
  color: "cyan" | "violet" | "emerald";
};

export const projects: Project[] = [
  {
    id: "revpilot",
    title: "RevPilot AI",
    subtitle: "Autonomous Revenue-Recovery & Attribution Agent",
    context: "Razorpay AI Buildathon 2026",
    summary:
      "A 7-stage autonomous agent (detect → diagnose → propose → policy → execute → verify → attribute) that recovers failed payments over Razorpay telemetry — with the LLM stripped of all authority over money.",
    highlights: [
      "Deterministic rule engine resolves 159/199 diagnoses at 96.4% accuracy, beating the LLM's 90.4% on a golden set; only ambiguous failures are routed to inference.",
      "Policy firewall + capability-token executor enforce consent, amount caps, DND, quiet hours and 12 stopping rules. An ablation across 5 decision policies showed removing it caused 284 policy breaches at identical recovery.",
      "Credits incremental, not gross, recovery via a randomized holdout (INR 0 credited to 17 organic conversions); verified live Razorpay Test-Mode payments through HMAC-signed webhooks plus an API reconciler for lost deliveries.",
    ],
    metrics: [
      { value: "96.4%", label: "Rule-engine accuracy" },
      { value: "284", label: "Breaches prevented" },
      { value: "1,282", label: "Tests · mypy --strict" },
    ],
    tech: ["Python", "FastAPI", "Next.js", "SQLite", "LLM Agents", "Statistical Inference", "Property-Based Testing"],
    github: "https://github.com/Aakarsh2007/Aegis-Merchant",
    live: null,
    color: "cyan",
  },
  {
    id: "aegis",
    title: "Aegis",
    subtitle: "AI-Powered Code Analysis & Auto-Fix Platform",
    context: "2026",
    summary:
      "A serverless, multi-tenant platform that connects to your GitHub repos, finds bugs with Gemini 2.5 Flash, and opens pull requests with generated patches.",
    highlights: [
      "Serverless multi-tenant full-stack app on Next.js 15 + TypeScript, deployed on Vercel, with secure auth and isolated per-user workspaces for connected repositories.",
      "AI Scanner analyzes repos, detects bugs and code issues, and auto-opens PRs with generated patches — cutting manual bug-triage effort by an estimated 60%.",
      "Drizzle ORM schema over Neon serverless PostgreSQL with strict per-tenant query scoping and AES-256-GCM encryption for stored API keys.",
    ],
    metrics: [
      { value: "~60%", label: "Less manual triage" },
      { value: "AES-256", label: "GCM key encryption" },
      { value: "Auto-PR", label: "Generated patches" },
    ],
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Drizzle ORM", "Neon", "Gemini 2.5", "Vercel"],
    github: "https://github.com/Aakarsh2007/Aegis",
    live: "https://aegis-ai-sre.vercel.app/login?redirect=%2Fdashboard",
    color: "violet",
  },
  {
    id: "oceanus",
    title: "Oceanus",
    subtitle: "Multi-Agent RL Environment for Policy Negotiation",
    context: "Meta × Scaler Finalist",
    summary:
      "A distributed 3-layer reinforcement learning system where independently scalable LLM agents coordinate resource recovery through natural-language negotiation.",
    highlights: [
      "Three decoupled layers — swarm simulation, policy negotiation and adversarial curriculum generation — each independently scalable.",
      "Fine-tuned Qwen2-0.5B with GRPO and LoRA adapters on custom multi-agent reward signals: +9.0 average reward over baseline policies across progressively harder curriculum stages.",
      "Concurrent FastAPI inference pipelines for parallel rollouts, plus interactive Three.js visualizations of emergent coordination across 100+ episodes.",
    ],
    metrics: [
      { value: "+9.0", label: "Avg. reward gain" },
      { value: "3", label: "Decoupled layers" },
      { value: "100+", label: "Simulated episodes" },
    ],
    tech: ["Python", "FastAPI", "Qwen2", "GRPO", "LoRA", "Three.js", "Hugging Face"],
    github: "https://github.com/Aakarsh2007/Oceanus-",
    live: "https://huggingface.co/spaces/aakarsh2007/Oceanus-AI",
    color: "emerald",
  },
];

// Smaller projects not on the one-page resume.
export const otherProjects = [
  {
    title: "Interview-AI",
    description:
      "Mock-interview platform that parses resumes, builds a personalized roadmap and runs real-time voice interviews with the Gemini API and Web Speech API.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Gemini API"],
    github: "https://github.com/Aakarsh2007/Interview-AI",
    live: "https://interview-ai-frontend-1ets.onrender.com/",
  },
  {
    title: "AI Code Reviewer",
    description:
      "LLM-powered code review tool for bug detection, complexity analysis and refactoring suggestions, with a diff-based review UI and searchable session history.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Aakarsh2007/AI-Code-Reviewer",
    live: null,
  },
];

export const skills: { category: string; items: string[] }[] = [
  { category: "Languages", items: ["C++", "Python", "TypeScript", "JavaScript", "SQL", "Bash"] },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "FastAPI", "Next.js", "REST APIs", "JWT & HMAC Auth", "Docker", "Linux/Unix", "Git", "CI/CD (GitHub Actions)"],
  },
  {
    category: "Data & Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Drizzle ORM", "Schema Design", "Idempotency & Transactional Outbox", "A/B Testing & Causal Inference"],
  },
  {
    category: "AI / ML",
    items: ["Machine Learning", "LLM Agent Orchestration", "Reinforcement Learning", "GRPO", "LoRA Fine-Tuning", "Model Evaluation", "Prompt Engineering", "Gemini API", "Qwen2"],
  },
  {
    category: "Frontend & Testing",
    items: ["React 19", "Vite", "TailwindCSS", "Three.js", "pytest", "Property-Based Testing", "mypy --strict", "Zod"],
  },
  {
    category: "Core CS",
    items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS", "System Design", "Distributed Systems", "Probability & Statistics"],
  },
];

export type Achievement = {
  value: string;
  title: string;
  detail: string;
  icon: "trophy" | "medal" | "brain" | "award" | "rocket" | "code";
};

export const achievements: Achievement[] = [
  {
    value: "#4",
    title: "Global Rank 4",
    detail: "CodeChef Starters 233 (Rated)",
    icon: "trophy",
  },
  {
    value: "#69",
    title: "LeetCode Biweekly 188",
    detail: "Global Rank 69, and Rank 143 in Weekly 506, among 30,000+ participants",
    icon: "medal",
  },
  {
    value: "1200",
    title: "Amazon ML Challenge",
    detail: "Rank 1200 of 90,000+ registrations (team) with 97.8% accuracy",
    icon: "brain",
  },
  {
    value: "Finalist",
    title: "Meta × Scaler OpenEnv AI Hackathon",
    detail: "Among the top teams building production-grade AI systems",
    icon: "award",
  },
  {
    value: "Round 3",
    title: "Flipkart GRiD 6.0",
    detail: "Qualified for Round 3 of the national engineering competition",
    icon: "rocket",
  },
  {
    value: "500+",
    title: "DSA Problems Solved",
    detail: "Across LeetCode, CodeChef and Codeforces",
    icon: "code",
  },
];

export const cpProfiles = [
  { platform: "LeetCode", rating: "Knight", url: "https://leetcode.com/u/tQJTt5Mwpi/" },
  { platform: "Codeforces", rating: "Specialist", url: null },
  { platform: "CodeChef", rating: "3★", url: null },
];
