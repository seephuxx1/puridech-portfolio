import Image from "next/image";
import { ArrowUpRightIcon, Card, LockIcon } from "@/shared/ui";
import { cn } from "@/shared/lib/cn";
import type { Project } from "../models/project.model";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const { image } = project;

  return (
    <Card
      className={cn(
        "group reveal relative flex h-full flex-col transition-transform duration-300 hover:-translate-y-1",
        // A card with a screenshot spans the whole row and puts the image beside the text.
        image
          ? "p-4 sm:p-5 md:col-span-2 xl:flex-row xl:items-center xl:gap-8"
          : "p-8",
      )}
    >
      {image && (
        <div className="overflow-hidden rounded-xl border border-line bg-void xl:w-[56%] xl:shrink-0">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(min-width: 1280px) 640px, (min-width: 768px) 90vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      )}

      <div
        className={cn(
          "flex flex-1 flex-col",
          image ? "px-3 pt-6 pb-3 xl:py-4 xl:pr-4 xl:pl-0" : "",
        )}
      >
        <div
          className={cn(
            "flex items-start justify-between",
            image ? "mb-6" : "mb-14",
          )}
        >
          <span
            className={cn(
              "font-mono font-semibold text-ink/15",
              image ? "text-3xl" : "text-5xl",
            )}
          >
            {number}
          </span>
          {project.href && (
            <span className="flex size-9 items-center justify-center rounded-full border border-card-border text-ink">
              <ArrowUpRightIcon />
            </span>
          )}
        </div>

        <p className="text-xs font-medium tracking-wide text-accent">
          {project.category}
        </p>
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
        <p className="mt-3 flex-1 leading-7 text-muted">
          {project.description}
        </p>

        <p className="mt-8 flex items-center gap-2 border-t border-line pt-5 text-xs text-muted">
          {project.isConfidential ? (
            <>
              <LockIcon className="size-3.5 shrink-0" />
              รายละเอียดเชิงลึกเป็นความลับของบริษัท
            </>
          ) : (
            <span className="font-mono">{project.tech.join("  ·  ")}</span>
          )}
        </p>
      </div>
    </Card>
  );
}
