import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion";

export function ServiceCard({
  title,
  description,
  icon: Icon,
  visual,
  delay = 0
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  visual?: string;
  delay?: number;
}) {
  const generatedIcons: Record<string, { src: string; alt: string }> = {
    mobile: { src: "/app-service-icon.png", alt: "Mobile app development icon" },
    erp: { src: "/erp-service-icon.png", alt: "ERP systems icon" },
    ai: { src: "/ai-agent-service-icon.png", alt: "AI agent icon" },
    web: { src: "/web-service-icon.png", alt: "Website development icon" },
    whatsapp: { src: "/whatsapp-service-icon.png", alt: "Business messaging API icon" },
    consulting: { src: "/consulting-service-icon.png", alt: "Technical consulting icon" }
  };
  const generatedIcon = visual ? generatedIcons[visual] : null;

  return (
    <Reveal delay={delay}>
      <div className="group h-full rounded-lg border border-brand-mist bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-brand-cyan">
        <div className={`mb-8 flex h-16 w-16 items-center justify-center transition duration-300 ${generatedIcon ? "" : "rounded-2xl border border-brand-cyan/30 bg-brand-cyan/10 text-brand-teal group-hover:bg-brand-cyan group-hover:text-brand-navy"}`}>
          {generatedIcon ? (
            <Image
              src={generatedIcon.src}
              alt={generatedIcon.alt}
              width={72}
              height={66}
              className="h-20 w-20 scale-125 object-contain drop-shadow-[0_12px_28px_rgba(0,32,80,0.18)]"
            />
          ) : Icon ? (
            <Icon size={34} strokeWidth={1.7} />
          ) : null}
        </div>
        <h3 className="mb-4 text-2xl font-extrabold leading-9 text-brand-navy">{title}</h3>
        <p className="text-lg leading-9 text-brand-slate">{description}</p>
      </div>
    </Reveal>
  );
}
