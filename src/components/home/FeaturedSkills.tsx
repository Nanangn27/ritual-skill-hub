import Link from "next/link";
import SkillGrid from "@/components/skills/SkillGrid";
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

      <SkillGrid skills={filteredSkills} />
    </section>
  );
}
