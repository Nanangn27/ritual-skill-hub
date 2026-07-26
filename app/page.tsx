"use client";

import { useState } from "react";

import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/home/Hero';
import SearchBar from "@/components/ui/SearchBar";
import FeaturedSkills from '@/components/home/FeaturedSkills';
import CommunityStats from '@/components/home/CommunityStats';
import TrendingSkills from '@/components/home/TrendingSkills';
import LatestSkills from '@/components/home/LatestSkills';
import Categories from '@/components/home/Categories';
import TopCreators from '@/components/home/TopCreators';

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">
      <Hero />

      <SearchBar value={search} onChange={setSearch} />

      <FeaturedSkills search={search} />

      <TrendingSkills search={search} />

      <LatestSkills />

      <Categories />

      <TopCreators />

      <CommunityStats />
    </div>
  );
}