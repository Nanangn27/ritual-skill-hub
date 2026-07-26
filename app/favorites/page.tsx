"use client";

import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        My Favorite Skills
      </h1>

      {favorites.length === 0 ? (
        <p className="text-muted-foreground">
          You haven't added any favorite skills yet.
        </p>
      ) : (
        <ul className="space-y-2">
          {favorites.map((id) => (
            <li key={id} className="rounded border p-3">
              {id}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
