import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";
import TestimonialsSectionClient from "./TestimonialsSectionClient";

export default async function TestimonialsSection({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  const testimonials = [
    {
      quote: dict.home.sections.testimonials.quote_1,
      name: dict.home.sections.testimonials.name_1,
      role: dict.home.sections.testimonials.role_1,
    },
    {
      quote: dict.home.sections.testimonials.quote_2,
      name: dict.home.sections.testimonials.name_2,
      role: dict.home.sections.testimonials.role_2,
    },
  ];

  return (
    <TestimonialsSectionClient
      title={dict.home.sections.testimonials.title}
      testimonials={testimonials}
    />
  );
}
