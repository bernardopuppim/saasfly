import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function CultureSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const items = [
    {
      title: dict.home.sections.culture.item_1_title,
      desc: dict.home.sections.culture.item_1_desc,
    },
    {
      title: dict.home.sections.culture.item_2_title,
      desc: dict.home.sections.culture.item_2_desc,
    },
    {
      title: dict.home.sections.culture.item_3_title,
      desc: dict.home.sections.culture.item_3_desc,
    },
  ];

  return (
    <section className="container py-28">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
          {dict.home.sections.culture.title} <span className="text-brand">{dict.home.sections.culture.title_highlight}</span>
        </h2>

        <p className="max-w-3xl mx-auto text-center text-neutral-600 dark:text-neutral-300 text-lg mb-16">
          {dict.home.sections.culture.description}
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-card text-center space-y-3">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
