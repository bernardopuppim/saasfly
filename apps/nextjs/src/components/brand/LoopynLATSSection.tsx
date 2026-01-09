import Link from "next/link";
import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function LoopynLATSSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <section className="container py-24 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
            <h2
              className="
                font-sans
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-semibold
                tracking-tight
                leading-none
              "
            >
              Loopyn
              <span className="text-brand font-bold">LATS</span>
            </h2>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 font-light">
            {dict.home.sections.loopynlats.subtitle}
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6 mb-8">
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {dict.home.sections.loopynlats.description}
          </p>

          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
            {dict.home.sections.loopynlats.features}
          </p>
        </div>

        {/* Core Idea Box */}
        <div className="bg-gradient-to-br from-brand/10 to-brand/5 dark:from-brand/20 dark:to-brand/10 rounded-2xl p-8 mb-8 border border-brand/20">
          <h3 className="text-2xl font-semibold mb-4 text-brand">
            {dict.home.sections.loopynlats.core_title}
          </h3>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 italic">
            {dict.home.sections.loopynlats.core_description}
          </p>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {dict.home.sections.loopynlats.conclusion}
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={`/${lang}/docs/br/lats-p`}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-brand hover:bg-brand/90 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            {dict.home.sections.loopynlats.cta}
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
