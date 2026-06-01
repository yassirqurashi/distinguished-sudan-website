import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe2, ServerCog, ShieldCheck, Smartphone } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "تطوير تطبيقات الهاتف المحمول | المتميزون Distinguished",
  description: "خبرة المتميزون Distinguished في تطوير تطبيقات الهاتف المحمول للشركات في السودان وأسواق عمان والإمارات والسعودية."
};

const markets = ["عُمان", "الإمارات العربية المتحدة", "المملكة العربية السعودية"];

const backendStack = ["Node.js", "Python Django", "PHP Laravel"];

const capabilities = [
  "تحليل الفكرة وتحويلها إلى متطلبات واضحة قابلة للتنفيذ",
  "تصميم تجربة استخدام عربية وإنجليزية مناسبة للشركات في السودان والأسواق الإقليمية",
  "تطوير تطبيقات Native عند الحاجة إلى أداء وتجربة منصة عالية",
  "تطوير تطبيقات Flutter عندما تكون السرعة وتوحيد التجربة بين iOS وAndroid أولوية",
  "ربط التطبيقات بأنظمة ERP، بوابات الدفع، الإشعارات، ولوحات التحكم",
  "تجهيز التطبيق للنشر على App Store وGoogle Play ومتابعة متطلبات المراجعة"
];

const process = [
  { title: "اكتشاف المنتج", text: "نبدأ بفهم نموذج العمل، المستخدمين، السوق المستهدف، والميزات التي يجب أن تصل إلى النسخة الأولى." },
  { title: "تصميم وتجربة", text: "نصمم واجهات نظيفة وسهلة الاستخدام مع اهتمام خاص باللغة العربية واتجاه RTL." },
  { title: "تطوير وربط", text: "ننفذ الواجهة والتكاملات الخلفية باستخدام التقنيات الأنسب لطبيعة المشروع." },
  { title: "نشر وتحسين", text: "نجهز ملفات المتاجر، نتابع المراجعة، ونحسن الأداء بعد الإطلاق." }
];

export default function MobileAppDevelopmentPage() {
  return (
    <main>
      <PageHero
        eyebrow="تطوير تطبيقات الهاتف المحمول"
        title="نبني تطبيقات هاتف محمول جاهزة للنمو في السودان"
        description="نساعد الشركات على إطلاق تطبيقات iOS وAndroid حديثة، مستقرة، ومصممة لتجربة استخدام واضحة، مع خبرة عملية في أسواق مثل عُمان، الإمارات، والسعودية."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal>
              <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8">
                <Smartphone className="mb-6 text-brand-teal" size={40} strokeWidth={1.7} />
                <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">خبرة تطبيقات متكاملة من الفكرة إلى المتاجر</h2>
                <p className="mt-5 text-lg leading-9 text-brand-slate">
                  نغطي دورة تطوير التطبيق كاملة: التخطيط، التصميم، التطوير، التكاملات، الاختبار، ثم الرفع على App Store وGoogle Play.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((item, index) => (
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
          <SectionHeading
            eyebrow="الأسواق والتقنيات"
            title="نفهم احتياجات الشركات في السودان والأسواق الإقليمية"
            description="خبرتنا تساعدنا على بناء تطبيقات مناسبة لبيئات تشغيل مختلفة، من فرق داخلية تحتاج نظاماً سريعاً إلى منتجات موجهة للعملاء."
            light
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-7">
                <Globe2 className="mb-5 text-brand-cyan" size={32} />
                <h3 className="mb-5 text-2xl font-extrabold">أسواق نعرفها</h3>
                <div className="flex flex-wrap gap-3">
                  {markets.map((market) => (
                    <span key={market} className="rounded-full border border-brand-cyan/35 px-4 py-2 text-sm font-extrabold text-brand-mist">{market}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-7">
                <ServerCog className="mb-5 text-brand-cyan" size={32} />
                <h3 className="mb-5 text-2xl font-extrabold">Backend قوي</h3>
                <div className="flex flex-wrap gap-3">
                  {backendStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-brand-cyan/35 px-4 py-2 text-sm font-extrabold text-brand-mist">{tech}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-7">
                <ShieldCheck className="mb-5 text-brand-cyan" size={32} />
                <h3 className="mb-4 text-2xl font-extrabold">Native وFlutter</h3>
                <p className="text-lg leading-9 text-brand-mist">
                  نختار بين التطوير Native أو Flutter حسب الأداء المطلوب، الميزانية، سرعة الإطلاق، وتجربة المستخدم المستهدفة.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading eyebrow="طريقة العمل" title="مسار واضح لبناء تطبيق قابل للنشر" description="نفضل تنفيذًا منظماً يقلل المفاجآت ويجعل كل مرحلة قابلة للقياس والمراجعة." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-brand-mist bg-white p-7 shadow-soft">
                  <span className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-cyan text-lg font-extrabold text-brand-navy">{index + 1}</span>
                  <h3 className="mb-4 text-2xl font-extrabold text-brand-navy">{step.title}</h3>
                  <p className="text-lg leading-9 text-brand-slate">{step.text}</p>
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
              <p className="mb-4 text-sm font-extrabold text-brand-cyan">جاهز لتطبيقك القادم؟</p>
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">لنحوّل فكرتك إلى تطبيق عملي قابل للنشر والنمو.</h2>
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
