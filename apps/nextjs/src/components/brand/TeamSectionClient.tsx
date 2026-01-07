"use client";

import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

interface TeamSectionClientProps {
  title: string;
  team: Array<{
    name: string;
    role: string;
    bio: string;
    image?: string;
    linkedin?: string;
  }>;
}

export default function TeamSectionClient({
  title,
  team,
}: TeamSectionClientProps) {
  return (
    <section className="container py-28">
      <Reveal>
        <SectionTitle>{title}</SectionTitle>

        <div className="grid md:grid-cols-1 gap-10 max-w-4xl mx-auto">
          {team.map((person, index) => (
            <TeamMemberCard key={index} {...person} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
