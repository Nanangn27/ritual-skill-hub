import SkillCard from "@/components/skills/SkillCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { mockSkills } from "@/data/mockSkills";

export default function LatestSkills() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="🆕 Latest Skills"
        description="Recently published AI Agent Skills from the Ritual community."
        href="/skills"
        actionLabel="View Latest →"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...mockSkills].reverse().map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
}
