import Link from "next/link";
import { ArrowLeft, Bot, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "وكلاء الذكاء الاصطناعي والأتمتة | المتميزون Distinguished",
  description: "بناء وكلاء ذكاء اصطناعي وأتمتة للمهام اليومية لمساعدة الشركات على تقليل التكلفة ورفع سرعة التنفيذ."
};

const concepts = [
  "وكيل ذكاء اصطناعي يستطيع فهم طلبات العملاء أو الموظفين والرد عليها أو توجيهها",
  "أتمتة تنفذ خطوات متكررة مثل إرسال التنبيهات، تحديث البيانات، أو إنشاء التقارير",
  "تكامل مع أنظمة الشركة مثل CRM، ERP، البريد الإلكتروني، WhatsApp، ولوحات التحكم",
  "إشراف وتحكم واضح حتى يبقى القرار المهم بيد الفريق عند الحاجة"
];

const outcomes = [
  "تقليل تكلفة التوظيف العالية للمهام المتكررة التي يمكن أن ينفذها وكيل ذكي",
  "الرد على العملاء أو فرز الطلبات على مدار الساعة",
  "تقليل الأخطاء الناتجة عن الإدخال اليدوي أو نسيان الخطوات",
  "أتمتة الأعمال اليومية مثل التقارير والتنبيهات وتحديث البيانات بين الأنظمة"
];

export default function AiAgentsAutomationPage() {
  return (
    <main>
      <PageHero
        eyebrow="وكلاء الذكاء الاصطناعي والأتمتة"
        title="وكلاء ذكيون وأتمتة تقلل التكلفة وتسرّع العمل"
        description="نساعد الشركات على بناء وكلاء ذكاء اصطناعي وتدفقات عمل آلية توفر الوقت، تقلل تكلفة المهام المتكررة، وتحسن سرعة التعامل مع العملاء والعمليات الداخلية."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8">
                <Bot className="mb-6 text-brand-teal" size={42} />
                <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">ما هو وكيل الذكاء الاصطناعي؟</h2>
                <p className="mt-5 text-lg leading-9 text-brand-slate">
                  هو مساعد رقمي يمكن تدريبه على فهم عملك، التعامل مع الأسئلة والطلبات، وتنفيذ خطوات محددة داخل أدواتك وأنظمتك، مع تحويل الأعمال الروتينية إلى تدفقات آلية واضحة.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {concepts.map((item, index) => (
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
          <SectionHeading eyebrow="القيمة العملية" title="نساعدك على تقليل تكلفة التوظيف وتوفير الوقت" description="يمكن لوكيل الذكاء الاصطناعي والأتمتة اليومية أن يقللا الضغط على الفريق، خصوصاً في المهام المتكررة التي لا تحتاج تدخلاً بشرياً طوال الوقت." light />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-6">
                  <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan text-brand-navy font-extrabold">{index + 1}</span>
                  <p className="text-lg font-bold leading-8 text-brand-mist">{item}</p>
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
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل لديك مهام يومية متكررة؟ لنحوّلها إلى أتمتة ذكية.</h2>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">
                  ابدأ الآن
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
