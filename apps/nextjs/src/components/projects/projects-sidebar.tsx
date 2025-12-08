"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@saasfly/ui";

import type { SidebarNavItem } from "~/types";

export function ProjectsSidebar({ items }: { items: SidebarNavItem[] }) {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 w-full">
      {items.map((section) => (
        <div key={section.id} className="space-y-2">
          <h4 className="px-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
            {section.title}
          </h4>

          <ul className="space-y-1">
            {section.items?.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded px-2 py-1 text-sm transition-colors",
                      isActive
                        ? "bg-muted text-foreground font-medium"
                        : "hover:bg-muted/50 text-muted-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
