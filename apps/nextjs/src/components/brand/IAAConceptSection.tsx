"use client";

import useScrollInView from "~/hooks/use-scroll-in-view";

export default function IAAConceptSection() {
  const { ref, inView } = useScrollInView();

  return (
    <section className="container py-24">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="space-y-4">
          <p className="text-sm font-semibold text-brand uppercase tracking-[0.2em]">
            IAA™ — Inteligência Artificial Assistida
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            A inteligência não é artificial. Ela é colaborativa.
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            A MindLoop foi desenhada em torno de loops de aprendizado: humanos
            interpretam, ajustam e orientam — e a IA registra, aprende e
            evolui. Cada decisão é resultado de um diálogo estruturado entre
            especialistas e sistemas.
          </p>
        </div>

        {/* Diagrama simples do conceito IAA */}
        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xl">
              🧑‍💼
            </div>
            <div>
              <p className="font-semibold">Humano</p>
              <p className="text-sm text-neutral-500">
                Contexto, responsabilidade, julgamento e experiência prática.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xl">
              🤖
            </div>
            <div>
              <p className="font-semibold">IA MindLoop</p>
              <p className="text-sm text-neutral-500">
                Raciocínio multietapas, memória, busca normativa e explicações.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-xl">
              ∞
            </div>
            <div>
              <p className="font-semibold">Loop de Aprendizado</p>
              <p className="text-sm text-neutral-500">
                Cada interação ajusta o modelo, refina critérios e fortalece a
                confiança entre pessoas e máquina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
