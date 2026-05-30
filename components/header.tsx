"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/container";
import { navLinks } from "@/lib/data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-mist/20 bg-white/85 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image src="/logo-transparent.png" alt="المتميزون Distinguished" width={245} height={76} priority className="h-12 w-auto object-contain sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                pathname === link.href ? "bg-brand-navy text-white" : "text-brand-slate hover:bg-brand-mist/50 hover:text-brand-navy"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="hidden rounded-full bg-brand-cyan px-5 py-3 text-sm font-extrabold text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-teal hover:text-white lg:inline-flex">
          ابدأ مشروعك
        </Link>

        <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-mist text-brand-navy lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="فتح القائمة">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-brand-mist bg-white lg:hidden">
          <Container className="grid gap-2 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-base font-bold text-brand-slate hover:bg-brand-mist/60 hover:text-brand-navy">
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
