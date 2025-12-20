import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function SuperpowersSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const items = [
    {
      title: dict.home.sections.superpowers.item_1_title,
      desc: dict.home.sections.superpowers.item_1_desc,
    },
    {
      title: dict.home.sections.superpowers.item_2_title,
      desc: dict.home.sections.superpowers.item_2_desc,
    },
    {
      title: dict.home.sections.superpowers.item_3_title,
      desc: dict.home.sections.superpowers.item_3_desc,
    },
    {
      title: dict.home.sections.superpowers.item_4_title,
      desc: dict.home.sections.superpowers.item_4_desc,
    },
  ];

  return (
    <section className="container py-24">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {dict.home.sections.superpowers.title} <span className="text-brand">{dict.home.sections.superpowers.title_highlight}</span>?
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 text-lg max-w-3xl mx-auto mb-12">
          {dict.home.sections.superpowers.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border bg-card/40 shadow-sm shadow-brand/5"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-neutral-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
