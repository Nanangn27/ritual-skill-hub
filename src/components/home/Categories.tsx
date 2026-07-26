import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  "AI Agents",
  "LLMs",
  "Computer Vision",
  "NLP",
  "Data",
  "Security",
  "DeFi",
  "Gaming",
];

export default function Categories() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="📂 Browse Categories"
        description="Discover skills by category."
      />

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link
            key={category}
            href="/skills"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-indigo-500 hover:text-indigo-600 transition"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
