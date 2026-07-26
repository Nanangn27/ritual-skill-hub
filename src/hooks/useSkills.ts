"use client";

import { useEffect, useState } from "react";
import type { Skill } from "@/types/skill";

export function useSkills(page = 1, limit = 12) {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/skills?page=${page}&limit=${limit}`);
        const json = await res.json();
        setSkills(json.data ?? []);
setTotalPages(json.totalPages ?? 1);
      } catch {
        setError("Failed to load skills");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [page, limit]);

  return {
    skills,
    loading,
    error,
    totalPages,
  };
}
