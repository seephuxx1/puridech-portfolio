import type { Project } from "../models/project.model";

// TODO: project 3 is a placeholder — replace with your real work.
export const PROJECTS: Project[] = [
  {
    title: "CREEXme",
    category: "เว็บไซต์เอเจนซี่แบรนดิ้ง",
    description:
      "เว็บไซต์ของ CREEX Studio เอเจนซี่สร้างแบรนด์สำหรับ SME นำเสนอบริการ แพ็กเกจพิเศษ และช่องทางสมัครรับสิทธิ์ พร้อมแบบฟอร์มติดต่อที่ส่งอีเมลถึงทีมโดยตรง",
    tech: ["Next.js", "React", "TypeScript", "Resend"],
    href: "https://creexme.creex.studio/",
    image: {
      src: "/creexme/1.png",
      alt: "หน้าแรกของเว็บไซต์ CREEXme ธีมมืด ข้อความ Premium Branding for Modern SMEs",
      width: 3020,
      height: 1510,
    },
  },
  {
    title: "ระบบ CRM ขององค์กร",
    category: "ระบบหลังบ้าน",
    description:
      "ระบบ CRM ขนาดใหญ่ที่บริษัทใช้งานจริง ครอบคลุมการจัดการสมาชิก แต้มสะสมและรางวัล โปรโมชัน คำสั่งซื้อ การชำระเงิน และแดชบอร์ดสรุปภาพรวมธุรกิจ",
    tech: [],
    isConfidential: true,
    image: {
      src: "/vincentclinic/crm-dashboard.png",
      alt: "แดชบอร์ดระบบ CRM ธีมมืด มีเมนูสมาชิก แต้มสะสม โปรโมชัน และคำสั่งซื้อ พร้อมกราฟรายได้",
      width: 2998,
      height: 1508,
    },
  },
  {
    title: "ผลงานที่ 3",
    category: "API และบริการ",
    description: "โครงสร้างระบบ ปริมาณงานที่รองรับ และสิ่งที่คุณภูมิใจ",
    tech: ["Node.js", "Redis", "Docker"],
  },
];
