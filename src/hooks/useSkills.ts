"use client";

import { useEffect, useState } from "react";
import type { Skill } from "@/types/skill";

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/skills");
        const json = await res.json();
        setSkills(json.data ?? []);
      } catch {
        setError("Failed to load skills");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    skills,
    loading,
    error,
  };
}
