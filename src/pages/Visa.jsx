import SectionHeading from "../components/common/SectionHeading";

const visas = [
  "Tourist Visa",
  "Business Visa",
  "Student Visa",
  "Medical Visa",
];

export default function Visa() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Visa Services"
        title="Fast & Reliable Visa Processing"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {visas.map((visa) => (
          <div
            key={visa}
            className="rounded-3xl border p-8 bg-sky-50"
          >
            <h3 className="text-xl font-semibold">
              {visa}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}