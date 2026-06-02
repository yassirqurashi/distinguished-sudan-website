import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "عن الشركة | المتميزون Distinguished" };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="عن الشركة" title="نبني التقنية التي تجعل الشركات السودانية أكثر مرونة ونمواً" description="تأسست المتميزون Distinguished في السودان عام 2025 لتكون شريكاً تقنياً يساعد الشركات على التحول الرقمي بخطوات واضحة وعملية. ورغم حداثة انطلاقتنا في السودان، يستند فريقنا إلى خبرة عملية اكتسبها من تنفيذ والمشاركة في مشاريع تقنية في عُمان، السعودية، والإمارات، مما يمنحنا فهماً أوسع لاحتياجات الأسواق وتجارب العملاء وبناء المنتجات الرقمية القابلة للنمو." />
      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white shadow-glow">
              <p className="mb-4 text-sm font-extrabold text-brand-cyan">من نحن</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">شركة سودانية بخبرة إقليمية في بناء الحلول الرقمية.</h2>
              <p className="mt-6 leading-8 text-brand-mist">
                انطلقت المتميزون في السودان لتكون شريكاً تقنياً للشركات التي تريد تحديث أعمالها. نستفيد من خبرتنا في مشاريع نفذت في أسواق مثل عُمان، السعودية، والإمارات لبناء حلول عملية تناسب واقع السوق السوداني.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-9 text-brand-slate">
              نؤمن أن التحول الرقمي ليس مجرد موقع أو تطبيق، بل طريقة أفضل لتشغيل العمل وخدمة العملاء واتخاذ القرار. لذلك نبدأ بفهم احتياج الشركة، ثم نصمم ونبني الحل المناسب: تطبيقات، أنظمة ERP، مواقع إلكترونية، وكلاء ذكاء اصطناعي، وأتمتة للعمليات اليومية.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["تأسست في السودان 2025", "خبرة في عُمان والسعودية والإمارات", "حلول قابلة للنمو"].map((title) => <div key={title} className="rounded-lg border border-brand-mist bg-brand-mist/30 p-5"><h3 className="text-xl font-extrabold text-brand-navy">{title}</h3></div>)}
            </div>
          </Reveal>
        </Container>
      </section>
      <section className="bg-brand-navy py-24 text-white">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-8">
                <p className="mb-4 text-sm font-extrabold text-brand-cyan">رسالتنا</p>
                <h2 className="text-3xl font-extrabold leading-tight">تمكين الشركات في السودان من التحول الرقمي بثقة.</h2>
                <p className="mt-6 text-lg leading-9 text-brand-mist">
                  رسالتنا هي مساعدة الشركات السودانية على استخدام التقنية بطريقة عملية وواضحة، تقلل التكاليف، ترفع كفاءة التشغيل، وتحسن تجربة العملاء من خلال حلول رقمية مصممة لاحتياج كل عمل.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-lg border border-brand-mist/15 bg-white/5 p-8">
                <p className="mb-4 text-sm font-extrabold text-brand-cyan">رؤيتنا</p>
                <h2 className="text-3xl font-extrabold leading-tight">أن نكون شريكاً رئيسياً في بناء مستقبل رقمي للشركات السودانية.</h2>
                <p className="mt-6 text-lg leading-9 text-brand-mist">
                  نطمح إلى أن تصبح المتميزون من الشركات التي تقود التحول الرقمي في السودان، عبر حلول حديثة تساعد الأعمال على النمو، التوسع، والمنافسة بثقة داخل السودان وخارجه.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <section className="bg-brand-mist/35 py-24">
        <Container>
          <SectionHeading eyebrow="طريقة العمل" title="عملية واضحة من أول اجتماع إلى الإطلاق" description="نبقي العمل منظماً ومفهوماً، مع مخرجات ملموسة في كل مرحلة." />
        </Container>
      </section>
    </main>
  );
}
