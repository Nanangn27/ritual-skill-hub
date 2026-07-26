"use client";

import { useEffect, useState } from "react";

const KEY = "favorite-skills";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  function toggle(id: string) {
    setFavorites((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];

      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  }

  function isFavorite(id: string) {
    return favorites.includes(id);
  }

  return {
    favorites,
    toggle,
    isFavorite,
  };
}
