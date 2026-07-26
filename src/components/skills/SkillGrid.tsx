import SkillCard from "@/components/skills/SkillCard";

type SkillGridProps = {
  skills: any[];
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
