"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@saasfly/ui";

import { MainNav } from "./main-nav";
import { LocaleChange } from "~/components/locale-change";
import { ModeToggle } from "~/components/mode-toggle";
import { GitHubStar } from "~/components/github-star";

import useScroll from "~/hooks/use-scroll";
import type { MainNavItem } from "~/types";

interface NavBarProps {
  user?: { name?: string; image?: string; email?: string };
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  params: { lang: string };
  marketing: Record<string, string | object>;
  dropdown: Record<string, string>;
}

export function NavBar({
  user,
  items,
  children,
  rightElements,
  scroll = true,
  params: { lang },
  marketing,
  dropdown,
}: NavBarProps) {
  const scrolled = useScroll(30);
  const segment = useSelectedLayoutSegment();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-xl transition-all",
        scrolled
          ? "border-b border-white/10 bg-background/80 shadow-sm"
          : "border-b border-transparent bg-background/40"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        
        {/* LEFT: Logo + Navigation */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              width={150}
              height={60}
              alt="MindLoop"
              className="opacity-90 hover:opacity-100 transition"
            />
          </Link>

          {items?.length ? (
            <nav className="hidden md:flex items-center gap-6">
              {items.map((item) => {
                const isActive = item.href.startsWith(`/${segment}`);

                return (
                  <Link
                    key={item.href}
                    href={
                      item.href.startsWith("http")
                        ? item.href
                        : `/${lang}${item.href}`
                    }
                    className={cn(
                      "relative text-sm text-foreground/70 hover:text-foreground transition",
                      "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0",
                      "after:bg-[hsl(var(--brand))] after:transition-all after:duration-300 hover:after:w-full",
                      isActive && "text-foreground after:w-full font-medium"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          ) : null}
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4">
          {rightElements}

          {/* GitHub Star */}
          <GitHubStar />

        {/* Language Selector */}
        <div className="mt-[2px]">
          <LocaleChange />
        </div>

          <div className="mt-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
