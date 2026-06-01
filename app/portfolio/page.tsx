import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { projects } from "@/lib/data";

export const metadata = { title: "الأعمال | المتميزون Distinguished" };

export default function PortfolioPage() {
  return (
    <main>
      <PageHero eyebrow="الأعمال" title="نماذج من حلول نبنيها للشركات الحديثة" description="هذه أمثلة عرضية لطبيعة المشاريع التي ننجزها: أنظمة تشغيل، تطبيقات جوال، أتمتة ذكية، وتجارب ويب راقية." />
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06}>
                <Link href={project.href} className="group block h-full overflow-hidden rounded-lg border border-brand-mist bg-white shadow-soft transition hover:-translate-y-2 hover:border-brand-cyan">
                  <div className="relative aspect-square overflow-hidden bg-brand-navy">
                    <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <article className="p-7">
                    <h2 className="text-2xl font-extrabold leading-9 text-brand-navy">{project.title}</h2>
                    <p className="mt-4 leading-8 text-brand-slate">{project.description}</p>
                    <span className="mt-6 inline-flex text-sm font-extrabold text-brand-teal transition group-hover:text-brand-navy">اقرأ تفاصيل المشروع</span>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16 rounded-lg bg-brand-mist/45 p-8 text-center">
            <h2 className="text-3xl font-extrabold text-brand-navy">لديك مشروع مختلف؟</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-brand-slate">يمكننا تصميم حل خاص يناسب نموذج عملك، سواء كنت تبدأ من فكرة أو تطوّر نظاماً قائماً.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-4 font-extrabold text-white transition hover:-translate-y-1 hover:bg-brand-teal">تواصل معنا <ArrowLeft size={19} /></Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
