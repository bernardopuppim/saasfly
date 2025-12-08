import { ClerkProvider } from "@clerk/nextjs";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

import "~/styles/globals.css";

import { NextDevtoolsProvider } from "@next-devtools/core";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "@saasfly/ui";
import { Toaster } from "@saasfly/ui/toaster";

import { TailwindIndicator } from "~/components/tailwind-indicator";
import { ThemeProvider } from "~/components/theme-provider";

// Fonts
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../styles/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: "MindLoop IAA™ — Inteligência Artificial Assistida",
    template: "%s | MindLoop",
  },
  description:
    "A MindLoop cria sistemas inteligentes que raciocinam, aprendem e evoluem junto com você. A IA do futuro não é artificial — é colaborativa.",
  keywords: [
    "MindLoop",
    "IAA",
    "Inteligência Artificial Assistida",
    "Human in the Loop",
    "HITL",
    "LATS-P",
    "AI Agents",
    "Raciocínio multietapas",
    "Safety",
    "SMS",
    "ANP",
    "Oil & Gas",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mindloop.ia.br",
    title: "MindLoop IAA™ — Inteligência Artificial Assistida",
    description:
      "A IA do futuro não é artificial — é compartilhada. Conheça a filosofia IAA™.",
    siteName: "MindLoop",
    images: [
      {
        url: "/og/mindloop-og.png",
        width: 1200,
        height: 630,
        alt: "MindLoop — IAA™ Assisted Artificial Intelligence",
      },
    ],
  },
  icons: {
    icon: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://mindloop.ia.br"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontHeading.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <NextDevtoolsProvider>{children}</NextDevtoolsProvider>
            <Analytics />
            <SpeedInsights />
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
