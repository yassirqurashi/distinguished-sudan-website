import Link from "next/link";
import { ArrowLeft, CheckCircle2, Compass } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "الاستشارات التقنية | المتميزون Distinguished",
  description: "استشارات تقنية تساعد الشركات على اختيار الأنظمة، تحسين العمليات، وبناء خارطة طريق للتحول الرقمي."
};

const areas = [
  "تحليل الوضع الحالي للأنظمة والعمليات",
  "اختيار الحلول التقنية المناسبة بدلاً من الاستثمار العشوائي",
  "وضع خارطة طريق للتحول الرقمي حسب الأولويات والميزانية",
  "تحسين تجربة العملاء والموظفين باستخدام أدوات رقمية أفضل",
  "مراجعة الأفكار التقنية قبل البدء في التطوير",
  "تحديد فرص الأتمتة وتقليل التكاليف التشغيلية ودعم نمو الأعمال"
];

export default function TechnicalConsultingPage() {
  return (
    <main>
      <PageHero
        eyebrow="الاستشارات التقنية"
        title="نساعدك على اتخاذ قرارات تقنية أوضح وأذكى"
        description="الاستثمار التقني الناجح يبدأ بفهم العمل قبل اختيار الأدوات. نساعد الشركات على النمو من خلال خبرتنا في الأنظمة، التطبيقات، الأتمتة، تجربة المستخدم، واختيار الحلول المناسبة."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8">
                <Compass className="mb-6 text-brand-teal" size={42} />
                <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">خبرة تقنية تتحول إلى قرارات عملية</h2>
                <p className="mt-5 text-lg leading-9 text-brand-slate">
                  نعمل مع الإدارة لفهم المشكلة الحقيقية، تحديد الأولويات، ثم اختيار الحلول التي تقدم أثراً واضحاً على النمو، الكفاءة، وتقليل الهدر التشغيلي.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {areas.map((item, index) => (
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
          <SectionHeading eyebrow="متى تحتاج الاستشارة؟" title="عندما تكون التقنية مهمة لكن الطريق غير واضح" description="إذا كان لديك نظام قديم، فكرة منتج، عمليات يدوية كثيرة، أو قرار تقني كبير، فالاستشارة تساعدك على تقليل المخاطر قبل الاستثمار." light />
          <Reveal className="mt-10 text-center">
            <Link href="https://calendly.com/dds-sudan/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">
              احجز استشارة
              <ArrowLeft size={20} />
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
