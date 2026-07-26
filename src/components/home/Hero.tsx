import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 mb-6">
        ✨ Powered by Ritual Chain
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
        Ritual Skill Hub
      </h1>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        The community marketplace for AI Agent Skills built on Ritual.
        Discover, publish, share, and reuse powerful AI capabilities created by
        builders across the ecosystem.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/skills"
          className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
        >
          Explore Skills
        </Link>

        <Link
          href="/publish"
          className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition"
        >
          Publish Skill
        </Link>
      </div>
    </section>
  );
}
