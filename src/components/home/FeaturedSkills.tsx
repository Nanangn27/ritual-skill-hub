import Link from "next/link";
import SkillCard from "@/components/skills/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { mockSkills } from "@/data/mockSkills";

export default function FeaturedSkills() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="⭐ Featured Skills"
        description="Discover the most popular AI Agent Skills from the Ritual community."
        href="/skills"
        actionLabel="View All →"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
