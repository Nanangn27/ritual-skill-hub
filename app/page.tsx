import Image from 'next/image';
import Link from 'next/link';
import SkillCard from '@/components/skills/SkillCard';

export default function Home() {
  // In a real app, we would fetch skills from a smart contract or subgraph
  // For now, we'll use mock data
  const mockSkills = [
    {
      id: 1,
      title: 'AI Agent Skill: Sentiment Analysis',
      author: '0x1234...abcd',
      description: 'A skill for analyzing sentiment in text data using a pre-trained model.',
      rating: 4.5,
      reviewCount: 12,
      downloadCount: 124,
      tags: ['AI', 'NLP', 'Sentiment'],
    },
    {
      id: 2,
      title: 'AI Agent Skill: Image Generator',
      author: '0x5678...efgh',
      description: 'Generate images from text prompts using a stable diffusion model.',
      rating: 4.8,
      reviewCount: 8,
      downloadCount: 89,
      tags: ['AI', 'Image Generation', 'Stable Diffusion'],
    },
    {
      id: 3,
      title: 'AI Agent Skill: Code Reviewer',
      author: '0x9012...ijkl',
      description: 'Reviews code for bugs and suggests improvements.',
      rating: 4.2,
      reviewCount: 15,
      downloadCount: 203,
      tags: ['AI', 'Code', 'DevTools'],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center py-20">
        <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 mb-6">
          ✨ Powered by Ritual Chain
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">
          Ritual Skill Hub
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
          The community marketplace for AI Agent Skills built on Ritual.
          Discover, publish, share, and reuse powerful AI capabilities created by builders across the ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/skills"
            className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
          >
            Explore Skills
          </Link>

          <Link
            href="/publish"
            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 transition"
          >
            Publish Skill
          </Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mockSkills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      <div className="text-center py-8">
        <Link href="/skills" className="text-indigo-600 hover:text-indigo-500">
          Browse All Skills
        </Link>
      </div>
    </div>
  );
}