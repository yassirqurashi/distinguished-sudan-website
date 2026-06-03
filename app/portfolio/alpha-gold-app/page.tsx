import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Gift, Home, ShieldCheck, Sparkles, Wallet } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "تطبيق الفا قولد | المتميزون Distinguished",
  description: "تطبيق الفا قولد، منصة تداول ذهب في الإمارات تتيح شراء وبيع وإهداء الذهب الحقيقي من متاجر معتمدة بأسعار عالمية محدثة على مدار الساعة."
};

const highlights = [
  "شراء ذهب حقيقي من متاجر ذهب معتمدة في الإمارات",
  "أسعار ذهب عالمية محدثة على مدار الساعة",
  "إمكانية شراء كمية تبدأ من 1 جرام ذهب",
  "حفظ الذهب افتراضياً داخل التطبيق أو طلب توصيله إلى المنزل",
  "بيع أي كمية ذهب يرغب بها العميل بسهولة",
  "إهداء الذهب لأي شخص من داخل التطبيق دون تعقيد"
];

const pillars = [
  { icon: ShieldCheck, title: "ذهب حقيقي ومعتمد", text: "يربط التطبيق العملاء بمتاجر ذهب معتمدة، مع تجربة مصممة لبناء الثقة في الشراء والتملك." },
  { icon: Wallet, title: "محفظة ذهب رقمية", text: "يمكن للعميل الاحتفاظ بالذهب افتراضياً داخل التطبيق ومتابعة الكمية والقيمة بسهولة." },
  { icon: Home, title: "توصيل للمنزل", text: "يستطيع العميل اختيار توصيل الذهب الفعلي إلى منزله بدلاً من الاحتفاظ به داخل المحفظة." },
  { icon: Gift, title: "بيع وإهداء", text: "يوفر التطبيق تجربة سهلة لبيع الذهب أو إهداء أي كمية ذهب يرغب بها المستخدم." }
];

export default function AlphaGoldAppPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="تطبيق الفا قولد"
        description="تطبيق الفا قولد منصة تداول ذهب طورها فريقنا لعميل في الإمارات، تتيح للعملاء شراء الذهب الحقيقي من متاجر ذهب معتمدة بأسعار الذهب العالمية المحدثة على مدار الساعة."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/alpha-gold-app.png"
                  alt="تطبيق الفا قولد لتداول الذهب في الإمارات"
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
                title="منصة ذهب رقمية تجمع الشراء، البيع، والإهداء"
                description="صُمم AlphaGold ليمنح العملاء تجربة سهلة وآمنة لشراء الذهب بكميات مرنة تبدأ من 1 جرام، مع خيار الاحتفاظ به افتراضياً أو طلب توصيل الذهب الحقيقي إلى المنزل."
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
            eyebrow="قيمة المنتج"
            title="تجربة ذهب حديثة بدون تعقيد"
            description="الفكرة هي تحويل تداول الذهب من تجربة تقليدية إلى رحلة رقمية واضحة: سعر محدث، شراء سريع، محفظة ذهب، بيع، إهداء، وتوصيل."
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

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل تريد بناء منصة مالية أو تجارية موثوقة؟</h2>
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
