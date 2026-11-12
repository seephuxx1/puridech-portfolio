import { Badge } from "@/shared/ui";

export default function SkillBadge({ name }: { name: string }) {
  return (
    <li>
      <Badge>{name}</Badge>
    </li>
  );
}
