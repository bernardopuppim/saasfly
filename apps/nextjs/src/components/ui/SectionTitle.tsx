"use client";

export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
      {children}
    </h2>
  );
}
