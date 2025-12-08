"use client";

export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        text-transparent bg-clip-text
        bg-gradient-to-r
        from-[hsl(var(--brand))]
        to-[hsl(var(--brand)/0.6)]
      "
    >
      {children}
    </span>
  );
}
