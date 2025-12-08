import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { NavBar } from "~/components/navbar";
import { UserClerkAuthForm } from "~/components/user-clerk-auth-form";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  // Header minimalista: removemos menus e botões extras
  const fakeMarketing = {
    login: "",
    signup: "",
    introducing: "",
  };

  const fakeDropdown = {
    profile: "",
    billing: "",
    logout: "",
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">

      {/* ===============================
            HEADER PERSONALIZADO MINDLOOP
        ================================ */}
      <header className="w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <Link href={`/${lang}`} className="text-2xl font-bold tracking-tight">
            Mind<span className="text-brand">Loop</span>
          </Link>
        </div>
      </header>

      {/* ===============================
            GRID: 2 COLUNAS
        ================================ */}
      <div className="flex flex-1 w-full">

        {/* =============== LEFT COLUMN =============== */}
        <div className="hidden lg:flex w-1/2 relative items-center justify-center bg-black/20">

          {/* Botão de voltar */}
          <Link
            href={`/${lang}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute top-6 left-6 flex items-center text-brand hover:text-brand/80 z-20"
            )}
          >
            <Icons.ChevronLeft className="mr-2 h-5 w-5" />
            {dict.login.back}
          </Link>

          {/* Imagem */}
          <div className="absolute inset-0">
            <Image
              src="/images/blog/loop_thomas_edson.png"
              alt="MindLoop Login"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* =============== RIGHT COLUMN =============== */}
        <div className="flex w-full lg:w-1/2 items-center justify-center px-6 relative">

          {/* Botão de voltar no mobile */}
          <Link
            href={`/${lang}`}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "absolute left-4 top-4 lg:hidden z-20"
            )}
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            {dict.login.back}
          </Link>

          {/* Card de login */}
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-sm">

            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-brand">
                {dict.login.welcome_back}
              </h1>

              <p className="text-sm text-muted-foreground">
                {dict.login.signin_title}
              </p>
            </div>

            <UserClerkAuthForm lang={lang} dict={dict.login} />
          </div>
        </div>
      </div>
    </div>
  );
}
