"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Skill = {
  id: string | number;
  title: string;
  status?: string;
};

export default function DashboardPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/skills")
      .then((res) => res.json())
      .then((data) => {
        setSkills(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setSkills([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main className="mx-auto max-w-6xl p-8">
      <h1 className="text-4xl font-bold">My Skills</h1>

      <p className="mt-2 text-gray-600">
        Manage your published AI skills.
      </p>

      {loading ? (
        <p className="mt-8 text-gray-500">Loading...</p>
      ) : skills.length === 0 ? (
        <div className="mt-8 rounded-xl border border-dashed p-12 text-center">
          <h2 className="text-2xl font-semibold">
            No skills published yet
          </h2>

          <a
            href="/publish"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-white"
          >
            Publish Skill
          </a>
        </div>
      ) : (
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

                  <a
                    href={`/dashboard/${skill.id}/edit`}
                    className="rounded border px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
