import { ArrowUpRightIcon, Card } from "@/shared/ui";
import type { Project } from "../models/project.model";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Card className="group reveal relative flex h-full flex-col p-8 transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-14 flex items-start justify-between">
        <span className="font-mono text-5xl font-semibold text-ink/15">
          {number}
        </span>
        {project.href && (
          <span className="flex size-9 items-center justify-center rounded-full border border-card-border text-ink">
            <ArrowUpRightIcon />
          </span>
        )}
      </div>

      <p className="text-xs font-medium tracking-wide text-accent">{project.category}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            {/* Stretch the link over the whole card. */}
            <span className="absolute inset-0 z-10 rounded-2xl" />
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-muted">{project.description}</p>

      <p className="mt-8 border-t border-line pt-5 font-mono text-xs text-muted">
        {project.tech.join("  ·  ")}
      </p>
    </Card>
  );
}
