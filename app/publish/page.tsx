"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PublishPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    repository: "",
    documentation: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    if (!form.title.trim()) {
      setError("Title is required");
      return;
    }

    if (!form.description.trim()) {
      setError("Description is required");
      return;
    }

    if (!form.repository.trim()) {
      setError("Repository is required");
      return;
    }

    try {
      new URL(form.repository);
    } catch {
      setError("Repository must be a valid URL");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/install/success");
    } else {
      setError("Failed to publish skill");
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Publish Skill</h1>

      {error && (
        <p className="mb-4 text-red-500">{error}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          className="w-full rounded border p-3"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <textarea
          className="w-full rounded border p-3"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Repository URL"
          value={form.repository}
          onChange={(e) =>
            setForm({ ...form, repository: e.target.value })
          }
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Documentation URL (optional)"
          value={form.documentation}
          onChange={(e) =>
            setForm({ ...form, documentation: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded bg-black px-6 py-3 text-white disabled:opacity-50"
        >
          {loading ? "Publishing..." : "Publish Skill"}
        </button>
      </form>
    </main>
  );
}
