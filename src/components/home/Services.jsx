import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/services";
import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Our Digital & Cyber Services"
        title="All online services under one roof"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service) => (
          <div
            key={service.name}
            onClick={() => setSelectedService(service)}
            className="cursor-pointer rounded-[2rem] border border-slate-200 bg-slate-50 p-6 text-center text-sm font-semibold text-slate-800 transition hover:bg-amber-50 hover:border-amber-400"
          >
            {service.name}
          </div>
        ))}
      </div>
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{selectedService.name}</h2>

              <button
                onClick={() => setSelectedService(null)}
                className="text-2xl"
              >
                ×
              </button>
            </div>

            <hr className="my-4" />

            {selectedService.documents && (
              <>
                <h3 className="font-semibold text-lg">Required Documents</h3>

                <ul className="mt-3 list-disc pl-5">
                  {selectedService.documents.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedService.price && (
              <div className="mt-5 rounded-xl bg-amber-50 p-4">
                <p className="text-lg font-bold text-amber-700">
                  Price : {selectedService.price}
                </p>
              </div>
            )}

            <button
              onClick={() => setSelectedService(null)}
              className="mt-6 w-full rounded-full bg-amber-500 py-3 font-semibold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
