import SkillCard from "@/components/skills/SkillCard";
import type { Skill } from "@/types/skill";

type SkillGridProps = {
  skills: Skill[];
};

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
        />
      ))}
    </div>
  );
}
