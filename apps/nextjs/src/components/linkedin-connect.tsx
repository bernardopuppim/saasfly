"use client";

import Link from "next/link";
import * as Icons from "@saasfly/ui/icons";

export function LinkedInConnect() {
  return (
    <Link href="https://www.linkedin.com/in/bernardopuppim/" target="_blank" rel="LinkedIn">
      <div className="inline-flex items-center gap-1.5 px-3 h-9 border border-input hover:bg-accent hover:text-accent-foreground rounded-full text-sm font-medium">
        <Icons.Linkedin className="w-4 h-4"/>
        <span>Conectar</span>
      </div>
    </Link>
  )
}
