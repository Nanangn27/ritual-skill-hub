import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';

interface SkillCardProps {
  id: number;
  title: string;
  author: string;
  description: string;
  rating: number;
  reviewCount: number;
  downloadCount: number;
  tags: string[];
}

export default function SkillCard({ skill }: { skill: SkillCardProps }) {
  const { title, author, description, rating, reviewCount, downloadCount, tags } = skill;

  return (
    <Link href={`/skills/${skill.id}`} passHref>
      <a className="group flex flex-col h-full border rounded-lg border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all">
        <div className="flex-1 p-4">
          <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center p-4 border-t border-gray-200">
          <div className="flex-1 flex items-center space-x-2">
            <span className="text-xs text-gray-500">by</span>
            <ExternalLink address={author} />
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <span className="text-yellow-400">&#9733;</span>
              <span className="ml-1">{rating.toFixed(1)}</span>
              <span className="ml-1 text-gray-500">({reviewCount})</span>
            </div>
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.2 3.8a2 2 0 00-1.3 1.5l-.8.4a2 2 0 00-.6 2l.2 1a2 2 0 002.2 2l2.7-.5a2 2 0 002-1.3l.5-.8a2 2 0 001.2-1.6l3.7-1a2 2 0 001.4-."></path>
              </svg>
              <span className="ml-1">{downloadCount}</span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}