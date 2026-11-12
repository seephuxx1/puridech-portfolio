import { Card } from "@/shared/ui";
import type { Experience } from "../models/experience.model";

export default function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <li className="reveal relative pb-8 pl-10 last:pb-0">
      {/* Timeline node */}
      <span className="absolute top-8 left-0 flex size-3">
        {experience.isCurrent && (
          <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
        )}
        <span className="relative size-3 rounded-full border-2 border-accent bg-page shadow-[0_0_12px_var(--accent)]" />
      </span>

      <Card className="p-7 sm:p-8">
        <p className="inline-block rounded-md border border-card-border bg-accent-soft px-2.5 py-1 font-mono text-xs text-accent">
          {experience.period}
        </p>
        <h3 className="mt-4 text-xl font-semibold tracking-tight">{experience.role}</h3>
        <p className="mt-0.5 font-medium text-accent">{experience.company}</p>
        <p className="mt-4 leading-7 text-muted">{experience.summary}</p>
        <ul className="mt-3 space-y-2">
          {experience.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 leading-7 text-muted">
              <span className="mt-3 size-1 shrink-0 rounded-full bg-accent-2" />
              {highlight}
            </li>
          ))}
        </ul>
      </Card>
    </li>
  );
}
