import Link from "next/link";
import ExternalLink from "@/components/ExternalLink";
import type { Skill } from "@/types/skill";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const {
    title,
    author,
    description,
    rating,
    reviewCount,
    downloadCount,
    tags,
  } = skill;

  return (
    <Link href={`/skills/${skill.id}`} passHref>
      <a className="group flex h-full flex-col rounded-lg border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
        <div className="flex-1 p-4">
          <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
            {title}
          </h3>

          <p className="text-sm text-gray-500 line-clamp-2">
            {description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 p-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">by</span>
            <ExternalLink address={author} />
          </div>

          <div className="flex items-center gap-4">
            <span>⭐ {rating.toFixed(1)}</span>
            <span>💬 {reviewCount}</span>
            <span>⬇️ {downloadCount}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
