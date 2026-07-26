import Link from "next/link";
import { getSkillById } from "@/lib/skills";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditSkillPage({ params }: Props) {
  const { id } = await params;
  const skill = getSkillById(Number(id));

  if (!skill) {
    return (
      <main className="mx-auto max-w-3xl p-8">
        <h1 className="text-2xl font-bold">Skill not found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">Edit Skill</h1>
        <p className="mt-2 text-gray-600">
          Update your AI skill information.
        </p>
      </div>

      <form className="space-y-6 rounded-xl border p-6">
        <div>
          <label className="mb-2 block font-medium">
            Skill Name
          </label>
          <input
            defaultValue={skill.title}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Description
          </label>
          <textarea
            defaultValue={skill.description}
            className="h-32 w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Category
          </label>
          <input
            defaultValue={skill.category}
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Repository URL
          </label>
          <input
            placeholder="https://github.com/your/repository"
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            Save Changes
          </button>

          <Link
            href="/dashboard/skills"
            className="rounded-lg border px-6 py-3 hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}
