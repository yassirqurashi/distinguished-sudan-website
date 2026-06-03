import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, CheckCircle2, FileText, HeartPulse, Stethoscope, Video } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "تطبيق كلينيكال | المتميزون Distinguished",
  description: "تطبيق كلينيكال، منصة طبية تربط المرضى بالأطباء والمستشفيات وتدعم الاستشارات الافتراضية ونتائج المختبر والوصفات الطبية."
};

const patientHospitalFeatures = [
  "البحث عن أفضل الأطباء بالقرب من المريض",
  "اختيار الطبيب حسب التخصص المطلوب",
  "تصفية الخيارات حسب تغطية التأمين",
  "ربط المرضى بالمستشفيات والعيادات المناسبة",
  "تسهيل رحلة الوصول إلى الرعاية الطبية المناسبة"
];

const virtualConsultationFeatures = [
  "استشارات طبية عن بُعد من أي مكان في العالم",
  "محادثات ورسائل بين الطبيب والمريض",
  "مكالمات صوتية ومرئية للاستشارة الطبية",
  "إمكانية عرض نتائج المختبر داخل المنصة",
  "إرفاق الوصفات الطبية ومشاركتها مع المريض"
];

const models = [
  { icon: Building2, title: "Patients to Hospitals", text: "يساعد المرضى على العثور على الأطباء والمستشفيات المناسبة حسب الموقع، التخصص، والتغطية التأمينية." },
  { icon: Video, title: "Virtual Consultation", text: "يوفر قناة استشارة افتراضية تربط المرضى بالأطباء عن بُعد، مع دعم المحادثات والمكالمات والملفات الطبية." },
  { icon: FileText, title: "Medical Records", text: "يستطيع الطبيب مراجعة نتائج المختبر وإرفاق الوصفات الطبية داخل المنصة لتبسيط المتابعة." }
];

export default function ClinicalAppPage() {
  return (
    <main>
      <PageHero
        eyebrow="مشروع حقيقي"
        title="تطبيق كلينيكال"
        description="كلينيكال منصة طبية تساعد المرضى والأطباء على التواصل بطريقة أسهل. تتكون المنصة من نموذجين رئيسيين: ربط المرضى بالمستشفيات والأطباء المناسبين، وتقديم استشارات طبية افتراضية عن بُعد من أي مكان في العالم."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-brand-mist bg-brand-navy shadow-soft">
                <Image
                  src="/clinical-app.png"
                  alt="تطبيق كلينيكال منصة طبية"
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
                title="منصة طبية تربط المريض بالطبيب المناسب"
                description="صُمم التطبيق لتقليل صعوبة الوصول للرعاية الطبية، سواء عبر اختيار الطبيب المناسب في المستشفيات والعيادات، أو عبر الاستشارة الافتراضية مع طبيب عن بُعد."
              />
              <div className="mt-10 grid gap-4">
                {[...patientHospitalFeatures, ...virtualConsultationFeatures.slice(0, 2)].map((item, index) => (
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
            eyebrow="نماذج التشغيل"
            title="نموذجان داخل منصة واحدة"
            description="كلينيكال يجمع بين رحلة البحث عن الطبيب المناسب ورحلة الاستشارة الافتراضية، مع أدوات تساعد الطبيب على متابعة الحالة بشكل أفضل."
            light
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {models.map(({ icon: Icon, title, text }, index) => (
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
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-lg border border-brand-mist bg-white p-8 shadow-soft">
                <Stethoscope className="mb-5 text-brand-cyan" size={34} />
                <h2 className="text-3xl font-extrabold text-brand-navy">Patients to Hospitals</h2>
                <div className="mt-7 grid gap-4">
                  {patientHospitalFeatures.map((item) => (
                    <div key={item} className="flex gap-3 text-lg font-bold leading-8 text-brand-slate">
                      <CheckCircle2 className="mt-1 shrink-0 text-brand-cyan" size={21} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-lg border border-brand-mist bg-white p-8 shadow-soft">
                <HeartPulse className="mb-5 text-brand-cyan" size={34} />
                <h2 className="text-3xl font-extrabold text-brand-navy">Virtual Consultation</h2>
                <div className="mt-7 grid gap-4">
                  {virtualConsultationFeatures.map((item) => (
                    <div key={item} className="flex gap-3 text-lg font-bold leading-8 text-brand-slate">
                      <CheckCircle2 className="mt-1 shrink-0 text-brand-cyan" size={21} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-mist/35 py-24">
        <Container>
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">هل تريد بناء منصة صحية أو استشارية متكاملة؟</h2>
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
