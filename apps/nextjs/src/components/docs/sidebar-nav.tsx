//src/components/docs/sidebar-nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@saasfly/ui";

import type { SidebarNavItem } from "~/types";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
  lang: string; // mantém para consistência futura
}

export function DocsSidebarNav({ items, lang }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="w-full">
      {items.map((item) => (
        <div key={item.title} className="pb-8">
          <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-medium">
            {item.title}
          </h4>

          {item.items ? (
            <DocsSidebarNavItems
              items={item.items}
              pathname={pathname}
            />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  if (!items?.length) return null;

  const cleanPath = pathname?.replace(/\/$/, "") ?? "";

  return (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item) => {
        if (!item.href) return null;

        // Agora o href JÁ está completo: /br/docs/...  /en/docs/...
        const fullHref = item.href.replace(/\/$/, "");

        const isActive =
          cleanPath === fullHref || cleanPath.startsWith(fullHref + "/");

        return !item.disabled ? (
          <Link
            key={item.title}
            href={fullHref}
            className={cn(
              "flex w-full items-center rounded-md p-2 hover:underline transition",
              isActive && "bg-muted font-medium text-foreground"
            )}
          >
            {item.title}
          </Link>
        ) : (
          <span
            key={item.title}
            className="flex w-full cursor-not-allowed items-center rounded-md p-2 opacity-60"
          >
            {item.title}
          </span>
        );
      })}
    </div>
  );
}
