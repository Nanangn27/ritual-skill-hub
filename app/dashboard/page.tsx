const skills = [
  {
    id: 1,
    title: "AI Code Reviewer",
    status: "Published",
  },
  {
    id: 2,
    title: "Smart Contract Auditor",
    status: "Draft",
  },
];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">My Skills</h1>

      <p className="mt-2 text-gray-600">
        Manage your published AI skills.
      </p>

      <div className="mt-8 space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                {skill.title}
              </h2>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                  {skill.status}
                </span>

                <button className="rounded border px-3 py-1 text-sm hover:bg-gray-100">
                  View
                </button>

                <button className="rounded border px-3 py-1 text-sm hover:bg-gray-100">
                  Edit
                </button>

                <button className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 hover:bg-red-50">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
