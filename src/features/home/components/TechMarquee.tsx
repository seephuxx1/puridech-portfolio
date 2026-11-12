import { SKILL_GROUPS } from "@/features/skills";

const TECH = SKILL_GROUPS.flatMap((group) => group.skills);

/** Endless strip of tech names. The list is rendered twice so the loop is seamless. */
export default function TechMarquee() {
  return (
    <div aria-hidden="true" className="marquee relative border-y border-line py-5">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {TECH.map((name) => (
              <li key={name} className="flex items-center font-mono text-sm text-muted">
                <span className="px-6">{name}</span>
                <span className="size-1 rounded-full bg-accent" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
