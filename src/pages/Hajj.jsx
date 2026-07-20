import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Hotel, Utensils } from "lucide-react";

import SectionHeading from "../components/common/SectionHeading";
import { packages } from "../data/packages";

export default function Hajj() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Hajj & Umrah"
        title="Choose Your Best Package"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {packages.map((pack, index) => (
          <motion.div
            key={pack.label}
            onClick={() => setSelectedPackage(pack)}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -12,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300"
          >
            {/* Background Glow */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-200 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-70" />

            {/* Ribbon */}
            <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold text-white">
              POPULAR
            </div>

            <h3 className="text-2xl font-bold text-slate-800 transition duration-300 group-hover:text-amber-600">
              {pack.label}
            </h3>

            <p className="mt-6 text-4xl font-bold text-emerald-600 transition duration-300 group-hover:scale-110">
              {pack.price}
            </p>

            <p className="mt-4 text-slate-600 line-clamp-3">
              {pack.description}
            </p>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Click for Details
              </span>

              <ArrowRight
                size={20}
                className="transition duration-300 group-hover:translate-x-2 group-hover:text-amber-600"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}

      {selectedPackage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-amber-600">
                  {selectedPackage.label}
                </h2>

                <p className="mt-2 text-3xl font-bold text-emerald-600">
                  {selectedPackage.price}
                </p>
              </div>

              <button
                onClick={() => setSelectedPackage(null)}
                className="text-3xl font-bold text-slate-400 hover:text-red-500"
              >
                ×
              </button>
            </div>

            <hr className="my-6" />

            <p className="leading-8 text-slate-600">
              {selectedPackage.description}
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl bg-amber-50 p-5 text-center">
                <Clock
                  className="mx-auto mb-3 text-amber-600"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Duration
                </p>

                <h4 className="mt-2 font-bold">
                  {selectedPackage.duration}
                </h4>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5 text-center">
                <Hotel
                  className="mx-auto mb-3 text-sky-600"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Hotel
                </p>

                <h4 className="mt-2 font-bold">
                  {selectedPackage.hotel}
                </h4>
              </div>

              <div className="rounded-2xl bg-green-50 p-5 text-center">
                <Utensils
                  className="mx-auto mb-3 text-green-600"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Meals
                </p>

                <h4 className="mt-2 font-bold">
                  {selectedPackage.meals}
                </h4>
              </div>
            </div>

            <button
              onClick={() => setSelectedPackage(null)}
              className="mt-10 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-lg font-semibold text-white transition duration-300 hover:shadow-lg"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}