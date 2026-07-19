export default function SectionHeading({
    eyebrow,
    title,
    description,
  }) {
    return (
      <div className="max-w-3xl space-y-3">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-amber-600">
            {eyebrow}
          </p>
        )}
  
        <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
          {title}
        </h2>
  
        {description && (
          <p className="text-lg leading-8 text-slate-600">
            {description}
          </p>
        )}
      </div>
    );
  }