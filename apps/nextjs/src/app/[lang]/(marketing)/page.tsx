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

import type { Locale } from "~/config/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* HERO */}
      <section className="max-w-[1320px] mx-auto flex flex-col px-6 md:px-12 lg:px-20 py-0 lg:flex-row lg:items-center lg:justify-between lg:py-10 gap-16">
        <div className="max-w-xl space-y-8">
          <p className="text-xs md:text-sm font-medium text-brand uppercase tracking-[0.2em] mb-2">
            {dict.home.hero.tagline}
            <br />
            {dict.home.hero.tagline_sub}
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {dict.home.hero.title}
            <br />
            <span className="text-brand">{dict.home.hero.title_highlight}</span>
          </h1>

          <p className="text-base md:text-lg text-[hsl(var(--foreground)/0.7)] leading-relaxed">
            {dict.home.hero.description}
          </p>
        </div>

        <div className="relative w-full max-w-xl flex items-center justify-center">
          <Image
            src="/images/avatars/Mindloop_login_laptop.png"
            alt={dict.home.hero.image_alt}
            width={700}
            height={600}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Manifesto */}
      <section className="container max-w-4xl py-24 md:py-28 text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-[hsl(var(--brand))] to-[hsl(var(--brand)/0.6)] bg-clip-text text-transparent">
          {dict.home.manifesto.title}
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed max-w-3xl mx-auto">
          {dict.home.manifesto.description}
        </p>
      </section>

      {/*<TrustedBySection lang={lang} />*/}
      <IAAConceptSection lang={lang} />
      <SuperpowersSection lang={lang} />
      {/*<AboutSection lang={lang} />*/}
      {/*<StorySection lang={lang} />*/}
      <CultureSection lang={lang} />
      {/*<TimelineSection lang={lang} />*/}
      {/*<ProductFlowSection lang={lang} />*/}
      <TeamSection lang={lang} />
      {/*<TestimonialsSection lang={lang} />*/}

      {/* CTA Final */}
      <section className="container py-28 md:py-32 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {dict.home.cta_final.title}
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-2xl mx-auto">
          {dict.home.cta_final.description}
        </p>
      </section>
    </>
  );
}
