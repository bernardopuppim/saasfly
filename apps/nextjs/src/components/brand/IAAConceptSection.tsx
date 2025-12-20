import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function IAAConceptSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <section className="container py-24">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-brand uppercase tracking-[0.2em]">
            {dict.home.sections.iaa_concept.tagline}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {dict.home.sections.iaa_concept.title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-lg">
            {dict.home.sections.iaa_concept.description}
          </p>
        </div>

        <div className="grid gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xl">
              🧑‍💼
            </div>
            <div>
              <p className="font-semibold">{dict.home.sections.iaa_concept.human_label}</p>
              <p className="text-sm text-neutral-500">
                {dict.home.sections.iaa_concept.human_desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand text-xl">
              🤖
            </div>
            <div>
              <p className="font-semibold">{dict.home.sections.iaa_concept.ai_label}</p>
              <p className="text-sm text-neutral-500">
                {dict.home.sections.iaa_concept.ai_desc}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white text-xl">
              ∞
            </div>
            <div>
              <p className="font-semibold">{dict.home.sections.iaa_concept.loop_label}</p>
              <p className="text-sm text-neutral-500">
                {dict.home.sections.iaa_concept.loop_desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
