// import SectionHeading from "../components/common/SectionHeading";

// const services = [
//   {
//     title: "Flight Booking",
//     detail: "Domestic & International Flight Booking",
//   },
//   {
//     title: "Visa Assistance",
//     detail: "Tourist, Business & Student Visa",
//   },
//   {
//     title: "Passport",
//     detail: "Fresh & Renewal Passport Services",
//   },
//   {
//     title: "PAN Card",
//     detail: "New PAN & PAN Correction",
//   },
//   {
//     title: "Aadhaar",
//     detail: "Aadhaar Update & Print",
//   },
//   {
//     title: "Hotel Booking",
//     detail: "Budget & Luxury Hotels",
//   },
// ];

// export default function Services() {
//   return (
//     <div className="space-y-8">
//       <SectionHeading
//         eyebrow="Services"
//         title="Everything You Need Under One Roof"
//       />

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {services.map((service) => (
//           <div
//             key={service.title}
//             className="rounded-3xl border bg-white p-8 shadow-sm"
//           >
//             <h3 className="text-2xl font-semibold">
//               {service.title}
//             </h3>

//             <p className="mt-4 text-slate-600">
//               {service.detail}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import {
  Plane,
  BadgeCheck,
  BookOpen,
  CreditCard,
  IdCard,
  Hotel,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

import SectionHeading from "../components/common/SectionHeading";

const services = [
  {
    title: "Flight Booking",
    detail: "Domestic & International Flight Booking",
    icon: Plane,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Visa Assistance",
    detail: "Tourist, Business & Student Visa",
    icon: BadgeCheck,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Passport",
    detail: "Fresh & Renewal Passport Services",
    icon: BookOpen,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "PAN Card",
    detail: "New PAN & PAN Correction",
    icon: CreditCard,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Aadhaar",
    detail: "Aadhaar Update & Print",
    icon: IdCard,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Hotel Booking",
    detail: "Budget & Luxury Hotels",
    icon: Hotel,
    color: "from-yellow-500 to-amber-500",
  },
];

export default function Services() {
  return (
    <section className="space-y-12">
      <SectionHeading
        eyebrow="Services"
        title="Everything You Need Under One Roof"
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition-all duration-500 hover:shadow-2xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
              >
                <Icon size={30} />
              </div>

              <h3 className="text-2xl font-bold">{service.title}</h3>

              <p className="mt-4 text-slate-600">{service.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
