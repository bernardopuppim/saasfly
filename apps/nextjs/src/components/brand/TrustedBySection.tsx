import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function TrustedBySection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <section className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-xs md:text-sm font-medium text-neutral-500 uppercase tracking-[0.25em]">
          {dict.home.sections.trusted_by.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
          <div className="h-10 flex items-center justify-center px-6 rounded-full border border-dashed border-neutral-300 text-xs text-neutral-500">
            {dict.home.sections.trusted_by.badge_oil_gas}
          </div>
          <div className="h-10 flex items-center justify-center px-6 rounded-full border border-dashed border-neutral-300 text-xs text-neutral-500">
            {dict.home.sections.trusted_by.badge_energy}
          </div>
          <div className="h-10 flex items-center justify-center px-6 rounded-full border border-dashed border-neutral-300 text-xs text-neutral-500">
            {dict.home.sections.trusted_by.badge_sms}
          </div>
        </div>
      </div>
    </section>
  );
}
