"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@saasfly/ui";

import { ModeToggle } from "~/components/mode-toggle";

export function SiteFooter({
  className,
}: {
  className?: string;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "bg-gradient-to-b from-[hsl(var(--brand)/0.12)] to-[hsl(var(--background))] border-t border-white/10 dark:border-white/5",
        className
      )}
    >
      {/* =============================
          GRID PRINCIPAL
      ============================== */}
      <div className="container py-16 grid md:grid-cols-4 gap-14">

        {/* ------------------------ */}
        {/* COLUNA 1 — LOGO + TEXTO */}
        {/* ------------------------ */}
        <div className="space-y-4">
            <h3
              className="
                font-sans
                text-2xl
                md:text-3xl
                lg:text-4xl
                font-semibold
                tracking-tight
                leading-none
              "
            >
              Loopyn
              <span className="text-brand font-bold">Lab</span>
            </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            IAA™ · Assisted Artificial Intelligence<br />
            AI built to think and evolve with you  
          </p>
        </div>

        {/* ------------------------ */}
        {/* COLUNA 2 — SOBRE         */}
        {/* ------------------------ */}
        <FooterColumn
          title="Sobre"
          links={[
            { name: "A MindLoop", href: "/about" },
            { name: "Manifesto IAA™", href: "/manifesto" },
            { name: "Nosso Time", href: "/team" },
          ]}
        />

        {/* ------------------------ */}
        {/* COLUNA 3 — PRODUTOS      */}
        {/* ------------------------ */}
        <FooterColumn
          title="Produtos"
          links={[
            { name: "Classificação ANP", href: "/solutions/anp" },
            { name: "Classificação SMS", href: "/solutions/sms" },
            { name: "Plataforma MindLoop", href: "/platform" },
          ]}
        />

        {/* ------------------------ */}
        {/* COLUNA 4 — LEGAL + THEME */}
        {/* ------------------------ */}
        <div>
          <h4 className="text-sm font-semibold mb-3 text-foreground/90">
            Empresa
          </h4>

          <ul className="space-y-2 text-sm">
            <FooterLink name="Privacidade" href="/privacy" />
            <FooterLink name="Termos de Uso" href="/terms" />
            <FooterLink name="Contato" href="/contact" />
          </ul>

          {/*
          <div className="mt-6">
            <ModeToggle />
          </div>
          */}
          
        </div>
      </div>

      {/* =============================
          COPYRIGHT BAR
      ============================== */}
      <div className="border-t border-white/10 dark:border-white/5 py-6">
        <div className="container flex justify-between items-center text-sm">
          <p className="text-neutral-600 dark:text-neutral-400">
            © {currentYear} MindLoop. Todos os direitos reservados.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            IAA™ — Inteligência Artificial Assistida
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   COMPONENTES REUTILIZÁVEIS
========================================================= */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-3 text-foreground/90">
        {title}
      </h4>

      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <FooterLink key={l.name} name={l.name} href={l.href} />
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ name, href }: { name: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="
          text-neutral-600 dark:text-neutral-400 
          hover:text-[hsl(var(--brand))] 
          dark:hover:text-[hsl(var(--brand))] 
          transition-colors duration-200 
          hover:pl-1 
          inline-block
        "
      >
        {name}
      </Link>
    </li>
  );
}
