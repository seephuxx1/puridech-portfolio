import type { SkillGroup } from "../models/skill.model";

// TODO: placeholder list — adjust to the tools you actually use.
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    description: "Fast, intuitive and consistent interfaces.",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Backend",
    description: "Clearly designed APIs and services.",
    skills: ["Node.js", "REST API", "WebSocket", "Authentication"],
  },
  {
    title: "Database",
    description: "Modelling and managing data with confidence.",
    skills: ["PostgreSQL", "MySQL", "Redis", "Firebase"],
  },
  {
    title: "Tooling",
    description: "Deploying systems and keeping them running.",
    skills: ["Git", "Docker", "CI/CD", "Linux"],
  },
];
