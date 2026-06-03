import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Globe2, PackageSearch, ShoppingBag, Sparkles } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "موقع جانيكا للعطور | المتميزون Distinguished",
  description: "موقع جانيكا للعطور، سوق إلكتروني للعطور طوره فريق المتميزون لعميل في عُمان ويبيع في عدة دول."
};

const highlights = [
  "سوق إلكتروني متخصص في العطور",
  "عرض تشكيلة واسعة ومتنوعة من المنتجات",
  "تجربة تسوق عربية واضحة وسهلة الاستخدام",
  "تصميم واجهة يعكس طبيعة العلامة والمنتجات",
  "دعم البيع لعملاء في عدة دول",
  "رحلة شراء مناسبة للمتاجر الإلكترونية الحديثة"
];

const pillars = [
  { icon: ShoppingBag, title: "Marketplace للعطور", text: "تم بناء الموقع كمنصة تعرض خيارات متعددة من العطور وتساعد العملاء على اكتشاف المنتجات وشرائها بسهولة." },
  { icon: PackageSearch, title: "تنوع المنتجات", text: "يدعم الموقع عرض أصناف مختلفة من العطور بطريقة منظمة وواضحة تناسب تجربة التسوق." },
  { icon: Globe2, title: "بيع في عدة دول", text: "صُمم الموقع لعميل في عُمان مع قابلية خدمة عملاء وأسواق متعددة خارج بلد واحد." },
  { icon: Sparkles, title: "تجربة راقية", text: "الواجهة تعطي إحساساً مناسباً لمنتجات العطور، مع تركيز على الوضوح والجاذبية وسهولة الشراء." }
];

export default function JankiaPerfumesWebsitePage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="موقع جانيكا للعطور"
        description="موقع جانيكا للعطور هو سوق إلكتروني طوره فريقنا لعميل في عُمان، متخصص في عرض وبيع تشكيلة متنوعة من العطور، مع تجربة تسوق مصممة لخدمة العملاء في عدة دول."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/jankia-perfumes-website.png"
                  alt="موقع جانيكا للعطور"
                  width={1080}
                  height={1080}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="عن الموقع"
                title="سوق إلكتروني لمنتجات العطور"
                description="تم تطوير الموقع ليمنح العملاء تجربة سهلة لاكتشاف العطور وشرائها، مع تصميم بصري يناسب طبيعة المنتجات ويعكس هوية راقية ومريحة."
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
            eyebrow="مكونات التجربة"
            title="موقع تجاري مصمم للعرض والبيع"
            description="يجمع المشروع بين الهوية البصرية، تنظيم المنتجات، وتجربة التسوق التي تساعد العميل على الوصول للمنتج المناسب بسرعة."
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
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل تريد موقعاً تجارياً يعرض منتجاتك باحترافية؟</h2>
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
