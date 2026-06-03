import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CircleDollarSign, FileSignature, MessageCircle, Plane, Settings, Users } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Housemaid Management ERP | المتميزون Distinguished",
  description: "Housemaid Management ERP، نظام لإدارة مكاتب استقدام العاملات في عُمان من إجراءات السفارة وحتى الوصول، مع العقود الآلية وتنبيهات WhatsApp والمالية."
};

const features = [
  "إدارة كاملة لملف العاملة من بداية إجراءات السفارة وحتى الوصول إلى الدولة",
  "متابعة مراحل الاستقدام والإجراءات الخارجية والداخلية من لوحة واحدة",
  "إنشاء عقود آلية تقلل العمل اليدوي وتوحّد المستندات",
  "تنبيهات WhatsApp آلية لإبقاء العملاء على اطلاع بتحديثات الطلب",
  "وحدة مالية كاملة لمتابعة الدفعات والمصروفات والتقارير",
  "تحويل العمليات اليدوية السابقة إلى نظام رقمي واضح وقابل للمتابعة"
];

const modules = [
  { icon: Users, title: "إدارة ملفات العاملات", text: "تنظيم بيانات العاملات، حالة الطلب، المراحل، والمستندات المرتبطة بكل ملف." },
  { icon: Plane, title: "إجراءات الاستقدام", text: "متابعة الرحلة التشغيلية من إجراءات السفارة وحتى وصول العاملة إلى عُمان." },
  { icon: FileSignature, title: "العقود الآلية", text: "إنشاء عقود ومستندات تلقائية لتقليل التكرار والأخطاء في العمل اليدوي." },
  { icon: MessageCircle, title: "تنبيهات WhatsApp", text: "إرسال تحديثات آلية للعملاء عبر WhatsApp حسب حالة الطلب ومراحله." },
  { icon: CircleDollarSign, title: "الوحدة المالية", text: "إدارة الدفعات، المصروفات، التقارير المالية، وحالة التحصيل داخل النظام." },
  { icon: Settings, title: "رقمنة العمليات", text: "تحويل الإجراءات التي كانت تتم يدوياً إلى دورة عمل رقمية منظمة وقابلة للتوسع." }
];

export default function HousemaidManagementErpPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="Housemaid Management ERP"
        description="نظام ERP طوره فريقنا لعميل في عُمان يعمل في مجال استقدام العاملات من خارج الدولة. صُمم النظام لإدارة العملية كاملة من إجراءات السفارة وحتى وصول العاملة، مع عقود آلية، تنبيهات WhatsApp للعملاء، ووحدة مالية متكاملة."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/housemaid-erp.png"
                  alt="Housemaid Management ERP"
                  width={1080}
                  height={1080}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="عن النظام"
                title="رقمنة كاملة لعمليات مكتب الاستقدام"
                description="كان الهدف من النظام تحويل العمليات التي كان المكتب ينفذها يدوياً إلى منصة رقمية تساعد الفريق على متابعة الملفات، العقود، العملاء، الدفعات، ومراحل الاستقدام بوضوح."
              />
              <div className="mt-10 grid gap-4">
                {features.map((item, index) => (
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
            eyebrow="الوحدات والميزات"
            title="نظام يربط التشغيل، العقود، العملاء، والمالية"
            description="تم بناء النظام حول احتياج المكتب الحقيقي: متابعة كل مرحلة، تقليل العمل اليدوي، وإبقاء العملاء والفريق على اطلاع دائم."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ icon: Icon, title, text }, index) => (
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

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg border border-brand-mist bg-brand-mist/30 p-8 md:p-12">
              <h2 className="text-3xl font-extrabold leading-tight text-brand-navy sm:text-5xl">من عمل يدوي متفرق إلى تشغيل رقمي واضح</h2>
              <p className="mt-6 max-w-4xl text-lg leading-9 text-brand-slate">
                ساعد النظام المكتب على تقليل الاعتماد على الجداول والمتابعة اليدوية، وتحويل دورة العمل إلى منصة موحدة يمكن من خلالها متابعة الطلبات، الدفعات، العقود، الموردين، العملاء، والتنبيهات بشكل أفضل.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل تحتاج ERP مخصصاً لطبيعة عملك؟</h2>
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
