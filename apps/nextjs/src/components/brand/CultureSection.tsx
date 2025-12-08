"use client";

import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { cultureItems } from "~/data/culture";

export default function CultureSection() {
  return (
    <section className="container py-28">
      <Reveal>
        <SectionTitle>
          Nossa <span className="text-brand">Cultura</span>
        </SectionTitle>

        <p className="max-w-3xl mx-auto text-center text-neutral-600 dark:text-neutral-300 text-lg mb-16">
          A MindLoop nasceu para unir tecnologia, ciência e humanidade.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {cultureItems.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-card text-center space-y-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
