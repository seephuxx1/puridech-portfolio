import { PageContainer, SectionHeader, Card } from "@/shared/ui";
import { SKILL_GROUPS } from "../data/skills.data";
import SkillBadge from "./SkillBadge";

export default function SkillsSection() {
  return (
    <PageContainer id="skills" className="bg-surface">
      <SectionHeader
        index="02"
        eyebrow="Skills"
        title="A toolkit for the whole stack"
        description="The technologies I use to turn ideas into working products."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <Card key={group.title} className="reveal p-8">
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <p className="mt-1 text-sm leading-6 text-muted">{group.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} />
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
