import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function StorySection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <section className="container py-24">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {dict.home.sections.story.title}
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
          {dict.home.sections.story.description_1}
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
          {dict.home.sections.story.description_2}
        </p>
      </div>
    </section>
  );
}
