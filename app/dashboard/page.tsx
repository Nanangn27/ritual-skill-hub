"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

type Skill = {
  id: number;
  title: string;
  status?: string;
};

export default function DashboardPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const { address } = useAccount();

  async function loadSkills() {
    try {
      const res = await fetch(`/api/skills?ownerAddress=${address ?? ""}`);
      const data = await res.json();
      setSkills(Array.isArray(data) ? data : []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (address) loadSkills();
  }, [address]);

  async function handleDelete(id: number) {
    if (!confirm("Delete this skill?")) return;

    const res = await fetch(`/api/skills/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setSkills((prev) => prev.filter((skill) => skill.id !== id));
    } else {
      alert("Failed to delete skill.");
    }
  }

  if (loading) {
    return <main className="p-8">Loading...</main>;
  }

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">My Skills</h1>

      <div className="mt-8 space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="rounded-xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <Link
                href={`/dashboard/${skill.id}`}
                className="text-xl font-semibold hover:text-indigo-600"
              >
                {skill.title}
              </Link>

              <div className="flex items-center gap-2">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                  {skill.status ?? "Published"}
                </span>

                <Link
                  href={`/dashboard/${skill.id}/edit`}
                  className="rounded border px-3 py-1 text-sm"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(skill.id)}
                  className="rounded border border-red-300 px-3 py-1 text-sm text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
