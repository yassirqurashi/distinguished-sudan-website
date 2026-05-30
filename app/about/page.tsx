import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = { title: "عن الشركة | المتميزون Distinguished" };

export default function AboutPage() {
  return (
    <main>
      <PageHero eyebrow="عن الشركة" title="نبني التقنية التي تجعل الشركات السودانية أكثر مرونة ونمواً" description="المتميزون Distinguished شركة رقمية تركّز على بناء حلول عملية، أنيقة، وقابلة للتوسع للشركات التي تريد تحديث عملياتها وخدمة عملائها بصورة أفضل." />
      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white shadow-glow">
              <p className="mb-4 text-sm font-extrabold text-brand-cyan">رؤيتنا</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">أن تصبح التقنية أداة نمو واضحة، لا عبئاً معقداً.</h2>
              <p className="mt-6 leading-8 text-brand-mist">نساعد الشركات على الانتقال من الإجراءات اليدوية والأنظمة المتفرقة إلى تجارب رقمية مترابطة تمنح الإدارة رؤية أوضح والفريق سرعة أعلى.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-lg leading-9 text-brand-slate">نعمل بأسلوب هادئ ومنظم: نفهم المشكلة، نرسم تجربة الاستخدام، نبني الواجهة، ثم نحسّن التفاصيل حتى يصبح الحل جاهزاً للاستخدام اليومي.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["سريع", "أنيق", "قابل للنمو"].map((title) => <div key={title} className="rounded-lg border border-brand-mist bg-brand-mist/30 p-5"><h3 className="text-xl font-extrabold text-brand-navy">{title}</h3></div>)}
            </div>
          </Reveal>
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
