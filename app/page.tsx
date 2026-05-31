import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { projects, reasons, services } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <section className="hero-tech-bg relative overflow-hidden pt-32 text-white">
        <Container className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center pb-20 pt-12">
          <Reveal>
            <h1 className="max-w-5xl text-balance text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">شريكك نحو التحول الرقمي في السودان</h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-brand-mist sm:text-xl">
              نبني تطبيقات وأنظمة ومواقع وحلول ذكاء اصطناعي تساعد الشركات السودانية على النمو.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 text-base font-extrabold text-brand-navy shadow-glow transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">
                تحدث معنا
                <ArrowLeft size={20} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-brand-mist/30 px-7 py-4 text-base font-extrabold text-white transition hover:-translate-y-1 hover:border-brand-cyan hover:text-brand-cyan">
                استكشف الخدمات
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading eyebrow="خدماتنا" title="كل ما تحتاجه الشركة لبناء تجربة رقمية متماسكة" description="من الفكرة والاستشارة إلى التصميم والتطوير والنشر، نربط الأدوات الرقمية بأهداف العمل اليومية." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => <ServiceCard key={service.title} {...service} delay={index * 0.05} />)}
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-24 text-white">
        <Container>
          <SectionHeading eyebrow="لماذا المتميزون؟" title="شريك تقني يفهم السوق، العمليات، والنتائج" description="نصمم حلولاً حديثة من دون تعقيد زائد، ونركز على ما يجعل فريقك أسرع وعملاءك أكثر رضاً." light />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-brand-cyan/60">
                  <reason.icon className="mb-5 text-brand-cyan" size={30} />
                  <h3 className="mb-3 text-xl font-extrabold">{reason.title}</h3>
                  <p className="leading-8 text-brand-mist">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <SectionHeading eyebrow="أعمال مختارة" title="مشاريع رقمية مصممة لتبسيط العمل ورفع الكفاءة" description="نماذج من أنواع الحلول التي نبنيها للشركات التي تريد الانتقال من الأدوات المتفرقة إلى أنظمة متكاملة." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.06}>
                <div className="h-full rounded-lg border border-brand-mist bg-white p-7 shadow-soft transition hover:-translate-y-2 hover:border-brand-cyan">
                  <span className="mb-8 inline-flex rounded-full bg-brand-navy px-4 py-2 text-sm font-extrabold text-brand-cyan">{project.category}</span>
                  <h3 className="mb-4 text-2xl font-extrabold text-brand-navy">{project.title}</h3>
                  <p className="leading-8 text-brand-slate">{project.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <div className="grid gap-10 rounded-lg bg-brand-navy p-8 text-white shadow-glow md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="mb-4 text-sm font-extrabold text-brand-cyan">ابدأ التحول الرقمي</p>
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">لنحوّل فكرتك أو نظامك الحالي إلى منتج رقمي أنيق وقابل للنمو.</h2>
              </div>
              <div className="space-y-5">
                {["تحليل سريع للاحتياج", "تصور أولي للحل", "خطة تنفيذ واضحة"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-brand-mist">
                    <CheckCircle2 className="text-brand-cyan" size={22} />
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
                <Link href="/contact" className="mt-4 inline-flex rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">احجز استشارة</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
