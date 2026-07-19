import SectionHeading from "../components/common/SectionHeading";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      detail:
        "To provide reliable travel, visa, and digital services with complete customer satisfaction.",
    },
    {
      title: "Our Vision",
      detail:
        "To become Bihar's most trusted travel and digital service provider.",
    },
    {
      title: "Why Choose Us",
      detail:
        "Affordable pricing, experienced staff, transparent service, and 24×7 support.",
    },
  ];

  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="About Us"
        title="Trusted Travel & Digital Service Provider"
        description="We simplify travel planning and government digital services under one roof."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border p-8 shadow-sm bg-white"
          >
            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-4 text-slate-600">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}