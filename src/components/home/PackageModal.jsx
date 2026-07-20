import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  MapPin,
  Star,
  Users,
  Plane,
  Hotel,
  Utensils,
  X,
} from "lucide-react";

export default function PackageModal({
  packageData,
  onClose,
}) {
  if (!packageData) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.85,
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
            className="absolute right-5 top-5 z-20 rounded-full bg-white p-3 shadow-lg transition hover:rotate-90 hover:bg-red-500 hover:text-white"
          >
            <X size={22} />
          </button>

          {/* Hero */}

          <div className="relative">

            <img
              src={packageData.image}
              alt={packageData.label}
              className="h-80 w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8 text-white">

              <p className="uppercase tracking-[0.35em] text-sm">
                Hajj & Umrah Package
              </p>

              <h2 className="mt-3 text-5xl font-bold">
                {packageData.label}
              </h2>

              <p className="mt-4 text-4xl font-bold text-yellow-300">
                {packageData.price}
              </p>

            </div>

          </div>

          <div className="p-8">

            {/* Description */}

            <h3 className="text-2xl font-bold">
              Package Overview
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              {packageData.description}
            </p>

            {/* Stats */}

            <div className="mt-10 grid gap-5 md:grid-cols-4">

              <div className="rounded-2xl bg-amber-50 p-5 text-center">
                <Clock
                  className="mx-auto mb-3 text-amber-600"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Duration
                </p>

                <h4 className="mt-2 font-bold">
                  {packageData.duration}
                </h4>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5 text-center">
                <Users
                  className="mx-auto mb-3 text-sky-600"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Seats Left
                </p>

                <h4 className="mt-2 font-bold text-red-500">
                  {packageData.seats}
                </h4>
              </div>

              <div className="rounded-2xl bg-green-50 p-5 text-center">
                <Star
                  className="mx-auto mb-3 fill-yellow-400 text-yellow-400"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Rating
                </p>

                <h4 className="mt-2 font-bold">
                  {packageData.rating}
                </h4>
              </div>

              <div className="rounded-2xl bg-red-50 p-5 text-center">
                <MapPin
                  className="mx-auto mb-3 text-red-500"
                  size={28}
                />

                <p className="text-sm text-slate-500">
                  Distance
                </p>

                <h4 className="mt-2 font-bold">
                  {packageData.distance}
                </h4>
              </div>

            </div>

            {/* Package Includes */}

            <h3 className="mt-12 text-2xl font-bold">
              Package Includes
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {packageData.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle2
                    className="text-green-600"
                    size={20}
                  />

                  <span>{item}</span>
                </div>
              ))}

            </div>

            {/* Highlights */}

            <h3 className="mt-12 text-2xl font-bold">
              Package Highlights
            </h3>

            <div className="mt-6 grid gap-5 md:grid-cols-3">

              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <Plane
                  className="mx-auto mb-4 text-blue-600"
                  size={34}
                />

                <h4 className="font-bold">
                  Return Flight
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Comfortable international flights.
                </p>
              </div>

              <div className="rounded-2xl bg-amber-50 p-6 text-center">
                <Hotel
                  className="mx-auto mb-4 text-amber-600"
                  size={34}
                />

                <h4 className="font-bold">
                  Premium Hotels
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Comfortable stay near Haram.
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <Utensils
                  className="mx-auto mb-4 text-green-600"
                  size={34}
                />

                <h4 className="font-bold">
                  Daily Meals
                </h4>

                <p className="mt-2 text-sm text-slate-500">
                  Fresh halal meals included.
                </p>
              </div>

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-col gap-4 md:flex-row">

              <a
                href={`https://wa.me/917250323786?text=${encodeURIComponent(
                  `Assalamu Alaikum,

I am interested in the ${packageData.label}.

Please share:

• Complete itinerary
• Hotel details
• Flight schedule
• Visa Process
• Available departure dates
• Payment details

Thank You.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
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
    </AnimatePresence>
  );
}