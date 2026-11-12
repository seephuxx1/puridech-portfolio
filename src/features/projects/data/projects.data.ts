import type { Project } from "../models/project.model";

// TODO: placeholder projects — replace with your real work and add `href` links.
export const PROJECTS: Project[] = [
  {
    title: "ผลงานที่ 1",
    category: "เว็บแพลตฟอร์ม",
    description: "ระบบนี้ทำอะไร ทำเพื่อใคร และคุณรับผิดชอบส่วนไหน",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "ผลงานที่ 2",
    category: "ระบบหลังบ้าน",
    description: "ปัญหาที่ระบบนี้ช่วยแก้ให้ทีม และวิธีที่คุณเลือกใช้",
    tech: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "ผลงานที่ 3",
    category: "API และบริการ",
    description: "โครงสร้างระบบ ปริมาณงานที่รองรับ และสิ่งที่คุณภูมิใจ",
    tech: ["Node.js", "Redis", "Docker"],
  },
];
