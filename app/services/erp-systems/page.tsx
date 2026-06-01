import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers3 } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "أنظمة ERP مخصصة | المتميزون Distinguished",
  description: "تطوير أنظمة ERP مخصصة حسب احتياج الشركات، تشمل المالية والمخزون والمبيعات والمشتريات والموارد البشرية."
};

const modules = ["المالية", "المخزون", "المبيعات", "المشتريات", "الموارد البشرية", "التقارير ولوحات التحكم", "إدارة العملاء", "أي وحدة يحتاجها عملك"];

const benefits = [
  "نظام مخصص حول احتياج شركتك الفعلي وليس قالباً عاماً يجبرك على تغيير طريقة عملك",
  "ربط الإدارات والبيانات في مكان واحد لتقليل التكرار والأخطاء",
  "صلاحيات واضحة لكل مستخدم مع تتبع العمليات اليومية",
  "تقارير دقيقة تساعد الإدارة على اتخاذ قرارات أسرع",
  "قابلية التوسع بإضافة أي وحدة جديدة يحتاجها عملك مستقبلاً"
];

export default function ErpSystemsPage() {
  return (
    <main>
      <PageHero
        eyebrow="أنظمة ERP"
        title="نطوّر أنظمة ERP مخصصة تلبي احتياج شركتك"
        description="نبني أنظمة ERP مخصصة تربط الإدارات والعمليات اليومية في منصة واحدة، مع وحدات مصممة حسب طبيعة عملك واحتياجات الإدارة."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8">
                <Layers3 className="mb-6 text-brand-teal" size={42} />
                <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">ERP مخصص لعملك وليس نسخة جاهزة للجميع</h2>
                <p className="mt-5 text-lg leading-9 text-brand-slate">
                  نحلل عملياتك الحالية ثم نبني نظاماً يناسبها: المالية، المخزون، المبيعات، المشتريات، الموارد البشرية، والتقارير، مع إمكانية إضافة أي وحدات خاصة بعملك.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((item, index) => (
                <Reveal key={item} delay={index * 0.04}>
                  <div className="flex h-full gap-4 rounded-lg border border-brand-mist bg-white p-6 shadow-soft">
                    <CheckCircle2 className="mt-1 shrink-0 text-brand-cyan" size={24} />
                    <p className="text-lg font-bold leading-8 text-brand-slate">{item}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-24 text-white">
        <Container>
          <SectionHeading eyebrow="الوحدات" title="خبرة في أكثر وحدات ERP استخداماً" description="نبدأ بالوحدات الأساسية التي تحتاجها معظم الشركات، ثم نضيف أي وحدات مخصصة حسب طبيعة النشاط وحجم العمليات." light />
          <div className="mt-12 flex flex-wrap gap-3">
            {modules.map((module) => (
              <Reveal key={module}>
                <span className="inline-flex rounded-full border border-brand-cyan/35 bg-white/5 px-5 py-3 text-sm font-extrabold text-brand-mist">{module}</span>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <p className="mb-4 text-sm font-extrabold text-brand-cyan">هل تحتاج نظاماً يناسب عملك؟</p>
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">لنصمم ERP مخصصاً يربط عملياتك ويجعل الإدارة أوضح.</h2>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">
                  تحدث معنا
                  <ArrowLeft size={20} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
