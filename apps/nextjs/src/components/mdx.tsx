"use client";

import * as React from "react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { cn } from "@saasfly/ui";

// Importa o tipo do MDX gerado pelo Contentlayer
import { useMDXComponent } from "next-contentlayer/hooks";

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  const components: MDXComponents = {
    img: (props: any) => (
      <Image
        alt={props.alt}
        src={props.src}
        width={props.width || 800}
        height={props.height || 450}
        className="rounded-lg border"
      />
    ),
  };

  return (
    <div className="mdx-content prose dark:prose-invert max-w-none">
      <Component components={components} />
    </div>
  );
}
