export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">
        My Skills
      </h1>

      <p className="mt-2 text-gray-600">
        Manage your published AI skills.
      </p>

      <div className="mt-8 rounded-xl border p-10 text-center">
        <h2 className="text-2xl font-semibold">
          No skills yet
        </h2>

        <p className="mt-2 text-gray-500">
          Publish your first skill to see it here.
        </p>
      </div>
    </main>
  );
}
