type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function SkillDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">Skill Details</h1>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <p>
          <strong>ID:</strong> {id}
        </p>

        <p className="mt-4 text-gray-600">
          This page will display the selected skill details from the database.
        </p>
      </div>
    </main>
  );
}
