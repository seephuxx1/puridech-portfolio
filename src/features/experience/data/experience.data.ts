import type { Experience } from "../models/experience.model";

/** Newest first. */
export const EXPERIENCES: Experience[] = [
  {
    period: "2024 – ปัจจุบัน",
    role: "Web Developer",
    company: "Vincent International",
    isCurrent: true,
    summary: "พัฒนาและดูแลเว็บไซต์ให้กับองค์กร",
    highlights: [
      "ออกแบบและปรับปรุงระบบให้เหมาะสมกับการใช้งานจริง",
      "เน้นความเสถียร ความปลอดภัย และประสบการณ์ที่ดีของผู้ใช้งาน",
    ],
  },
  {
    period: "2024",
    role: "Helpdesk Support POS",
    company: "X-Treme IT",
    summary: "ให้คำปรึกษาและแก้ไขปัญหาการใช้งานระบบ POS ให้กับลูกค้า",
    highlights: [
      "ดูแลลูกค้าทั้งทางโทรศัพท์และรีโมตซัพพอร์ต",
      "ประสานงานเพื่อให้การแก้ไขปัญหาเป็นไปอย่างรวดเร็วและตรงจุด",
    ],
  },
  {
    period: "2023",
    role: "Implement",
    company: "Synature Technology",
    summary: "ดูแลการติดตั้งและตั้งค่าระบบ POS ให้กับลูกค้า",
    highlights: [
      "รับผิดชอบทั้งการวางระบบ แก้ไขปัญหาเบื้องต้น และให้คำแนะนำการใช้งาน",
      "ช่วยให้ลูกค้าใช้งานระบบได้อย่างราบรื่นและมีประสิทธิภาพ",
    ],
  },
];
