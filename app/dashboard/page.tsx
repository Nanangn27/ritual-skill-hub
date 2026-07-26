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
    
      <div className="grid gap-4 md:grid-cols-3">
        <a href="/skills" className="rounded-xl border p-6 hover:border-indigo-500 transition">
          <h2 className="font-semibold">Browse Skills</h2>
          <p className="mt-2 text-sm text-gray-600">
            Explore the marketplace.
          </p>
        </a>

        <a href="/favorites" className="rounded-xl border p-6 hover:border-indigo-500 transition">
          <h2 className="font-semibold">My Favorites</h2>
          <p className="mt-2 text-sm text-gray-600">
            View your saved skills.
          </p>
        </a>

        <a href="/install/success" className="rounded-xl border p-6 hover:border-indigo-500 transition">
          <h2 className="font-semibold">Installation History</h2>
          <p className="mt-2 text-sm text-gray-600">
            Review installed skills.
          </p>
        </a>
      </div>

</main>
  );
}
