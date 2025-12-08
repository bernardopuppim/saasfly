import type { Config } from "tailwindcss";
import baseConfig from "@saasfly/tailwind-config";

export default {
  content: [
    ...baseConfig.content,
    "../../packages/ui/src/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  presets: [baseConfig],

  theme: {
    extend: {
      colors: {
        brand: "hsl(var(--brand))",
      },
      backgroundColor: {
        brand: "hsl(var(--brand))",
      },
      borderColor: {
        brand: "hsl(var(--brand))",
      },
      ringColor: {
        brand: "hsl(var(--brand))",
      },
      gradientColorStops: {
        brand: "hsl(var(--brand))",
      },
    },
  },
} satisfies Config;
