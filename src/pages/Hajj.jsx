import SectionHeading from "../components/common/SectionHeading";
import { packages } from "../data/packages";

export default function Hajj() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Hajj & Umrah"
        title="Choose Your Best Package"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {packages.map((pack) => (
          <div
            key={pack.label}
            className="rounded-3xl border bg-white p-8"
          >
            <h3 className="text-xl font-semibold">
              {pack.label}
            </h3>

            <p className="mt-5 text-3xl font-bold">
              {pack.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}