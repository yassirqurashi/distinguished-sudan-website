import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, Car, CheckCircle2, CreditCard, MapPin, Settings } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "تطبيق مرتاد | المتميزون Distinguished",
  description: "تطبيق مرتاد، منصة تأجير سيارات في سلطنة عمان مملوكة بالكامل لشركة المتميزون عمان، تجمع مكاتب التأجير والعملاء مع ERP ونظام إدارة أسطول."
};

const customerFeatures = [
  "استكشاف سيارات مكاتب التأجير من تطبيق واحد",
  "اختيار السيارة المناسبة حسب السعر والمواصفات والتوفر",
  "الحجز والدفع الإلكتروني بسلاسة",
  "تحديد موقع العميل لتسليم السيارة حيث يوجد",
  "متابعة الحجز وتجربة استخدام سهلة للعملاء"
];

const businessFeatures = [
  "ERP لمكاتب تأجير السيارات لإدارة العمليات اليومية",
  "نظام إدارة أسطول لمتابعة السيارات والتوفر والحجوزات",
  "إدارة الأسعار والعروض ومعلومات المركبات",
  "تنظيم الحجوزات والمدفوعات وطلبات التسليم",
  "منصة تساعد المكاتب على التحول من العمل اليدوي إلى تشغيل رقمي أوضح"
];

const pillars = [
  { icon: Car, title: "تجربة عميل واحدة", text: "يجمع التطبيق سيارات مكاتب مختلفة في مكان واحد، حتى يستطيع العميل البحث والمقارنة والحجز بسهولة." },
  { icon: Building2, title: "منصة للمكاتب", text: "يساعد مكاتب التأجير على عرض السيارات وإدارة الحجوزات والعمليات من خلال نظام مركزي." },
  { icon: Settings, title: "ERP وإدارة أسطول", text: "يوفر جانباً تشغيلياً لإدارة التوفر، السيارات، الطلبات، والتسليم ضمن دورة عمل منظمة." },
  { icon: CreditCard, title: "حجز ودفع إلكتروني", text: "يدعم رحلة حجز رقمية تنتهي بالدفع الإلكتروني وتسليم السيارة في موقع العميل." }
];

export default function MortadAppPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع مملوك"
        title="تطبيق مرتاد"
        description="تطبيق مرتاد مملوك بالكامل لشركة المتميزون عمان، شقيقتنا في سلطنة عمان. بُني المشروع بعد دراسة تفصيلية للسوق بهدف جمع مكاتب تأجير السيارات في منصة واحدة تخدم العملاء والمكاتب في نفس الوقت."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/mortad-app.png"
                  alt="تطبيق مرتاد لتأجير السيارات في سلطنة عمان"
                  width={1080}
                  height={1080}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="فكرة التطبيق"
                title="تأجير السيارات في منصة واحدة"
                description="الفكرة هي أن يستطيع العميل تحميل التطبيق، استعراض سيارات جميع المكاتب المشاركة، اختيار السيارة المناسبة، الحجز، الدفع إلكترونياً، ثم استلام السيارة في الموقع الذي يحدده."
              />
              <div className="mt-10 grid gap-4">
                {customerFeatures.map((item, index) => (
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
            eyebrow="جانب المكاتب"
            title="ERP ونظام إدارة أسطول لمكاتب التأجير"
            description="مرتاد ليس تطبيق عملاء فقط، بل منصة تشغيلية تساعد مكاتب تأجير السيارات على إدارة العمل اليومي، تنظيم الأسطول، ومتابعة الحجوزات والمدفوعات."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {businessFeatures.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="flex h-full gap-4 rounded-lg border border-brand-mist/15 bg-white/5 p-6">
                  <MapPin className="mt-1 shrink-0 text-brand-cyan" size={22} />
                  <p className="text-lg font-extrabold leading-8 text-brand-mist">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="مكونات الحل"
            title="منصة تربط العميل بالمكتب وبالأسطول"
            description="تم التفكير في مرتاد كمنتج رقمي متكامل يخدم السوق من الجهتين: العميل الباحث عن سيارة، ومكتب التأجير الذي يحتاج نظاماً يومياً لإدارة عملياته."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="h-full rounded-lg border border-brand-mist bg-white p-7 shadow-soft">
                  <Icon className="mb-5 text-brand-cyan" size={32} />
                  <h3 className="mb-4 text-2xl font-extrabold text-brand-navy">{title}</h3>
                  <p className="text-lg leading-9 text-brand-slate">{text}</p>
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
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل لديك فكرة منصة تربط السوق في تطبيق واحد؟</h2>
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
