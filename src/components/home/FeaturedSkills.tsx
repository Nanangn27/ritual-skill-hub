import Link from "next/link";
import SkillGrid from "@/components/skills/SkillGrid";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Skill } from "@/types/skill";

type FeaturedSkillsProps = {
  skills?: Skill[];
  search: string;
  category?: string;
  sort?: string;
};

export default function FeaturedSkills({ skills, search, category = 'All', sort = 'rating' }: FeaturedSkillsProps) {

const source = skills ?? [];

const filteredSkills = source.filter((skill) => {
  const q = search.toLowerCase();

  const matchesSearch =
    skill.title.toLowerCase().includes(q) ||
    skill.description.toLowerCase().includes(q);

  const matchesCategory =
    category === "All" ||
    skill.tags.includes(category);

  return matchesSearch && matchesCategory;
});

  const sortedSkills = [...filteredSkills].sort((a, b) => {
  switch (sort) {
    case "downloads":
      return b.downloadCount - a.downloadCount;
    case "reviews":
      return b.reviewCount - a.reviewCount;
    case "title":
      return a.title.localeCompare(b.title);
    case "rating":
    default:
      return b.rating - a.rating;
  }
});

  return (
    <section className="space-y-6">
      <SectionHeader
        title="⭐ Featured Skills"
        description="Discover the most popular AI Agent Skills from the Ritual community."
        href="/skills"
        actionLabel="View All →"
      />

      <SkillGrid skills={sortedSkills} />
    </section>
  );
}
