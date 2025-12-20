import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function TimelineSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const timeline = [
    {
      year: dict.home.sections.timeline.year_2024,
      text: dict.home.sections.timeline.text_2024,
    },
    {
      year: dict.home.sections.timeline.year_2025,
      text: dict.home.sections.timeline.text_2025,
    },
    {
      year: dict.home.sections.timeline.year_2026,
      text: dict.home.sections.timeline.text_2026,
    },
  ];

  return (
    <section className="container py-24">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
          {dict.home.sections.timeline.title}
        </h2>

        <div className="space-y-10 max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="text-brand font-semibold text-2xl">{item.year}</div>
              <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
