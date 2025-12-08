"use client";

import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import TeamMemberCard from "./TeamMemberCard";
import { team } from "~/data/team";

export default function TeamSection() {
  return (
    <section className="container py-28">
      <Reveal>
        <SectionTitle>Quem está por trás da MindLoop</SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((person, index) => (
            <TeamMemberCard key={index} {...person} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
