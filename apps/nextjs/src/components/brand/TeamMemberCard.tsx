"use client";

import Image from "next/image";

export default function TeamMemberCard({ name, role, img }) {
  return (
    <div className="text-center space-y-4">
      <Image
        src={img}
        alt={name}
        width={140}
        height={140}
        className="rounded-full mx-auto"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-neutral-500">{role}</p>
    </div>
  );
}
