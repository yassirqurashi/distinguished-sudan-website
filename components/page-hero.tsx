import { Container } from "@/components/container";
import { Reveal } from "@/components/motion";

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-brand-radial pt-36 text-white">
      <Container className="pb-24 pt-12">
        <Reveal className="max-w-4xl">
          <p className="mb-5 text-sm font-extrabold text-brand-cyan">{eyebrow}</p>
          <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-brand-mist sm:text-xl">{description}</p>
        </Reveal>
      </Container>
    </section>
  );
}
