import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "WhatsApp Business API | المتميزون Distinguished",
  description: "حلول WhatsApp Business API للشركات: التهيئة، توثيق النشاط، الحملات، الربط مع CRM، والفوترة الآلية ووكلاء الذكاء الاصطناعي."
};

const differences = [
  "ليس تطبيق WhatsApp العادي على الهاتف، بل منصة رسمية للشركات تعمل عبر API",
  "تسمح بربط WhatsApp مع CRM، ERP، المتاجر، ولوحات خدمة العملاء",
  "تدعم القوالب المعتمدة، الرسائل المنظمة، وإدارة فرق متعددة",
  "مناسبة للشركات التي تحتاج رسائل على نطاق أكبر وبضوابط رسمية"
];

const benefits = [
  "Onboarding وتجهيز الحساب التجاري بشكل صحيح",
  "توثيق النشاط التجاري مع Meta حسب المتطلبات",
  "حملات تسويقية عبر قوالب معتمدة بدون الاعتماد على الإرسال العشوائي الذي يسبب الحظر",
  "ربط WhatsApp مع CRM لإرسال فواتير وتنبيهات آلية للعملاء",
  "وكلاء ذكاء اصطناعي مدمجون للرد على العملاء 24/7",
  "تجربة محادثات أكثر احترافية لفريق المبيعات والدعم"
];

export default function WhatsappBusinessApiPage() {
  return (
    <main>
      <PageHero
        eyebrow="WhatsApp Business API"
        title="حوّل WhatsApp إلى قناة مبيعات وخدمة عملاء احترافية"
        description="نساعد الشركات على استخدام WhatsApp Business API بطريقة رسمية ومنظمة، وربطه مع أنظمة العمل لإرسال الرسائل، الفواتير، التنبيهات، والحملات والردود الذكية."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8">
                <MessageCircle className="mb-6 text-brand-teal" size={42} />
                <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">ما الفرق عن WhatsApp العادي؟</h2>
                <p className="mt-5 text-lg leading-9 text-brand-slate">
                  WhatsApp Business API مختلف عن WhatsApp العادي لأنه يعمل عبر منصة رسمية للشركات، ويدعم التكاملات، الأتمتة، فرق العمل، الرسائل المعتمدة، والتواصل على نطاق تجاري.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {differences.map((item, index) => (
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
          <SectionHeading eyebrow="ما نقدمه" title="مزود تقني رسمي مع Meta لحلول WhatsApp Business API" description="نساعدك في الإعداد، توثيق النشاط التجاري، الحملات، الربط مع CRM، الفواتير الآلية، ووكلاء الذكاء الاصطناعي للرد على العملاء 24/7." light />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <div className="flex h-full gap-4 rounded-lg border border-brand-mist/15 bg-white/5 p-6">
                  <CheckCircle2 className="mt-1 shrink-0 text-brand-cyan" size={24} />
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
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">اجعل WhatsApp قناة ذكية للمبيعات، الدعم، والفوترة الآلية.</h2>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">
                  اطلب الربط
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
