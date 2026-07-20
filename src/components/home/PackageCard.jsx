// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   CheckCircle2,
//   Clock,
//   Star,
//   Users,
//   MapPin,
// } from "lucide-react";

// export default function PackageCard({ pack, index, onClick }) {
//   return (
//     <motion.article
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.15,
//       }}
//       whileHover={{
//         y: -12,
//         scale: 1.03,
//       }}
//       whileTap={{
//         scale: 0.98,
//       }}
//       className={`group relative overflow-hidden rounded-[32px] border bg-white shadow-lg transition-all duration-500 hover:shadow-2xl ${
//         pack.popular
//           ? "border-amber-400 ring-2 ring-amber-200"
//           : "border-slate-200"
//       }`}
//     >
//       {/* Popular Badge */}

//       {pack.popular && (
//         <div className="absolute right-5 top-5 z-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg animate-pulse">
//           ⭐ Most Popular
//         </div>
//       )}

//       {/* Offer Badge */}

//       <div className="absolute left-5 top-5 z-20 rounded-full bg-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
//         Save {pack.discount}
//       </div>

//       {/* Package Image */}

//       <div className="overflow-hidden">
//         <img
//           src={pack.image}
//           alt={pack.label}
//           className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
//         />
//       </div>

//       {/* Glow */}

//       <div className="absolute -bottom-24 -right-24 h-60 w-60 rounded-full bg-amber-200 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-60" />

//       <div className="relative p-7">
//         {/* Package Name */}

//         <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
//           {pack.label}
//         </p>

//         {/* Rating */}

//         <div className="mt-4 flex items-center gap-2">
//           <Star size={18} className="fill-yellow-400 text-yellow-400" />

//           <span className="font-bold">{pack.rating}</span>

//           <span className="text-sm text-slate-500">
//             ({pack.reviews} Reviews)
//           </span>
//         </div>

//         {/* Price */}

//         <div className="mt-5">
//           <p className="text-lg text-slate-400 line-through">{pack.oldPrice}</p>

//           <div className="flex items-end gap-3">
//             <h2 className="text-4xl font-bold text-emerald-600">
//               {pack.price}
//             </h2>

//             <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
//               {pack.discount} OFF
//             </span>
//           </div>
//         </div>

//         {/* Description */}

//         <p className="mt-5 line-clamp-3 leading-7 text-slate-600">
//           {pack.description}
//         </p>

//         {/* Stats */}

//         <div className="mt-8 grid grid-cols-2 gap-4">
//           <div className="rounded-2xl bg-amber-50 p-4 text-center">
//             <Clock className="mx-auto mb-2 text-amber-600" size={22} />

//             <p className="text-xs text-slate-500">Duration</p>

//             <p className="mt-1 font-bold">{pack.duration}</p>
//           </div>

//           <div className="rounded-2xl bg-sky-50 p-4 text-center">
//             <Users className="mx-auto mb-2 text-sky-600" size={22} />

//             <p className="text-xs text-slate-500">Seats Left</p>

//             <p className="mt-1 font-bold text-red-500">{pack.seats}</p>
//           </div>
//         </div>

//         {/* Distance */}

//         <div className="mt-6 flex items-center gap-2 rounded-xl bg-slate-100 p-4">
//           <MapPin className="text-red-500" size={18} />

//           <span className="font-medium text-slate-700">{pack.distance}</span>
//         </div>

//         {/* Includes */}

//         <div className="mt-7 space-y-3">
//           {pack.includes.slice(0, 5).map((item) => (
//             <div key={item} className="flex items-center gap-3">
//               <CheckCircle2 className="text-green-600" size={18} />

//               <span className="text-slate-600">{item}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}

//         <button
//           onClick={onClick}
//           className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-xl"
//         >
//           View Details
//           <ArrowRight
//             size={20}
//             className="transition-transform duration-300 group-hover:translate-x-2"
//           />
//         </button>
//       </div>
//     </motion.article>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight, Star, CalendarDays } from "lucide-react";

export default function PackageCard({ pack, index, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
          src={pack.image}
          alt={pack.label}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Popular */}

        {pack.popular && (
          <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
            Most Popular
          </div>
        )}

        {/* Rating */}

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 shadow">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />

          <span className="text-sm font-bold">{pack.rating}</span>
        </div>

        {/* Package Name */}

        <div className="absolute bottom-5 left-5 text-white">
          <p className="text-xs uppercase tracking-[0.35em] opacity-90">
            Hajj & Umrah
          </p>

          <h2 className="mt-2 text-3xl font-bold">{pack.label}</h2>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        {/* Tagline */}

        <p className="text-slate-600 leading-7">{pack.tagline}</p>

        {/* Price */}

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-sm text-slate-400 line-through">
              {pack.oldPrice}
            </p>

            <h3 className="text-4xl font-bold text-emerald-600">
              {pack.price}
            </h3>
          </div>

          <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
            Save {pack.discount}
          </span>
        </div>

        {/* Duration */}

        <div className="mt-6 flex items-center gap-2 text-slate-500">
          <CalendarDays size={18} className="text-amber-600" />

          <span>{pack.duration}</span>
        </div>
        {/* View Details Button */}

        <button
          onClick={onClick}
          className="group/btn mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
        >
          View Details
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover/btn:translate-x-2"
          />
        </button>
      </div>

      {/* Bottom Accent */}

      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.article>
  );
}
