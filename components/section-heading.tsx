import { Reveal } from "@/components/motion";

export function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow?: string; title: string; description?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className={`mb-3 text-sm font-bold ${light ? "text-brand-cyan" : "text-brand-teal"}`}>{eyebrow}</p> : null}
      <h2 className={`text-balance text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-white" : "text-brand-navy"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-lg leading-8 ${light ? "text-brand-mist" : "text-brand-slate"}`}>{description}</p> : null}
    </Reveal>
  );
}
