"use client";

import React from "react";
import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";
import { MobileNav } from "~/components/mobile-nav";

import type { MainNavItem } from "~/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  params: {
    lang: string;
  };
  marketing?: Record<string, string | object>;
}

export function MainNav({ items, children, params: { lang } }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      {/* LOGO */}
      <div className="flex items-center">
        <Link href={`/${lang}`} className="hidden items-center space-x-2 md:flex">
          <div className="text-3xl font-bold tracking-tight">
            Mind<span className="text-[hsl(var(--brand))]">Loop</span>
          </div>
        </Link>
      </div>

      {/* MOBILE MENU BUTTON */}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.Close /> : <Icons.Logo />}
        <span className="font-bold">Menu</span>
      </button>

      {/* MOBILE NAV */}
      {showMobileMenu && items && (
        <MobileNav items={items} menuItemClick={() => setShowMobileMenu(false)}>
          {children}
        </MobileNav>
      )}
    </div>
  );
}
