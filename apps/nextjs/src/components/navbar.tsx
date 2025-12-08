"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { User } from "@saasfly/auth";
import { useSelectedLayoutSegment } from "next/navigation";

import { Button } from "@saasfly/ui/button";
import { cn } from "@saasfly/ui";

import { MainNav } from "./main-nav";
import { LocaleChange } from "~/components/locale-change";
import { useSigninModal } from "~/hooks/use-signin-modal";
import { UserAccountNav } from "./user-account-nav";
import { ModeToggle } from "~/components/mode-toggle";

import useScroll from "~/hooks/use-scroll";
import type { MainNavItem } from "~/types";

interface NavBarProps {
  user: Pick<User, "name" | "image" | "email"> | undefined;
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
  const signInModal = useSigninModal();

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
          {/*
          */}
          
          <div className="mt-6">
            <ModeToggle />
          </div>
          

          {/* LOGIN 
          {!user && (
            <Link href={`/${lang}/login-clerk`}>
              <Button
                variant="outline"
                size="sm"
                className="
                  border-[hsl(var(--border))]
                  text-foreground
                  hover:text-[hsl(var(--brand))]
                  hover:border-[hsl(var(--brand))]
                  transition-all
                "
              >
                Login
              </Button>
            </Link>
          )}*/}

          {/* SIGNUP 
          {!user ? (
            <Button
              size="sm"
              onClick={signInModal.onOpen}
              className="
                px-4
                bg-[hsl(var(--brand))]
                text-white
                hover:bg-[hsl(var(--brand)/0.85)]
                rounded-full
                transition
              "
            >
              {typeof marketing.signup === "string"
                ? marketing.signup
                : "Criar conta"}
            </Button>
          ) : (
            <UserAccountNav
              user={user}
              params={{ lang }}
              dict={dropdown}
            />
          )}*/}
        </div>
      </div>
    </header>
  );
}
