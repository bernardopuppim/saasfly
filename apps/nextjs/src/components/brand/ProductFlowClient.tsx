"use client";

import useScrollInView from "~/hooks/use-scroll-in-view";

interface ProductFlowClientProps {
  title: string;
  description: string;
  steps: Array<{
    label: string;
    text: string;
  }>;
}

export default function ProductFlowClient({
  title,
  description,
  steps,
}: ProductFlowClientProps) {
  const { ref, inView } = useScrollInView();

  return (
    <section className="container py-24">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          {title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg text-center max-w-3xl mx-auto mb-10">
          {description}
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-5 rounded-2xl border bg-card/40 flex flex-col gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </div>
              <p className="text-sm font-semibold">{step.label}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
