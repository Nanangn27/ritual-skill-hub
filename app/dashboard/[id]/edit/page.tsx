type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditSkillPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold">
        Edit Skill
      </h1>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <p className="text-gray-600">
          Editing skill ID: <strong>{id}</strong>
        </p>

        <form className="mt-6 space-y-4">
          <input
            className="w-full rounded border p-3"
            defaultValue="Skill Title"
          />

          <textarea
            className="w-full rounded border p-3"
            rows={6}
            defaultValue="Skill description..."
          />

          <button
            className="rounded bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </main>
  );
}
