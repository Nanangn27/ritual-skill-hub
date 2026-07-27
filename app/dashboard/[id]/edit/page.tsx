"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditSkillPage({ params }: Props) {
  const { id } = await params;
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);

    try {
      const res = await fetch(`/api/skills/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      alert("Failed to save changes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold">
        Edit Skill
      </h1>

      <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Skill title"
          className="mb-4 w-full rounded border p-3"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={6}
          className="mb-4 w-full rounded border p-3"
        />

        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded bg-indigo-600 px-5 py-3 text-white disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </main>
  );
}
