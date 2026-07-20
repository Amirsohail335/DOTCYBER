// import SectionHeading from "../common/SectionHeading";
// import { destinations } from "../../data/destinations";

// export default function Destinations() {
//   return (
//     <section className="space-y-8">
//       <SectionHeading
//         eyebrow="Popular Destinations"
//         title="Explore top international destinations with best offers"
//       />

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {destinations.map((item) => (
//           <article
//             key={item.place}
//             className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg"
//           >
//             <p className="text-sm uppercase tracking-widest text-amber-600">
//               {item.place}
//             </p>

//             <h3 className="mt-4 text-2xl font-semibold">
//               Starting From {item.price}
//             </h3>

//             <button className="mt-8 rounded-full bg-slate-100 px-5 py-3 font-semibold hover:bg-slate-200">
//               BOOK NOW
//             </button>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Star,
} from "lucide-react";

import SectionHeading from "../common/SectionHeading";
import DestinationModal from "./DestinationModal";
import { destinations } from "../../data/destinations";

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] =
    useState(null);

  return (
    <>
      <section className="space-y-12">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Explore Amazing International Destinations"
          description="Discover unforgettable holidays with premium hotels, exciting sightseeing and the best prices."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((item, index) => (
            <motion.article
              key={item.place}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.place}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Offer */}

                <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                  {item.offer}
                </div>

                {/* Rating */}

                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 shadow">

                  <Star
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="font-bold">
                    {item.rating}
                  </span>

                </div>

                {/* Destination */}

                <div className="absolute bottom-5 left-5 text-white">

                  <p className="text-xs uppercase tracking-[0.35em] opacity-90">
                    International Tour
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.place}
                  </h2>

                </div>

              </div>

              {/* Content */}

              <div className="p-6">

                <p className="leading-7 text-slate-600">
                  {item.tagline}
                </p>

                <div className="mt-6 flex items-end justify-between">

                  <div>

                    <p className="text-sm text-slate-400 line-through">
                      {item.oldPrice}
                    </p>

                    <h3 className="text-4xl font-bold text-emerald-600">
                      {item.price}
                    </h3>

                  </div>

                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                    Save {item.discount}
                  </span>

                </div>

                <div className="mt-6 flex items-center gap-2 text-slate-500">

                  <CalendarDays
                    size={18}
                    className="text-amber-600"
                  />

                  <span>{item.duration}</span>

                </div>

                <button
                  onClick={() =>
                    setSelectedDestination(item)
                  }
                  className="group/btn mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  View Details

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover/btn:translate-x-2"
                  />
                </button>

              </div>

              <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </motion.article>
          ))}
        </div>
      </section>

      <DestinationModal
        destination={selectedDestination}
        onClose={() =>
          setSelectedDestination(null)
        }
      />
    </>
  );
}