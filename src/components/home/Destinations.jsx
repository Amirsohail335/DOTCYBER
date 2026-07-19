import SectionHeading from "../common/SectionHeading";
import { destinations } from "../../data/destinations";

export default function Destinations() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Popular Destinations"
        title="Explore top international destinations with best offers"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((item) => (
          <article
            key={item.place}
            className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg"
          >
            <p className="text-sm uppercase tracking-widest text-amber-600">
              {item.place}
            </p>

            <h3 className="mt-4 text-2xl font-semibold">
              Starting From {item.price}
            </h3>

            <button className="mt-8 rounded-full bg-slate-100 px-5 py-3 font-semibold hover:bg-slate-200">
              BOOK NOW
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}