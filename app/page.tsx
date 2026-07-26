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
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Discover AI Agent Skills
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Explore, download, and rate AI agent skills built by the Ritual Chain community.
        </p>
        <Link
          href="/publish"
          className="inline-block mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Publish a Skill
        </Link>
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