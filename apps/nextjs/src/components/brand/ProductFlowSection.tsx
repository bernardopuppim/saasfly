"use client";

import useScrollInView from "~/hooks/use-scroll-in-view";

const steps = [
  {
    label: "1. Entrada do evento",
    text: "Descrição livre, anexos e contexto operacional enviados pelo time de campo ou controle.",
  },
  {
    label: "2. Raciocínio MindLoop",
    text: "LATS-P, RAG normativo, memória e histórico de incidentes trabalham juntos para entender o caso.",
  },
  {
    label: "3. Classificações & explicações",
    text: "Tipologia ANP, classificação SMS e critérios são retornados com trilha de decisão.",
  },
  {
    label: "4. Logs & auditoria",
    text: "Tudo fica registrado de forma estruturada, para auditorias internas, reguladores e melhoria contínua.",
  },
];

export default function ProductFlowSection() {
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
          Como a MindLoop pensa com você.
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg text-center max-w-3xl mx-auto mb-10">
          Debaixo da interface simples, a MindLoop coordena múltiplos agentes,
          normas e memórias para entregar uma decisão sólida e explicável.
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
