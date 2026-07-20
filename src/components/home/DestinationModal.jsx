import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Hotel,
  Plane,
  MapPin,
  Utensils,
  Star,
  X,
} from "lucide-react";

export default function DestinationModal({ destination, onClose }) {
  return (
    <AnimatePresence>
      {destination && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{
              scale: 0.85,
              opacity: 0,
              y: 40,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[32px] bg-white shadow-2xl"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-white p-3 shadow-lg transition-all hover:rotate-90 hover:bg-red-500 hover:text-white"
            >
              <X size={22} />
            </button>

            {/* Hero */}

            <div className="relative">
              <img
                src={destination.image}
                alt={destination.place}
                className="h-80 w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur">
                  International Tour
                </span>

                <h2 className="mt-4 text-5xl font-bold text-white">
                  {destination.place}
                </h2>

                <p className="mt-2 text-4xl font-bold text-yellow-300">
                  {destination.price}
                </p>
              </div>
            </div>

            {/* Body */}

            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800">
                Tour Overview
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {destination.description}
              </p>

              {/* Stats */}

              <div className="mt-10 grid gap-5 md:grid-cols-4">
                <div className="rounded-2xl bg-amber-50 p-5 text-center">
                  <CalendarDays
                    className="mx-auto mb-3 text-amber-600"
                    size={28}
                  />

                  <p className="text-sm text-slate-500">Duration</p>

                  <h4 className="mt-2 font-bold">{destination.duration}</h4>
                </div>

                <div className="rounded-2xl bg-sky-50 p-5 text-center">
                  <Hotel className="mx-auto mb-3 text-sky-600" size={28} />

                  <p className="text-sm text-slate-500">Hotel</p>

                  <h4 className="mt-2 font-bold">{destination.hotel}</h4>
                </div>

                <div className="rounded-2xl bg-green-50 p-5 text-center">
                  <Utensils className="mx-auto mb-3 text-green-600" size={28} />

                  <p className="text-sm text-slate-500">Meals</p>

                  <h4 className="mt-2 font-bold">{destination.meals}</h4>
                </div>

                <div className="rounded-2xl bg-yellow-50 p-5 text-center">
                  <Star
                    className="mx-auto mb-3 fill-yellow-400 text-yellow-400"
                    size={28}
                  />

                  <p className="text-sm text-slate-500">Rating</p>

                  <h4 className="mt-2 font-bold">{destination.rating}</h4>
                </div>
              </div>

              {/* Package Includes */}

              <h3 className="mt-12 text-2xl font-bold text-slate-800">
                Package Includes
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {destination.includes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border bg-slate-50 p-4"
                  >
                    <CheckCircle2 className="text-green-600" size={20} />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Highlights */}

              <h3 className="mt-12 text-2xl font-bold text-slate-800">
                Tour Highlights
              </h3>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-blue-50 p-6 text-center">
                  <Plane className="mx-auto mb-4 text-blue-600" size={34} />

                  <h4 className="font-bold">Return Flight</h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Economy return airfare included.
                  </p>
                </div>

                <div className="rounded-2xl bg-amber-50 p-6 text-center">
                  <Hotel className="mx-auto mb-4 text-amber-600" size={34} />

                  <h4 className="font-bold">Premium Hotel</h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Comfortable accommodation near city attractions.
                  </p>
                </div>

                <div className="rounded-2xl bg-green-50 p-6 text-center">
                  <MapPin className="mx-auto mb-4 text-green-600" size={34} />

                  <h4 className="font-bold">Sightseeing</h4>

                  <p className="mt-2 text-sm text-slate-500">
                    Guided city tours and popular attractions.
                  </p>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-12 flex flex-col gap-4 md:flex-row">
                <a
                  href={`https://wa.me/917250323786?text=${encodeURIComponent(
                    `Hello, I am interested in the ${destination.place} package. Please share complete details.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-full bg-gradient-to-r from-green-600 to-green-500 py-4 text-center text-lg font-semibold text-white transition hover:scale-105 hover:shadow-xl"
                >
                  📱 Book on WhatsApp
                </a>

                <button
                  onClick={onClose}
                  className="flex-1 rounded-full border border-slate-300 py-4 text-lg font-semibold transition hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
