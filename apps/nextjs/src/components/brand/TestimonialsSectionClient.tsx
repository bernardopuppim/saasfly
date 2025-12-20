"use client";

import useScrollInView from "~/hooks/use-scroll-in-view";

interface TestimonialsSectionClientProps {
  title: string;
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
}

export default function TestimonialsSectionClient({
  title,
  testimonials,
}: TestimonialsSectionClientProps) {
  const { ref, inView } = useScrollInView();

  return (
    <section className="container py-24">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">{title}</h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-card/40 shadow-sm shadow-brand/5 flex flex-col gap-4"
            >
              <p className="text-sm text-neutral-600 dark:text-neutral-200 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-neutral-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
