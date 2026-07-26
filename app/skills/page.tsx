"use client";

import SearchBar from "@/components/ui/SearchBar";
import FeaturedSkills from "@/components/home/FeaturedSkills";
import CategoryFilter from "@/components/skills/CategoryFilter";
import SortSelect from "@/components/skills/SortSelect";
import { useState } from "react";

export default function SkillsPage() {
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("rating");

const categories = [
  "All",
  "AI Agents",
  "LLMs",
  "Computer Vision",
  "Security",
  "DeFi",
];


  return (
    <main className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Browse Skills</h1>
        <p className="mt-2 text-gray-600">
          Discover AI Agent Skills built by the Ritual community.
        </p>
      </div>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <FeaturedSkills search={search} category={category} sort={sort} />
    </main>
  );
}
