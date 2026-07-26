import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CommunityStats() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-8">
      <SectionHeader
        title="📊 Community Statistics"
        description="Real-time ecosystem growth (currently placeholder data)."
      />

      <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4 text-center">
        <div>
          <div className="text-3xl font-bold text-indigo-600">250+</div>
          <div className="mt-2 text-gray-600">Skills</div>
        </div>

        <div>
          <div className="text-3xl font-bold text-indigo-600">80+</div>
          <div className="mt-2 text-gray-600">Builders</div>
        </div>

        <div>
          <div className="text-3xl font-bold text-indigo-600">12K+</div>
          <div className="mt-2 text-gray-600">Downloads</div>
        </div>

        <div>
          <div className="text-3xl font-bold text-indigo-600">4.9★</div>
          <div className="mt-2 text-gray-600">Average Rating</div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/skills"
          className="font-medium text-indigo-600 hover:text-indigo-700"
        >
          Browse All Skills →
        </Link>
      </div>
    </section>
  );
}
