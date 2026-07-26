"use client";

type CategoryFilterProps = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            selected === category
              ? "bg-indigo-600 text-white"
              : "border border-gray-300 hover:border-indigo-500"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
