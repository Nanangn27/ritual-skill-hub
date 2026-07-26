"use client";

type SearchBarProps = {
  placeholder?: string;
};

export default function SearchBar({
  placeholder = "Search AI Skills...",
}: SearchBarProps) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
}
