import SectionHeading from "../components/common/SectionHeading";
import { offers } from "../data/offers";

export default function Offers() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Offers"
        title="Latest Travel Offers"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="rounded-3xl border bg-amber-50 p-8"
          >
            <h3 className="text-2xl font-semibold">
              {offer.title}
            </h3>

            <p className="mt-4 text-slate-600">
              {offer.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}