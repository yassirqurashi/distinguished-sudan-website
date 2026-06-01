import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Camera, CheckCircle2, Share2, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "سعّرها | المتميزون Distinguished",
  description: "مشروع تطبيق سعّرها في السعودية، تطبيق ذكاء اصطناعي للتعرف على المنتجات من الصور وتقدير متوسط السعر في السوق المحلي."
};

const highlights = [
  "التقاط صورة مباشرة من كاميرا الهاتف أو اختيار صورة من المعرض",
  "استخدام الذكاء الاصطناعي للتعرف على الغرض وتحليل نوعه",
  "عرض لمحة عن متوسط السعر المتوقع في السوق المحلي",
  "حفظ سجل التسعيرات والرجوع إليها لاحقاً",
  "مشاركة السعر مع الأصدقاء بسهولة",
  "مساعدة المستخدم على معرفة قيمة الأشياء التي يملكها"
];

const features = [
  { icon: Camera, title: "صورة واحدة تكفي", text: "يبدأ المستخدم بالتقاط صورة أو اختيارها من المعرض، ثم يتولى التطبيق تحليل الغرض." },
  { icon: Sparkles, title: "تحليل بالذكاء الاصطناعي", text: "يقوم التطبيق بالتعرف على المنتج وتقديم تقدير يساعد المستخدم على فهم قيمته التقريبية." },
  { icon: Share2, title: "مشاركة سريعة", text: "يمكن مشاركة نتيجة السعر مع الأصدقاء أو استخدامها كمرجع عند البيع أو الشراء." }
];

export default function SarhaAppPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="سعّرها"
        description="تطبيق طوره فريقنا لعميل في السعودية، فكرته أن يلتقط المستخدم صورة لأي غرض من الكاميرا أو المعرض، ثم يساعده الذكاء الاصطناعي على التعرف عليه ومعرفة لمحة عن متوسط سعره في السوق المحلي."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/sarha-app.png"
                  alt="تطبيق سعّرها"
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
                title="تسعير ذكي للأغراض من خلال الصورة"
                description="صُمم التطبيق ليساعد المستخدمين على معرفة القيمة التقريبية للأشياء التي يملكونها، سواء كانوا يريدون البيع، المقارنة، أو فقط فهم متوسط السعر في السوق."
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
            eyebrow="فكرة المنتج"
            title="تجربة بسيطة تقود إلى قيمة واضحة"
            description="الفكرة الأساسية هي تقليل الحيرة حول قيمة المنتجات والأغراض الشخصية عبر تجربة سهلة تبدأ بصورة وتنتهي بتقدير واضح قابل للمشاركة."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, text }, index) => (
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

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل لديك فكرة تطبيق تعتمد على الذكاء الاصطناعي؟</h2>
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
