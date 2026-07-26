"use client";

import SearchBar from "@/components/ui/SearchBar";
import FeaturedSkills from "@/components/home/FeaturedSkills";
import CategoryFilter from "@/components/skills/CategoryFilter";
import SortSelect from "@/components/skills/SortSelect";
import { useState } from "react";
import { useSkills } from "@/hooks/useSkills";
import { useFavorites } from "@/hooks/useFavorites";

export default function SkillsPage() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("rating");
const [page, setPage] = useState(1);
const [favoritesOnly, setFavoritesOnly] = useState(false);

const { skills, loading, error, totalPages } = useSkills(page);
const { favorites } = useFavorites();

const visibleSkills = favoritesOnly
  ? skills.filter(skill => favorites.includes(String(skill.id)))
  : skills;

const categories = [
  "All",
  "AI Agents",
  "LLMs",
  "Computer Vision",
  "Security",
  "DeFi",
];


  if (loading) {
  return <main className="p-8">Loading skills...</main>;
}

if (error) {
  return <main className="p-8">{error}</main>;
}

return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Browse Skills</h1>
        <p className="mt-2 text-gray-600">
          Discover AI Agent Skills built by the Ritual community.
        </p>
      </div>

      
<p className="text-sm text-gray-500">
  Showing {visibleSkills.length} of {skills.length} skills
</p>


<SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      
<div className="mb-4 flex items-center gap-2">
  <input
    id="favoritesOnly"
    type="checkbox"
    checked={favoritesOnly}
    onChange={(e) => setFavoritesOnly(e.target.checked)}
  />
  <label htmlFor="favoritesOnly">
    Favorites only
  </label>
</div>

<FeaturedSkills
          skills={visibleSkills} search={search} category={category} sort={sort} />
    </main>
  );
}
