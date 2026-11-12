import { PageContainer, SectionHeader } from "@/shared/ui";
import { EXPERIENCES } from "../data/experience.data";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceSection() {
  return (
    <PageContainer id="experience">
      <SectionHeader index="03" eyebrow="ประสบการณ์" title="เส้นทางการทำงานของผม" />

      <ol className="relative max-w-3xl">
        {/* Timeline rail */}
        <span
          aria-hidden="true"
          className="absolute top-8 bottom-0 left-[5px] w-px bg-linear-to-b from-accent via-accent/30 to-transparent"
        />
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={`${experience.period}-${experience.role}`} experience={experience} />
        ))}
      </ol>
    </PageContainer>
  );
}
