import Link from "next/link";

export default function PublishPreviewPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">Preview Skill</h1>
        <p className="mt-2 text-gray-600">
          Review your skill before publishing.
        </p>
      </div>

      <div className="space-y-4 rounded-xl border p-6">
        <div>
          <h2 className="text-2xl font-semibold">My AI Skill</h2>
          <p className="mt-2 text-gray-600">
            Your skill description will appear here.
          </p>
        </div>

        <div className="grid gap-2 text-sm">
          <div><strong>Repository:</strong> https://github.com/example</div>
          <div><strong>Documentation:</strong> https://docs.example.com</div>
          <div><strong>Status:</strong> Draft</div>
        </div>

        <div className="flex gap-3 pt-4">
          <Link
            href="/publish"
            className="rounded-lg border px-5 py-3 hover:bg-gray-50"
          >
            Back
          </Link>

          <button
            className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
          >
            Publish Skill
          </button>
        </div>
      </div>
    </main>
  );
}
