import { notFound } from "next/navigation";
import { mockSkills } from "@/data/mockSkills";
import RelatedSkills from "@/components/skills/RelatedSkills";
import InstallCard from "@/components/skills/InstallCard";

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = mockSkills.find(
    (item) => String(item.id) === id
  );

  if (!skill) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold">{skill.title}</h1>

        <p className="text-gray-600">
          {skill.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {skill.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-100 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-4 rounded-xl border p-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-gray-500">Author</p>
          <p className="font-medium">{skill.author}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Rating</p>
          <p className="font-medium">
            ⭐ {skill.rating} ({skill.reviewCount} reviews)
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Downloads</p>
          <p className="font-medium">
            {skill.downloadCount}
          </p>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <section className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">
            About this Skill
          </h2>

          <p className="leading-7 text-gray-700">
            This section will contain the full documentation,
            installation guide, usage examples, supported models,
            requirements, and future updates.
          </p>
        </section>

        <InstallCard
          downloads={skill.downloadCount}
          rating={skill.rating}
        />
      </div>
      <RelatedSkills currentId={skill.id} />
</main>
  );
}
