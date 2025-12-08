"use client";

import { useEffect, useRef, useState } from "react";

export default function useScrollInView(threshold: number = 0.2) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      {
        threshold,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
