// import SectionHeading from "../common/SectionHeading";
// import { packages } from "../../data/packages";

// export default function Packages() {
//   return (
//     <section className="space-y-8">
//       <SectionHeading
//         eyebrow="Hajj & Umrah Packages"
//         title="Spiritual journey made comfortable"
//       />

//       <div className="grid gap-6 md:grid-cols-3">
//         {packages.map((pack) => (
//           <article
//             key={pack.label}
//             className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-amber-50 p-8 shadow-sm"
//           >
//             <p className="text-sm uppercase tracking-widest text-slate-600">
//               {pack.label}
//             </p>

//             <h3 className="mt-5 text-3xl font-semibold">
//               {pack.price}
//             </h3>

//             <button className="mt-8 rounded-full bg-slate-100 px-5 py-3 font-semibold hover:bg-slate-200">
//               VIEW DETAILS
//             </button>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import SectionHeading from "../common/SectionHeading";
import PackageCard from "./PackageCard";
import PackageModal from "./PackageModal";
import { packages } from "../../data/packages";

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <>
      <section className="space-y-12">
        <SectionHeading
          eyebrow="Hajj & Umrah Packages"
          title="Choose Your Perfect Spiritual Journey"
          description="Affordable, Deluxe and VIP packages carefully designed to provide comfort, convenience and a spiritually enriching experience."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pack, index) => (
            <PackageCard
              key={pack.label}
              pack={pack}
              index={index}
              onClick={() => setSelectedPackage(pack)}
            />
          ))}
        </div>
      </section>

      <PackageModal
        packageData={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />
    </>
  );
}