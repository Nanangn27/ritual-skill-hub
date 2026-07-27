const skills = [];

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">My Skills</h1>

      <p className="mt-2 text-gray-600">
        Manage your published AI skills.
      </p>

      {skills.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed p-12 text-center">
          <h2 className="text-2xl font-semibold">
            No skills published yet
          </h2>

          <p className="mt-3 text-gray-500">
            Publish your first AI skill to start building your portfolio.
          </p>

          <a
            href="/publish"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700"
          >
            Publish Skill
          </a>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {skills.map((skill: any) => (
            <div
              key={skill.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              {skill.title}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
