import SkillCard from "@/components/skills/SkillCard";

type Skill = {
  id: string | number;
  title: string;
  description: string;
};

type SkillGridProps = {
  skills: Skill[];
};

export default function SkillGrid({ skills }: SkillGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
}
