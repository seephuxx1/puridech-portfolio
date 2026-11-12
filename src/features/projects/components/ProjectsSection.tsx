import { PageContainer, SectionHeader } from "@/shared/ui";
import { PROJECTS } from "../data/projects.data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <PageContainer id="projects" className="bg-surface">
      <SectionHeader
        index="04"
        eyebrow="ผลงาน"
        title="ผลงานที่คัดมา"
        description="ตัวอย่างระบบที่ผมออกแบบ พัฒนา และส่งมอบ"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </PageContainer>
  );
}
