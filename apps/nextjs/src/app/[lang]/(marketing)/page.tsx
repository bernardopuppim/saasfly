import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "~/lib/get-dictionary";

import AboutSection from "~/components/brand/AboutSection";
import CultureSection from "~/components/brand/CultureSection";
import TimelineSection from "~/components/brand/TimelineSection";
import TeamSection from "~/components/brand/TeamSection";
import TrustedBySection from "~/components/brand/TrustedBySection";
import IAAConceptSection from "~/components/brand/IAAConceptSection";
import SuperpowersSection from "~/components/brand/SuperpowersSection";
import StorySection from "~/components/brand/StorySection";
import ProductFlowSection from "~/components/brand/ProductFlowSection";
import TestimonialsSection from "~/components/brand/TestimonialsSection";

import { Button } from "@saasfly/ui/button";
import type { Locale } from "~/config/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // ❗ Se remover i18n, remova esta linha
  const dict = await getDictionary(lang);

  return (
    <>
      {/* HERO */}
      <section className="max-w-[1320px] mx-auto flex flex-col px-6 md:px-12 lg:px-20 py-0 lg:flex-row lg:items-center lg:justify-between lg:py-10 gap-16">
        <div className="max-w-xl space-y-8">
          <p className="text-xs md:text-sm font-medium text-brand uppercase tracking-[0.2em] mb-2">
            IAA™ · Assisted Artificial Intelligence
            <br />
            AI built to think and evolve with you
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Delegar decisões à IA é arriscado
            <br />
            <span className="text-brand">Raciocinar com ela é poderoso</span>
          </h1>

          <p className="text-base md:text-lg text-[hsl(var(--foreground)/0.7)] leading-relaxed">
            A MindLoop cria sistemas inteligentes que raciocinam, aprendem e
            evoluem junto com você. Não no seu lugar.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* ❗ Se remover login, substitua rota */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-6 text-base rounded-full"
            >
              <Link href={`/${lang}/login`}>Começar agora</Link>
            </Button>

            <Button
              variant="outline"
              className="
                bg-[hsl(var(--background))]
                text-[hsl(var(--foreground))]
                border border-[hsl(var(--border))]
                hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]
                px-8 py-6 rounded-full text-base
              "
            >
              Agendar uma demonstração
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-xl flex items-center justify-center">
          {/* ❗ Certifique-se de que este arquivo existe */}
          <Image
            src="/images/avatars/Mindloop_login_laptop.png"
            alt="Mockup MindLoop"
            width={700}
            height={600}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="container max-w-4xl py-24 md:py-28 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand)/0.6)] bg-clip-text text-transparent">
          A inteligência do futuro não é artificial — é compartilhada.
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
          A MindLoop acredita que a IA deve ser uma ferramenta — não um
          trabalhador...
        </p>
      </section>

      <TrustedBySection />
      <IAAConceptSection />
      <SuperpowersSection />
      <AboutSection />
      <StorySection />
      <CultureSection />
      <TimelineSection />
      <ProductFlowSection />
      <TeamSection />
      <TestimonialsSection />

      {/* CTA Final */}
      <section className="container py-28 md:py-32 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Vamos construir o futuro da inteligência.
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">
          Se você acredita que a IA deve amplificar — não substituir — o
          potencial humano...
        </p>

        <div className="flex justify-center gap-4">
          <Link href={`/${lang}/login`}>
            <Button className="px-8 py-6 rounded-full text-base">
              Começar agora
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" className="px-8 py-6 rounded-full text-base">
              Fale com a MindLoop
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
