"use client";

type SortSelectProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortSelect({
  value,
  onChange,
}: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm"
    >
      <option value="rating">⭐ Highest Rated</option>
      <option value="downloads">⬇️ Most Downloaded</option>
      <option value="reviews">💬 Most Reviewed</option>
      <option value="title">🔤 A–Z</option>
    </select>
  );
}
