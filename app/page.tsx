import Image from 'next/image';
import Link from 'next/link';
import SkillCard from '@/components/skills/SkillCard';
import { mockSkills } from '@/data/mockSkills';
import SectionHeader from '@/components/ui/SectionHeader';
import Hero from '@/components/home/Hero';

export default function Home() {

  return (
    <div className="space-y-8">
      <Hero />

      <section className="space-y-6">
        <SectionHeader
          title="⭐ Featured Skills"
          description="Discover the most popular AI Agent Skills from the Ritual community."
          href="/skills"
          actionLabel="View All →"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockSkills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          📊 Community Statistics
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 text-center">

          <div>
            <div className="text-3xl font-bold text-indigo-600">250+</div>
            <div className="text-gray-600 mt-2">Skills</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-indigo-600">80+</div>
            <div className="text-gray-600 mt-2">Builders</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-indigo-600">12K+</div>
            <div className="text-gray-600 mt-2">Downloads</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-indigo-600">4.9★</div>
            <div className="text-gray-600 mt-2">Average Rating</div>
          </div>

        </div>

        <div className="text-center mt-8">
          <Link
            href="/skills"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Browse All Skills →
          </Link>
        </div>
      </section>
    </div>
  );
}