import { mockSkills } from "@/data/mockSkills";
import SkillGrid from "@/components/skills/SkillGrid";

type Props = {
  currentId: number | string;
};

export default function RelatedSkills({ currentId }: Props) {
  const skills = mockSkills
    .filter((skill) => skill.id !== currentId)
    .slice(0, 3);

  if (skills.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">
        Related Skills
      </h2>

      <SkillGrid skills={skills} />
    </section>
  );
}
