import Link from "next/link";
import { Doc } from "contentlayer/generated";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import type { SidebarNavItem } from "~/types";
import { getDocsConfig } from "~/config/ui/docs";

interface PagerProps {
  currentSlug: string;
  sidebarNav: SidebarNavItem[];
}

export function Pager({ currentSlug, sidebarNav }: PagerProps) {
  const pager = getPagerForSlug(currentSlug, sidebarNav);

  if (!pager) {
    return null;
  }

  return (
    <div className="flex flex-row items-center justify-between">
      {pager?.prev && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.ChevronLeft className="mr-2 h-4 w-4" />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: "ghost" }), "ml-auto")}
        >
          {pager.next.title}
          <Icons.ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      )}
    </div>
  );
}

export function getPagerForSlug(currentSlug: string, sidebarNav: SidebarNavItem[]) {
  const flattenedLinks = [
    null,
    ...flatten(sidebarNav),
    null,
  ];
  const activeIndex = flattenedLinks.findIndex(
    (link) => currentSlug === link?.href,
  );
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null;
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null;
  return {
    prev,
    next,
  };
}

// Legacy wrapper for backward compatibility
interface DocsPagerProps {
  doc: Doc;
}

export function DocsPager({ doc }: DocsPagerProps) {
  return <Pager currentSlug={doc.slug} sidebarNav={getDocsConfig(doc.lang).sidebarNav} />;
}

// @ts-ignore
export function flatten(
  links: {
    items?: { items?: any }[];
  }[],
) {
  return links.reduce((flat, link) => {
    return flat.concat(link.items ? flatten(link.items) : link);
  }, []);
}
