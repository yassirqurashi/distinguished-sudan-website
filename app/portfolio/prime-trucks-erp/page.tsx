import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BarChart3, CheckCircle2, CircleDollarSign, Package, ShoppingCart, Truck } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Prime Trucks ERP | المتميزون Distinguished",
  description: "Prime Trucks ERP، نظام ERP متكامل طوره فريق المتميزون لعميل في الإمارات ويشمل المبيعات، المالية، المخزون، والمشتريات."
};

const modules = [
  "وحدة المبيعات لإدارة العملاء، الطلبات، العروض، ومتابعة العمليات التجارية",
  "وحدة المالية لمتابعة الإيرادات، المصروفات، التقارير، والمؤشرات المالية",
  "وحدة المخزون لإدارة المنتجات، المستودعات، الكميات، وحركة المخزون",
  "وحدة المشتريات لإدارة الموردين وطلبات الشراء ودورة التوريد",
  "لوحات تحكم تنفيذية لمتابعة الأداء ومؤشرات التشغيل",
  "هيكل قابل للتوسع لإضافة وحدات مخصصة حسب احتياج العمل"
];

const pillars = [
  { icon: ShoppingCart, title: "Sales Module", text: "تنظيم دورة المبيعات من العميل والطلب وحتى المتابعة، مع رؤية واضحة لحركة المبيعات." },
  { icon: CircleDollarSign, title: "Finance Module", text: "متابعة مالية دقيقة للإيرادات والمصروفات والتقارير التي تساعد الإدارة على اتخاذ القرار." },
  { icon: Package, title: "Inventory Module", text: "إدارة المخزون والمستودعات والمنتجات والكميات بشكل مركزي يقلل الأخطاء والتكرار." },
  { icon: Truck, title: "Procurement Module", text: "تنظيم الموردين وطلبات الشراء وعمليات التوريد داخل نظام واحد مترابط." }
];

export default function PrimeTrucksErpPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="Prime Trucks ERP"
        description="نظام ERP متكامل طوره فريقنا لعميل في الإمارات، صُمم لمساعدة الإدارة على تشغيل العمليات اليومية من مكان واحد عبر وحدات رئيسية تشمل المبيعات، المالية، المخزون، والمشتريات."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/prime-trucks-erp.png"
                  alt="Prime Trucks ERP"
                  width={1080}
                  height={1080}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="عن النظام"
                title="ERP متكامل لإدارة العمليات اليومية"
                description="تم بناء Prime Trucks ERP ليجمع البيانات والعمليات الأساسية داخل منصة واحدة، مما يساعد الفرق على العمل بوضوح أكبر ويمنح الإدارة رؤية أفضل للأداء."
              />
              <div className="mt-10 grid gap-4">
                {modules.map((item, index) => (
                  <Reveal key={item} delay={index * 0.04}>
                    <div className="flex gap-4 rounded-lg border border-brand-mist bg-white p-5 shadow-soft">
                      <CheckCircle2 className="mt-1 shrink-0 text-brand-cyan" size={23} />
                      <p className="text-lg font-bold leading-8 text-brand-slate">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-navy py-24 text-white">
        <Container>
          <SectionHeading
            eyebrow="الوحدات الأساسية"
            title="وحدات رئيسية تغطي أهم احتياجات التشغيل"
            description="النظام يربط بين المبيعات، المالية، المخزون، والمشتريات حتى تتحول العمليات المتفرقة إلى دورة تشغيل واضحة وقابلة للقياس."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-7">
                  <Icon className="mb-5 text-brand-cyan" size={32} />
                  <h3 className="mb-4 text-2xl font-extrabold">{title}</h3>
                  <p className="text-lg leading-9 text-brand-mist">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8 md:p-12">
              <BarChart3 className="mb-6 text-brand-cyan" size={40} />
              <h2 className="text-3xl font-extrabold leading-tight text-brand-navy sm:text-5xl">لوحات تحكم تساعد الإدارة على رؤية الصورة كاملة</h2>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-brand-slate">
                تم تصميم النظام ليعرض مؤشرات تشغيلية ومالية مهمة بطريقة واضحة، مثل الإيرادات، العملاء، المخزون، ومعدلات النمو، بحيث يستطيع فريق الإدارة متابعة الأداء واتخاذ قرارات أسرع.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل تحتاج ERP مخصصاً لعمليات شركتك؟</h2>
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
