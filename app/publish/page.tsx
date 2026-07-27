'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PublishPage() {
  const router = useRouter();

  const [skillName, setSkillName] = useState('');
  const [description, setDescription] = useState('');
  const [repository, setRepository] = useState('');
  const [documentation, setDocumentation] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch('/api/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: skillName,
        description,
        repository,
        documentation,
      }),
    });

    setLoading(false);

    if (res.ok) {
      router.push('/publish/preview');
    } else {
      alert('Failed to publish skill');
    }
  };

  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <div>
        <h1 className="text-4xl font-bold">Publish Skill</h1>
        <p className="mt-2 text-gray-600">
          Share your AI skill with the Ritual community.
        </p>
      </div>

      <form
        onSubmit={handlePublish}
        className="space-y-6 rounded-xl border p-6"
      >
        <div>
          <label className="mb-2 block font-medium">Skill Name</label>
          <input
            className="w-full rounded-lg border p-3"
            value={skillName}
            onChange={(e) => setSkillName(e.target.value)}
            placeholder="My AI Skill"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Description</label>
          <textarea
            className="h-32 w-full rounded-lg border p-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your skill..."
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Repository URL</label>
          <input
            className="w-full rounded-lg border p-3"
            value={repository}
            onChange={(e) => setRepository(e.target.value)}
            placeholder="https://github.com/..."
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">Documentation URL</label>
          <input
            className="w-full rounded-lg border p-3"
            value={documentation}
            onChange={(e) => setDocumentation(e.target.value)}
            placeholder="https://docs.example.com"
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Publishing...' : 'Publish Skill'}
          </button>

          <Link
            href="/publish/preview"
            className="rounded-lg border px-6 py-3"
          >
            Preview
          </Link>
        </div>
      </form>
    </main>
  );
}
