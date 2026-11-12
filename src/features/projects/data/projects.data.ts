import type { Project } from "../models/project.model";

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
    title: "OpenChat",
    category: "ระบบรวมแชทหลายช่องทาง",
    description:
      "ระบบรวมแชทลูกค้าจากทุกช่องทางมาไว้ที่เดียวของบริษัท ค้นหาและกรองบทสนทนาตามสถานะและช่องทาง ติดแท็กแชทและรายชื่อ และตอบลูกค้าได้จากหน้าจอเดียว",
    tech: [],
    isConfidential: true,
    image: {
      src: "/vincentclinic/openchat-inbox.png",
      alt: "หน้ากล่องข้อความของระบบ OpenChat มีรายการแชทด้านซ้ายและบทสนทนาด้านขวา ข้อมูลลูกค้าถูกเบลอ",
      width: 3016,
      height: 1354,
    },
  },
];
