import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function AboutSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <section className="container py-24">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {dict.home.sections.about.title} <span className="text-brand">{dict.home.sections.about.title_highlight}</span>
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg">
          {dict.home.sections.about.description_1}
        </p>

        <p className="text-neutral-600 dark:text-neutral-300 text-lg">
          {dict.home.sections.about.description_2}
        </p>
      </div>
    </section>
  );
}
