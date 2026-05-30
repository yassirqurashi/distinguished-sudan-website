import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion";
import { services } from "@/lib/data";

export const metadata = { title: "الخدمات | المتميزون Distinguished" };

export default function ServicesPage() {
  return (
    <main>
      <PageHero eyebrow="الخدمات" title="حلول رقمية متكاملة للشركات التي تريد الانتقال إلى مستوى أعلى" description="نقدّم خدمات تطوير وتصميم واستشارات تغطي المنتجات الرقمية والأنظمة الداخلية والأتمتة الذكية والتواصل مع العملاء." />
      <section className="bg-white py-24">
        <Container><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <ServiceCard key={service.title} {...service} delay={index * 0.05} />)}</div></Container>
      </section>
      <section className="bg-brand-navy py-24 text-white">
        <Container>
          <SectionHeading eyebrow="مخرجات واضحة" title="نحوّل المتطلبات إلى تجربة قابلة للاستخدام والنشر" description="كل خدمة تُبنى حول نتيجة: تطبيق يعمل، نظام يختصر الوقت، موقع يعبّر عن الشركة، أو أتمتة تقلل الضغط اليومي." light />
          <Reveal className="mt-10 text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-cyan px-7 py-4 font-extrabold text-brand-navy transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white">ناقش خدمتك المناسبة <ArrowLeft size={19} /></Link>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
