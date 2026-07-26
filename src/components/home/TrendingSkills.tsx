import SkillCard from "@/components/skills/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { mockSkills } from "@/data/mockSkills";

type TrendingSkillsProps = {
  search: string;
};

export default function TrendingSkills({ search }: TrendingSkillsProps) {
  const filteredSkills = mockSkills.filter((skill) => {
  const q = search.toLowerCase();

  return (
    skill.title.toLowerCase().includes(q) ||
    skill.description.toLowerCase().includes(q)
  );
});

  return (
    <section className="space-y-6">
      <SectionHeader
        title="🔥 Trending Skills"
        description="Skills gaining the most attention this week."
        href="/skills"
        actionLabel="See More →"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockSkills.slice(0,3).map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
