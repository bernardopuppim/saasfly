"use client";

import Image from "next/image";
import useScrollInView from "~/hooks/use-scroll-in-view";

export default function TrustedBySection() {
  const { ref, inView } = useScrollInView();

  return (
    <section className="container py-12 md:py-16">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto text-center space-y-6 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-xs md:text-sm font-medium text-neutral-500 uppercase tracking-[0.25em]">
          Confiado por profissionais de EHS, Compliance e Operações
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          {/* Substituir por logos reais depois */}
          <div className="h-10 flex items-center justify-center px-6 rounded-full border border-dashed border-neutral-300 text-xs text-neutral-500">
            Operações de Óleo & Gás
          </div>
          <div className="h-10 flex items-center justify-center px-6 rounded-full border border-dashed border-neutral-300 text-xs text-neutral-500">
            Energia & Geração
          </div>
          <div className="h-10 flex items-center justify-center px-6 rounded-full border border-dashed border-neutral-300 text-xs text-neutral-500">
            Times de SMS & Compliance
          </div>
        </div>
      </div>
    </section>
  );
}
