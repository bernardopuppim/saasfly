"use client";

import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import GradientText from "../ui/GradientText";

export default function AboutSection() {
  return (
    <section className="container py-24">
      <Reveal className="max-w-4xl mx-auto text-center space-y-6">
        <SectionTitle>
          Sobre a <GradientText>MindLoop</GradientText>
        </SectionTitle>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg">
          Criamos a MindLoop com a convicção de que a inteligência artificial
          do futuro não substituirá humanos — ela trabalhará ao lado deles.
        </p>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg">
          Nosso nome representa esse ciclo: um <strong>loop</strong> de aprendizado entre humano e máquina.
        </p>
      </Reveal>
    </section>
  );
}
