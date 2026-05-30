import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: { title: string; description: string; icon: LucideIcon; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="group h-full rounded-lg border border-brand-mist bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-cyan">
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-cyan text-brand-navy transition group-hover:scale-105 group-hover:bg-brand-teal group-hover:text-white">
          <Icon size={26} strokeWidth={1.8} />
        </div>
        <h3 className="mb-3 text-xl font-extrabold text-brand-navy">{title}</h3>
        <p className="leading-8 text-brand-slate">{description}</p>
      </div>
    </Reveal>
  );
}
