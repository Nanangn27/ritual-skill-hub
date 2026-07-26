import Link from "next/link";
import { getSkillById } from "@/lib/skills";

export default async function InstallPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = getSkillById(Number(id));

  if (!skill) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Skill not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold">{skill.title}</h1>
        <p className="mt-2 text-gray-600">{skill.description}</p>
      </div>

      <div className="rounded-lg border p-6 space-y-3">
        <div>⭐ Rating: {skill.rating}</div>
        <div>⬇ Downloads: {skill.downloadCount}</div>
        <div>👤 Author: {skill.author}</div>

        <a
          href="/install/success"
          className="block w-full rounded-lg bg-indigo-600 px-4 py-3 text-center text-white hover:bg-indigo-700"
        >
          Install Skill
        </a>
      </div>

      <Link href="/skills" className="text-indigo-600 hover:underline">
        ← Back to Marketplace
      </Link>
    </main>
  );
}
