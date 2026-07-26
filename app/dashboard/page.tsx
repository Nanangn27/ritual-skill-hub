export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Creator Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Manage your published AI skills.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          ["Published Skills", "0"],
          ["Downloads", "0"],
          ["Average Rating", "0.0"],
          ["Reviews", "0"],
        ].map(([title, value]) => (
          <div key={title} className="rounded-xl border p-6">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="mt-2 text-3xl font-bold">{value}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
