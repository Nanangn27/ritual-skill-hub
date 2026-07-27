"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PublishPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    repository: "",
    documentation: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/install/success");
    } else {
      alert("Failed to publish skill");
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        Publish Skill
      </h1>

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
          rows={5}
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Repository URL"
          value={form.repository}
          onChange={(e) =>
            setForm({
              ...form,
              repository: e.target.value,
            })
          }
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Documentation URL"
          value={form.documentation}
          onChange={(e) =>
            setForm({
              ...form,
              documentation: e.target.value,
            })
          }
        />

        <button
          className="rounded bg-black px-6 py-3 text-white"
          type="submit"
        >
          Publish
        </button>
      </form>
    </main>
  );
}
