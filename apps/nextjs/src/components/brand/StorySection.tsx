"use client";

import useScrollInView from "~/hooks/use-scroll-in-view";

export default function StorySection() {
  const { ref, inView } = useScrollInView();

  return (
    <section className="container py-24">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto space-y-6 text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Por que a MindLoop existe?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
          A MindLoop nasce da prática em ambientes de alto risco, em que
          decisões não podem ser delegadas cegamente a modelos de IA. Vimos de
          perto o risco de tratar incidentes, normas e pessoas como simples
          tokens em um prompt.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
          Nossa resposta foi criar um paradigma diferente: Inteligência
          Artificial Assistida. Não queremos substituir o especialista — queremos
          dar a ele uma estrutura de raciocínio mais robusta, rápida e
          explicável.
        </p>
      </div>
    </section>
  );
}
