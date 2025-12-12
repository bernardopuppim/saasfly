"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@saasfly/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@saasfly/ui/dropdown-menu";
import * as Icons from "@saasfly/ui/icons";

import { i18n, localeMap } from "~/config/i18n-config";

export function LocaleChange() {
  const router = useRouter();
  const pathname = usePathname(); // <-- captura a rota atual

  function onClick(locale: string) {
    if (!pathname) return;

    // Remove o prefixo atual /br /en /es
    const parts = pathname.split("/").filter(Boolean);
    parts[0] = locale; // substitui o idioma

    router.push("/" + parts.join("/"));
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
          <Icons.Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => onClick(locale)}>
            <span>{localeMap[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
