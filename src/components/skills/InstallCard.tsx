import Link from "next/link";
type Props = {
  downloads: number;
  rating: number;
};

export default function InstallCard({
  downloads,
  rating,
}: Props) {
  return (
    <aside className="rounded-xl border p-6 space-y-4">
      <Link href={`/install/${skill.id}`} className="w-full rounded-lg bg-indigo-600 py-3 font-medium text-white hover:bg-indigo-700 transition">
        Install Skill
      </Link>

      <Link href={`/install/${skill.id}`} className="w-full rounded-lg border py-3 font-medium hover:bg-gray-50 transition">
        View Source
      </Link>

      <div className="border-t pt-4 text-sm space-y-2">
        <div className="flex justify-between">
          <span>Rating</span>
          <span>⭐ {rating.toFixed(1)}</span>
        </div>

        <div className="flex justify-between">
          <span>Downloads</span>
          <span>{downloads}</span>
        </div>
      </div>
    </aside>
  );
}
