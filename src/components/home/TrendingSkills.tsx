import SkillCard from "@/components/skills/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { mockSkills } from "@/data/mockSkills";

export default function TrendingSkills() {
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
