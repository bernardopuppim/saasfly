"use client";

import useScrollInView from "~/hooks/use-scroll-in-view";

const items = [
  {
    title: "Raciocínio multietapas",
    desc: "Vai além de respostas de chat. Lida com incidentes, normas e contexto em cadeias de decisão estruturadas.",
  },
  {
    title: "Transparência total",
    desc: "Cada classificação vem acompanhada de critério, trilha de decisão e referência normativa.",
  },
  {
    title: "Aprendizado contínuo",
    desc: "Intervenções humanas (HITL) alimentam o sistema, melhorando decisões futuras sem perder controle.",
  },
  {
    title: "Pronto para ambientes críticos",
    desc: "Arquitetura pensada para operações reguladas, auditorias, segurança de processo e SMS.",
  },
];

export default function SuperpowersSection() {
  const { ref, inView } = useScrollInView();

  return (
    <section className="container py-24">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Por que <span className="text-brand">MindLoop</span>?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-3xl mx-auto mb-12">
          Não somos apenas “mais um chat com IA”. A MindLoop foi criada para
          lidar com decisões sérias, em ambientes regulados, com impacto real em
          pessoas, ativos e meio ambiente.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-card/40 shadow-sm shadow-brand/5"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
