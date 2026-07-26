import SectionHeader from "@/components/ui/SectionHeader";

const creators = [
  { name: "0x1234...abcd", skills: 12 },
  { name: "0x5678...efgh", skills: 9 },
  { name: "0x9012...ijkl", skills: 7 },
];

export default function TopCreators() {
  return (
    <section className="space-y-6">
      <SectionHeader
        title="👥 Top Creators"
        description="Builders contributing the most AI Agent Skills."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {creators.map((creator) => (
          <div
            key={creator.name}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            <div className="text-lg font-semibold">{creator.name}</div>
            <p className="mt-2 text-gray-600">
              {creator.skills} published skills
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
