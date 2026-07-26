import Link from "next/link";
import { getAllSkills } from "@/lib/skills";
import DeleteSkillDialog from "@/components/dashboard/DeleteSkillDialog";

export default function MySkillsPage() {
  const skills = getAllSkills();

  return (
    <main className="mx-auto max-w-6xl space-y-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">My Published Skills</h1>
          <p className="mt-2 text-gray-600">
            Manage your published AI skills.
          </p>
        </div>

        <Link
          href="/publish"
          className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
        >
          Publish New Skill
        </Link>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-xl border p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  {skill.title}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                  {skill.description}
                </p>
              </div>

              <div className="text-right space-y-3">
                <div className="text-sm">
                  <div>⭐ {skill.rating}</div>
                  <div>⬇ {skill.downloadCount}</div>
                </div>

                <div className="flex gap-2 justify-end">
                  <Link
                    href={`/skills/${skill.id}`}
                    className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
                  >
                    View
                  </Link>

                  <Link
                    href={`/dashboard/skills/${skill.id}/edit`}
                    className="rounded-md border border-indigo-500 px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50"
                  >
                    Edit
                  </Link>

                  <DeleteSkillDialog />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}