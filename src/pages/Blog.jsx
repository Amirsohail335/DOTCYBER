import SectionHeading from "../components/common/SectionHeading";
import { blogPosts } from "../data/blog";

export default function Blog() {
  return (
    <div className="space-y-8">
      <SectionHeading
        eyebrow="Travel Blog"
        title="Latest News & Travel Tips"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="rounded-3xl border bg-white p-8 shadow-sm"
          >
            <h3 className="text-2xl font-semibold">
              {post.title}
            </h3>

            <p className="mt-4 text-slate-600">
              {post.excerpt}
            </p>

            <button className="mt-6 rounded-full bg-amber-500 px-5 py-2 font-semibold text-white">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}