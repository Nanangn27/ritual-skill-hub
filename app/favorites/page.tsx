"use client";

import Link from "next/link";
import { useFavorites } from "@/hooks/useFavorites";
import { getAllSkills } from "@/lib/skills";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const skills = getAllSkills().filter((skill) =>
    favorites.includes(String(skill.id))
  );

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">
        My Favorite Skills
      </h1>

      {skills.length === 0 ? (
        <p className="text-muted-foreground">
          You haven't added any favorite skills yet.
        </p>
      ) : (
        <div className="space-y-4">
          {skills.map((skill) => (
            <Link
              key={skill.id}
              href={`/skills/${skill.id}`}
              className="block rounded-lg border p-4 transition hover:bg-muted"
            >
              <h2 className="font-semibold">{skill.title}</h2>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>

              <div className="mt-2 flex gap-4 text-sm">
                <span>⭐ {skill.rating}</span>
                <span>⬇️ {skill.downloadCount}</span>
                <span>{skill.author}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
