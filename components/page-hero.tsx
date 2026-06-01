import Link from "next/link";
import { Home } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/motion";

export function PageHero({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <section className="bg-brand-radial pt-36 text-white">
      <Container className="pb-24 pt-12">
        <Reveal className="max-w-4xl">
          {eyebrow ? <p className="mb-5 text-sm font-extrabold text-brand-cyan">{eyebrow}</p> : null}
          <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-brand-mist sm:text-xl">{description}</p>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 px-6 py-3 text-sm font-extrabold text-brand-mist transition hover:-translate-y-1 hover:border-brand-cyan hover:bg-brand-cyan hover:text-brand-navy">
            <Home size={18} />
            العودة للرئيسية
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
