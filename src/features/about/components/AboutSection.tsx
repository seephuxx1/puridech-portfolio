import { PageContainer, SectionHeader, Card } from "@/shared/ui";
import { ABOUT_PARAGRAPHS, ABOUT_PILLARS } from "../data/about.data";

export default function AboutSection() {
  return (
    <PageContainer id="about">
      <SectionHeader
        index="01"
        eyebrow="เกี่ยวกับผม"
        title="พัฒนาครบทั้งระบบ ด้วยมุมมองของนักออกแบบ"
      />

      <div className="reveal max-w-3xl space-y-6 text-lg leading-8 text-muted">
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {ABOUT_PILLARS.map((pillar, i) => (
          <Card key={pillar.title} className="reveal p-7">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-6 text-lg font-semibold">{pillar.title}</h3>
            <p className="mt-2 leading-7 text-muted">{pillar.description}</p>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
}
