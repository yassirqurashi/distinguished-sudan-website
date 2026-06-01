import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe2 } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";

export const metadata = {
  title: "تصميم وتطوير المواقع الإلكترونية | المتميزون Distinguished",
  description: "تصميم وتطوير مواقع إلكترونية حديثة تساعد الشركات على الظهور أونلاين وتحويل الزوار إلى عملاء."
};

const reasons = [
  "الموقع يعطي شركتك حضوراً رسمياً يمكن للعملاء الرجوع إليه في أي وقت",
  "يساعدك على عرض خدماتك وأعمالك بطريقة منظمة وواضحة",
  "يدعم الثقة، خاصة عندما يبحث العميل عنك قبل التواصل أو الشراء",
  "يمكن ربطه بنماذج تواصل، تحليلات، حملات تسويق، وWhatsApp",
  "يجعل نشاطك موجوداً أونلاين وقابلاً للظهور في نتائج البحث"
];

export default function WebsitesPage() {
  return (
    <main>
      <PageHero
        eyebrow="المواقع الإلكترونية"
        title="موقعك الإلكتروني هو حضور شركتك الرسمي على الإنترنت"
        description="اليوم يبحث العملاء عن الشركة قبل التواصل معها. نساعدك على بناء موقع أنيق وسريع يشرح خدماتك، يدعم ثقة العملاء، ويجعل عملك موجوداً أونلاين بوضوح."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8">
                <Globe2 className="mb-6 text-brand-teal" size={42} />
                <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">نبني مواقع تساعد العمل وليس مجرد صفحات جميلة</h2>
                <p className="mt-5 text-lg leading-9 text-brand-slate">
                  لا نكتفي بتصميم جميل. نركز على الرسالة، سرعة التصفح، وضوح الخدمات، وتجربة الزائر حتى يصبح الموقع أداة حقيقية للتواصل وجذب العملاء.
                </p>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map((item, index) => (
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
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">نساعدك على إطلاق موقع واضح، سريع، ومناسب لهوية شركتك.</h2>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">
                ناقش موقعك
                <ArrowLeft size={20} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
