"use client";

import Image from "next/image";

export default function TeamMemberCard({ name, role, img }) {
  return (
    <div className="text-center space-y-4">
      <div className="relative w-[140px] h-[140px] mx-auto overflow-hidden rounded-full">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-neutral-500">{role}</p>
    </div>
  );
}
