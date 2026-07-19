import { openWhatsApp } from "../../utils/whatsapp";

export default function Hero() {
  return (
    <section className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
      <div className="space-y-8">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-600">
          Explore The World With
        </p>

        <h1 className="font-display text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-slate-900">
          DOT CYBER <span className="text-amber-600">&amp;</span> TRAVELS
        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          Your trusted partner for travel, visa & digital services. We make
          every journey seamless, premium and stress-free.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
            ✈️ 50+ Destinations
          </span>

          <span className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700">
            🌍 Visa & Travel Support
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() =>
              window.open(
                "https://www.akbartravels.com/in/flight",
                "_blank"
              )
            }
            className="rounded-full bg-slate-100 px-6 py-3 font-semibold"
          >
            BOOK FLIGHT
          </button>

          <button
            onClick={() =>
              window.open(
                "https://indianvisaonline.gov.in/",
                "_blank"
              )
            }
            className="rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-3 font-semibold text-white"
          >
            APPLY VISA
          </button>

          <button
            onClick={() => openWhatsApp()}
            className="rounded-full bg-emerald-500 px-6 py-3 font-semibold"
          >
            WHATSAPP NOW
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "Best Price",
              subtitle: "Lowest Fare Guarantee",
            },
            {
              title: "Fast Service",
              subtitle: "Quick & Easy Process",
            },
            {
              title: "100% Support",
              subtitle: "24×7 Customer Support",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border bg-gradient-to-br from-white to-amber-50 p-6 shadow-sm"
            >
              <p className="font-semibold">{item.title}</p>

              <p className="mt-2 text-sm text-slate-600">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-[2rem] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />

        <div className="absolute left-6 top-6 rounded-2xl bg-white px-4 py-3">
          <p className="text-xs uppercase tracking-widest text-amber-600">
            Trusted by
          </p>

          <h3 className="text-xl font-bold">
            10k+ Travelers
          </h3>
        </div>

        <div className="h-[600px]" />
      </div>
    </section>
  );
}