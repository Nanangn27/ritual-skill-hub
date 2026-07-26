import Link from "next/link";
import SkillGrid from "@/components/skills/SkillGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import { mockSkills } from "@/data/mockSkills";

type FeaturedSkillsProps = {
  search: string;
  category?: string;
};

export default function FeaturedSkills({ search, category = 'All' }: FeaturedSkillsProps) {
  const filteredSkills = mockSkills.filter((skill) => {
  const q = search.toLowerCase();

  const matchesSearch =
    skill.title.toLowerCase().includes(q) ||
    skill.description.toLowerCase().includes(q);

  const matchesCategory =
    category === "All" ||
    skill.tags.includes(category);

  return matchesSearch && matchesCategory;
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
