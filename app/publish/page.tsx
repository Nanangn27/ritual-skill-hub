export default function PublishPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">Publish Skill</h1>
        <p className="mt-2 text-gray-600">
          Share your AI skill with the Ritual community.
        </p>
      </div>

      <form className="space-y-6 rounded-xl border p-6">
        <div>
          <label className="mb-2 block font-medium">Skill Name</label>
          <input
            className="w-full rounded-lg border p-3"
            placeholder="My AI Skill"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Description</label>
          <textarea
            className="h-32 w-full rounded-lg border p-3"
            placeholder="Describe your skill..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Repository URL</label>
          <input
            className="w-full rounded-lg border p-3"
            placeholder="https://github.com/..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Documentation URL</label>
          <input
            className="w-full rounded-lg border p-3"
            placeholder="https://docs.example.com"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
        >
          Continue
        </button>
      </form>
    </main>
  );
}
