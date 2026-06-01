import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "حاضرين | المتميزون Distinguished",
  description: "مشروع تطبيق خدمات طوره فريق المتميزون Distinguished لعميل في السعودية لخدمات المغاسل، غسيل السيارات المتنقل، تنظيف المكيفات، وتنظيف الكنب."
};

const services = [
  "خدمات المغاسل مع الاستلام والتوصيل",
  "غسيل السيارات المتنقل",
  "تنظيف المكيفات",
  "تنظيف الكنب",
  "إدارة الحجوزات وتتبع حالة الطلب",
  "محفظة ومدفوعات وباقات اشتراك"
];

const highlights = [
  "تجربة استخدام عربية واضحة ومناسبة لعملاء الخدمات المنزلية",
  "رحلة حجز سهلة من اختيار الخدمة إلى تحديد الموقع والوقت",
  "متابعة مراحل الطلب من الاستلام وحتى التسليم",
  "تصميم واجهات تطبيق حديثة تدعم تعدد الخدمات داخل منصة واحدة"
];

export default function HadreenServicesAppPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="حاضرين"
        description="طوّر فريقنا تطبيقاً متخصصاً لإدارة طلبات المغاسل والاستلام والتوصيل، غسيل السيارات المتنقل، تنظيف المكيفات، وتنظيف الكنب ضمن تجربة هاتف محمول عربية وسهلة الاستخدام."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/hadreen-services-app.png"
                  alt="تطبيق خدمات منزلية وميدانية في السعودية"
                  width={1080}
                  height={1080}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="عن التطبيق"
                title="منصة واحدة لخدمات يومية متعددة"
                description="الهدف من المشروع كان بناء تطبيق عملي يجمع عدة خدمات يحتاجها العميل في حياته اليومية، مع تجربة حجز واضحة وتدفق طلبات يمكن تتبعه بسهولة."
              />
              <div className="mt-10 grid gap-4">
                {highlights.map((item, index) => (
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
            eyebrow="نطاق الخدمات"
            title="تطبيق يخدم أكثر من نوع خدمة داخل نفس التجربة"
            description="تم تصميم التطبيق ليستوعب خدمات مختلفة دون تعقيد تجربة المستخدم، مع قابلية التوسع وإضافة خدمات جديدة مستقبلاً."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service} delay={index * 0.05}>
                <div className="flex h-full gap-4 rounded-lg border border-brand-mist/15 bg-white/5 p-6">
                  <Sparkles className="mt-1 shrink-0 text-brand-cyan" size={22} />
                  <p className="text-lg font-extrabold leading-8 text-brand-mist">{service}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل تريد تطبيقاً مشابهاً لعملك؟</h2>
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
