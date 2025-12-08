"use client";

import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import { timeline } from "~/data/timeline";

export default function TimelineSection() {
  return (
    <section className="container py-24">
      <Reveal>
        <SectionTitle>Nossa Jornada</SectionTitle>

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
      </Reveal>
    </section>
  );
}
