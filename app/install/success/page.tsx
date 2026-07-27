export default function InstallSuccessPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold text-green-600">
        🎉 Success!
      </h1>

      <p className="mb-6 text-lg text-gray-600">
        Your skill has been published successfully.
      </p>

      <a
        href="/skills"
        className="rounded bg-black px-6 py-3 text-white"
      >
        Browse Skills
      </a>
    </main>
  );
}
