import { BriefcaseIcon, CodeIcon, GridIcon, MailIcon, UserIcon } from "@/shared/ui";

/** `shortLabel` is used where space is tight (the mobile bottom bar). */
export const NAV_ITEMS = [
  { id: "about", label: "เกี่ยวกับผม", shortLabel: "เกี่ยวกับ", Icon: UserIcon },
  { id: "skills", label: "ทักษะ", shortLabel: "ทักษะ", Icon: CodeIcon },
  { id: "experience", label: "ประสบการณ์", shortLabel: "ประสบการณ์", Icon: BriefcaseIcon },
  { id: "projects", label: "ผลงาน", shortLabel: "ผลงาน", Icon: GridIcon },
  { id: "contact", label: "ติดต่อ", shortLabel: "ติดต่อ", Icon: MailIcon },
] as const;
