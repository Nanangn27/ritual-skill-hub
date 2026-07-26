import Link from "next/link";
import SkillCard from "@/components/skills/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { mockSkills } from "@/data/mockSkills";

type FeaturedSkillsProps = {
  search: string;
};

export default function FeaturedSkills({ search }: FeaturedSkillsProps) {
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
        title="⭐ Featured Skills"
        description="Discover the most popular AI Agent Skills from the Ritual community."
        href="/skills"
        actionLabel="View All →"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
