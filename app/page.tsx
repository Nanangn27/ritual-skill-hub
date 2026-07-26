import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import FeaturedSkills from '@/components/home/FeaturedSkills';
import CommunityStats from '@/components/home/CommunityStats';
import TrendingSkills from '@/components/home/TrendingSkills';
import LatestSkills from '@/components/home/LatestSkills';

export default function Home() {

  return (
    <div className="space-y-8">
      <Hero />

      <FeaturedSkills />

      <TrendingSkills />

      <LatestSkills />

      <CommunityStats />
    </div>
  );
}