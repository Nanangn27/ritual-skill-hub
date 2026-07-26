import Link from "next/link";

export default function InstallSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center space-y-6 p-8 text-center">
      <div className="text-6xl">🎉</div>

      <h1 className="text-3xl font-bold">
        Skill Installed Successfully
      </h1>

      <p className="text-gray-600">
        Your AI skill is now ready to use.
      </p>

      <Link
        href="/skills"
        className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
      >
        Back to Marketplace
      </Link>
    </main>
  );
}
