import SectionHeading from "../components/common/SectionHeading";
import { galleryItems } from "../data/gallery";

export default function Gallery() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Gallery"
        title="Our Travel Memories"
        description="Explore beautiful destinations served by DOT CYBER & TRAVELS."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="overflow-hidden rounded-3xl border bg-white shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-72 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}